import NavItem from "./NavItem";
import { CgFeed } from "react-icons/cg";
import { MdSettings, MdGolfCourse } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";

type Props = {};

const variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.3,
    },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const links = [
  {
    id: 1,
    to: "/feed",
    icon: <CgFeed className="h-16 w-16" />,
    text: "Feed",
  },
  {
    id: 2,
    to: "/matches",
    icon: <MdGolfCourse className="h-16 w-16" />,
    text: "Matches",
  },
  {
    id: 3,
    to: "/messages",
    icon: <FiMessageSquare className="h-16 w-16" />,
    text: "Messages",
  },
  {
    id: 4,
    to: "/settings",
    icon: <MdSettings className="h-16 w-16" />,
    text: "Settings",
  },
];

const NavLinks = (props: Props) => {
  return (
    <motion.ul
      variants={variants}
      className="mx-auto flex w-11/12 flex-col items-center justify-between px-3 py-2"
    >
      {links.map((link) => (
        <NavItem key={link.id} to={link.to} icon={link.icon} text={link.text} />
      ))}
    </motion.ul>
  );
};

export default NavLinks;
