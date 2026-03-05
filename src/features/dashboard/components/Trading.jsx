const Trading = ({ pair }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl font-bold text-primary">&{pair.price}</span>
      <span
        className={`text-sm font-semibold px-2.5 py-1 rounded-md ${pair.change > 0 ? "bg-[rgba(107,_142,_107,_0.2)] text-[#6b8e6b]" : "bg-[rgba(194,_120,_120,_0.2)] text-[#c27878]"}`}
      >
        {pair.change}%
      </span>
    </div>
  );
};
export default Trading;
