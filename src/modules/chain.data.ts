import { CHAINID, ChainData } from "interfaces/config-data.interface";
import polygon from "assets/chain/polygon.png"

const CHAINS: { [chainId in CHAINID]: ChainData } = {
  [CHAINID.Mumbai]: {
    id: CHAINID.Mumbai,
    name: "Polygon",
    symbol: "MATIC",
    rpcUrl: "https://rpc-mumbai.maticvigil.com",
    imgUrl: polygon,
    defuture: {
      defaultTokens: ["MATIC", "USDC"],
      dexName: "QuickSwap V2",
      router: "0x48C795467E0a894806F8aaF7dc93061180DA2E20",
      dexRouter: "0x7500852F01BfA4178f29b56dB20584c6C6DD5571"
    }
  },
};

export default CHAINS;
