import { BigNumber } from "ethers";
import { formatEther, parseEther } from "ethers/lib/utils";
import { Chain } from "modules/Chain";
import { Token } from "modules/Token";
import { ChangeEventHandler, useEffect, useMemo, useState } from "react";
import { useWallet } from "states/wallet.state";
import { getAmountOut, getStrikeAmount } from "utils/uniswap-lib";

//   tokenA: Token,
//   tokenB: Token
const mockContract = async (
  chainId: number,
  baseToken: Token,
  farmToken: Token
): Promise<HedgeInfo> => {
  return Chain.get(chainId)
    .getV2DefutureRouter()
    .getInfoForHedge(baseToken.address, farmToken.address)
    .then((res) => {
      return {
        reserveBase: res.reserve0,
        reserveFarm: res.reserve1,
        leadingBase: res.leading0,
        leadingFarm: res.leading1,
        totalSupply: res.totalSupply.toNumber(),
        minMarginBps: res.minMarginBps.toNumber(),
        updatedAt: new Date().getTime(),
      };
    });
};

interface HedgeInfo {
  reserveBase: BigNumber;
  reserveFarm: BigNumber;
  leadingBase: BigNumber;
  leadingFarm: BigNumber;
  totalSupply: number;
  minMarginBps: number;
  updatedAt: number;
}

// base token: user asset
// farm token: swapped asset for invest position
export const useHedge = (minSpotPerc: number) => {
  // TODO: chainId
  const { chainId } = useWallet();
  const tokenList = Token.fromChain(chainId);
  const chain = Chain.get(chainId);

  // Defuture & UniswapPair Infos (reserve0,1, leading0,1 ...)
  const [hedgeInfo, setHedgeInfo] = useState<HedgeInfo | null>(null);

  /** USER INPUTS **/
  const [baseSymbol, setBaseSymbol] = useState(chain.defuture.defaultTokens[0]);
  const [farmSymbol, setFarmSymbol] = useState(chain.defuture.defaultTokens[1]);

  // totalAmount of user input base token
  const [totalAmount, setTotalAmount] = useState<string>("1");
  // spotAmount / totalAmount, user can choose using slider input
  const [spotPercent, setSpotPercent] = useState<string>(minSpotPerc + "");

  /** Calculated Amounts */
  // minHedgeAmount only depends on totalAmount
  const minHedgeAmount: number = useMemo(() => {
    if (!hedgeInfo || !+spotPercent || !+totalAmount) return 0;
    // minHedge / (tot/2 - minHedge) = minMarginBps / 1E4
    // -> minHedge = minMarginBps * total / (2E4 + minMarginBps)
    return +formatEther(
      parseEther(totalAmount)
        .mul(hedgeInfo.minMarginBps)
        .div(2e4 + hedgeInfo.minMarginBps)
    );
  }, [hedgeInfo?.updatedAt, totalAmount]);

  const { marginRatio, tolerance, spotAmount } = useMemo(() => {
    if (!hedgeInfo || !+spotPercent || !+totalAmount)
      return { marginRatio: 0, tolerance: 0, spotAmount: 0 };

    const total = parseEther(totalAmount);

    // total = spotAmount + hedgeAmount
    // allow first place
    const spotAmount = parseEther(totalAmount)
      .mul(+spotPercent * 10)
      .div(1e3);
    const hedgeAmount = total.sub(spotAmount);

    // swap (spot)/2 + hedge from base(long token) to farm(short token)
    const baseAmountToSwap = spotAmount.div(2).add(hedgeAmount);

    const swappedFarm = getAmountOut(
      baseAmountToSwap,
      hedgeInfo.reserveBase,
      hedgeInfo.reserveFarm
    );

    const hedgeQuote = swappedFarm.mul(hedgeAmount).div(baseAmountToSwap);

    // Get strike amount with respect to current Future market price (leading0, leading1)
    // this future is subject to recover initial base token amount
    // "strikeAmount" of FARM -> "spotAmount / 2" of BASE
    const strikeAmount = getStrikeAmount(
      spotAmount.div(2),
      hedgeInfo.leadingFarm,
      hedgeInfo.leadingBase
    );

    const marginRatio = hedgeQuote.mul(1e4).div(strikeAmount).toNumber() / 100;

    // when futurePrice(=current strike price) meets liquidatedPoint,
    // this position will be automatically liquidated.
    const liquidatedPoint = strikeAmount
      .sub(hedgeQuote)
      .mul(1e4)
      .div(1e4 - hedgeInfo.minMarginBps);

    const tolerance =
      (strikeAmount.mul(1e4).div(liquidatedPoint).toNumber() - 10000) / 100;

    return {
      marginRatio,
      tolerance,
      spotAmount: +formatEther(spotAmount.mul(1e3)) / 1000,
    };
  }, [hedgeInfo?.updatedAt, totalAmount, spotPercent]);

  const [baseToken, farmToken]: [Token, Token] = useMemo(() => {
    return [
      Token.getBySymbol(chainId, baseSymbol)!,
      Token.getBySymbol(chainId, farmSymbol)!,
    ];
  }, [chainId, baseSymbol, farmSymbol]);

  useEffect(() => {
    mockContract(chainId, baseToken, farmToken).then(setHedgeInfo);
  }, []);

  const onChangeSpotPercent: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setSpotPercent(value);
  };

  const maxSpotPercent =
    100 - Math.floor((1e4 * minHedgeAmount) / +totalAmount) / 100;

  return {
    tokenList,
    totalAmount,
    spotPercent,
    spotAmount,
    maxSpotPercent,
    minHedgeAmount,
    marginRatio,
    tolerance,
    totalSupply: hedgeInfo?.totalSupply || 0,
    minMarginBps: hedgeInfo?.minMarginBps || 0,
    baseToken,
    farmToken,
    setBaseSymbol,
    setFarmSymbol,
    setTotalAmount,
    onChangeSpotPercent,
  };
};
