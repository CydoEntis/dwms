import { LayoutProps } from "@/types/layout-types";

const Card = ({ className, children }: LayoutProps) => {
  let classes = `${className} bg-white drop-shadow-lg rounded-lg`;
  return <div className={classes}>{children}</div>;
};

export default Card;
