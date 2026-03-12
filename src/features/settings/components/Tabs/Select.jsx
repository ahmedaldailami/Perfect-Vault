const Select = ({ item }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-primary mb-2">
        {item.label}
      </label>
      <div className=" flex justify-between items-center">
        <select className="w-full px-[18px] py-3.5 bg-background border rounded-[10px] text-base [font-family:inherit] text-primary cursor-pointer appearance-none focus:outline-0 focus:border-myColor">
          {item.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className=" relative right-8">▽</span>
      </div>
    </div>
  );
};

export default Select;
