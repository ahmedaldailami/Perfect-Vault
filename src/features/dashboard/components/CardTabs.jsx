import CardTab from "./CardTab";

const CardTabs = ({ tabs }) => {
  return (
    <div className="flex gap-1.5">
      {tabs.map((item) => (
        <CardTab tab={item} key={item.name} />
      ))}
    </div>
  );
};
export default CardTabs;
