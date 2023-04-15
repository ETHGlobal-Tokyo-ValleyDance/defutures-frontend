import { Chain } from "modules/Chain";
import { Token } from "modules/Token";
import { cn } from "utils";

interface ChainIconProps {
  chain: Chain
  className?: string
}
export const ChainIcon = ({ chain, className }: ChainIconProps) => {
  return (
    <img src={chain.imgUrl} className={cn("rounded-full border w-7 h-7", className)} />
  );
};
