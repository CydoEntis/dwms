import React from "react";
import { NavLink } from "react-router-dom";
import { CgFeed } from "react-icons/cg";

type Props = {};

const NavItem = (props: Props) => {
  return (
    <li>
      <NavLink to="/feed">
        <CgFeed />
        <h4>Feed</h4>
      </NavLink>
    </li>
  );
};

export default NavItem;
