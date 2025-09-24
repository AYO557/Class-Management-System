import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import useAuth from "../auth/hooks/useAuth";
import Logo from "./components/logo";
import Menu from "./components/menu";
import LogOutButton from "./components/logout-button";

export default function MainLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { logUserIn, logUserOut } = useAuth();
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  useEffect(() => {
    if (!user) {
      logUserOut();
    } else {
      logUserIn(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handle redirect to dashboard from /
  useEffect(() => {
    if (pathname === "/") {
      navigate("/dashboard");
    }
  }, [pathname, navigate]);

  if (!user) return null;

  return (
    <div className="grid grid-cols-6 h-screen bg-blue-400">
      <div className="col-span-1 h-full bg-darkpurple flex flex-col justify-between">
        <div className="h-[50%] flex flex-col justify-between">
          <Logo />

          <Menu />
        </div>

        <LogOutButton />
      </div>

      <div className="col-span-5 h-full bg-lightpurple">
        <Outlet />
      </div>
    </div>
  );
}
