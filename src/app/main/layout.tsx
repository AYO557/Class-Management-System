import { NavLink, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="flex flex-col gap-10 p-40">
      <menu className="flex justify-center text-center gap-4 text-2xl">
        <li className="hover:underline cursor-pointer">
          <NavLink
            to="/auth/login"
            className={({ isActive }) =>
              `${isActive ? "font-bold text-blue-600" : ""}`
            }
          >
            Login
          </NavLink>
        </li>
        <li className="hover:underline cursor-pointer">
          <NavLink
            to="/auth/register"
            className={({ isActive }) =>
              `${isActive ? "font-bold text-blue-600" : ""}`
            }
          >
            Register
          </NavLink>
        </li>
      </menu>

      <div className="border-4 border-blue-800 p-10">
        <Outlet />
      </div>
    </div>
  );
}
