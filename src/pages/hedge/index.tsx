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

  return (
    <div className="flex bg-primary-100 w-[600px] h-[500px] m-auto mt-10 mb-10 items-center justify-center p-8 rounded shadow-xl">
      <div className="flex flex-col w-[400px] ">
        <p className="font-semibold">Total Amount</p>
        <NumberInput value={totalAmount} onChange={setTotalAmount} />

        <p className="mt-4"> Hedge Ratio </p>
        <input
          className="mt-4"
          type="range"
          min="60"
          step={0.1}
          max={maxSpotPercent}
          value={spotPercent}
          onChange={onChangeSpotPercent}
        />
        <div className="flex justify-between">
          <p>{50}</p>
          <p>{spotPercent}</p>
          <p>{maxSpotPercent}</p>
        </div>

        <hr className="my-4" />

        <div className="mt-2 flex justify-between">
          <p className="font-semibold">Spot vs. Hedge Ratio</p>
          <p>
            {spotPercent} : {(1000 - 10 * +spotPercent) / 10}
          </p>
        </div>
        <div className="mt-2 flex justify-between">
          <p className="font-semibold">Current Margin Ratio</p>
          <p>{marginRatio}%</p>
        </div>
        <div className="mt-2 flex justify-between">
          <p className="font-semibold">Tolerance to volatility</p>
          <p>{tolerance >= 100 ? ">100" : tolerance}%</p>
        </div>
        <div className="mt-2 flex justify-between">
          <p className="font-semibold">Minimum Margin Ratio</p>
          <p>{minMarginBps / 100}%</p>
        </div>
      </div>
    </div>
  );
};

export default Hedge;
