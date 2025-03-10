import { ReactNode, HTMLAttributes } from "react";

import Menu from "./Menu/Menu";
import Header from "./header/Header";

interface NavMenuProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const NavMenu = ({ children }: NavMenuProps) => {
  return (
    <div className="block md:grid overflow-hidden grid-cols-[240px_minmax(0,_1fr)]">
      <Menu />

      <div className="relative min-h-lvh">
        <Header />
        <main className="h-[calc(100svh-86px)] px-6 sm:px-8 overflow-y-auto pb-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default NavMenu;
