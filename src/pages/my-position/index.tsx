import { useEffect } from "react";
import PositionBox from "./PositionBox";
import { chainIds } from "interfaces/config-data.interface";
import { getPositions } from "api/getPositions";
import { useWallet } from "states/wallet.state";

const MyPosition = () => {

  const {account} = useWallet();
  useEffect(() => {
    if(account) getPositions(account).then(console.log);
  },[account])
  return (
    <div className="px-10 py-6 ">
      <div className="flex flex-col flex-1">
        <div className=" bg-neutral-50 w-full grid grid-cols-[2fr_4fr_2fr_5fr] [&>p]:text-center border-b py-2.5">
          <p className="font-semibold text-lg"> Chain </p>
          <p className="font-semibold text-lg"> Pair </p>
          <p className="font-semibold text-lg"> LP Balance </p>
          <p className="font-semibold text-lg"> Futures </p>
        </div>
        {chainIds.map((c, i) => (
          <PositionBox i={i} key={c} chainId={c} />
        ))}

      </div>
    </div>
  );
};

export default MyPosition;
