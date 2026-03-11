const InputField = (props) => {
  const { label, value, id, extra, type, placeholder, disabled, handleChange } =
    props;
  return (
    <div className={`${extra} mb-6`}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-primary mb-2"
      >
        {label}
      </label>
      <input
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        disabled={disabled}
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full px-[18px] py-3.5 bg-background border rounded-[10px] text-base [font-family:inherit] text-primary [transition:all_0.2s_ease] focus:outline-0 focus:border-myColor placeholder:text-muted"
      />
    </div>
  );
};

export default InputField;
