import { useNavigate } from "react-router";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/dashboard")}
      className="flex flex-col items-center justify-center h-20 xl:h-32 cursor-pointer"
    >
      <h1 className="text-white xl:text-2xl md:text-lg font-bold">
        <span className="text-red-500">A</span>y Smart
      </h1>
    </div>
  );
}
