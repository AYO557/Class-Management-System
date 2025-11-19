import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

export default function FormInput({
  label,
  type = "text",
  name,
  id,
  placeholder,
  required = false,
  startAdornment,
  endAdornment,
  ...props
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label htmlFor={id}>{label}</label>}
      <div className="relative">
        {startAdornment && (
          <div className="absolute top-0 left-3 h-full flex items-center text-gray-400">
            {startAdornment}
          </div>
        )}
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          name={name}
          id={id}
          className={`w-full h-9 rounded-lg bg-darkgraypurple text-white p-2 ${
            startAdornment ? "pl-10" : ""
          } ${endAdornment || type === "password" ? "pr-10" : ""}`}
          placeholder={placeholder}
          required={required}
          {...props}
        />
        {(endAdornment || type === "password") && (
          <div className="absolute top-0 right-3 h-full flex items-center gap-1">
            {endAdornment}
            {type === "password" && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
