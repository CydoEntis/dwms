import NavLinks from "./NavLinks";
import { FaPowerOff } from "react-icons/fa";
import Avatar from "@/components/avatar/Avatar";
import AvatarContainer from "@/components/avatar/AvatarContainer";
import Rating from "@/components/rating/Rating";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
};

const variants = {
  open: { width: "100vw", opacity: 1, x: 0 },
  closed: { width: 0, opacity: 1, x: 1000 },
};

const MobileNav = ({ isOpen }: Props) => {
  console.log(isOpen);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className="fixed z-30 flex h-screen flex-col justify-between bg-cream-50 lg:hidden"
    >
      <div className="mx-auto mt-5 flex w-3/4 flex-col items-center justify-center border-b border-green-50 p-3">
        <AvatarContainer className="h-24 w-24 rounded-full border-4 border-yellow-50">
          <Avatar src="https://randomuser.me/api/portraits/men/8.jpg" />
        </AvatarContainer>

        <Rating rating={224} />
      </div>
      <NavLinks />
      <button
        type="button"
        className="mx-auto mb-5 flex items-center justify-center py-3 font-fredoka text-2xl text-grey-30 transition duration-200 ease-in-out hover:text-red-50"
      >
        <FaPowerOff className="mr-2" />
        Log out
      </button>
    </motion.nav>
  );
};

export default MobileNav;
