import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router";

export default function ErrorPage() {
  return (
    <div className="h-screen flex justify-center items-center bg-darkpurple text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p className="text-lg text-red-200">Something went wrong.</p>
        <NavLink
          to="/dashboard"
          className="text-blue-500 hover:underline flex items-center h-8 gap-2 hover:gap-4 transition-all duration-250 hover:h-10 hover:items-baseline"
        >
          <ArrowLeft /> <p>Go back to dashboard</p>
        </NavLink>
      </div>
    </div>
  );
}
