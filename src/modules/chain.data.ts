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
      router: "",
      dexRouter: ""
    }
  },
  [CHAINID.Baobab]: {
    id: CHAINID.Baobab,
    name: "Klaytn",
    symbol: "KLAY",
    rpcUrl: "https://public-en-baobab.klaytn.net",
    // TODO
    imgUrl: "",
    defuture: {
      dexName: "Klayswap",
      router: "0xF38629F9046be0efb785137F74a041C8547122e8",
      dexRouter: "0x4B9E4e5C53aBA6978157d6aB8e09D0B64aE4F5AE"
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
      router: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
      dexRouter: ""
    }
  },
};

export default CHAINS;
