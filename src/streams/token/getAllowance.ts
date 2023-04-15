import ERC20ABI from 'abi/ERC20.json';
import { type BigNumber, Contract } from 'ethers';
import type { ERC20 } from 'typechain';
import type { Token } from 'modules/Token';

export const getAllowance = (
  token: Token,
  owner: string,
  spender: string
): Promise<BigNumber> => {
  const tokenContract = new Contract(
    token.address,
    ERC20ABI,
    token.getProvider()
  ) as ERC20;
  return tokenContract.allowance(owner, spender);
};
