import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy } from "react";
import ErrorPage from "@/app/pages/error";

//! layout
const MainLayout = lazy(() => import("@/app/main/layout"));
const AuthLayout = lazy(() => import("@/app/auth/layout"));

//! Auth
const LoginPage = lazy(() => import("@/app/auth/pages/login"));
const RegisterPage = lazy(() => import("@/app/auth/pages/register"));
const ForgotPasswordPage = lazy(
  () => import("@/app/auth/pages/forgot-password")
);
const ResetPasswordPage = lazy(() => import("@/app/auth/pages/reset-password"));

//! Main
const DashboardPage = lazy(
  () => import("@/app/main/dashboard/pages/dashboard")
);
const StudentsDashboardPage = lazy(
  () => import("@/app/main/students/pages/students-dashboard")
);
const StudentPage = lazy(() => import("@/app/main/students/pages/student"));
const CreateStudentPage = lazy(
  () => import("@/app/main/students/pages/create-student")
);
const EditStudentPage = lazy(
  () => import("@/app/main/students/pages/edit-student")
);
const ClassesPage = lazy(() => import("@/app/main/class/pages/classes"));

const NotFoundPage = lazy(() => import("@/app/pages/not-found"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        Component: DashboardPage,
      },
      {
        path: "settings",
        Component: () => <div>Settings</div>,
      },
      {
        path: "profile",
        Component: () => <div>Profile</div>,
      },
      {
        path: "students",
        children: [
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
        ],
      },
      {
        path: "teachers",
        Component: () => <div>Teachers</div>,
      },
      {
        path: "classes",
        Component: ClassesPage,
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
      {
        path: "forgot-password",
        Component: ForgotPasswordPage,
      },
      {
        path: "reset-password",
        Component: ResetPasswordPage,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

export default function RoutesConfig() {
  return <RouterProvider router={router} />;
}
