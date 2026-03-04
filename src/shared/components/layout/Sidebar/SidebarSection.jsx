import { SidebarItem } from "./SidebarItem";

export const SidebarSection = ({ section }) => {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold text-muted uppercase tracking-[1px] mb-4">
        {section.title}
      </p>

      <div className="">
        {section.items.map((item) => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </div>
    </div>
  );
};