import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-5xl min-h-screen flex items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
