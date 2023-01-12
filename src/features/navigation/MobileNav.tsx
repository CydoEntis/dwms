import React from "react";
import NavLinks from "./NavLinks";
import { FaPowerOff } from "react-icons/fa";
import Avatar from "@/components/avatar/Avatar";
import AvatarContainer from "@/components/avatar/AvatarContainer";
import Rating from "@/components/rating/Rating";

type Props = {};

const MobileNav = (props: Props) => {
  return (
    <nav className="fixed z-40 flex h-screen w-full flex-col justify-between bg-cream-50">
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
    </nav>
  );
};

export default MobileNav;
