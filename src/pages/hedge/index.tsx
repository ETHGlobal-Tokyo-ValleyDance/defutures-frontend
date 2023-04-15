import { TokenSelector } from "components/common/TokenSelector";
import { useHedge } from "./hedge.service";
import { NumberInput } from "components/common/NumberInput";
import { cn, useModal } from "utils";
import { HedgeModal } from "./hedge.modal";
import { TokenIcon } from "components/common/TokenIcon";
import { useBalance } from "states/balances.state";

const MIN_SPOT_PERCENT = 60;
const Hedge = () => {

  const hedges = useHedge(MIN_SPOT_PERCENT);
  const {
    totalAmount,
    spotPercent,
    spotAmount,
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
  } = hedges;

  const [isModalOpen, openModal, closeModal] = useModal(false);
  const disabled = +tolerance < 0;
  const baseTokenBalance = useBalance(baseToken);
  // TODO
  const dexName = "Uniswap V2";

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

        <p className="font-bold text-xl mt-6">
          Select a token to invest in DEX.
        </p>
        <hr className="mt-2" />
        <div className="flex my-4">
          <TokenSelector
            tokenList={tokenList}
            selected={baseToken}
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
            selected={farmToken}
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
            <div className="flex items-center">
              <TokenIcon token={baseToken} />
              <div className="px-4 p-1 h-full flex-center border rounded-lg bg-neutral-200">
                <p className="font-semibold">
                  {baseToken.symbol}
                </p>
              </div>
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

          <label
            htmlFor="spot-range"
            className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
          >
            Spot - Hedge Ratio
          </label>
          <div className="flex justify-between mb-3">
            <div className="chip-sm chip-purple">Min {MIN_SPOT_PERCENT}%</div>
            <div className="chip-sm chip-primary">Current: {spotPercent}%</div>
            <div className="chip-sm chip-purple">Max 100%</div>
          </div>
          <input
            id="spot-range"
            className="rounded-lg overflow-hidden appearance-none bg-primary-100 h-3 w-128"
            type="range"
            step={0.1}
            min={MIN_SPOT_PERCENT}
            max="100"
            value={spotPercent}
            onChange={onChangeSpotPercent}
          />

          {/* INFOS */}
          <div className=" bg-primary-50 p-4 rounded-lg my-3">
            <p className="leading-[26px] text-lg">
              Your investment funds of
              <b className="text-primary-700"> {totalAmount} USDC </b>
              will be divided as follows:
              <br />•{" "}
              <b className="text-primary-700">
                {spotAmount} {baseToken.symbol}{" "}
              </b>
              will be allocated to {dexName} {baseToken.symbol}+
              {farmToken.symbol}
              <br />• remaining{" "}
              <b className="text-primary-700">
                {(1000 * +totalAmount - spotAmount * 1000) / 1000}{" "}
                {baseToken.symbol}
              </b>{" "}
              will be invested in futures for hedging position.
            </p>
          </div>

          <hr className="my-3" />
          {/* RECEIPT PREVIEW */}
          <div className="flex flex-col gap-y-1.5">
            {/* MARGIN RATIO */}
            <div
              className={cn(
                "flex flex-1 gap-4",
                marginRatio < minMarginBps / 100 && "text-red-600"
              )}
            >
              <div className="flex flex-1 justify-between">
                <p className="font-semibold">Current Margin Ratio</p>
                <p> {marginRatio}%</p>
              </div>
              <p>:</p>
              <p className="flex-1 text-neutral-500">
                Your {farmToken.symbol} equity compared to strike amount
              </p>
            </div>

            {/* MINIMUM MARGIN RATIO */}
            <div className="flex flex-1 gap-4">
              <div className="flex flex-1 justify-between">
                <p className="font-semibold">Minimum Margin Ratio</p>
                <p> {minMarginBps / 100}%</p>
              </div>
              <p>:</p>
              <p className="flex-1 text-neutral-500">
                Min margin ratio required to maintain position.
              </p>
            </div>

            {/* TOLERANCE */}
            <div className="flex flex-1 gap-4">
              <div className="flex flex-1 justify-between">
                <p className="font-semibold">Tolerance</p>
                <p> {tolerance >= 100 || tolerance < 0 ? "-" : tolerance}%</p>
              </div>
              <p>:</p>
              <p className="flex-1 text-neutral-500">
                The volatility of price fluctuations between paired tokens that
                can be tolerated.
              </p>
            </div>
          </div>

          {/* WARNING */}
          <div className=" bg-yellow-50 p-4 rounded-lg my-4">
            <p>
              Investing a small percentage of funds in position hedging{" "}
              <b className="text-yellow-800">
                may expose the position to liquidation risk
              </b>{" "}
              even with minor price fluctuations, while{" "}
              <b className="text-yellow-800">
                overinvesting in hedging may limit potential returns.
              </b>
            </p>
          </div>

          <div className="flex-1 mt-2 flex-center">
            <button onClick={openModal} className="btn-lg btn-primary">
              Start to invest Hedged position 🚀
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (<HedgeModal close={closeModal} hedges={hedges} />)}
    </div>
  );
};

export default Hedge;
