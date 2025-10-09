import { useState } from "react";
import PageHeader from "../../components/page-header";
import StepperHeader from "../../components/stepper-header";
import { Button } from "@/components/ui/button";
import BasicDetailsForm from "../components/basic-details-form";
import ParentDetailsForm from "../components/parent-details-form";
import ReviewDetails from "../components/review-details";
import Confirmation from "../components/confirmation";

const steps = ["Student Details", "Parent Details", "Review"];

export default function EditStudentPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    // Student Details
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

    // Academic Details
    studentId: "",
    grade: "",
    section: "",
    enrollmentDate: "",
  });

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", formData);
    handleNext();
  };

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <PageHeader
          showBack
          title="Edit Student Details"
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
