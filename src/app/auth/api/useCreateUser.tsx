import type { SuccessResponse } from "@/types/response";
import type { CreateUserPayload, User } from "../libs/types";
import createUser from "../services/createUser";
import { useMutation } from "@tanstack/react-query";

interface UseCreateUserApiProps {
  onSuccess?: (data: SuccessResponse<User>) => void;
  onError?: (error: Error) => void;
}

interface UseCreateUserApiReturn {
  createUser: (data: CreateUserPayload) => void;
  isCreateUserLoading: boolean;
  createUserError: Error | null;
  createUserData: SuccessResponse<User> | undefined;
}

export default function useCreateUserApi({
  onSuccess,
  onError,
}: UseCreateUserApiProps = {}): UseCreateUserApiReturn {
  const { mutate, isPending, error, data } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      onSuccess?.(data);
    },
    onError: (error) => {
      onError?.(error);
    },
  });

  return {
    createUser: mutate,
    isCreateUserLoading: isPending,
    createUserError: error,
    createUserData: data,
  };
}
