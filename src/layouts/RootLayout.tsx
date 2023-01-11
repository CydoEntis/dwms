import MobileNav from "@/features/navigation/MobileNav";
import Navbar from "@/features/navigation/Navbar";
import { Outlet } from "react-router-dom";

type Props = {
  className?: string;
};

const RootLayout = ({ className }: Props) => {
  return (
    <div className={className}>
      {/* <Navbar /> */}
      <MobileNav />
      <Outlet />
    </div>
  );
};

export default RootLayout;
