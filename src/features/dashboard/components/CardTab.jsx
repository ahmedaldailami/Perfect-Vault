const CardTab = ({ tab }) => {
  return (
    <button
      key={tab.name}
      className={`px-3.5 py-2 rounded-md text-[13px] font-medium border-none  cursor-pointer [transition:all_0.2s_ease] hover:text-primary hover:bg-card-alt ${tab.active ? "gradiant text-[#1c1c1c]" : " bg-none text-muted"}`}
    >
      {tab.name}
    </button>
  );
};
export default CardTab;
