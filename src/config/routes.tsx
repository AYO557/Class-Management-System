import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy } from "react";

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
const StudentsPage = lazy(() => import("@/app/main/students/pages/students"));
const CreateStudentPage = lazy(
	() => import("@/app/main/students/pages/create-student")
);
const ClassesPage = lazy(() => import("@/app/main/class/pages/classes"));
const InstructorsPage = lazy(
	() => import("@/app/main/instructors/pages/instructors")
);
const CreateInstructorsPage = lazy(() => import("@/app/main/instructors/pages/create-instructors"))

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
				children: [
					{
						path: "",
						Component: StudentsPage,
					},
					{
						path: "create",
						Component: CreateStudentPage,
					},
				],
			},
			{
				path: "instructors",
				children: [
					{
						path: "",
						Component: InstructorsPage
					},
					{
						path: "create",
						Component: CreateInstructorsPage
					}
				]
				
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
