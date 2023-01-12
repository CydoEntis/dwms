import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  icon: React.ReactNode;
  text: string;
};

const NavItem = ({ to, icon, text }: Props) => {
  return (
    <li className="relative mb-3 flex h-20 w-full items-center justify-center overflow-hidden rounded-md drop-shadow-xl">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "relative flex h-full w-full items-center justify-center bg-green-50 py-1.5 text-sm text-white"
            : "relative flex h-full w-full items-center justify-center bg-off-white py-1.5 text-sm text-grey-50 opacity-80"
        }
      >
        <div className="relative flex w-full items-center justify-center ">
          <div className="absolute -top-6 -left-0 h-32 w-32  rotate-12 opacity-70">
            {icon}
          </div>
          <h4 className="ml-20 w-1/2  text-[2.5rem]">{text}</h4>
        </div>
      </NavLink>
    </li>
  );
};

export default NavItem;
