import { Token } from "modules/Token";
import { ChangeEventHandler, useState } from "react";

import usdc from "../../assets/token/usdcSvg.svg";

interface TokenSelectorProps {
  tokenList: Token[];
  selected: string;
  tokenImg: string;

  onSelect: (symbol: string) => void;
}
export const TokenSelector = ({
  tokenList,
  selected,
  tokenImg,
  onSelect,
}: TokenSelectorProps) => {
  const onOptionChanged: ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    console.log("select", value);
    const selectedOption = tokenList.find((option) => option.symbol === value);
    if (selectedOption) {
      setImgUrl(selectedOption.imgUrl);
    } else {
      setImgUrl("");
    }
    onSelect(value);
  };
  const [imgUrl, setImgUrl] = useState(tokenImg);

  return (
    <div className="flex flex-row select-wrapper">
      <img src={imgUrl} className="mr-2 w-8" />
      <select
        className=" appearance-none outline-none bg-transparent font-semibold border rounded pl-3 pr-7 pt-1.5 py-1"
        onChange={onOptionChanged}
      >
        {tokenList.map((t) => (
          <>
            <option
              key={t.imgUrl}
              value={t.symbol}
              selected={selected === t.symbol}
            >
              {t.symbol}
            </option>
          </>
        ))}
      </select>
    </div>
  );
};
