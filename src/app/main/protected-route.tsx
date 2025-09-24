import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  useEffect(() => {
    if (!user) {
      navigate("/auth/login", { replace: true });
    }
    console.log("user", user);
  }, [user]);

  if (!user) return null;
  return <>{children}</>;
}
