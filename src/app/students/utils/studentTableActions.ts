import type { TableAction } from "@/app/ui/table";
import type { Student } from "../libs/types";

export const getStudentTableActions: (
  navigate: (path: string) => void
) => TableAction<Student>[] = (navigate) => [
  {
    label: "View",
    onClick: (record) => navigate(`/students/${record._id}`),
  },
  {
    label: "Edit",
    onClick: (record) => navigate(`/students/${record._id}/edit`),
  },
];
