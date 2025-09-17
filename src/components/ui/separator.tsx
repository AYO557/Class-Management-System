export default function Separator({ children }: SeparatorProps) {
  return (
    <div className="flex gap-2 items-center justify-between">
      <div className="h-[1px] bg-white w-[38%]" />
      <p>{children}</p>
      <div className="h-[1px] bg-white w-[38%]" />
    </div>
  );
}

interface SeparatorProps {
  children: React.ReactNode;
}
