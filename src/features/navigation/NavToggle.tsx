import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
  isOpen: boolean;
  toggleHandler: () => void;
};

const NavToggle = ({ isOpen, toggleHandler }: Props) => {
  return (
    <div
      className="fixed top-3 right-3 z-40 rounded-full bg-white p-2 text-green-50 drop-shadow-lg transition duration-200 ease-in-out hover:bg-green-50 hover:text-white lg:hidden"
      onClick={toggleHandler}
    >
      {isOpen && <IoCloseSharp className="h-8 w-8" />}
      {!isOpen && <HiBars3BottomRight className="h-8 w-8" />}
    </div>
  );
};

export default NavToggle;
