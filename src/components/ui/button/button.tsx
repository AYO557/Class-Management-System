import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "disabled";
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  isLoading = false,
  startAdornment,
  endAdornment,
  ...props
}: ButtonProps) {
  variant = disabled ? "disabled" : variant;

  return (
    <button
      className={`w-full h-9 rounded-lg font-bold px-4 flex items-center justify-center gap-2 transition-colors duration-200 ${
        variant === "primary"
          ? "bg-lightpurple text-white cursor-pointer hover:bg-lightgraypurple"
          : variant === "secondary"
          ? "bg-darkpurple text-white cursor-pointer hover:bg-darkgraypurple"
          : variant === "outline"
          ? "border border-lightgraypurple text-white cursor-pointer hover:border-lightgraypurple"
          : variant === "disabled"
          ? "bg-transparent text-white cursor-not-allowed"
          : "bg-transparent text-lightpurple cursor-pointer hover:bg-lightgraypurple"
      }`}
      type={type}
      disabled={disabled || isLoading}
      {...props}
    >
      {startAdornment}
      {isLoading ? <LoadingSpinner /> : children}
      {endAdornment}
    </button>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-4 h-4 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
    </div>
  );
}
