import useAuth from "@/app/auth/hooks/useAuth";

export default function DashboardPage() {
  const { userData } = useAuth();
  return (
    <div>
      <h1>
        Welcome, {`${userData?.user.first_name} ${userData?.user.last_name}`}
      </h1>
    </div>
  );
}
