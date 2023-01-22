type AvatarProps = {
  className?: string;
  src: string;
};

const Avatar = ({ className, src }: AvatarProps) => {
  return <img className={`${className} rounded-full`} src={src} alt="" />;
};

export default Avatar;
