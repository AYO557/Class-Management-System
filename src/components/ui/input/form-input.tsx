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
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        className="w-full h-10 rounded-lg bg-darkgraypurple p-2"
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </div>
  );
}
