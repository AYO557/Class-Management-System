import { useState } from "react";
import type { LoginForm } from "../libs/types";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router";
import useLogUserApi from "../api/useLogUser";
import useToastMessage from "@/hooks/useToastMessage";

export default function useLoginForm() {
  const navigate = useNavigate();
  const { toastError, toastSuccess } = useToastMessage();
  const { setUser } = useAuthStore();
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const { logUser, isLogUserLoading, logUserError, logUserData } =
    useLogUserApi({
      onSuccess: (data) => {
        setUser(data.data);
        localStorage.setItem("user", JSON.stringify(data.data));

        toastSuccess("Login successful");
        navigate("/dashboard");
      },
      onError: (error) => {
        toastError(error.message || "Sorry, Something went wrong.");
      },
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const user = await loginUser(formData);
    logUser(formData);

    if (logUserData) {
      setFormData({
        email: "",
        password: "",
      });

      localStorage.setItem("user", JSON.stringify(logUserData.data));
      setUser(logUserData.data);
      navigate("/dashboard");
    }
  };

  return {
    formData,
    setFormData,
    handleSubmit,
    isLogUserLoading,
    logUserError,
  };
}
