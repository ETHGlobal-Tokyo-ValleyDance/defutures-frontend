import { utils } from 'ethers';

export interface MulticallCallDataInput<I extends utils.Interface> {
  interfaceObject: I;
  address: string;
  method: string;
  args?: Array<any>;
}
