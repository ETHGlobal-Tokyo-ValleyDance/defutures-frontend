import { utils } from "ethers";
import { Chain } from "modules/Chain";
import { Token } from "modules/Token";
import { useEffect, useMemo, useState } from "react";
import { useWallet } from "states/wallet.state";
import { FutureMarketInfo, futureMarketInfo } from "streams/futureMarketInfo";
import { getStrikeAmount } from "utils/uniswap-lib";

// const { chainId } = useWallet();
export const useFuture = () => {
  const { chainId } = useWallet();
  const chain = Chain.get(chainId);
  const tokenList = Token.getAll().filter(t => t.chainId === chainId);

  const [futureMarket, setFutureMarket] = useState<FutureMarketInfo | null>(
    null
  );

  // in state, save only token symbol
  // token can be found by chainId & symbol
  const [longTokenSymbol, setLongTokenSymbol] = useState<string>(
    chain.defuture.defaultTokens[0]
  );
  const [shortTokenSymbol, setShortTokenSymbol] = useState<string>(
    chain.defuture.defaultTokens[1]
  );

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

  const onLongAmountChange = (value: string) => {
    if (!futureMarket) return;
    const longValue = utils.parseEther(value);
    setLongAmount(value);
    const _strikeAmount = shortToken.format(
      getStrikeAmount(longValue, futureMarket.leadingA, futureMarket.leadingB)
    );
    setShortAmount(_strikeAmount);

    if (
      +margin < (+_strikeAmount * futureMarket.minMarginBps) / 1e4 ||
      +margin > +_strikeAmount
    ) {
      // +10 => buffer
      setMargin("" + Math.floor(+_strikeAmount * (2e3 + 5)) / 1e4);
    }
  };

  const onShortAmountChange = (value: string) => {
    if (!futureMarket) return;

    setShortAmount(value);
  };

  const refresh = async () => {
    futureMarketInfo(chainId, longToken!, shortToken!).then(setFutureMarket);
  };

  useEffect(() => {
    refresh().then(() => onLongAmountChange("1"));
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
