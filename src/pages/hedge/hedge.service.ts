import { BigNumber } from "ethers";
import { formatEther, parseEther } from "ethers/lib/utils";
import { ChangeEventHandler, useEffect, useMemo, useState } from "react";
import { getAmountOut, getStrikeAmount } from "utils/uniswap-lib";

//   tokenA: Token,
//   tokenB: Token
const mockContract = async (): Promise<HedgeInfo> => {
  // mock data
  return {
    reserveIn: parseEther("100"),
    reserveOut: parseEther("1000"),
    leadingIn: parseEther("80"),
    leadingOut: parseEther("1000"),
    minMarginBps: 1000,
    updatedAt: new Date().getTime(),
  };
};

interface HedgeInfo {
  reserveIn: BigNumber;
  reserveOut: BigNumber;
  leadingIn: BigNumber;
  leadingOut: BigNumber;
  minMarginBps: number;
  updatedAt: number;
}

// base token: user asset
// farm token: swapped asset for invest position
export const useHedge = () => {
  // Defuture & UniswapPair Infos (reserve0,1, leading0,1 ...)
  const [hedgeInfo, setHedgeInfo] = useState<HedgeInfo | null>(null);

  /** USER INPUTS **/
  // totalAmount of user input base token
  const [totalAmount, setTotalAmount] = useState<string>("0.0");
  // spotAmount / totalAmount, user can choose using slider input
  const [spotPercent, setSpotPercent] = useState<string>("0");

  /** Calculated Amounts */
  // minHedgeAmount only depends on totalAmount
  const minHedgeAmount:number = useMemo(() => {
    if (!hedgeInfo) return 0;
    // minHedge / (tot/2 - minHedge) = minMarginBps / 1E4
    // -> minHedge = minMarginBps * total / (2E4 + minMarginBps)
    return +formatEther(
      parseEther(totalAmount)
        .mul(hedgeInfo.minMarginBps)
        .div(2e4 + hedgeInfo.minMarginBps)
    );
  }, [hedgeInfo?.updatedAt, totalAmount]);

  const [marginRatio, tolerance] = useMemo(() => {
    if (!hedgeInfo || !+spotPercent || !+totalAmount) return [0, 0];
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
      hedgeInfo.reserveIn,
      hedgeInfo.reserveOut
    );

    const hedgeQuote = swappedFarm.mul(hedgeAmount).div(baseAmountToSwap);

    // Get strike amount with respect to current Future market price (leading0, leading1)
    // this future is subject to recover initial base token amount
    const strikeAmount = getStrikeAmount(
      spotAmount.div(2),
      hedgeInfo.leadingIn,
      hedgeInfo.leadingOut
    );

    const _marginRatio = hedgeQuote.mul(1e4).div(strikeAmount).toNumber() / 100;

    // when futurePrice(=current strike price) meets liquidatedPoint,
    // this position will be automatically liquidated.
    const liquidatedPoint = strikeAmount
      .sub(hedgeQuote)
      .mul(1e4)
      .div(1e4 - hedgeInfo.minMarginBps);

    const _tolerance =
      (strikeAmount.mul(1e4).div(liquidatedPoint).toNumber() - 10000) / 100;

    return [_marginRatio, _tolerance];
  }, [hedgeInfo?.updatedAt, spotPercent]);

  useEffect(() => {
    mockContract().then(setHedgeInfo);
  }, []);

  const onChangeSpotPercent: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setSpotPercent(value);
  };

  const maxSpotPercent = 100 - Math.floor(1E4 * minHedgeAmount / +totalAmount) / 100;

  return {
    totalAmount,
    spotPercent,
    maxSpotPercent,
    minHedgeAmount,
    marginRatio,
    tolerance,
    minMarginBps: hedgeInfo?.minMarginBps || 0,
    setTotalAmount,
    onChangeSpotPercent,
  };
};