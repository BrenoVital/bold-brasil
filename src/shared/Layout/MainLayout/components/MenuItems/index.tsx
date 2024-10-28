import { Menu } from "antd";
import { RouteConfig } from "../../../../../data/types/Routes";
import { useNavigate } from "react-router-dom";

export default function MenuItems({ routes }: { routes: RouteConfig }) {
  const navigate = useNavigate();
  const menuItems = Object.keys(routes).map((path) => ({
    key: path,
    icon: routes[path].icon,
    label: routes[path].name,
    onClick: () => navigate(path),
  }));

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["/"]}
      items={menuItems}
    />
  );
}
