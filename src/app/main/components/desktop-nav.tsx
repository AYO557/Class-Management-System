import Logo from "./logo";
import LogOutButton from "./logout-button";
import Menu from "./menu";

export default function DesktopNav() {
  return (
    <div className="col-span-1 h-full bg-darkpurple lg:flex hidden flex-col justify-between py-4">
      <div className="xl:h-[50%] flex flex-col justify-between">
        <Logo />

        <Menu />
      </div>

      <LogOutButton />
    </div>
  );
}
