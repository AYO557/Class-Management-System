import useAuthStore from "../store/authStore";
import type { UserData } from "../libs/types";
import { useNavigate } from "react-router";

export default function useAuth() {
  const navigate = useNavigate();
  const { userData, setUserData } = useAuthStore();

  const logUserIn = (user: UserData) => {
    setUserData(user);
  };

  const logUserOut = () => {
    setUserData(null);
    navigate("/auth/login");
  };

  return {
    userData,
    setUserData,
    logUserIn,
    logUserOut,
  };
}
