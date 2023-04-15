import { CHAINID, TokenData } from "interfaces/config-data.interface";
import polygon from "../assets/chain/polygon.png";
import usdc from "../assets/token/usdcSvg.svg";

const TOKENS: TokenData[] = [
  {
    chainId: CHAINID.Mumbai,
    name: "MATIC",
    decimals: 18,
    symbol: "MATIC",
    address: "0xb3D6Ca944013B97880C7Ed19BcE3dBB3FA6e1691",
    isWrappedToken: false,
    imgUrl: polygon,
  },
  {
    chainId: CHAINID.Mumbai,
    name: "USDC",
    decimals: 18,
    symbol: "USDC",
    address: "0xD88492Da64F59B1841c19f84A7b2030BB6BaAc1F",
    isWrappedToken: false,
    imgUrl: usdc,
  },
];

export default TOKENS;
