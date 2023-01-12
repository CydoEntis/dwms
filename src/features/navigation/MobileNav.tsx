import React from "react";
import NavLinks from "./NavLinks";
import { FaPowerOff } from "react-icons/fa";
import Avatar from "@/components/avatar/Avatar";

type Props = {};

const MobileNav = (props: Props) => {
  return (
    <nav className="fixed z-40 flex h-screen w-full flex-col justify-between bg-cream-50">
      <div className="mx-auto mt-5 flex w-3/4 flex-col items-center justify-center border-b border-green-50 p-3">
        <Avatar
          className="h-20 w-20 rounded-full"
          src="https://randomuser.me/api/portraits/men/8.jpg"
        />
        <div className="mt-2 flex flex-col items-center justify-center">
          <p className="font-fredoka text-xs text-grey-50">Rating</p>
          <h4 className="-m-2 font-fredoka  text-[2rem] text-grey-50">224</h4>
        </div>
      </div>
      <NavLinks />
      <button
        type="button"
        className="mx-auto mb-5 flex items-center justify-center py-3 font-fredoka text-2xl text-grey-50 transition duration-200 ease-in-out hover:text-green-50"
      >
        <FaPowerOff className="mr-2" />
        Log out
      </button>
    </nav>
  );
};

export default MobileNav;
