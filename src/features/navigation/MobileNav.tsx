import React from "react";
import NavLinks from "./NavLinks";

type Props = {};

const MobileNav = (props: Props) => {
  return (
    <nav className="fixed bottom-0  w-full bg-green-50">
      <NavLinks />
    </nav>
  );
};

export default MobileNav;
