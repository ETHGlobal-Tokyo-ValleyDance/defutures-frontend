import { Token } from "modules/Token";
import { ChangeEventHandler, useState } from "react";

import usdc from "../../assets/token/usdcSvg.svg";
import { TokenIcon } from "./TokenIcon";

interface TokenSelectorProps {
  tokenList: Token[];
  selected: Token;
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
    onSelect(value);
  };

  return (
    <div className="flex flex-row items-center">
      <TokenIcon token={selected} />
      <select
        className="outline-none bg-transparent font-semibold border rounded pl-2 pt-1.5 p-1"
        onChange={onOptionChanged}
      >
        {tokenList.map((t) => (
          <option
            key={t.imgUrl}
            value={t.symbol}
            selected={selected.symbol === t.symbol}
          >
            {t.symbol}
          </option>
        ))}
      </select>
    </div>
  );
};
