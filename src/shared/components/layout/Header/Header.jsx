import { useLocation } from "react-router-dom";
import NotificationBtn from "./NotificationBtn";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Header = () => {
  const loc = useLocation().pathname.slice(1);

  return (
    <header className="flex justify-between lg:items-center mb-8 flex-col gap-2 lg:flex-row">
      <div className="header-left">
        <h1 className="text-[28px] font-bold text-primary mb-1 capitalize">
          {loc || "Dashboard"}
        </h1>
        <p className="text-sm text-secondary">
          Welcome back! Here's your portfolio overview.
        </p>
      </div>
      {loc === "" && (
        <div className="flex items-center gap-5 flex-wrap">
          <Search />
          <NotificationBtn />
          <UserMenu />
        </div>
      )}
    </header>
  );
};

export default Header;
