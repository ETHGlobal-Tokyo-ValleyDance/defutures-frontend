import { CHAINID, TokenData } from "interfaces/config-data.interface";
import polygon from "../assets/chain/polygon.png";
import usdc from "../assets/token/usdcSvg.svg";
import eth from "../assets/token/ethSvg.svg";

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
  {
    chainId: CHAINID.Scroll,
    name: "ETH",
    decimals: 18,
    symbol: "ETH",
    address: "0x580A9E9c750841628cb9ba2e217512A9703D8662",
    isWrappedToken: false,
    imgUrl: eth,
  },
  {
    chainId: CHAINID.Scroll,
    name: "USDC",
    decimals: 18,
    symbol: "USDC",
    address: "0x990D49265319fa3BC37cA3047B875c3a8d83981B",
    isWrappedToken: false,
    imgUrl: usdc,
  },
];

export default TOKENS;
