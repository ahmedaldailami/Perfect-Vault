const ConnectedItem = ({ item }) => {
  const Icon = item.title[0];
  return (
    <div className="flex items-center py-5 px-2 sm:p-5 gap-2 bg-[rgba(255,_255,_255,_0.03)] rounded-xl mb-4">
        <div className="size-10 sm:size-12 bg-[rgba(184,_115,_51,_0.15)] text-myColor rounded-xl flex items-center justify-center">
          {Icon}
        </div>
        <div className="flex-1">
          <div className="text-base font-semibold text-primary mb-1">
            {item.title}
          </div>
          <div
            className={`text-sm ${item.enabled ? "text-myColor-light/50" : "text-muted"} `}
          >
            {item.statu}
          </div>
        </div>

      <button
        className={`px-5 py-2.5 rounded-[8px] text-sm font-semibold [font-family:inherit] cursor-pointer [transition:all_0.2s_ease] border  hover:bg-card-alt hover:border-myColor  ${item.primary ? "gradiant text-[#1c1c1e] " : "bg-transparent text-primary"}`}
      >
        {item.btn}
      </button>
    </div>
  );
};
export default ConnectedItem;
