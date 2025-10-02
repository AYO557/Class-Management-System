import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import useAuth from "../auth/hooks/useAuth";
import DesktopNav from "./components/desktop-nav";
import MobileNav from "./components/mobile-nav";

export default function MainLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { logUserIn, logUserOut } = useAuth();
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  //! handle user authorization
  useEffect(() => {
    if (user === null) {
      logUserOut();
    } else {
      logUserIn(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //! handle redirect to dashboard from /
  useEffect(() => {
    if (pathname === "/" && user !== null) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, navigate]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        Loading...
      </div>
    );
  }

  if (user === null) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div className="lg:grid lg:grid-cols-6 h-screen">
      <DesktopNav />
      <MobileNav />

      <div className="col-span-5 lg:h-full h-[93%] overflow-auto lg:min-h-auto bg-lightpurple">
        <div className="h-full lg:px-10 max-w-[1400px] mx-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
