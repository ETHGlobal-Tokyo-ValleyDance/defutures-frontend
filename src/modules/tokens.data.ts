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
    address: "0x19A7Ff2D5905E010bf234123A63AaC48524e7EDa",
    isWrappedToken: false,
    imgUrl: polygon,
  },
  {
    chainId: CHAINID.Mumbai,
    name: "USDC",
    decimals: 18,
    symbol: "USDC",
    address: "0x43cc87C7a8784A8Ba699093e85397C0502af65af",
    isWrappedToken: false,
    imgUrl: usdc,
  },
  {
    chainId: CHAINID.Scroll,
    name: "ETH",
    decimals: 18,
    symbol: "ETH",
    address: "0x9b489AF10Ac2E13bDB57952cbc0BC06AEbE1394B",
    isWrappedToken: false,
    imgUrl: eth,
  },
  {
    chainId: CHAINID.Scroll,
    name: "USDC",
    decimals: 18,
    symbol: "USDC",
    address: "0x0F39a0b016AAFD975B85813eEBbb766b0304FabB",
    isWrappedToken: false,
    imgUrl: usdc,
  },
];

export default TOKENS;
