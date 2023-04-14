import { Token } from "modules/Token";
import { ChangeEventHandler } from "react";

interface TokenSelectorProps {
  tokenList: Token[];
  selected: string;
  onSelect: (symbol: string) => void;
}
export const TokenSelector = ({
  tokenList,
  selected,
  onSelect,
}: TokenSelectorProps) => {
  const onOptionChanged: ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    console.log("select", value);
    onSelect(value);
  };
  return (
    <div className="select-wrapper">
      <select
        className=" appearance-none outline-none bg-transparent font-semibold border rounded pl-3 pr-7 pt-1.5 py-1"
        onChange={onOptionChanged}
      >
        {tokenList.map((t) => (
          <option
            key={t.symbol}
            value={t.symbol}
            selected={selected === t.symbol}
          >
            {t.symbol}
          </option>
        ))}
      </select>
    </div>
  );
};
