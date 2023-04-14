import { useHedge } from "./hedge.service";
import { NumberInput } from "components/common/NumberInput";

const Hedge = () => {
  const {
    totalAmount,
    spotPercent,
    maxSpotPercent,
    marginRatio,
    tolerance,
    minMarginBps,
    setTotalAmount,
    onChangeSpotPercent,
  } = useHedge();

  const disabled = +tolerance < 0

  return (
    <div className="flex bg-primary-50 w-[600px] h-[500px] m-auto mt-10 mb-10 items-center justify-center p-8 rounded shadow-xl">
      <div className="flex flex-col w-[400px] ">
        <p className="font-semibold  mb-3">Total Amount</p>
        <NumberInput value={totalAmount} onChange={setTotalAmount} />

        <p className="mt-4"> Hedge Ratio </p>
        
        <input
          className="mt-4 accent-primary-300 focus:accent-primary-500 border-none bg-primary-700"
          type="range"
          step={0.1}
          min="60"
          max="100"
          value={spotPercent}
          onChange={onChangeSpotPercent}
        />
        <div className="flex justify-between">
          <p>60%</p>
          <p>Max</p>
        </div>

        <hr className="my-4" />

        <div className="mt-2 flex justify-between text-primary-800">
          <p className="font-semibold">Spot vs. Hedge Ratio</p>
          <div className="flex">
            <p className=" text-red-600">{spotPercent} </p> :{" "}
            <p className=" text-blue-600"> {(1000 - 10 * +spotPercent) / 10}</p>
          </div>
        </div>
        <div className="mt-2 flex justify-between text-primary-800">
          <p className="font-semibold">Current Margin Ratio</p>
          <p>{marginRatio}%</p>
        </div>
        <div className="mt-2 flex justify-between text-primary-800">
          <p className="font-semibold">Tolerance to volatility</p>
          <p>{tolerance >= 100 ? ">100" : tolerance < 0 ? "<0" : tolerance}%</p>
        </div>
        <div className="mt-2 flex justify-between text-primary-800">
          <p className="font-semibold">Minimum Margin Ratio</p>
          <p>{minMarginBps / 100}%</p>
        </div>
      </div>
    </div>
  );
};

export default Hedge;
