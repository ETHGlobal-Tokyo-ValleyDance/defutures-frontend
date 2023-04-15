import ROUTES from "routes";
import { NavItem } from "./NavItem";
import { useConnectWallet } from "states/wallet.state";
import { ellipsisAddress } from "utils";
import { Link } from "react-router-dom";

const Header = () => {
  const { account, chainId, connect, disconnect } = useConnectWallet();

  const onDisconnect = () => {
    if(confirm("Disconnect Wallet?")) disconnect();
  }

  return (
    <header className="border-b border-b-neutral-300 flex flex-col">
      <div className="h-[75px] px-40 flex justify-between items-center">
        <Link to={ROUTES.HOME}>
          <p className="font-extrabold text-2xl text-primary-500">DeFutures</p>
        </Link>

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
