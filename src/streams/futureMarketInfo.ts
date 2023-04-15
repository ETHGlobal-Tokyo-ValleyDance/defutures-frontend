import { BigNumber } from "ethers";
import { Chain } from "modules/Chain";
import { Token } from "modules/Token";


export interface FutureMarketInfo {
    reserveA: BigNumber;
    reserveB: BigNumber;
    leadingA: BigNumber;
    leadingB: BigNumber;
    totalSupply: number;
    minMarginBps: number;
    updatedAt: number;
}

export const futureMarketInfo = async (
    chainId: number,
    baseToken: Token,
    farmToken: Token
  ): Promise<FutureMarketInfo> => {
    console.log(baseToken.address, farmToken.address)
    return Chain.get(chainId)
      .getV2DefutureRouter()
      .getFutureMarketInfo(baseToken.address, farmToken.address)
      .then((res) => {
        console.log(res)
        return {
          reserveA: res.reserveA,
          reserveB: res.reserveB,
          leadingA: res.leadingA,
          leadingB: res.leadingB,
          totalSupply: res.totalSupply.toNumber(),
          minMarginBps: res.minMarginBps.toNumber(),
          updatedAt: new Date().getTime(),
        };
      });
  };