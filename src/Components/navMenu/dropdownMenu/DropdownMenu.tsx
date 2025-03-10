import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import MenuItem from "./MenuItem";
import Badge from "../../Badges/Badge";
import Button from "../../Buttons/Button";

import { RiUser3Line, RiTeamLine, RiCloseLine } from "@remixicon/react";

interface DropdownMenuProps {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownMenu = ({ setOpenMenu }: DropdownMenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedMenu, setSelectedMenu] = useState<string>("home");

  const handleMenuClick = (menu: string) => {
    setOpenMenu(false);
    setSelectedMenu(menu);
    navigate(`/${menu}`);
  };

  useEffect(() => {
    setSelectedMenu(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <div className="h-full md:h-auto bg-white rounded-xl">
      <div className="flex justify-between items-center p-3 mt-3 md:mt-0 md:p-0">
        <div className="md:hidden flex items-center gap-2">
          <div className="rounded-full w-8 h-8 flex items-center justify-center">
            Nome
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <p className="">Nome</p>
              <Badge title="Nome" type="neutral" size="small" />
            </div>
            <p className="">Nome</p>
          </div>
        </div>
        <Button
          type="ghost"
          size="small"
          iconSide="left"
          className="md:hidden block"
          onClick={() => setOpenMenu(false)}
        >
          <RiCloseLine size={20} color="#000" />
        </Button>
      </div>
      <div className="flex flex-col gap-4 p-2">
        <div className="flex flex-col gap-1">
          <MenuItem
            icon={<RiUser3Line size={20} className="" />}
            title="Perfil"
            selected={selectedMenu === "perfil"}
            onClick={() => handleMenuClick("perfil")}
          />

          <MenuItem
            icon={<RiTeamLine size={20} className="" />}
            title="Operadores"
            selected={selectedMenu === "operadores"}
            onClick={() => handleMenuClick("operadores")}
          />
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
