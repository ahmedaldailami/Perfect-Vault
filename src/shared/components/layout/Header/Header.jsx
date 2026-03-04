import NotificationBtn from "./NotificationBtn";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="header-left">
        <h1 className="text-[28px] font-bold text-primary mb-1">Dashboard</h1>
        <p className="text-sm text-secondary">
          Welcome back! Here's your portfolio overview.
        </p>
      </div>

      <div className="flex items-center gap-5">
        <Search />

        <NotificationBtn />

        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
