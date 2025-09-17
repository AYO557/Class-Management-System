import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../app/main/layout";
import AuthLayout from "../app/auth/layout";
import NotFoundPage from "../app/pages/not-found";
import LoginPage from "../app/auth/pages/login";
import RegisterPage from "../app/auth/pages/register";
import ForgotPasswordPage from "../app/auth/pages/forgot-password";
import ResetPasswordPage from "../app/auth/pages/reset-password";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "dashboard",
        Component: () => <div>Dashboard</div>,
      },
      {
        path: "settings",
        Component: () => <div>Settings</div>,
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
