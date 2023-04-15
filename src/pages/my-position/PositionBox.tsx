import Usdcsvg from "../../assets/token/usdcSvg.svg";
import Ethsvg from "../../assets/token/ethSvg.svg";

interface PositionBoxProps {
  pair: string;
  lp: string;
  futures: string;
}

const PositionBox = ({ pair, lp, futures }: PositionBoxProps) => {
  return (
    <div className="h-16 border-b-2">
      <div className="flex-1 text-primary-900 flex-center text-center">
        <img src={Usdcsvg} />
        <img src={Ethsvg} />
        {pair}
      </div>
      <div className="flex-1 text-primary-900 flex-center text-center">
        {lp}
      </div>
      <div className="flex-1 text-primary-900 flex-center text-center">
        {futures}
      </div>
    </div>
  );
};

export default PositionBox;
