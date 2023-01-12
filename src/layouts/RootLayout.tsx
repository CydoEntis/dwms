import MobileNav from "@/features/navigation/MobileNav";
import Navbar from "@/features/navigation/Navbar";
import NavToggle from "@/features/navigation/NavToggle";
import { useState } from "react";
import { Outlet } from "react-router-dom";

type Props = {
  className?: string;
};

const RootLayout = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={className}>
      {/* <Navbar /> */}
      {isOpen && <MobileNav />}
      <NavToggle toggleHandler={toggleHandler} isOpen={isOpen} />
      <Outlet />
    </div>
  );
};

export default RootLayout;
