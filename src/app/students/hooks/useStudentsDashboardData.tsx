import type { CustomTableProps } from "@/app/ui/table";
import type { Student } from "../libs/types";
import { studentsTableColumns } from "../libs/constants";
import useStudentsDashboard from "./useStudentsDashoboard";
import { getStudentTableActions } from "../utils/studentTableActions";
import type { CustomErrorProps } from "@/components/ui/error";
import type { PageHeaderProps } from "@/app/ui/page-header";
import { mockStudentStats } from "../libs/mock";
import AddStudentButton from "../components/add-student-button";
import useRouting from "@/hooks/useRouting";

type UseStudentsDashboardDataReturn = {
  tableData: CustomTableProps<Student>;
  customErrorData: CustomErrorProps;
  pageHeaderData: PageHeaderProps;
  showLoader: boolean;
  showError: boolean;
  mockStudentStats: { title: string; value: number }[];
};

export default function useStudentsDashboardData(): UseStudentsDashboardDataReturn {
  const { goTo } = useRouting();
  const {
    finalTableData,
    handleSearch,
    isStudentsLoading,
    isStudentsError,
    studentsError,
  } = useStudentsDashboard();

  return {
    tableData: {
      columns: studentsTableColumns,
      data: finalTableData,
      actions: getStudentTableActions(goTo),
      showSearch: true,
      searchPlaceholder: "search student...",
      showPagination: true,
      pageSize: 10,
      selectable: true,
      onSearch: handleSearch,
    },

    customErrorData: {
      dataName: "students",
      msg: studentsError?.message,
    },

    pageHeaderData: {
      title: "Students",
      desc: "Manage your students",
      endContent: <AddStudentButton />,
    },

    showLoader: isStudentsLoading,
    showError: isStudentsError,
    mockStudentStats,
  };
}
