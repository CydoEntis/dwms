import React from "react";
import NavLinks from "./NavLinks";

type Props = {};

const MobileNav = (props: Props) => {
  return (
    <nav className="fixed h-screen w-full bg-white">
      <NavLinks />
    </nav>
  );
};

export default MobileNav;
