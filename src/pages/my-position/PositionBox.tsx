import Usdcsvg from "../../assets/token/usdcSvg.svg";
import Ethsvg from "../../assets/token/ethSvg.svg";
const PositionBox = () => {
  return (
    <div className="h-16">
      <div className="flex-1 flex-center text-center">
        <img src={Usdcsvg} />
        <img src={Ethsvg} />
        UniswapV2 USDC + ETH
      </div>
      <div className="flex-1 flex-center text-center">120.98LP</div>
      <div className="flex-1 flex-center text-center">LONG SHORT</div>
    </div>
  );
};

export default PositionBox;
