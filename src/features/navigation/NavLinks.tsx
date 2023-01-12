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
    icon: <CgFeed className="mr-2 h-8 w-8" />,
    text: "Feed",
  },
  {
    id: 2,
    to: "/feed",
    icon: <MdGolfCourse className="mr-2 h-8  w-8" />,
    text: "Games",
  },
  {
    id: 3,
    to: "/messages",
    icon: <FiMessageSquare className="mr-2 h-8  w-8" />,
    text: "Messages",
  },
  {
    id: 4,
    to: "/settings",
    icon: <MdSettings className="mr-2 h-8  w-8" />,
    text: "Settings",
  },
];

const NavLinks = (props: Props) => {
  return (
    <ul className="mx-auto flex flex-col items-center justify-between border-2 border-orange-400 px-3 py-2">
      {links.map((link) => (
        <NavItem key={link.id} to={link.to} icon={link.icon} text={link.text} />
      ))}
    </ul>
  );
};

export default NavLinks;
