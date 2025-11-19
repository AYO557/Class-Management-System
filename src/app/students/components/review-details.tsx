// review-details.tsx
interface ReviewDetailsProps {
  formData: {
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
  };
  onEdit: (step: number) => void;
}

export default function ReviewDetails({
  formData,
  onEdit,
}: ReviewDetailsProps) {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Review Student Details
        </h2>
        <p className="text-gray-600">
          Please review all information before submission
        </p>
      </div>

      {/* Student Details Section */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Student Information
          </h3>
          <button
            onClick={() => onEdit(0)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Edit
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DetailItem
            label="Full Name"
            value={`${formData.firstName} ${formData.lastName}`}
          />
          <DetailItem label="Email" value={formData.email} />
          <DetailItem label="Phone" value={formData.phoneNumber} />
          <DetailItem label="Date of Birth" value={formData.dateOfBirth} />
          <DetailItem label="Gender" value={formData.gender} />
          <DetailItem label="Nationality" value={formData.nationality} />
          <DetailItem label="Religion" value={formData.religion} />
          <DetailItem label="Address" value={formData.address} />
        </div>
      </div>

      {/* Parent Details Section */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Parent/Guardian Information
          </h3>
          <button
            onClick={() => onEdit(1)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Edit
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DetailItem label="Parent Name" value={formData.parentName} />
          <DetailItem label="Parent Email" value={formData.parentEmail} />
          <DetailItem label="Parent Phone" value={formData.parentPhone} />
          <DetailItem label="Occupation" value={formData.parentOccupation} />
          <DetailItem label="Relationship" value={formData.relationship} />
          <DetailItem
            label="Emergency Contact"
            value={formData.emergencyContact}
          />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800 text-sm">
          <strong>Note:</strong> Please ensure all information is correct before
          submitting. You will not be able to make changes after submission.
        </p>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-sm text-gray-900 mt-1">{value || "Not provided"}</p>
    </div>
  );
}
