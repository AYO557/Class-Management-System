import { menuItems } from "../libs/constants";
import { NavLink } from "react-router";

export default function Menu() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      {menuItems.map((item) => {
        return (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `w-full h-10 flex items-center justify-center gap-4 font-bold ${
                isActive
                  ? "text-white text-lg font-bold"
                  : "text-gray-400 text-lg"
              }`
            }
          >
            <div className="flex items-center gap-4 w-[150px]">
              <item.icon />
              {item.name}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}
