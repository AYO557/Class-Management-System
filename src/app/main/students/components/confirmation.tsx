// confirmation.tsx
import { CheckCircle } from "lucide-react";

interface ConfirmationProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
  };
  onNewEnrollment: () => void;
}

export default function Confirmation({
  formData,
  onNewEnrollment,
}: ConfirmationProps) {
  return (
    <div className="text-center py-12">
      <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />

      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Enrollment Successful!
      </h2>

      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Student{" "}
        <strong>
          {formData.firstName} {formData.lastName}
        </strong>{" "}
        has been successfully enrolled in the system.
      </p>

      <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto mb-8">
        <h3 className="font-semibold text-gray-900 mb-3">Student Details</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <strong>Student ID:</strong> STU-
            {Math.random().toString(36).substr(2, 8).toUpperCase()}
          </p>
          <p>
            <strong>Name:</strong> {formData.firstName} {formData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Enrollment Date:</strong> {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={onNewEnrollment}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Enroll Another Student
        </button>
        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
          View Student Profile
        </button>
      </div>
    </div>
  );
}
