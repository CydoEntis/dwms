import React from "react";

type AvatarProps = {
  className?: string;
  src: string;
};

const Avatar = ({ className, src }: AvatarProps) => {
  return <img className={className} src={src} alt="" />;
};

export default Avatar;
