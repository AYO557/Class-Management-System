import createStudent from "../services/createStudent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { BaseStudent } from "../libs/types";
import type { SuccessResponse } from "@/types/response";

interface UseCreateStudentApiReturn {
  createStudent: (data: BaseStudent) => void;
  isCreateStudentLoading: boolean;
  createStudentError: Error | null;
  createStudentData: SuccessResponse<BaseStudent> | undefined;
}

interface UseCreateStudentApiProps {
  onSuccess?: (data: SuccessResponse<BaseStudent>) => void;
  onError?: (error: Error) => void;
}

export default function useCreateStudentApi({
  onSuccess,
  onError,
}: UseCreateStudentApiProps = {}): UseCreateStudentApiReturn {
  const queryClient = useQueryClient();

  const { mutate, isPending, error, data } = useMutation({
    mutationFn: createStudent,
    onSuccess: (data) => {
      onSuccess?.(data);
      queryClient.invalidateQueries({
        queryKey: ["students", "list"],
      });
    },
    onError: (error) => {
      onError?.(error);
    },
  });

  return {
    createStudent: mutate,
    isCreateStudentLoading: isPending,
    createStudentError: error,
    createStudentData: data,
  };
}
