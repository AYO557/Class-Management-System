import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy } from "react";
// import MainLayout from "../app/main/layout";
// import AuthLayout from "../app/auth/layout";
// import NotFoundPage from "../app/pages/not-found";
// import LoginPage from "../app/auth/pages/login";
// import RegisterPage from "../app/auth/pages/register";
// import ForgotPasswordPage from "../app/auth/pages/forgot-password";
// import ResetPasswordPage from "../app/auth/pages/reset-password";

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
const DashboardPage = lazy(() => import("@/app/main/pages/dashboard"));

const NotFoundPage = lazy(() => import("@/app/pages/not-found"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
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
        Component: () => <div>Students</div>,
      },
      {
        path: "teachers",
        Component: () => <div>Teachers</div>,
      },
      {
        path: "classes",
        Component: () => <div>Classes</div>,
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
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
