import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type Props = {
  to: string;
  icon: React.ReactNode;
  text: string;
};

const NavItem = ({ to, icon, text }: Props) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative mb-3 flex h-16  w-full items-center justify-center overflow-hidden rounded-md drop-shadow-xl"
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "relative flex h-full w-full scale-110 transform items-center justify-center bg-green-70 py-1.5 text-sm text-white"
            : "relative flex h-full w-full items-center justify-center bg-green-90 py-1.5 text-sm text-white opacity-90 transition duration-200 ease-in-out hover:bg-green-80 hover:text-white"
        }
      >
        <div className="relative flex w-full items-center justify-center ">
          <div className="absolute -top-2 -left-0 h-32 w-32  rotate-12 opacity-60">
            {icon}
          </div>
          <h4 className="ml-20 w-1/2 font-fredoka text-2xl">{text}</h4>
        </div>
      </NavLink>
    </motion.li>
  );
};

export default NavItem;
