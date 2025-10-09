import { Menu, X } from "lucide-react";
import Logo from "./logo";
import { useState } from "react";
import NavMenu from "./menu";
import LogOutButton from "./logout-button";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="lg:hidden relative h-[7%] max-h-[65px] bg-darkgraypurple text-white">
      <div className="flex justify-between h-full items-center px-4">
        <Logo />

        <div>
          <X
            onClick={() => setIsOpen(!isOpen)}
            className={`cursor-pointer transition-all duration-300 w-6 ${
              isOpen ? "h-6" : "h-0"
            }`}
          />
          <Menu
            onClick={() => setIsOpen(!isOpen)}
            className={`cursor-pointer transition-all w-6 duration-300 ${
              !isOpen ? "h-6" : "h-0"
            }`}
          />
        </div>

        <nav
          className={`absolute top-full z-50 left-0 w-[100vw] bg-darkgraypurple transition-all duration-300 flex flex-col justify-between ${
            isOpen ? "h-[90vh]" : "h-0"
          } overflow-hidden`}
        >
          <NavMenu onMenuChange={() => setIsOpen(!isOpen)} />

          <LogOutButton />
        </nav>
      </div>
    </div>
  );
}
