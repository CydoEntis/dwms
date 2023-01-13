import React from "react";
import NavLinks from "./NavLinks";
import Foresome from "@/assets/logo.png";
import NavAction from "./NavAction";
import { FaPowerOff } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed hidden h-screen flex-col justify-between   bg-white lg:flex lg:w-80">
      <div>
        <img src={Foresome} alt="" className="mb-5 p-5" />
        <NavLinks />
      </div>
      <NavAction
        className="mx-auto mb-5 py-3 hover:text-red-50"
        onClick={() => console.log("Log out")}
        text="Log out"
        icon={<FaPowerOff className="mr-2" />}
      />
    </nav>
  );
};

export default Navbar;
