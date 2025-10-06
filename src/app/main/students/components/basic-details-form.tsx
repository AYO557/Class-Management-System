import { FormInput } from "@/components/ui/input";
import { useState } from "react";

export default function BasicDetailsForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    gender: "",
    nationality: "",
    religion: "",
  });

  return (
    <form className="space-y-4">
      <div className="flex gap-2">
        <FormInput
          label="First name"
          name="first_name"
          id="first_name"
          value={formData.first_name}
          onChange={(e) =>
            setFormData({ ...formData, first_name: e.target.value })
          }
        />
        <FormInput
          label="Last name"
          name="last_name"
          id="last_name"
          value={formData.last_name}
          onChange={(e) =>
            setFormData({ ...formData, last_name: e.target.value })
          }
        />
      </div>

      <div className="flex gap-2">
        <FormInput
          label="Email"
          name="email"
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <FormInput
          label="Phone number"
          name="phone_number"
          id="phone_number"
          type="number"
          value={formData.phone_number}
          onChange={(e) =>
            setFormData({ ...formData, phone_number: e.target.value })
          }
        />
      </div>

      <div className="flex gap-2">
        <FormInput
          label="Date of birth"
          name="date_of_birth"
          id="date_of_birth"
        />
        <FormInput label="Gender" name="gender" id="gender" />
      </div>

      <div className="flex gap-2">
        <FormInput label="Nationality" name="nationality" id="nationality" />
        <FormInput label="Religion" name="religion" id="religion" />
      </div>

      <div className="flex gap-2">
        <FormInput label="Nationality" name="nationality" id="nationality" />
        <FormInput label="Religion" name="religion" id="religion" />
      </div>
    </form>
  );
}
