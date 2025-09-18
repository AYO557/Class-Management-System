import type { LoginForm, User } from "../libs/types";
import useGetUsersApi from "./useGetUsers";
import useToastMessage from "@/hooks/useToastMessage";

export default function useLoginUserApi() {
  const { getExistUsers } = useGetUsersApi();
  const { toastError, toastSuccess } = useToastMessage();

  const loginUser = async (data: LoginForm) => {
    try {
      const users = await getExistUsers();
      const user = users.find((user: User) => user.email === data.email);

      if (!user) {
        toastError("User not found");
        return;
      }

      if (user.password !== data.password) {
        toastError("Invalid password");
        return;
      }

      toastSuccess("Login successful");

      return user;
    } catch (error: Error | unknown) {
      toastError((error as Error)?.message || "Something went wrong");
      console.log(error);
    }
  };

  return {
    loginUser,
  };
}
