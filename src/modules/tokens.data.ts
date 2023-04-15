import { CHAINID, TokenData } from "interfaces/config-data.interface";
import usdc from "../assets/token/usdcSvg.svg";
import doge from "../assets/token/dogeSvg.svg";
import usdt from "../assets/token/usdtSvg.svg";

const TOKENS: TokenData[] = [
  {
    chainId: CHAINID.LOCAL,
    name: "USD Coin",
    decimals: 18,
    symbol: "USDC",
    address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    isWrappedToken: false,
    imgUrl: usdc,
  },
  {
    chainId: CHAINID.LOCAL,
    name: "DogeCoin",
    decimals: 18,
    symbol: "DOGE",
    address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
    isWrappedToken: false,
    imgUrl: doge,
  },
  {
    chainId: CHAINID.LOCAL,
    name: "Token3",
    decimals: 18,
    symbol: "T3",
    address: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
    isWrappedToken: false,
    imgUrl: usdt,
  },

  {
    chainId: CHAINID.Baobab,
    name: "USDC",
    decimals: 18,
    symbol: "USDC",
    address: "0x826e7E00D66F55B3Cf0c1f13F07af3A71559E0Ab",
    isWrappedToken: false,
    imgUrl: "",
  },
  {
    chainId: CHAINID.Baobab,
    name: "DogeCoin",
    decimals: 18,
    symbol: "DOGE",
    address: "0x4dF7E30B763e1B3C2B0552940E2Fb952404a1aC5",
    isWrappedToken: false,
    imgUrl: "",
  },
  {
    chainId: CHAINID.Baobab,
    name: "Valley Coin",
    decimals: 18,
    symbol: "VAL",
    address: "0x12a380C04084454664cE5FF155319C8640164c60",
    isWrappedToken: false,
    imgUrl: "",
  },
];

export default TOKENS;
