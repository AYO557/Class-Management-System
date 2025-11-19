import { lazy } from "react";
import type { RouteObject } from "react-router";

//! layout
import ErrorPage from "@/app/layouts/error";
import { studentRoutes } from "@/app/students/routes/student-routes";
import { instructorRoutes } from "@/app/instructor/routes/instructor-routes";
const NotFoundPage = lazy(() => import("@/app/layouts/not-found"));

//! Main
const MainLayout = lazy(() => import("@/app/layouts/main-layout"));
const DashboardPage = lazy(() => import("@/app/dashboard/pages/dashboard"));

//! Auth
const AuthLayout = lazy(() => import("@/app/layouts/auth-layout"));
const LoginPage = lazy(() => import("@/app/auth/pages/login"));
const ForgotPasswordPage = lazy(
  () => import("@/app/auth/pages/forgot-password")
);

const ResetPasswordPage = lazy(() => import("@/app/auth/pages/reset-password"));

export const routes: RouteObject[] = [
  //! Main
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
        children: studentRoutes,
      },

      {
        path: "instructors",
        children: instructorRoutes,
      },
    ],
  },

  //! Auth
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
        path: "forgot-password",
        Component: ForgotPasswordPage,
      },
      {
        path: "reset-password",
        Component: ResetPasswordPage,
      },
    ],
  },

  //! Not Found
  {
    path: "*",
    Component: NotFoundPage,
  },
];
