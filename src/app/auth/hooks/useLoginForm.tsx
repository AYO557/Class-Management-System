import { useState } from "react";
import type { LoginForm } from "../libs/types";
import useLoginUserApi from "../api/useLoginUser";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router";

export default function useLoginForm() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { loginUser } = useLoginUserApi({
    setIsLoading,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = await loginUser(formData);
    if (user) {
      setFormData({
        email: "",
        password: "",
      });

      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigate("/dashboard");
    }
  };

  return {
    formData,
    setFormData,
    handleSubmit,
    isLoading,
  };
}
