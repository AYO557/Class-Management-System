import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Toaster } from "sonner";
import "./auth.css";

export default function AuthLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/auth" || pathname === "/auth/") {
      navigate("/auth/login");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className="lg:h-screen min-h-screen flex justify-center items-center bg-darkpurple p-4">
      <div className="h-full w-1/2 rounded-2xl bg-lightpurple lg:inline-block hidden"></div>

      <div className="h-full lg:w-1/2 flex justify-center items-center">
        <main className="w-[90%] sm:min-w-[400px] max-w-[500px] text-white lg:max-h-screen overflow-y-auto lg:py-5 lg:px-1 px-2 custom-overflow">
          <Outlet />
        </main>

        <Toaster position="top-right" />
      </div>
    </div>
  );
}
