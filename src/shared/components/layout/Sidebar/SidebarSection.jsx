import { SidebarItem } from "./SidebarItem";

export const SidebarSection = ({ section }) => {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase text-gray-500 px-4">
        {section.title}
      </p>

      <div className="space-y-1">
        {section.items.map(item => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </div>
    </div>
  );
};