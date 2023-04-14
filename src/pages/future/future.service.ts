import { BigNumber, utils } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { CHAINID } from "interfaces/config-data.interface";
import { Token } from "modules/Token";
import { useEffect, useMemo, useState } from "react";
import { useWallet } from "states/wallet.state";
//import { getStrikeAmount } from "streams/v2.calc";

const mockContract = async (
  tokenA: Token,
  tokenB: Token
): Promise<FutureMarket> => {
  return {
    leadingLong: parseEther("10000"),
    leadingShort: parseEther("8000"),
    minMarginBps: 1000,
    totalSupply: 123,
    lastUpdatedAt: new Date().getTime(),
  };
};

interface FutureMarket {
  leadingLong: BigNumber;
  leadingShort: BigNumber;
  minMarginBps: number;
  totalSupply: number;
  lastUpdatedAt: number;
}

// const { chainId } = useWallet();
export const useFuture = () => {
  const chainId = CHAINID.LOCAL;

  const [futureMarket, setFutureMarket] = useState<FutureMarket | null>(null);

  const tokenList = Token.fromChain(chainId);

  // state에는 symbol만 저장한다.
  const [longTokenSymbol, setLongTokenSymbol] = useState("USDC");
  const [shortTokenSymbol, setShortTokenSymbol] = useState("DOGE");

  const [longAmount, setLongAmount] = useState<string>("");
  const [shortAmount, setShortAmount] = useState<string>("");
  const [margin, setMargin] = useState<string>("");

  const onLongTokenChange = (symbol: string) => {
    // long token과 short token 같아지는 현상 방지
    if (symbol === shortTokenSymbol) return;
    setLongTokenSymbol(symbol);
  };
  const onShortTokenChange = (symbol: string) => {
    // long token과 short token 같아지는 현상 방지
    if (symbol === longTokenSymbol) return;
    setShortTokenSymbol(symbol);
  };

  const [longToken, shortToken]: [Token, Token] = useMemo(() => {
    return [
      Token.getBySymbol(chainId, longTokenSymbol)!,
      Token.getBySymbol(chainId, shortTokenSymbol)!,
    ];
  }, [chainId, longTokenSymbol, shortTokenSymbol]);

  const onLongAmountChange = (_value: string) => {
    if (!futureMarket) return;
    const value = utils.parseEther(_value);
    setLongAmount(_value);
    const _strikeAmount = shortToken.format(
      //   getStrikeAmount(
      //     value,
      //     futureMarket.leadingLong,
      //     futureMarket.leadingShort
      //   )
      parseEther("100")
    );
    setShortAmount(_strikeAmount);

    if (
      +margin < (+_strikeAmount * futureMarket.minMarginBps) / 1e4 ||
      +margin > +_strikeAmount
    ) {
      setMargin("" + Math.floor(+_strikeAmount * 2e3) / 1e4);
    }
  };
  const onShortAmountChange = (value: string) => {
    if (!futureMarket) return;

    setShortAmount(value);
  };

  const refresh = () => {
    mockContract(longToken!, shortToken!).then(setFutureMarket);
  };
  useEffect(() => {
    setLongAmount("");
    setShortAmount("");
    refresh();
  }, [longToken?.id, shortToken?.id]);

  return {
    chainId,
    tokenList,
    totalSupply: futureMarket?.totalSupply || 0,
    longToken,
    longAmount,
    shortToken,
    shortAmount,
    margin,
    minMarginRatio: futureMarket ? futureMarket.minMarginBps / 100 : 0,
    refresh,
    setMargin,
    onLongTokenChange,
    onShortTokenChange,
    onLongAmountChange,
    onShortAmountChange,
  };
};
