import type { RegisterForm, User } from "../libs/types";
import useAddUserApi from "./useAddUser";
import useGetUsersApi from "./useGetUsers";
import useToastMessage from "@/hooks/useToastMessage";

interface UseRegisterUserApiProps {
  onSuccess?: (user: User) => void;
  onError?: (error: Error) => void;
}

export default function useRegisterUserApi({
  onSuccess,
  onError,
}: UseRegisterUserApiProps = {}) {
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
      const user = await addUser(data);

      toastSuccess("User created successfully");
      onSuccess?.(user as User);
    } catch (error) {
      toastError("Something went wrong");
      onError?.(error as Error);
      console.error(error);
    }
  };

  return {
    signUserUp,
  };
}
