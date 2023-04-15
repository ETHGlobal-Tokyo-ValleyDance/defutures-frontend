import multicall from 'streams/multicall';
import ERC20ABI from 'abi/ERC20.json';
import { constants, utils, BigNumber } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { ERC20Interface } from 'typechain/ERC20';
import type { MulticallCallDataInput } from 'interfaces/multicall.interface';

// @args tokenAddress: address(0) or token address
// address(0) = Native Token
const _makeBalanceOfCallData = (
  owner: string,
  addresses: string[]
): MulticallCallDataInput<ERC20Interface>[] => {
  const erc20Interface = new utils.Interface(ERC20ABI) as ERC20Interface;
  return addresses.map<MulticallCallDataInput<ERC20Interface>>((address) => ({
    interfaceObject: erc20Interface,
    address,
    method: 'balanceOf(address)',
    args: [owner]
  }));
};

export const getBalances = async (
  ownerAddress: string,
  tokenAddresses: string[],
  provider: Provider
): Promise<BigNumber[]> => {
  const nativeTokenIndex = tokenAddresses.indexOf(constants.AddressZero);
  if (nativeTokenIndex > -1) {
    // check AddressZero is unique
    if (
      tokenAddresses.lastIndexOf(constants.AddressZero) !== nativeTokenIndex
    ) {
      throw Error('Duplicated native token in function getBalances()');
    }
    const callInputs = _makeBalanceOfCallData(
      ownerAddress,
      tokenAddresses.filter((_, i) => i !== nativeTokenIndex)
    );

    const [ethBalance, _balances] = await Promise.all([
      provider.getBalance(ownerAddress),
      multicall<[BigNumber], ERC20Interface>(callInputs, provider)
    ]);

    const balances = _balances.map(([balances]) => balances);
    balances.splice(nativeTokenIndex, 0, ethBalance);
    return balances;
  } else {
    // no native token
    const callInputs = _makeBalanceOfCallData(ownerAddress, tokenAddresses);
    return multicall<[BigNumber]>(callInputs, provider).then((result) => {
      return result.map(([b]) => b);
    });
  }
};
