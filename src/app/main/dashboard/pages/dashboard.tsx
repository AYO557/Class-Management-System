import useAuth from "@/app/auth/hooks/useAuth";

export default function DashboardPage() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Welcome, {user?.first_name}</h1>
    </div>
  );
}
