import Usdcsvg from "../../assets/token/usdcSvg.svg";
import Ethsvg from "../../assets/token/ethSvg.svg";
const MyPosition = () => {
  return (
    <div className="px-10 py-6 ">
      <div className="flex bg-primary-50 ounded shadow-xl flex-col flex-1 [&>div]:grid [&>div]:grid-cols-3">
        <div className="w-full bg-primary-200 text-primary-700 border-b py-2 border-b-neutral-200 [&>p]:text-center [&>p]:font-semibold [&>p]:text-lg">
          <p> Pair </p>
          <p> LP Balance </p>
          <p> Futures </p>
        </div>
        <div className="h-16 p-4">
          <div className="flex-1 flex-center text-center">
            <img src={Usdcsvg} />
            <img src={Ethsvg} />
            UniswapV2 USDC + ETH
          </div>
          <div className="flex-1 flex-center text-center">120.98LP</div>
          <div className="flex-1 flex-center text-center">LONG SHORT</div>
        </div>
        <div className="h-16 p-4">
          <div className="flex-1 flex-center text-center">
            <img src={Usdcsvg} />
            <img src={Ethsvg} />
            UniswapV2 USDC + ETH
          </div>
          <div className="flex-1 flex-center text-center">120.98LP</div>
          <div className="flex-1 flex-center text-center">LONG SHORT</div>
        </div>
      </div>
    </div>
  );
};

export default MyPosition;
