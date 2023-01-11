import Navbar from "@/features/navigation/Navbar";
import { Outlet } from "react-router-dom";

type Props = {
  className?: string;
};

const RootLayout = ({ className }: Props) => {
  return (
    <div className={className}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
