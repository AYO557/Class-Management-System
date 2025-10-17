import getStudent from "../services/getStudent";
import { useQuery } from "@tanstack/react-query";
import type { Student } from "../libs/types";
import type { SuccessResponse } from "@/types/response";
import useAuth from "@/app/auth/hooks/useAuth";

interface UseGetStudentApiReturn {
  studentResponse: SuccessResponse<Student> | undefined;
  isStudentLoading: boolean;
  studentError: Error | null;
}

export default function useGetStudentApi({
  studentId,
}: {
  studentId: string;
}): UseGetStudentApiReturn {
  const { userData } = useAuth();
  const { data, isPending, error } = useQuery({
    queryKey: ["students", studentId],
    queryFn: () => getStudent(studentId),
    enabled: !!studentId && !!userData,
  });

  return {
    studentResponse: data,
    isStudentLoading: isPending,
    studentError: error,
  };
}
