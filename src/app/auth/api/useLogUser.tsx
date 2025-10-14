import loginUser from "../services/loginUser";
import { useMutation } from "@tanstack/react-query";
import type { LoginForm } from "../libs/types";
import type { SuccessResponse } from "@/types/response";
import type { User } from "../libs/types";

interface UseLogUserApiProps {
  onSuccess?: (data: SuccessResponse<User>) => void;
  onError?: (error: Error) => void;
}

interface UseLogUserApiReturn {
  logUser: (data: LoginForm) => void;
  isLogUserLoading: boolean;
  logUserError: Error | null;
  logUserData: SuccessResponse<User> | undefined;
}

export default function useLogUserApi({
  onSuccess,
  onError,
}: UseLogUserApiProps = {}): UseLogUserApiReturn {
  const { mutate, isPending, error, data } = useMutation({
    mutationFn: loginUser,
    onSuccess,
    onError,
  });

  return {
    logUser: mutate,
    isLogUserLoading: isPending,
    logUserError: error,
    logUserData: data,
  };
}
