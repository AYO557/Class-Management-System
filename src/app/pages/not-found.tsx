import { NavLink } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      Not Found{" "}
      <NavLink to="/" className="text-blue-500">
        Go back home
      </NavLink>
    </div>
  );
}
