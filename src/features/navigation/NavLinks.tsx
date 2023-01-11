import React from "react";
import NavItem from "./NavItem";
import { CgFeed } from "react-icons/cg";

type Props = {};

const links = [
  {
    id: 1,
    to: "/feed",
    icon: <CgFeed />,
    text: "Feed",
  },
];

const NavLinks = (props: Props) => {
  return (
    <ul>
      {links.map((link) => (
        <NavItem key={link.id} to={link.to} icon={link.icon} text={link.text} />
      ))}
    </ul>
  );
};

export default NavLinks;
