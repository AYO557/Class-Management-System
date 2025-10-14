import { Link } from "react-router";
import FormHeader from "../components/form-header";
import { FormInput } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useLoginForm from "../hooks/useLoginForm";

export default function LoginPage() {
  const { formData, setFormData, handleSubmit, isLogUserLoading } =
    useLoginForm();

  return (
    <>
      <FormHeader
        title="Login to your account"
        desc="Don't have an account?"
        link="/auth/register"
        linkText="Sign up"
      />

      <div className="pt-14">
        <form onSubmit={handleSubmit} className="space-y-14">
          <div className="space-y-4">
            <FormInput
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <FormInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            <p className="text-base text-white">
              Forgot your password?{" "}
              <Link
                to="/auth/forgot-password"
                className="text-lightpurple hover:underline"
              >
                Forgot password
              </Link>
            </p>
          </div>

          <Button
            type="submit"
            isLoading={isLogUserLoading}
            disabled={formData.email === "" || formData.password === ""}
          >
            Login
          </Button>
        </form>

        <div className="space-y-4 pt-4">
          {/* separator */}
          <div className="flex gap-2 items-center justify-between">
            <div className="h-[1px] bg-white w-[38%]" />
            <p>Or login with</p>
            <div className="h-[1px] bg-white w-[38%]" />
          </div>

          {/* social buttons */}
          <div className="flex gap-4">
            <Button variant="outline">Google</Button>

            <Button variant="outline">GitHub</Button>
          </div>
        </div>
      </div>
    </>
  );
}
