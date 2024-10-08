import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import usePageLeaveWarning from "../../utils/usePageLeaveWarning";
import Footer from "../ui/shared/Footer";
import Navbar from "../ui/shared/Navbar";

const MainLayout = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const shouldWarn = cart.length > 0;

  usePageLeaveWarning(shouldWarn);
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default MainLayout;
