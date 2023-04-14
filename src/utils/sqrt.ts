import { BigNumber } from 'ethers';

/** sqrt BigNumber **/
const ONE = BigNumber.from(1);
const TWO = BigNumber.from(2);

export function sqrt(value: BigNumber): BigNumber {
  const x = BigNumber.from(value);
  let z = x.add(ONE).div(TWO);
  let y = x;
  while (z.sub(y).isNegative()) {
    y = z;
    z = x.div(z).add(z).div(TWO);
  }
  return y;
}
