import CardTabs from "./CardTabs";

const ChartCard = ({ title, tabs, children }) => {
  return (
    <div className="card-bg">
      <div className="flex justify-between items-center mb-6 w-full">
        <h2 className="text-xl font-semibold text-primary">{title}</h2>
        {tabs ? <CardTabs tabs={tabs} /> : <p>jhghj</p>}
      </div>

      {children}
    </div>
  );
};
export default ChartCard;
