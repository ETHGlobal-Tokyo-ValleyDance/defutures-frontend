import { CHAINID, ChainData } from "interfaces/config-data.interface";

const CHAINS: { [chainId in CHAINID]: ChainData } = {
  [CHAINID.Mumbai]: {
    id: CHAINID.Mumbai,
    name: "Polygon",
    symbol: "MATIC",
    rpcUrl: "",
    // TODO
    imgUrl: "",
    defuture: {
      dexName: "QuickSwap V2",
      routerAddress: "",
      defutureRouterAddress: ""
    }
  },
  [CHAINID.Baobab]: {
    id: CHAINID.Baobab,
    name: "Klaytn",
    symbol: "KLAY",
    rpcUrl: "",
    // TODO
    imgUrl: "",
    defuture: {
      dexName: "Klayswap",
      routerAddress: "",
      defutureRouterAddress: ""
    }
  },

  [CHAINID.LOCAL]: {
    id: CHAINID.LOCAL,
    name: "LOCAL",
    symbol: "ETH",
    rpcUrl: "http://localhost:8545",
    // TODO
    imgUrl: "",
    defuture: {
      dexName: "UniswapV2",
      routerAddress: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
      defutureRouterAddress: ""
    }
  },
};

export default CHAINS;
