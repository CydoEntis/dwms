import React from "react";

type AvatarProps = {
  className?: string;
  src: string;
};

const Avatar = ({ className, src }: AvatarProps) => {
  return (
    <img
      className={`${className} h-full w-full rounded-full`}
      src={src}
      alt=""
    />
  );
};

export default Avatar;
