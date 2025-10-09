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
			<div className='flex justify-center items-center h-screen bg-black text-white'>
				Loading...
			</div>
		);
	}

	if (user === null) {
		return <Navigate to='/auth/login' />;
	}

	return (
		<div className='lg:grid lg:grid-cols-6 h-screen bg-[#fff]'>
			{/* Sidebar */}
			<div>
				<DesktopNav />
				<MobileNav />
			</div>

      {/* Main Content */}
      <div className="col-span-5 flex flex-col overflow-y-auto">
        <div className="flex-1 overflow-y-auto xl:overflow-y-clip px-5 max-w-[1400px] mx-auto py-4 w-full text-darkpurple font-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
