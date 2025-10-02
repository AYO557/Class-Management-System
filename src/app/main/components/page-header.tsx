interface PageHeaderProps {
  title: string;
  desc?: string;
  endContent?: React.ReactNode;
}

export default function PageHeader({
  title,
  desc,
  endContent,
}: PageHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-medium">{title}</h1>
        {desc && <p className="text-lg">{desc}</p>}
      </div>

      {endContent && <div>{endContent}</div>}
    </div>
  );
}
