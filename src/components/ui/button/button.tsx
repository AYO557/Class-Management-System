import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "disabled";
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) {
  variant = disabled ? "disabled" : variant;

  return (
    <button
      className={`w-full h-10 rounded-lg font-bold ${
        variant === "primary"
          ? "bg-lightpurple text-white cursor-pointer"
          : variant === "secondary"
          ? "bg-white text-lightpurple cursor-pointer"
          : variant === "outline"
          ? "border border-lightgraypurple text-white cursor-pointer"
          : variant === "disabled"
          ? "bg-transparent text-white cursor-not-allowed"
          : "bg-transparent text-lightpurple cursor-pointer"
      }`}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
