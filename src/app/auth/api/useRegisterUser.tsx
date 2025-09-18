import type { RegisterForm } from "../libs/types";
import useAddUserApi from "./useAddUser";
import useGetUsersApi from "./useGetUsers";
import useToastMessage from "@/hooks/useToastMessage";

export default function useRegisterUserApi() {
  const { toastError, toastSuccess } = useToastMessage();

  const { getExistUsers } = useGetUsersApi({
    onError: (error) => {
      toastError(error.message || "Something went wrong");
    },
  });

  const { addUser } = useAddUserApi({
    onError: (error) => {
      toastError(error.message || "Something went wrong");
    },
  });

  const signUserUp = async (data: RegisterForm) => {
    const existUsers = await getExistUsers();
    const isUserExist = existUsers.find((user) => user.email === data.email);

    if (isUserExist) {
      toastError("User already exists");
      return;
    }

    //! create user
    try {
      await addUser(data);

      toastSuccess("User created successfully");
    } catch (error) {
      toastError("Something went wrong");
      console.error(error);
    }
  };

  return {
    signUserUp,
  };
}
