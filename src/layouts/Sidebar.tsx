import { LayoutProps } from "@/types/layout-types";

const Sidebar = ({ className, children }: LayoutProps) => {
  return <aside className={className}>Sidebar</aside>;
};

export default Sidebar;
