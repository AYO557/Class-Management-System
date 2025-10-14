import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/input";
import Separator from "@/components/ui/separator";
import TermsCheckbox from "@/components/ui/terms-checkbox";
import FormHeader from "../components/form-header";
import useRegisterForm from "../hooks/useRegisterForm";

export default function RegisterPage() {
  const { formData, setFormData, handleSubmit, isCreateUserLoading } =
    useRegisterForm();

  return (
    <>
      <FormHeader
        title="Create an account"
        desc="Already have an account?"
        linkText="Login"
        link="/auth/login"
      />

      <div className="pt-10">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
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
            isLoading={isCreateUserLoading}
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
