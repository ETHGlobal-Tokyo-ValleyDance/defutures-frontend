import {
  selectorFamily,
  useRecoilValueLoadable,
  selector,
  waitForAll,
  atom,
  useSetRecoilState,
} from "recoil";
import { Chain } from "modules/Chain";
import { Token } from "modules/Token";
import { formatUnits } from "ethers/lib/utils";
import { BigNumber, constants } from "ethers";
import { getBalances } from "streams/token/getBalances";
import { accountAtom } from "./wallet.state";
import { CHAINID } from "interfaces/config-data.interface";

interface TokenBalanceInChain {
  [tokenAddress: string]: string;
}

interface SimpleToken {
  address: string;
  decimals: number;
}
interface TokensByChain {
  [chainId: number]: SimpleToken[];
}

const fetchBalancesIndex = atom<number>({
  key: "atom/fetch-balances/key",
  default: 1,
});

const fetchBalancesQuery = selector<TokenBalanceInChain>({
  key: "selector/fetch-balances",
  get: async ({ get }) => {
    const index = get(fetchBalancesIndex);
    const account = get(accountAtom);
    if (!account) {
      return {};
    } else {
      const tokensByChain: TokensByChain = {};
      Token.getAllWithLP().forEach((token) => {
        const simpleToken = {
          address: token.isWrappedToken ? constants.AddressZero : token.address,
          decimals: token.decimals,
        };
        if (tokensByChain[token.chainId])
          tokensByChain[token.chainId].push(simpleToken);
        else tokensByChain[token.chainId] = [simpleToken];
      });

      let balanceMap: TokenBalanceInChain = {};
      const tokensByChainList = Object.entries(tokensByChain);

      const balancesByChain = await Promise.all(
        tokensByChainList.map(async ([chainId, tokens]) => {
          const chain = Chain.get(+chainId as CHAINID)!;
          let balances: BigNumber[];
          try {
            balances = await getBalances(
              account,
              tokens.map((t: SimpleToken) => t.address),
              chain.getProvider()
            );
          } catch {
            balances = Array(tokens.length).fill(constants.Zero);
          }
          return balances;
        })
      );

      balancesByChain.forEach((balances, i) => {
        const [chainId, tokens] = tokensByChainList[i];
        balanceMap = Object.assign(
          balanceMap,
          Object.fromEntries(
            balances.map((balance, j) => [
              `${chainId}_${tokens[j].address}`,
              formatUnits(balance, tokens[j].decimals),
            ])
          )
        );
      });
      return balanceMap;
    }
  },
});

// get balance by token id given chain(currentChain)
// token id :: `${this.chainId}_${this.address}`;
export const balancesState = selectorFamily<string | null, string | null>({
  key: "balances",
  get:
    (tokenId) =>
    ({ get }) => {
      if (tokenId === null) {
        return null;
      }
      return get(fetchBalancesQuery)[tokenId];
    },
});

/** token에 대한 Balance를 가져올 때 사용
 * @param token 토큰 종류
 * @param defaultText optional, balance를 가져오지 못했거나, Owner 주소가 없을 때 띄울 텍스트. default = ""
 *
 * 아래와 같이 사용하여 tokenA에 대한 currentUser의 balance를 얻을 수 있다.
 * const userTokenBalance = useBalance(tokenA);
 *
 */
export const useBalance = (token: Token | null): string => {
  const balanceState = useRecoilValueLoadable(balancesState(token?.id ?? null));
  return token && balanceState.state === "hasValue" && balanceState.contents
    ? balanceState.contents
    : "";
};

export const useBalanceList = (tokens: Token[]): string[] => {
  const balanceListState = useRecoilValueLoadable(
    waitForAll(tokens.map((t) => balancesState(t?.id ?? null)))
  );
  return balanceListState.state === "hasValue" && balanceListState.contents
    ? balanceListState.contents.map((item) => item ?? "")
    : new Array<string>(tokens.length).fill("");
};

export const useRefreshBalance = () => {
  const setIndex = useSetRecoilState(fetchBalancesIndex);
  return () => setIndex((prev) => prev + 1);
};
