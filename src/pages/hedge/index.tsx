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

  return (
    <div className="px-24 py-12 flex">
      <div className="px-10 py-6 flex flex-col flex-[2] border-r border-r-neutral-200">

        <p className="font-bold text-xl">Select base token to invest</p>
        <div className="flex">
          <TokenSelector
            tokenList={tokenList}
            selected={baseToken.symbol}
            onSelect={setBaseSymbol}
          />
        </div>

        <p className="font-bold text-xl">
          Select a pair token to invest DEX with base token
        </p>
        <div className="flex">
          <TokenSelector
            tokenList={tokenList}
            selected={farmToken.symbol}
            onSelect={setFarmSymbol}
          />
        </div>
      </div>
      <div className="px-10 py-4 flex justify-center flex-[3]"></div>
    </div>
  );
};

export default Hedge;
