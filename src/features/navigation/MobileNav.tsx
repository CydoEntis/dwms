import React from "react";
import NavLinks from "./NavLinks";
import { AiOutlinePoweroff } from "react-icons/ai";

type Props = {};

const MobileNav = (props: Props) => {
  return (
    <nav className="fixed z-40 flex h-screen w-full flex-col justify-between bg-white">
      <NavLinks />
      <button
        type="button"
        className="mx-auto flex items-center justify-center py-3 text-2xl text-grey-50 transition duration-200 ease-in-out hover:text-green-50"
      >
        <AiOutlinePoweroff className="mr-2" />
        Logout
      </button>
    </nav>
  );
};

export default MobileNav;
