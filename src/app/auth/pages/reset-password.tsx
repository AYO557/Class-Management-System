import FormHeader from "../components/form-header";
import { FormInput } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

export default function ResetPasswordPage() {
  return (
    <>
      <FormHeader title="Reset Password" showBack />

      <div className="pt-14">
        <form className="space-y-14">
          <div className="space-y-4">
            <FormInput
              label="New Password"
              type="password"
              name="password"
              placeholder="Enter New Password"
              required
              id="password"
            />

            <FormInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              id="confirmPassword"
            />
          </div>

          <Button>Submit</Button>
        </form>
      </div>
    </>
  );
}
