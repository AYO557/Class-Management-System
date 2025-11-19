import useAuth from "@/app/auth/hooks/useAuth";
import { LogOut } from "lucide-react";

export default function LogOutButton() {
  const { logUserOut } = useAuth();
  return (
    <div className="flex flex-col items-center justify-center h-10 xl:h-20">
      <button
        onClick={logUserOut}
        className="text-white lg:text-lg md:text-base lg:font-bold md:font-medium flex items-center gap-4 cursor-pointer"
      >
        <LogOut /> Log Out
      </button>
    </div>
  );
}
