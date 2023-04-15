import ROUTES from "routes";
import { NavItem } from "./NavItem";
import { useConnectWallet } from "states/wallet.state";
import { ellipsisAddress } from "utils";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { Chain } from "modules/Chain";

const Header = () => {
  const { account, chainId, connect, disconnect } = useConnectWallet();
  const chain = Chain.get(chainId);

  const onDisconnect = () => {
    if (confirm("Disconnect Wallet?")) disconnect();
  };

  return (
    <header className="border-b border-b-neutral-300 flex flex-col">
      <div className="h-[75px] px-20 flex justify-between items-center">
        <Link to={ROUTES.HOME}>
          <img src={Logo} className="w-60 " />
        </Link>

        <div className="flex items-center">
          <p className="font-bold mt-1">{chain.name}</p>
          <div className="rounded-lg shadow-lg bg-neutral-50 hover:bg-neutral-100 w-[42px] h-[42px] flex-center mx-4">
            <img src={chain.imgUrl} className="w-6 h-6" />
          </div>
          {account ? (
            <button className="btn btn-secondary" onClick={onDisconnect}>
              {ellipsisAddress(account)}
            </button>
          ) : (
            <button className="btn btn-primary" onClick={connect}>
              Connect
            </button>
          )}
        </div>
      </div>
      <div className="flex mt-2 px-40">
        <NavItem content="Home" path={ROUTES.HOME} />
        <NavItem content="My Asset" path={ROUTES.MY_POSITION} />
        <NavItem
          content="Hedge Invest"
          path={ROUTES.HEDGE}
          badge={<span className=" ml-2 chip-sm chip-blue">Beginner</span>}
        />
        <NavItem
          content="Future"
          path={ROUTES.FUTURE}
          badge={<span className=" ml-2 chip-sm chip-primary">Expert</span>}
        />
      </div>
    </header>
  );
};

export default Header;
