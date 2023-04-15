import multicallAddressBook from './multicallAddressBook';
import MulticallAbi from 'abi/Multicall2.json';
import { Contract, utils } from 'ethers';
import type { Provider } from '@ethersproject/abstract-provider';
import type { Multicall2 } from 'typechain';
import type { MulticallCallDataInput } from 'interfaces/multicall.interface';

async function multicall<
  ReturnType,
  I extends utils.Interface = utils.Interface
>(
  calls: MulticallCallDataInput<I>[],
  provider: Provider
): Promise<ReturnType[]> {
  // Set Multicall
  let multicallContract: Multicall2;
  const { chainId, name } = await provider.getNetwork();
  if (chainId in multicallAddressBook) {
    multicallContract = new Contract(
      multicallAddressBook[chainId],
      MulticallAbi,
      provider
    ) as Multicall2;
  } else {
    throw Error(`No multicall address for ${name} chain`);
  }

  // encode
  const callStructs: Multicall2.CallStruct[] = calls.map(
    ({ interfaceObject, address, method, args }) => ({
      target: address,
      callData: interfaceObject.encodeFunctionData(method, args)
    })
  );

  // call
  const { returnData } = await multicallContract.aggregate(callStructs);

  // decode
  return calls.map(({ interfaceObject, method }, i) => {
    return interfaceObject.decodeFunctionResult(
      method,
      returnData[i]
    ) as ReturnType;
  });
}

export default multicall;
