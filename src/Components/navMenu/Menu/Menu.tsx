import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import MenuItem from "./MenuItem";

import { RiDashboardLine } from "@remixicon/react";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = useState<string>("dashboard");

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
    navigate(`/${menu}`);
  };

  useEffect(() => {
    setSelectedMenu(location.pathname.slice(1));
  }, [location]);

  return (
    <div className="relative h-svh hidden md:flex flex-col px-4 py-6 overflow-y-auto">
      <div className="flex flex-col gap-2 mt-10">
        <MenuItem
          icon={<RiDashboardLine size={20} className="" />}
          title={"Home"}
          selected={selectedMenu === "home"}
          onClick={() => handleMenuClick("home")}
        />
      </div>
    </div>
  );
};

export default Menu;
