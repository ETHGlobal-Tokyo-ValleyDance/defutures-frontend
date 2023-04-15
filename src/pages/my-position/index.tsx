import Usdcsvg from "../../assets/token/usdcSvg.svg";
import Ethsvg from "../../assets/token/ethSvg.svg";
import PositionBox from "./PositionBox";

const MockAssets = [
  {
    pair: "uniswapv2USDC - ETH",
    LP: "12.341",
    Futures: "Long Short",
  },
  {
    pair: "uniswapv2USDC - ETH",
    LP: "12.121",
    Futures: "Long Short",
  },
  {
    pair: "uniswapv2USDC - ETH",
    LP: "12.121",
    Futures: "Long Short",
  },
];
const MyPosition = () => {
  return (
    <div className="px-10 py-6 ">
      <div className="flex bg-primary-50 ounded shadow-xl flex-col flex-1 [&>div]:grid [&>div]:grid-cols-3">
        <div className="w-full bg-primary-200 text-primary-700 border-b py-2 border-b-neutral-200 [&>p]:text-center [&>p]:font-semibold [&>p]:text-lg">
          <p> Pair </p>
          <p> LP Balance </p>
          <p> Futures </p>
        </div>
        {MockAssets.map((asset) => {
          return (
            <PositionBox
              pair={asset.pair}
              lp={asset.LP}
              futures={asset.Futures}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyPosition;
