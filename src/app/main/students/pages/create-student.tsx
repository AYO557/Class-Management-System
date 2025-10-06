import { useState } from "react";
import PageHeader from "../../components/page-header";
import StepperHeader from "../../components/stepper-header";
import { Button } from "@/components/ui/button";
import BasicDetails from "../components/basic-details-form";
import ParentDetails from "../components/parent-details-form";

const steps = ["Student Details", "Parent Details", "Review", "Confirm"];

export default function CreateStudentPage() {
  const [activeStep, setActiveStep] = useState(0);

  // const student = {
  //   id: "stu_001", // auto-generated or assigned by backend
  //   firstName: "Ayomide",
  //   lastName: "Olasupo",
  //   email: "ayomide.olasupo@example.com",
  //   phoneNumber: "+2348123456789",
  //   gender: "Male",
  //   dateOfBirth: "2003-06-15",
  //   nationality: "Nigerian",

  //   address: {
  //     street: "12 Unity Close",
  //     city: "Lagos",
  //     state: "Lagos",
  //     country: "Nigeria",
  //     postalCode: "100001",
  //   },

  //   institution: {
  //     id: "inst_1001",
  //     name: "University of Lagos",
  //     faculty: "Faculty of Computing",
  //     department: "Computer Science",
  //   },

  //   program: {
  //     id: "prog_2001",
  //     name: "BSc Computer Science",
  //     type: "Undergraduate", // or 'Postgraduate', 'Diploma'
  //     duration: "4 years",
  //     startDate: "2025-09-01",
  //     mode: "Full-time", // or 'Part-time', 'Online'
  //   },

  //   guardian: {
  //     fullName: "Mr. Tunde Olasupo",
  //     relationship: "Father",
  //     phoneNumber: "+2348099999999",
  //     email: "tunde.olasupo@example.com",
  //   },

  //   documents: {
  //     passportPhotoUrl: "https://example.com/uploads/passport_ayomide.jpg",
  //     idCardUrl: "https://example.com/uploads/id_ayomide.jpg",
  //     transcriptUrl: null, // can be null or file upload reference
  //   },

  //   admissionStatus: "pending", // or 'accepted', 'rejected', 'reviewing'
  //   createdAt: "2025-10-06T14:00:00Z",
  //   updatedAt: "2025-10-06T14:00:00Z",
  // };

  return (
    <>
      <PageHeader showBack title="Create Student" />

      <StepperHeader activeStep={activeStep} steps={steps} />

      <div className="bg-white p-10 mt-10 rounded-lg h-[60vh] overflow-y-auto">
        {activeStep === 0 && <BasicDetails />}
        {activeStep === 1 && <ParentDetails />}
        {activeStep === 2 && <div>Review</div>}
        {activeStep === 3 && <div>Confirm</div>}
      </div>

      <div className="flex justify-end gap-2">
        <div>
          <Button
            onClick={() => setActiveStep(activeStep - 1)}
            disabled={activeStep === 0}
          >
            Previous
          </Button>
        </div>

        <div>
          <Button
            onClick={() => setActiveStep(activeStep + 1)}
            disabled={activeStep === steps.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
