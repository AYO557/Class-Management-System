import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export default function FormInput({
  label,
  type = "text",
  name,
  id,
  placeholder,
  required = false,
  ...props
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          name={name}
          id={id}
          className="w-full h-9 rounded-lg bg-darkgraypurple text-white p-2"
          placeholder={placeholder}
          required={required}
          {...props}
        />
        {type === "password" && (
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-0 right-4 h-full flex items-center"
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </div>
        )}
      </div>
    </div>
  );
}
