import { useState } from "react";
import PageHeader from "../../components/page-header";
import StepperHeader from "../../components/stepper-header";
import { Button } from "@/components/ui/button";
import BasicDetailsForm from "../components/basic-details-form";
import ParentDetailsForm from "../components/parent-details-form";
import ReviewDetails from "../components/review-details";
import Confirmation from "../components/confirmation";
import useCreateStudentApi from "../api/useCreateStudent";
import useToastMessage from "@/hooks/useToastMessage";
import type { BaseStudent } from "../libs/types";
import {
  isStudentDetailsValid,
  isParentDetailsValid,
} from "../utils/validateStudentForm";
import { useNavigate } from "react-router";

const steps = ["Student Details", "Parent Details", "Review", "Confirmation"];

export interface StudentFormData {
  profilePicture: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  religion: string;
  address: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  parentOccupation: string;
  relationship: string;
  emergencyContact: string;
}

export default function CreateStudentPage() {
  const navigate = useNavigate();
  const { toastError, toastSuccess } = useToastMessage();

  const { createStudent } = useCreateStudentApi({
    onSuccess: () => {
      toastSuccess("Student created successfully");
      navigate("/students");
    },
    onError: (error) => {
      toastError(error.message || "Sorry, Something went wrong.");
    },
  });

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<StudentFormData>({
    // Student Details
    profilePicture: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    religion: "",
    address: "",

    // Parent Details
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    parentOccupation: "",
    relationship: "",
    emergencyContact: "",
  });

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      if (activeStep === 0 && !isStudentDetailsValid(formData)) return;
      if (activeStep === 1 && !isParentDetailsValid(formData)) return;
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleSubmit = () => {
    const transformedPayload: BaseStudent = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phoneNumber,
      dob: formData.dateOfBirth,
      gender: formData.gender,
      nationality: formData.nationality,
      religion: formData.religion,
      address: formData.address,
      parentName: formData.parentName,
      parentEmail: formData.parentEmail,
      parentPhone: formData.parentPhone,
      parentOccupation: formData.parentOccupation,
      parentRelationship: formData.relationship,
      parentAddress: formData.emergencyContact,
    };

    createStudent(transformedPayload);
  };

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <PageHeader
          showBack
          title="Enroll New Student"
          desc="Complete the student enrollment process step by step"
        />

        <StepperHeader activeStep={activeStep} steps={steps} />

        <div className="bg-white p-8 mt-8 rounded-xl shadow-sm border border-gray-200 min-h-[500px]">
          {activeStep === 0 && (
            <BasicDetailsForm
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {activeStep === 1 && (
            <ParentDetailsForm
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {activeStep === 2 && (
            <ReviewDetails
              formData={formData}
              onEdit={(step) => setActiveStep(step)}
            />
          )}
          {activeStep === 3 && (
            <Confirmation
              formData={formData}
              onNewEnrollment={() => setActiveStep(0)}
            />
          )}
        </div>

        <div className="flex justify-between mt-8">
          <div>
            <Button
              variant="primary"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Previous
            </Button>
          </div>

          <div className="flex gap-3">
            {activeStep === steps.length - 2 ? (
              <Button onClick={handleSubmit}>Submit Enrollment</Button>
            ) : activeStep === steps.length - 1 ? (
              <Button onClick={() => setActiveStep(0)}>
                Enroll Another Student
              </Button>
            ) : (
              <Button onClick={handleNext}>Continue</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
