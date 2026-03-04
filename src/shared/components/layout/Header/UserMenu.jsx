const UserMenu = () => {
  return (
    <div className="flex items-center gap-3 pr-4 py-2 pl-2 bg-background-alt rounded-xl border cursor-pointer [transition:border-color_0.2s_ease] hover:border-myColor">
      <div className="size-9 gradiant rounded-[10px] flex items-center justify-center font-semibold text-sm text-[#1c1c1e]">
        AA
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-primary">Ahmed Adnan</span>
        <span className="text-xs text-muted">Pro Trader</span>
      </div>
    </div>
  );
};
export default UserMenu;
