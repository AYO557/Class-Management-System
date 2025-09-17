import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Toaster } from "sonner";

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
    <div className="h-screen flex bg-darkpurple p-4">
      <div className="h-full w-1/2 rounded-2xl bg-lightpurple"></div>

      <div className="h-full w-1/2 flex justify-center items-center">
        <main className="w-[80%] max-w-[550px] text-white">
          <Outlet />
        </main>

        <Toaster position="top-right" />
      </div>
    </div>
  );
}
