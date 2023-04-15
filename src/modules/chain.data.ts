import { CHAINID, ChainData } from "interfaces/config-data.interface";
import polygon from "assets/chain/polygon.png"
import scroll from "assets/chain/scroll.png"

const CHAINS: { [chainId in CHAINID]: ChainData } = {
  [CHAINID.Mumbai]: {
    id: CHAINID.Mumbai,
    name: "Polygon",
    symbol: "MATIC",
    rpcUrl: "https://rpc.ankr.com/polygon_mumbai",
    imgUrl: polygon,
    defuture: {
      defaultTokens: ["MATIC", "USDC"],
      dexName: "QuickSwap V2",
      router: "0xca6D45dD412E740b65A35B8A0F46b478075a119c",
      dexRouter: "0xcE9B30B0e1E9e5507aD7Da63f4c4Fb871c11dd3f"
    }
  },
  [CHAINID.Scroll]: {
    id: CHAINID.Scroll,
    name: "Scroll",
    symbol: "ETH",
    rpcUrl: "https://alpha-rpc.scroll.io/l2",
    imgUrl: scroll,
    defuture: {
      defaultTokens: ["ETH", "USDC"],
      dexName: "UniSwap V2",
      router: "0x05d0f5fd55ECa03F338C6cf71Ac1Af1e30e12a21",
      dexRouter: "0x837C6C82b036B3b42D55307112A6e665794A3297"
    }
  },
};

export default CHAINS;
