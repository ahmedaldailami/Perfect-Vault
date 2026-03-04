const Search = () => {
  return (
    <div className="flex-1 flex items-center gap-2.5 bg-background-alt py-2.5 px-4 rounded-xl border focus-within:border-myColor">
      <svg
        className="text-muted"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        placeholder="Search..."
        className="text-primary text-sm w-44 placeholder:text-muted focus:outline-0"
      />
    </div>
  );
};
export default Search;
