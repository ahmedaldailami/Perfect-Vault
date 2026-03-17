const Divider = () => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex-1 h-[1px] bg-border"></div>
      <span className="text-sm text-muted">or continue with</span>
      <div className="flex-1 h-[1px] bg-border"></div>
    </div>
  );
};
export default Divider;
