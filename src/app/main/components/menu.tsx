import { menuItems } from "../libs/constants";
import { NavLink } from "react-router";

interface MenuProps {
  onMenuChange?: (menu: string) => void;
}

export default function Menu({ onMenuChange }: MenuProps) {
  return (
    <div className="flex flex-col items-center justify-center lg:h-full xl:py-0 py-10 xl:px-0 px-5 gap-4">
      {menuItems.map((item) => {
        return (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => onMenuChange?.(item.name)}
            className={({ isActive }) =>
              `w-full h-10 flex items-center xl:justify-center lg:justify-start gap-4 md:font-medium font-bold ${
                isActive
                  ? "text-white xl:text-lg md:text-sm font-bold"
                  : "text-gray-400 xl:text-lg md:text-sm"
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
