import { useState } from "react";
import type { RegisterForm } from "../libs/types";
import {
  validateAgreeToTerms,
  validateConfirmPassword,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword,
  validatePhoneNumber,
} from "../utils/validateForm";
import useRegisterUserApi from "../api/useRegisterUser";
import useToastMessage from "@/hooks/useToastMessage";

export default function useRegisterForm() {
  const { toastError } = useToastMessage();
  const [formData, setFormData] = useState<RegisterForm>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
    terms: false,
  });

  const { signUserUp } = useRegisterUserApi();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;
    signUserUp(formData);
  };

  const validateForm = () => {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      password,
      confirm_password,
      terms,
    } = formData;

    const validators = [
      validateFirstName(first_name),
      validateLastName(last_name),
      validatePhoneNumber(phone_number),
      validatePassword(password),
      validateConfirmPassword(password, confirm_password),
      validateAgreeToTerms(terms),
      validateEmail(email),
    ];

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
