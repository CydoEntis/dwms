import React from "react";
import NavItem from "./NavItem";
import { CgFeed } from "react-icons/cg";
import { MdSettings, MdGolfCourse } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";

type Props = {};

const links = [
  {
    id: 1,
    to: "/feed",
    icon: <CgFeed className="h-20 w-20" />,
    text: "Feed",
  },
  {
    id: 2,
    to: "/matches",
    icon: <MdGolfCourse className="h-20 w-20" />,
    text: "Matches",
  },
  {
    id: 3,
    to: "/messages",
    icon: <FiMessageSquare className="h-20 w-20" />,
    text: "Messages",
  },
  {
    id: 4,
    to: "/settings",
    icon: <MdSettings className="h-20 w-20" />,
    text: "Settings",
  },
];

const NavLinks = (props: Props) => {
  return (
    <ul className="w-fullflex flex-col items-center justify-between border-2 border-orange-400 px-3 py-2">
      {links.map((link) => (
        <NavItem key={link.id} to={link.to} icon={link.icon} text={link.text} />
      ))}
    </ul>
  );
};

export default NavLinks;
