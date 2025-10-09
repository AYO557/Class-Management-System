import { FormInput } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

interface BasicDetailsFormProps {
  formData: {
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
  };
  updateFormData: (data: Partial<BasicDetailsFormProps["formData"]>) => void;
}

export default function BasicDetailsForm({
  formData,
  updateFormData,
}: BasicDetailsFormProps) {
  const handleChange = (field: string, value: string) => {
    //
    updateFormData({ [field]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateFormData({ profilePicture: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Student Information
        </h2>
        <p className="text-gray-600">Enter the basic details of the student</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="flex justify-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center cursor-pointer border border-gray-300">
            <input
              title=""
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              placeholder="Upload profile picture"
              onChange={(e) => handleImageChange(e)}
            />
            {formData.profilePicture && (
              <img
                src={formData.profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            )}

            {!formData.profilePicture && (
              <p className="text-sm text-gray-500 cursor-pointer">
                Upload Picture
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="First Name *"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          placeholder="Enter first name"
          required
        />
        <FormInput
          label="Last Name *"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          placeholder="Enter last name"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Email Address *"
          name="email"
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="student@example.com"
          required
        />
        <FormInput
          label="Phone Number"
          name="phoneNumber"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={(e) => handleChange("phoneNumber", e.target.value)}
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Date of Birth *"
          name="dateOfBirth"
          id="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => handleChange("dateOfBirth", e.target.value)}
          required
        />
        <Select
          label="Gender *"
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={(e) => handleChange("gender", e.target.value)}
          options={[
            { value: "", label: "Select Gender" },
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" },
          ]}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Nationality *"
          name="nationality"
          id="nationality"
          value={formData.nationality}
          onChange={(e) => handleChange("nationality", e.target.value)}
          placeholder="Enter nationality"
          required
        />
        <Select
          label="Religion"
          name="religion"
          id="religion"
          value={formData.religion}
          onChange={(e) => handleChange("religion", e.target.value)}
          options={[
            { value: "", label: "Select Religion" },
            { value: "christianity", label: "Christianity" },
            { value: "islam", label: "Islam" },
            { value: "hinduism", label: "Hinduism" },
            { value: "buddhism", label: "Buddhism" },
            { value: "other", label: "Other" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <FormInput
          label="Home Address"
          name="address"
          id="address"
          value={formData.address}
          onChange={(e) => handleChange("address", e.target.value)}
          placeholder="Enter complete address"
        />
      </div>
    </div>
  );
}
