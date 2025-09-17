import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { FormInput } from "../../../components/ui/input";
import Separator from "../../../components/ui/separator";
import TermsCheckbox from "../../../components/ui/terms-checkbox";
import FormHeader from "../components/form-header";
import { toast } from "sonner";

interface RegisterForm {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
  terms: boolean;
}

interface User extends RegisterForm {
  id: number;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<RegisterForm>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
    terms: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password.trim() !== formData.confirm_password.trim()) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.trim().length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    signUserUp(formData);
  };

  const signUserUp = async (data: RegisterForm) => {
    const existUsers = await getExistUsers();
    const isUserExist = existUsers.find((user) => user.email === data.email);

    if (isUserExist) {
      toast.error("User already exists");
      return;
    }

    try {
      const newUser = await addUser(data);
      console.log("new user:", newUser);
      toast.success("User created successfully");
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  const getExistUsers = async (): Promise<User[]> => {
    try {
      const users = await fetch("http://localhost:3000/users");
      return users.json();
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
      return [];
    }
  };

  const addUser = async (data: RegisterForm): Promise<User | undefined> => {
    try {
      const users = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return users.json();
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
      return;
    }
  };

  return (
    <>
      <FormHeader
        title="Create an account"
        desc="Already have an account?"
        linkText="Login"
        link="/auth/login"
      />

      <div className="pt-14">
        <form className="space-y-14" onSubmit={handleSubmit}>
          <div className="space-y-4">
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

            <FormInput
              label="Email"
              name="email"
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
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

            <FormInput
              label="Password"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            <FormInput
              label="Confirm password"
              type="password"
              name="confirm_password"
              id="confirm_password"
              value={formData.confirm_password}
              onChange={(e) =>
                setFormData({ ...formData, confirm_password: e.target.value })
              }
            />

            <TermsCheckbox
              checked={formData.terms}
              onChange={(e) =>
                setFormData({ ...formData, terms: e.target.checked })
              }
            />
          </div>

          <Button
            type="submit"
            disabled={
              !formData.first_name ||
              !formData.last_name ||
              !formData.email ||
              !formData.phone_number ||
              !formData.password ||
              !formData.confirm_password ||
              !formData.terms
            }
          >
            Create account
          </Button>
        </form>

        <div className="space-y-4 pt-4">
          <Separator>Or register with</Separator>

          <div className="flex gap-4">
            <Button variant="outline">Google</Button>

            <Button variant="outline">GitHub</Button>
          </div>
        </div>
      </div>
    </>
  );
}
