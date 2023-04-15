import { ChainIcon } from "components/common/ChainIcon";
import { TokenIcon } from "components/common/TokenIcon";
import { CHAINID } from "interfaces/config-data.interface";
import { Token } from "modules/Token";
import LPTOKENS from "modules/lp-tokens.data";
import { useBalance } from "states/balances.state";

interface PositionBoxProps {
  chainId: CHAINID
}

const PositionBox = ({ chainId }: PositionBoxProps) => {
  const pair = LPTOKENS.find(t => t.chainId === chainId)!;
  const t0 = Token.get(chainId, pair.token0)!;
  const t1 = Token.get(chainId, pair.token1)!;

  const pairToken = new Token(pair);
  const pairBalance = useBalance(pairToken)
  return (
    <div className="h-16 border-b-2 grid grid-cols-[2fr_4fr_2fr_5fr]">
      <div className="flex-center">
        {pairToken.getChain().name}
      </div>
      <div className="flex-center">
        <div className="flex-center w-12">
          <TokenIcon token={t0} className="-mr-2" />
          <TokenIcon token={t1} className="mr-2" />
        </div>
        <div className="w-[200px]">
          <p className="text-center">{pair.name}</p>
        </div>
      </div>

      <div className="flex-center">
        <p>{(Math.floor(+pairBalance * 1E6) / 1E6) || "0.0"} LP</p>
      </div>
    </div>
  );
};

export default PositionBox;
