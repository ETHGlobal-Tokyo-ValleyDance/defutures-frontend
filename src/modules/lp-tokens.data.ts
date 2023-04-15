import { CHAINID, LpTokenData } from "interfaces/config-data.interface";

const LPTOKENS: LpTokenData[] = [
  {
    chainId: CHAINID.Mumbai,
    name: "QuickswapV2 ETH+USDC",
    decimals: 18,
    symbol: "LP MATIC+USDC",
    address: "0x414caF291D2B2Bfd772e1F2fb3b03B7C8337FEc5",
    isWrappedToken: false,
    imgUrl: "",
    token0: "0x19A7Ff2D5905E010bf234123A63AaC48524e7EDa",
    token1: "0x43cc87C7a8784A8Ba699093e85397C0502af65af",
  },
  {
    chainId: CHAINID.Scroll,
    name: "UniswapV2 ETH+USDC",
    decimals: 18,
    symbol: "LP USDC+ETH",
    address: "0x71abDEd704a771bAe227DAC323bc7755EA92cF3E",
    isWrappedToken: false,
    imgUrl: "",
    token0: "0x0F39a0b016AAFD975B85813eEBbb766b0304FabB",
    token1: "0x9b489AF10Ac2E13bDB57952cbc0BC06AEbE1394B",
  },
];

export default LPTOKENS;
