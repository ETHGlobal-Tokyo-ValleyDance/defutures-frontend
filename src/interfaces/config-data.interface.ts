export enum CHAINID {
  /** TESTNET **/
  Mumbai = 80001, // polygon
  Baobab = 1001, // KLAYTN
  LOCAL = 1337
}


export interface ChainData {
  id: CHAINID;
  name: string;
  symbol: string;
  rpcUrl: string;
  imgUrl: string;
  defuture: {
    router: string
    dexName: string
    dexRouter: string
  }
}

/**
 * WrappedToken의 name, symbol은 Native token을 기준으로 한다.
 **/
export interface TokenData {
  chainId: CHAINID;
  name: string;
  decimals: number;
  symbol: string;
  address: string;
  isWrappedToken?: boolean;
  imgUrl: string;
}

export interface LpTokenData extends TokenData {
  token0: string;
  token1: string;
}
