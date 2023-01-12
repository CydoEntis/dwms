import { MdSportsGolf } from "react-icons/md";

type Props = {
  rating: number;
};

const Rating = ({ rating }: Props) => {
  return (
    <div className="mt-2 flex items-center justify-center px-2 text-green-50">
      <MdSportsGolf className="mr-1 h-7 w-7 " />
      <h4 className=" font-fredoka  text-2xl ">{rating}</h4>
    </div>
  );
};

export default Rating;
