import Avatar from "@/components/avatar/Avatar";
import AvatarContainer from "@/components/avatar/AvatarContainer";
import { FaPowerOff } from "react-icons/fa";
import NavAction from "./NavAction";
import NavLinks from "./NavLinks";
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
      <motion.div className="mx-auto mt-5 flex w-3/4 flex-col items-center justify-center border-b border-green-50 p-3">
        <AvatarContainer
          rating={200}
          iconClasses="h-10 w-10 -top-6 -left-6"
          className="h-24 w-24 rounded-full border-4 border-yellow-50"
        >
          <Avatar
            className="h-full w-full"
            src="https://randomuser.me/api/portraits/men/8.jpg"
          />
        </AvatarContainer>

        <Rating rating={224} />
      </motion.div>
      <NavLinks />
      <NavAction
        className="mx-auto mb-5 py-3 hover:text-red-50"
        onClick={() => console.log("Log out")}
        text="Log out"
        icon={<FaPowerOff className="mr-2" />}
      />
    </motion.nav>
  );
};

export default MobileNav;
