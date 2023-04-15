import { NumberInput } from "components/common/NumberInput";
import { useFuture } from "./future.service";
import { TokenSelector } from "components/common/TokenSelector";
import { cn, useModal } from "utils";
import { FutureModal } from "./future.modal";

const Future = () => {
  const futures = useFuture();
  const {
    tokenList,
    totalSupply,
    longToken,
    shortToken,
    longAmount,
    shortAmount,
    margin,
    minMarginRatio,
    refresh,
    setMargin,
    onLongTokenChange,
    onShortTokenChange,
    onLongAmountChange,
    onShortAmountChange,
  } = futures;

  const [isModalOpen, openModal, closeModal] = useModal(false);
  const marginRatio = Math.floor((1e4 * +margin) / +shortAmount) / 100 || 0;
  const isMarginShortage = marginRatio >= 0 && marginRatio < minMarginRatio;
  const isDisabled = !shortAmount || isMarginShortage;

  return (
    <div className="px-24 pt-8 pb-20 flex">
      <div className="px-10 py-6 flex flex-col flex-[2] border-r border-r-neutral-200">
        {/* LONG TOKEN */}
        <p className="font-bold text-xl">Long Position</p>
        <hr className="my-4" />
        <NumberInput
          left={
            <TokenSelector
              tokenList={tokenList}
              selected={longToken}
              onSelect={onLongTokenChange}
            />
          }
          value={longAmount}
          onChange={onLongAmountChange}
        />

        {/* SHORT TOKEN */}
        <p className="font-bold text-xl mt-8">Short Position</p>
        <hr className="my-4" />
        <NumberInput
          left={
            <TokenSelector
              tokenList={tokenList}
              selected={shortToken}
              onSelect={onShortTokenChange}
            />
          }
          value={shortAmount}
          onChange={onShortAmountChange}
        />

        {/* Margin */}
        <p className="font-bold text-xl mt-8">MARGIN</p>
        <hr className="my-4" />
        <NumberInput
          left={
            <div className="flex items-center">
              <img src={shortToken.imgUrl} className="border w-7 h-7 mr-2" />
              <div className="px-4 p-1 h-full flex-center border rounded-lg bg-neutral-200">
                <p className="font-semibold">
                  {shortToken.symbol}
                </p>
              </div>
            </div>
          }
          value={margin}
          onChange={setMargin}
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="px-10 py-4 flex justify-center flex-[3]">
        <div className="rounded-2xl shadow bg-white p-9 py-8 flex flex-col">
          <p className=" text-neutral-400 mb-3">
            FUTURE NFT #{totalSupply + 1}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="chip chip-blue">Sell</span>
              <p className="text-2xl mx-3 pt-0.5 font-semibold">
                {shortToken.symbol} &#8594; {longToken.symbol}
              </p>
              <span className="chip chip-primary">Buy</span>
            </div>
          </div>

          <hr className="my-4" />

          {/* FUTURE NFT INFO */}
          {/* TODO */}
          <div>
            {/* BASIC INFO */}
            <div className="flex justify-between mt-2">
              <p className="font-semibold text-lg">Future Amount</p>
              <p className="text-lg">
                {longAmount} {longToken.symbol}
              </p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="font-semibold text-lg">Strike Amount</p>
              <p className="text-lg">
                {shortAmount} {shortToken.symbol}
              </p>
            </div>
            <div
              className={cn(
                "flex justify-between mt-2",
                isMarginShortage && "[&>p]:text-red-600"
              )}
            >
              <p className="font-semibold text-lg">Margin</p>
              <p className="text-lg">
                {margin} {shortToken.symbol}
              </p>
            </div>

            <hr className="my-4" />

            {/* DESCRIPTION */}
            <div className=" bg-primary-50 p-5 my-6 rounded-lg">
              <p className="leading-[22px]">
                To invest in <b className="text-primary-700">Defutures</b>, you
                should deposit a margin according to the&nbsp;
                <b className="text-primary-700">Minimum Margin Ratio</b>. If
                long positions fall and short positions rise beyond the&nbsp;
                <b className="text-primary-700">Tolerance</b>, your position may
                be subject to liquidation.
              </p>
            </div>

            {/* ADDITIONAL INFO */}
            <div
              className={cn(
                "flex justify-between",
                isMarginShortage && "[&>p]:text-red-600"
              )}
            >
              <p className="font-semibold text-lg">Margin Ratio</p>
              <p className="text-lg">{marginRatio}%</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="font-semibold text-lg">Minimum Margin Ratio</p>
              <p className="text-lg">{minMarginRatio}%</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="font-semibold text-lg">Tolerance</p>
              <p className="text-lg"> 20% </p>
            </div>
          </div>

          {/* TX Button */}
          <div className="mt-6 flex-center flex-1">
            <button
              disabled={isDisabled}
              onClick={openModal}
              className={cn(
                "btn-lg",
                isDisabled ? "bg-neutral-300 text-white" : "btn-primary"
              )}
            >
              Start to invest {shortToken.symbol} → {longToken.symbol} DeFuture 🚀
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <FutureModal close={closeModal} futures={futures} />}
    </div>
  );
};

export default Future;
