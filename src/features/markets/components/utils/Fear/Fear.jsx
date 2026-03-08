const Fear = () => {
  return (
    <div className="card-bg">
      <div className="flex justify-between items-center mb-6 w-full">
        <h2 className="text-xl font-semibold text-primary">
          Fear & Greed Index
        </h2>
      </div>

      <div className="mt-6">
        <div className="h-3 bg-[linear-gradient(90deg,_#c27878,_#c9a878,_#6b8e6b)] rounded-md relative mx-0 my-4">
          <div
            className="absolute -top-1 size-5 bg-primary rounded-full transform -translate-x-1/2 "
            style={{ left: "68%" }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-muted">
          <span>Extreme Fear</span>
          <span>Neutral</span>
          <span>Extreme Greed</span>
        </div>
        <div className="text-center mt-4">
          <div className="text-4xl font-bold text-primary">68</div>
          <div className="text-sm text-myColor font-semibold">Greed</div>
        </div>
      </div>
    </div>
  );
};
export default Fear;
