
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const Main = () => {
  const location = useLocation();
  const noHeader =
    location.pathname.includes("/Footer") ||
    location.pathname.includes("/Header");
  return (
    <div>
      {noHeader || <Header />}
      <Outlet />
      {noHeader || <Footer />}
    </div>
  );
};
export default Main;