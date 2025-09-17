interface TermsCheckboxProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TermsCheckbox({
  checked,
  onChange,
}: TermsCheckboxProps) {
  return (
    <div className="space-x-4">
      <input
        type="checkbox"
        name="terms"
        id="terms"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="terms">
        I agree to the{" "}
        <span className="text-lightpurple hover:underline">
          terms and conditions
        </span>
      </label>
    </div>
  );
}
