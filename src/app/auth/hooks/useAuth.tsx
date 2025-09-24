import useAuthStore from "../store/authStore";
import type { User } from "../libs/types";
import { useNavigate } from "react-router";

export default function useAuth() {
  const navigate = useNavigate();
  const { user, setUser } = useAuthStore();

  const logUserIn = (user: User) => {
    setUser(user);
  };

  const logUserOut = () => {
    setUser(null);
    navigate("/auth/login");
  };

  return {
    user,
    setUser,
    logUserIn,
    logUserOut,
  };
}
