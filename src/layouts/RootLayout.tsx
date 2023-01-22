import MobileNav from "@/features/navigation/MobileNav";
import Navbar from "@/features/navigation/Navbar";
import NavToggle from "@/features/navigation/NavToggle";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const RootLayout = () => {
  //Checking the location to hide the navigation bar
  const location = useLocation()

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hideNav, setHideNav] = useState<boolean>(false);

  const toggleHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
      <div className="relative flex h-screen w-screen flex-col bg-white">
        <Navbar />
        <MobileNav isOpen={isOpen} />
        <NavToggle toggleHandler={toggleHandler} isOpen={isOpen} />
        <div className=" bg-cream-50 lg:ml-80 lg:h-screen lg:overflow-hidden">
          <Outlet />
        </div>
      </div>
  );
};

export default RootLayout;
