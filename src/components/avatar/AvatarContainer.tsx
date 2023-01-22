import { FaCrown } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  iconClasses?: string;
  children: React.ReactNode;
  rating: number;
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

const AvatarContainer = ({
  className,
  iconClasses,
  children,
  rating,
}: Props) => {
  let ratingClass = "";
  if (rating >= 200) {
    ratingClass = "text-yellow-50";
  }
  return (
    <motion.div variants={variants} className={`${className} relative`}>
      <FaCrown
        className={`absolute ${iconClasses} -rotate-45 ${ratingClass}`}
      />
      {children}
    </motion.div>
  );
};

export default AvatarContainer;
