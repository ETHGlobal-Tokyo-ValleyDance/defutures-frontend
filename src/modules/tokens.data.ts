import { CHAINID, TokenData } from "interfaces/config-data.interface";

const TOKENS:TokenData[] = [ 
    {
        chainId: CHAINID.LOCAL,
        name: "USD Coin",
        decimals: 18,
        symbol: "USDC",
        address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
        isWrappedToken: false,
        imgUrl: "",
    },
    {
        chainId: CHAINID.LOCAL,
        name: "DogeCoin",
        decimals: 18,
        symbol: "DOGE",
        address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
        isWrappedToken: false,
        imgUrl: "",
    },
    {
        chainId: CHAINID.LOCAL,
        name: "Token3",
        decimals: 18,
        symbol: "T3",
        address: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
        isWrappedToken: false,
        imgUrl: "",
    },
];

export default TOKENS;