import { SearchIcon } from "lucide-react";
import { useState } from "react";

const FilterSection = () => {
  const [filter, setFilter] = useState("All");
  const filterTabs = ["All", "Favorites", "DeFi", "NFT", "Layer 1"];
  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      {/* // <!-- Search and Filters --> */}
      <div className="flex-1 min-w-[280px] bg-card border rounded-[10px] px-[18px] py-3 flex items-center gap-3">
      <SearchIcon />
        <input
          className="bg-none border-none text-primary text-base w-full [font-family:inherit] placeholder:text-muted focus:outline-0"
          type="text"
          placeholder="Search coins..."
          id="searchInput"
        />
      </div>

      <div className="flex gap-2 flex-wrap">
        {filterTabs.map((item) => (
          <button
          key={item}
            onClick={() => setFilter(item)}
            className={`px-[18px] py-2.5 rounded-lg text-sm font-medium cursor-pointer [font-family:inherit] [transition:all_0.2s_ease] hover:gradiant ${filter === item ? "gradiant text-[#1c1c1e] border-none" : "bg-none border text-secondary"}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
export default FilterSection;
