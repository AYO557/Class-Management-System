import useAuth from "@/app/auth/hooks/useAuth";
import { LogOut } from "lucide-react";

export default function LogOutButton() {
  const { logUserOut } = useAuth();
  return (
    <div className="flex flex-col items-center justify-center h-20">
      <button
        onClick={logUserOut}
        className="text-white text-lg font-bold flex items-center gap-4 cursor-pointer"
      >
        <LogOut /> Log Out
      </button>
    </div>
  );
}
