const Switch = (props) => {
  const { extra, action, theme, ...rest } = props;
  return (
    <input
      type="checkbox"
      checked={theme}
      onClick={action}
      className={`relative h-7 w-13 appearance-none rounded-2xl bg-primary/30 outline-none cursor-pointer transition duration-[0.5s] 
      before:absolute before:top-[50%] before:h-[22px] before:w-[24px] before:translate-x-[2px] before:translate-y-[-50%] before:rounded-full
      before:bg-white checked:before:bg-black before:shadow-[0_2px_5px_rgba(0,_0,_0,_.2)] before:transition before:content-[""]
      checked:before:translate-x-[24px] hover:cursor-pointer checked:gradiant ${extra}`}
      name="weekly"
      {...rest}
    />
  );
};

export default Switch;
