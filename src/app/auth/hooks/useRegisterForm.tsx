import { useState } from "react";
import type { RegisterForm } from "../libs/types";
import {
  validateAgreeToTerms,
  validateConfirmPassword,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword,
  // validatePhoneNumber,
} from "../utils/validateForm";
// import useRegisterUserApi from "../api/useRegisterUser";
import useToastMessage from "@/hooks/useToastMessage";
import { useNavigate } from "react-router";
import useCreateUserApi from "../api/useCreateUser";

export default function useRegisterForm() {
  const navigate = useNavigate();
  const { toastError, toastSuccess } = useToastMessage();
  const [formData, setFormData] = useState<RegisterForm>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
    terms: false,
  });

  // const { signUserUp } = useRegisterUserApi({
  //   onSuccess: () => {
  //     setFormData({
  //       first_name: "",
  //       last_name: "",
  //       email: "",
  //       phone_number: "",
  //       password: "",
  //       confirm_password: "",
  //       terms: false,
  //     });

  //     navigate("/auth/login");
  //   },
  // });

  const { createUser, isCreateUserLoading, createUserError } = useCreateUserApi(
    {
      onSuccess: () => {
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          password: "",
          confirm_password: "",
          terms: false,
        });

        toastSuccess("User created successfully");
        navigate("/auth/login");
      },
      onError: (error) => {
        toastError(error.message || "Sorry, Something went wrong.");
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    // signUserUp(formData);
    createUser(formData);
  };

  const validateForm = () => {
    const {
      first_name,
      last_name,
      email,
      // phone_number,
      password,
      confirm_password,
      terms,
    } = formData;

    const validators = [
      validateFirstName(first_name),
      validateLastName(last_name),
      // validatePhoneNumber(phone_number),
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
    isCreateUserLoading,
    createUserError,
  };
}
