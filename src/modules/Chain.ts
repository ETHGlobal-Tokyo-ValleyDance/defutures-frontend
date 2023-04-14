import { Contract, providers } from "ethers";
import { CHAINID, ChainData } from "interfaces/config-data.interface";
import CHAINS from "./chain.data";

export class Chain implements ChainData {
  id!: CHAINID;
  name!: string;
  symbol!: string;
  rpcUrl!: string;
  imgUrl!: string;
  defuture!: {
    router: string;
    dexName: string;
    dexRouter: string;
  };

  constructor(chainData: ChainData) {
    Object.assign(this, chainData);
  }

  getProvider() {
    return new providers.JsonRpcProvider(this.rpcUrl);
  }

  static get(chainName: CHAINID): Chain {
    return new Chain(CHAINS[chainName]);
  }

  static getAll(): Chain[] {
    return Object.values(CHAINS).map((c) => new Chain(c));
  }

  static getById(chainId: number): Chain {
    const found = this.getAll().find((c) => c.id === chainId);

    if (found) return found;
    else throw Error(`Chain ${chainId} not found`);
  }

  getV2DefutureRouter() {
    return new Contract(
      this.defuture.router,
      [],
      // TODO
      // UniswapV2DefutureRouterABI,
      this.getProvider()
    );
  }
}
