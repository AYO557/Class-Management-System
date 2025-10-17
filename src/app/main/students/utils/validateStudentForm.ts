import type { StudentFormData } from "../pages/create-student";

export const isStudentDetailsValid = (formData: StudentFormData) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    dateOfBirth,
    gender,
    nationality,
    religion,
    address,
  } = formData;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phoneNumber ||
    !dateOfBirth ||
    !gender ||
    !nationality ||
    !religion ||
    !address
  ) {
    return false;
  }

  return true;
};

export const isParentDetailsValid = (formData: StudentFormData) => {
  const {
    parentName,
    parentEmail,
    parentPhone,
    parentOccupation,
    relationship,
    emergencyContact,
  } = formData;

  if (
    !parentName ||
    !parentEmail ||
    !parentPhone ||
    !parentOccupation ||
    !relationship ||
    !emergencyContact
  ) {
    return false;
  }

  return true;
};
