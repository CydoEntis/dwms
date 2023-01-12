import React from "react";
import { FaCrown } from "react-icons/fa";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const AvatarContainer = ({ className, children }: Props) => {
  return (
    <div className={`${className} relative`}>
      <FaCrown className="absolute -top-6 -left-6 h-10 w-10 -rotate-45 text-yellow-50" />
      {children}
    </div>
  );
};

export default AvatarContainer;
