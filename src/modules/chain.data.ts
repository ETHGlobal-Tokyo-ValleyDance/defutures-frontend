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
      router: "0xc8e6f1dd0e1BC404AEe050f76c46f92FDc77AF6c",
      dexRouter: "0xdcb935a02E5CA14c6ef8478EbC1682f208fC758D"
    }
  },
};

export default CHAINS;
