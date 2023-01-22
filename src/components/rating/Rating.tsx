import { MdSportsGolf } from "react-icons/md";

type Props = {
  className?: string;
  iconClasses?: string;
  textClasses?: string;
  rating: number;
};

const Rating = ({ className, iconClasses, textClasses, rating }: Props) => {
  return (
    <div
      className={`${className} mt-2 flex items-center justify-center px-2 text-green-50`}
    >
      <MdSportsGolf className={iconClasses} />
      <h4 className={textClasses}>{rating}</h4>
    </div>
  );
};

export default Rating;
