import getStudents from "../services/getStudents";
import { useQuery } from "@tanstack/react-query";
import type { Student } from "../libs/types";
import type { SuccessResponse } from "@/types/response";

interface UseGetStudentsApiReturn {
  studentsResponse: SuccessResponse<Student[]> | undefined;
  isStudentsLoading: boolean;
  studentsError: Error | null;
}

export default function useGetStudentsApi(): UseGetStudentsApiReturn {
  const { data, isPending, error } = useQuery({
    queryKey: ["students", "list"],
    queryFn: getStudents,
  });

  return {
    studentsResponse: data,
    isStudentsLoading: isPending,
    studentsError: error,
  };
}
