const NotificationBtn = () => {
  return (
    <button className="relative size-11 bg-background-alt border rounded-[10px] flex items-center justify-center cursor-pointer text-secondary [transition:all_0.2s_ease] hover:bg-background hover:text-primary ">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
      <span className="absolute -top-1 -right-1 size-5 gradiant rounded-full text-[11px] font-semibold text-[#1c1c1e] flex items-center justify-center">
        3
      </span>
    </button>
  );
};

export default NotificationBtn;
