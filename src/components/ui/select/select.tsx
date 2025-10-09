import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

export default function Select({ label, options, ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={props.id}>{label}</label>
      <select
        className="w-full h-9 rounded-lg bg-darkgraypurple text-white p-2"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
