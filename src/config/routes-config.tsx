import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

export default function RoutesConfig() {
  return <RouterProvider router={router} />;
}
