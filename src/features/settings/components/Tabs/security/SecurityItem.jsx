const SecurityItem = (props) => {
  const { title, status, btn, enabled, primary } = props;
  return (
    <div class="flex items-center gap-4 p-5 bg-[rgba(255,_255,_255,_0.03)] rounded-xl mb-4">
      <div class="size-12 bg-[rgba(184,_115,_51,_0.15)] rounded-xl flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b87333"
          strokeWidth="2"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      </div>
      <div class="flex-1">
        <div class="text-base font-semibold text-primary mb-1">{title}</div>
        <div class={`text-sm ${enabled ? "text-myColor/50" : "text-muted"} `}>
          {status}
        </div>
      </div>
      <button
        class={`px-5 py-2.5 rounded-[8px] text-sm font-semibold [font-family:inherit] cursor-pointer [transition:all_0.2s_ease] border  hover:bg-card-alt  ${primary ? "gradiant text-[#1c1c1e] " : "bg-transparent text-primary"}`}
      >
        {btn}
      </button>
    </div>
  );
};
export default SecurityItem;
