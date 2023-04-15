import PositionBox from "./PositionBox";
import { chainIds } from "interfaces/config-data.interface";

const MyPosition = () => {
  return (
    <div className="px-10 py-6 ">
      <div className="flex flex-col flex-1">
        <div className="w-full grid grid-cols-[2fr_4fr_2fr_5fr] [&>p]:text-center border-b pb-1">
          <p className="font-semibold text-lg"> Chain </p>
          <p className="font-semibold text-lg"> Pair </p>
          <p className="font-semibold text-lg"> LP Balance </p>
          <p className="font-semibold text-lg"> Futures </p>
        </div>
        {chainIds.map(c => (
          <PositionBox chainId={c} />
        ))}

      </div>
    </div>
  );
};

export default MyPosition;
