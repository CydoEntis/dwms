import React from "react";
import NavLinks from "./NavLinks";
import { AiOutlinePoweroff } from "react-icons/ai";

type Props = {};

const MobileNav = (props: Props) => {
  return (
    <nav className="fixed z-40 flex h-screen w-full flex-col justify-between bg-white">
      <div className="mt-5 flex flex-col items-center justify-center p-3">
        <img
          className="h-20 w-20 rounded-full"
          src="https://randomuser.me/api/portraits/men/8.jpg"
          alt=""
        />
        <p className="text-grey-50">Rating: 224</p>
      </div>
      <NavLinks />
      <button
        type="button"
        className="mx-auto mb-5 flex items-center justify-center py-3 text-2xl text-grey-50 transition duration-200 ease-in-out hover:text-green-50"
      >
        <AiOutlinePoweroff className="mr-2" />
        Logout
      </button>
    </nav>
  );
};

export default MobileNav;
