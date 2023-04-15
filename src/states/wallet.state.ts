import {
  atom,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from "recoil";
import { connectMetamask } from "../utils/metamask";
import { CHAINID } from "interfaces/config-data.interface";
import { Signer, providers } from "ethers";

export const accountAtom = atom<string | null>({
  key: "atom/account",
  default: null,
});

export const chainIdAtom = atom<number>({
  key: "atom/chainId",
  // TODO: CHANGE DEFAULT CHAIN ID
  default: CHAINID.Mumbai,
});

export const useWallet = () => {
  const account = useRecoilValue(accountAtom);
  const chainId = useRecoilValue(chainIdAtom);
  return {
    account,
    chainId,
  };
};

export const useConnectWallet = () => {
  const [account, setAccount] = useRecoilState(accountAtom);
  const [chainId, setChainId] = useRecoilState(chainIdAtom);
  const resetChainId = useResetRecoilState(chainIdAtom);

  const connect = async () => {
    const res = await connectMetamask(chainId);
    if (!res || !res.ok) return (location.href = "/");

    setAccount(res!.account);
    setChainId(res!.chainId);
  };

  const disconnect = async () => {
    setAccount(null);
    resetChainId();
  };

  return {
    account,
    chainId,
    connect,
    disconnect,
  };
};

export const useSigner = () => {
  const account = useRecoilValue(accountAtom);
  return {
    signer:
      account && window.ethereum
        ? // @ts-ignore
          new providers.Web3Provider(window.ethereum!).getSigner()
        : null,
    account,
  };
};
