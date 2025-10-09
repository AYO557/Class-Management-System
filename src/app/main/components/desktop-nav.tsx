import Logo from "./logo";
import LogOutButton from "./logout-button";
import Menu from "./menu";

export default function DesktopNav() {
  return (
    //! Added sticky to the side bar to prevent it from scrolling with the rest of the page
    <div className="col-span-1 h-screen sticky top-0 bg-darkpurple lg:flex hidden flex-col justify-between py-4">
      <div className="xl:h-[50%] flex flex-col justify-between">
        <Logo />

        <Menu />
      </div>

      <LogOutButton />
    </div>
  );
}
