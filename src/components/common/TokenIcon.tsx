import { Token } from "modules/Token";
import { cn } from "utils";

interface TokenIconProps {
  token: Token
  className?: string
}
export const TokenIcon = ({ token, className }: TokenIconProps) => {
  return (
    <img src={token.imgUrl} className={cn("rounded-full border w-7 h-7", className)} />
  );
};
