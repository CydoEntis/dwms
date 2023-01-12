import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  icon: React.ReactNode;
  text: string;
};

const NavItem = ({ to, icon, text }: Props) => {
  return (
    <li className="mb-3 flex w-2/3 items-center justify-center rounded-md border-2 border-emerald-600 py-1.5">
      <NavLink
        to={to}
        className="flex w-full items-center justify-center text-sm text-grey-50"
      >
        <div className="flex w-3/4 items-center justify-center ">
          <div className="w-1/3">{icon}</div>
          <h4 className="w-1/3 text-lg">{text}</h4>
        </div>
      </NavLink>
    </li>
  );
};

export default NavItem;
