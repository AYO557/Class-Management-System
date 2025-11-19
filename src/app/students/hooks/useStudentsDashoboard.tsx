import { useState } from "react";
import useGetStudentsApi from "../api/useGetStudents";
import type { Student } from "../libs/types";

export default function useStudentsDashboard() {
  const [searchStudentsResult, setSearchStudentsResult] = useState<Student[]>();
  const {
    studentsResponse,
    isStudentsLoading,
    studentsError,
    isStudentsError,
  } = useGetStudentsApi();

  const studentsData = studentsResponse?.data || [];

  const handleSearch = (val: string) => {
    if (!val.trim()) {
      setSearchStudentsResult(undefined);
      return;
    }

    const lower = val.toLowerCase();

    const result = studentsData.filter(
      (student) =>
        student.name.toLowerCase().includes(lower) ||
        student.email.toLowerCase().includes(lower)
    );

    setSearchStudentsResult(result);
  };

  const finalTableData = searchStudentsResult ?? studentsData;

  return {
    studentsError,
    isStudentsLoading,
    finalTableData,
    handleSearch,
    isStudentsError,
  };
}
