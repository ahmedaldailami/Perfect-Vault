const MoversTab = () => {
  return (
    <div class="flex gap-1.5 bg-background rounded-lg p-1">
      <button class="px-3.5 py-1.5 rounded-md text-[13px] font-medium cursor-pointer [font-family:inherit] [transition:all_0.2s_ease] hover:text-primary gradiant text-[#1c1c1e]">
        Gainers
      </button>
      <button class="px-3.5 py-1.5 rounded-md text-[13px] font-medium bg-none text-muted cursor-pointer [font-family:inherit] [transition:all_0.2s_ease] hover:text-primary">
        Losers
      </button>
    </div>
  );
};
export default MoversTab;
