// parent-details-form.tsx
import { FormInput } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

interface ParentDetailsFormProps {
  formData: {
    parentName: string;
    parentEmail: string;
    parentPhone: string;
    parentOccupation: string;
    relationship: string;
    emergencyContact: string;
  };
  updateFormData: (data: Partial<ParentDetailsFormProps["formData"]>) => void;
}

export default function ParentDetailsForm({
  formData,
  updateFormData,
}: ParentDetailsFormProps) {
  const handleChange = (field: string, value: string) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Parent/Guardian Information
        </h2>
        <p className="text-gray-600">
          Enter the details of the parent or guardian
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <FormInput
          label="Parent/Guardian Full Name *"
          name="parentName"
          id="parentName"
          value={formData.parentName}
          onChange={(e) => handleChange("parentName", e.target.value)}
          placeholder="Enter full name"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Parent Email *"
          name="parentEmail"
          id="parentEmail"
          type="email"
          value={formData.parentEmail}
          onChange={(e) => handleChange("parentEmail", e.target.value)}
          placeholder="parent@example.com"
          required
        />
        <FormInput
          label="Parent Phone *"
          name="parentPhone"
          id="parentPhone"
          value={formData.parentPhone}
          onChange={(e) => handleChange("parentPhone", e.target.value)}
          placeholder="+1 (555) 000-0000"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Occupation"
          name="parentOccupation"
          id="parentOccupation"
          value={formData.parentOccupation}
          onChange={(e) => handleChange("parentOccupation", e.target.value)}
          placeholder="Enter occupation"
        />
        <Select
          label="Relationship *"
          name="relationship"
          id="relationship"
          value={formData.relationship}
          onChange={(e) => handleChange("relationship", e.target.value)}
          options={[
            { value: "", label: "Select Relationship" },
            { value: "father", label: "Father" },
            { value: "mother", label: "Mother" },
            { value: "guardian", label: "Guardian" },
            { value: "other", label: "Other" },
          ]}
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <FormInput
          label="Emergency Contact Number *"
          name="emergencyContact"
          id="emergencyContact"
          value={formData.emergencyContact}
          onChange={(e) => handleChange("emergencyContact", e.target.value)}
          placeholder="+1 (555) 000-0000"
          required
        />
      </div>
    </div>
  );
}
