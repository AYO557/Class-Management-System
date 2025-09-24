import useAuthStore from "@/app/auth/store/authStore";

export default function DashboardPage() {
  const { user } = useAuthStore();
  const username = `${user?.first_name} ${user?.last_name}`;
  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Welcome back {username}</h2>
    </div>
  );
}
