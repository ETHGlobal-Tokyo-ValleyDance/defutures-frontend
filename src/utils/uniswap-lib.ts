import { BigNumber } from "ethers";
import { formatEther } from "ethers/lib/utils";

export const getAmountIn = (
  amountOut: BigNumber,
  reserveIn: BigNumber,
  reserveOut: BigNumber
) => {
  const numerator = reserveIn.mul(amountOut).mul(1000);
  const denominator = reserveOut.sub(amountOut).mul(997);
  return numerator.div(denominator.add(1));
};

export const getAmountOut = (
  amountIn: BigNumber,
  reserveIn: BigNumber,
  reserveOut: BigNumber
) => {
  const amountInWithFee = amountIn.mul(997);
  const numerator = amountInWithFee.mul(reserveOut);
  const denominator = reserveIn.mul(1000).add(amountInWithFee);
  return numerator.div(denominator);
};

export const getStrikeAmount = (
  amountOut: BigNumber,
  leadingIn: BigNumber,
  leadingOut: BigNumber
) => {
  return getAmountIn(amountOut.mul(2), leadingIn, leadingOut).sub(
    getAmountIn(amountOut, leadingIn, leadingOut)
  ).mul(1000).div(997);
};
