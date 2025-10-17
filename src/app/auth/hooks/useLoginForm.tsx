import { useState } from "react";
import type { LoginForm } from "../libs/types";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router";
import useLogUserApi from "../api/useLogUser";
import useToastMessage from "@/hooks/useToastMessage";

export default function useLoginForm() {
  const navigate = useNavigate();
  const { toastError, toastSuccess } = useToastMessage();
  const { setUserData } = useAuthStore();
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const { logUser, isLogUserLoading, logUserError } = useLogUserApi({
    onSuccess: (res) => {
      setUserData({
        token: res.data.token,
        user: res.data.user,
      });
      localStorage.setItem("user", JSON.stringify(res.data));

      toastSuccess("Login successful");
      navigate("/dashboard");
    },
    onError: (error) => {
      toastError(error.message || "Sorry, Something went wrong.");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    logUser(formData);
  };

  return {
    formData,
    setFormData,
    handleSubmit,
    isLogUserLoading,
    logUserError,
  };
}
