import ROUTES from "routes";
import { NavItem } from "./NavItem";
import { useConnectWallet } from "states/wallet.state";
import { ellipsisAddress } from "utils";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { account, chainId, connect, disconnect } = useConnectWallet();
  useEffect(() => {
    console.log("account", account);
  }, [account]);
  return (
    <header className="border-b border-b-neutral-300 flex flex-col">
      <div className="h-[75px] px-40 flex justify-between items-center">
        <Link to={ROUTES.HOME}>
          <p className="font-extrabold text-2xl text-primary-500">
            Valley Finance
          </p>
        </Link>

        {account ? (
          <div className="flex items-center">
            <div className="mr-2 ">Connected to {ellipsisAddress(account)}</div>
            <button className="btn btn-primary" onClick={disconnect}>
              Disconnect
            </button>
          </div>
        ) : (
          <div>
            <button className="btn btn-primary" onClick={connect}>
              Connect
            </button>
          </div>
        )}
      </div>
      <div className="flex mt-2 px-40">
        <NavItem content="Home" path={ROUTES.HOME} />
        <NavItem content="My Asset" path={ROUTES.MY_POSITION} />
        <NavItem content="Hedge Invest" path={ROUTES.HEDGE} />
        <NavItem content="Future" path={ROUTES.FUTURE} />
      </div>
    </header>
  );
};

export default Header;
