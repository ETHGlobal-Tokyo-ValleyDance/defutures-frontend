import { TokenSelector } from "components/common/TokenSelector";
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
    totalSupply,
    tokenList,
    baseToken,
    farmToken,
    setBaseSymbol,
    setFarmSymbol,
    setTotalAmount,
    onChangeSpotPercent,
  } = useHedge();

  const disabled = +tolerance < 0;
  const baseTokenBalance = 0;

  return (
    <div className="px-24 py-12 flex">
      <div className="px-10 py-6 flex flex-col flex-[2] border-r border-r-neutral-200">

        {/* DESCRIPTION */}
        <div className=" bg-primary-50 p-5 rounded-lg">
          <p className="leading-[22px]">
            To invest in <b className="text-primary-700">Defutures</b>, you
            should deposit a margin according to the&nbsp;
            <b className="text-primary-700">Minimum Margin Ratio</b>. If long
            positions fall and short positions rise beyond the&nbsp;
            <b className="text-primary-700">Tolerance</b>, your position may be
            subject to liquidation.
          </p>
        </div>

        <p className="font-bold text-xl mt-6">Select a token to invest in DEX.</p>
        <hr className="mt-2" />
        <div className="flex my-4">
          <TokenSelector
            tokenList={tokenList}
            selected={baseToken.symbol}
            onSelect={setBaseSymbol}
          />
        </div>

        <p className="font-bold text-xl mt-4">
          Select a pair token to invest with the above.
        </p>
        <hr className="mt-2" />
        <div className="flex my-4">
          <TokenSelector
            tokenList={tokenList}
            selected={farmToken.symbol}
            onSelect={setFarmSymbol}
          />
        </div>

        <p className="font-bold text-xl mt-4">
          Enter the amount of BASE Token you'd like to invest.
        </p>
        <hr className="mt-2" />
        <NumberInput
          className="mt-4"
          value={totalAmount}
          onChange={setTotalAmount}
          left={
            <div className="px-5 h-full flex-center border rounded-lg bg-neutral-200">
              <p className="font-semibold pt-1">{baseToken.symbol}</p>
            </div>
          }
          right={
            <button className="btn btn-primary h-full flex-center">Max</button>
          }
        />

        {/* TODO */}
        <p className="text-right mt-2 pr-1 text-neutral-600">
          Your balance: {baseTokenBalance || "0.0"}
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="px-10 py-4 flex justify-center flex-[3] ">
        <div className="rounded-2xl shadow bg-white p-9 py-8 flex flex-1 flex-col">
          <p className=" text-neutral-400 mb-3">
            FUTURE NFT #{totalSupply + 1}
          </p>
          <div className="flex items-center">
            <span className="chip chip-blue">Base</span>
            <p className="text-2xl mx-3 pt-0.5 font-semibold">
              {baseToken.symbol} + {farmToken.symbol}
            </p>
            <span className="chip chip-primary">Farm</span>
          </div>

          <hr className="my-4" />

          <input
            className="mt-4 accent-primary-300 focus:accent-primary-500 border-none bg-primary-700"
            type="range"
            step={0.1}
            min="60"
            max="100"
            value={spotPercent}
            onChange={onChangeSpotPercent}
          />
        </div>

      </div>
    </div>
  );
};

export default Hedge;
