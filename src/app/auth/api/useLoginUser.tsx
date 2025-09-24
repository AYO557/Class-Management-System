import type { LoginForm, User } from "../libs/types";
import useGetUsersApi from "./useGetUsers";
import useToastMessage from "@/hooks/useToastMessage";
import { useNavigate } from "react-router";

interface UseLoginUserApiProps {
  setIsLoading?: (value: boolean) => void;
}

export default function useLoginUserApi({
  setIsLoading,
}: UseLoginUserApiProps = {}) {
  const navigate = useNavigate();
  const { getExistUsers } = useGetUsersApi();
  const { toastError, toastSuccess } = useToastMessage();

  const loginUser = async (data: LoginForm) => {
    setIsLoading?.(true);
    try {
      const users = await getExistUsers();
      const user = users.find((user: User) => user.email === data.email);

      if (!user) {
        toastError("User not found");
        setIsLoading?.(false);
        return;
      }

      if (user.password !== data.password) {
        toastError("Invalid password");
        setIsLoading?.(false);
        return;
      }

      toastSuccess("Login successful");
      navigate("/");
      setIsLoading?.(false);

      return user;
    } catch (error: Error | unknown) {
      toastError((error as Error)?.message || "Something went wrong");
      console.log(error);
      setIsLoading?.(false);
    }
  };

  return {
    loginUser,
  };
}
