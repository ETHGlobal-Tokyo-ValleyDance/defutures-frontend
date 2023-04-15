import { Token } from "modules/Token";

export const TokenIcon = ({ token }: { token: Token }) => {
  return (
    <img src={token.imgUrl} className="rounded-full border mr-2 w-7 h-7" />
  );
};
