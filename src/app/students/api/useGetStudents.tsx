import getStudents from "../services/getStudents";
import { useQuery } from "@tanstack/react-query";
import type { Student } from "../../main/students/libs/types";
import type { SuccessResponse } from "@/libs/types/api-response";

interface UseGetStudentsApiReturn {
  studentsResponse: SuccessResponse<Student[]> | undefined;
  isStudentsLoading: boolean;
  studentsError: Error | null;
  isStudentsError: boolean;
}

export default function useGetStudentsApi(): UseGetStudentsApiReturn {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["students", "list"],
    queryFn: getStudents,
  });

  return {
    studentsResponse: data,
    isStudentsLoading: isPending,
    studentsError: error,
    isStudentsError: isError,
  };
}
