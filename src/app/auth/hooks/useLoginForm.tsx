import { useState } from "react";
import type { LoginForm } from "../libs/types";
import { validateEmail, validatePassword } from "../utils/validateForm";
import useLoginUserApi from "../api/useLoginUser";
import useToastMessage from "@/hooks/useToastMessage";

export default function useLoginForm() {
  const { toastError } = useToastMessage();
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const { loginUser } = useLoginUserApi();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;
    loginUser(formData);
  };

  const validateForm = () => {
    const { email, password } = formData;

    const validators = [validateEmail(email), validatePassword(password)];

    for (const error of validators) {
      if (error) {
        toastError(error);
        return false; // exits validateForm properly
      }
    }

    return true;
  };

  return {
    formData,
    setFormData,
    handleSubmit,
  };
}
