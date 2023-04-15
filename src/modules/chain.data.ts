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
      router: "0x48C795467E0a894806F8aaF7dc93061180DA2E20",
      dexRouter: "0x7500852F01BfA4178f29b56dB20584c6C6DD5571"
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
      router: "0x48C795467E0a894806F8aaF7dc93061180DA2E20",
      dexRouter: "0xFF99377f0974853a122f85116bb6a63ee42ed60B"
    }
  },
};

export default CHAINS;
