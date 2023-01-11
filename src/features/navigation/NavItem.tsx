import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  icon: React.ReactNode;
  text: string;
};

const NavItem = ({ to, icon, text }: Props) => {
  return (
    <li>
      <NavLink
        to={to}
        className="bg-grey flex items-center justify-center text-sm"
      >
        {icon}
        <h4 className="text-white">{text}</h4>
      </NavLink>
    </li>
  );
};

export default NavItem;
