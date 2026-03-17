import { Outlet, useLocation } from "react-router-dom";

import Footer from "./footer";
import Navbar from "./navbar";
import { Toaster } from "@/components/ui/sonner"

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  // Define routes where Navbar and Footer should be hidden
  const hideChromeRoutes = [
    '/login',
    '/register',
    '/user-login',
    '/user-register',
    '/captain-login',
    '/captain-register'
  ];

  // Check if current path exact matches or starts with auth routes
  const shouldHideChrome = hideChromeRoutes.some(route => path.startsWith(route));

  return (
    <>
      {!shouldHideChrome && <Navbar />}
      <main>
        <Outlet />
        <Toaster />
      </main>
      {!shouldHideChrome && <Footer />}
    </>
  );
};

export default Layout;
