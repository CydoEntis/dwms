import React from "react";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  onClick: () => void;
  text: string;
  icon: React.ReactNode;
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      staggerChildren: 0.07,
      delayChildren: 5,
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavAction = ({ className, onClick, text, icon }: Props) => {
  return (
    <motion.button
      variants={variants}
      type="button"
      className={`${className}  flex items-center justify-center font-fredoka text-2xl text-grey-30 transition duration-200 ease-in-out `}
      onClick={onClick}
    >
      {icon}
      {text}
    </motion.button>
  );
};

export default NavAction;
