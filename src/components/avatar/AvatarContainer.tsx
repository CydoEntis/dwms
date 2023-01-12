import React from "react";
import { FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  children: React.ReactNode;
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

const AvatarContainer = ({ className, children }: Props) => {
  return (
    <motion.div variants={variants} className={`${className} relative`}>
      <FaCrown className="absolute -top-6 -left-6 h-10 w-10 -rotate-45 text-yellow-50" />
      {children}
    </motion.div>
  );
};

export default AvatarContainer;
