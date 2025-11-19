import { lazy } from "react";
import type { RouteObject } from "react-router";

const StudentsDashboardPage = lazy(
  () => import("@/app/students/pages/students-dashboard")
);
const StudentPage = lazy(() => import("@/app/students/pages/student"));
const CreateStudentPage = lazy(
  () => import("@/app/students/pages/create-student")
);
const EditStudentPage = lazy(() => import("@/app/students/pages/edit-student"));

export const studentRoutes: RouteObject[] = [
  {
    path: "",
    Component: StudentsDashboardPage,
  },
  {
    path: "create",
    Component: CreateStudentPage,
  },
  {
    path: ":studentId",
    Component: StudentPage,
  },
  {
    path: ":studentId/edit",
    Component: EditStudentPage,
  },
];
