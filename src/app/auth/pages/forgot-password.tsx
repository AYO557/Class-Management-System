import FormHeader from "../components/form-header";
import { FormInput } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

export default function ForgotPasswordPage() {
  return (
    <>
      <FormHeader
        title="Forgot Password"
        desc="Enter your email to reset your password"
        showBack
      />

      <div className="pt-14">
        <form className="space-y-14">
          <div className="space-y-4">
            <FormInput
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              id="email"
            />
          </div>

          <Button>Submit</Button>
        </form>
      </div>
    </>
  );
}
