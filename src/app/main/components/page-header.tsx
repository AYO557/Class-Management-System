import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

interface PageHeaderProps {
  title: string;
  desc?: string;
  showBack?: boolean;
  backTo?: string;
  endContent?: React.ReactNode;
}

export default function PageHeader({
  title,
  desc,
  showBack,
  backTo,
  endContent,
}: PageHeaderProps) {
  const naviagte = useNavigate();

  const handleBackClick = () => {
    if (backTo) {
      naviagte(backTo);
    } else {
      naviagte(-1);
    }
  };

  return (
    <div className="flex justify-between items-end font-main ">
      <div className="flex items-center gap-2">
        {showBack && (
          <ArrowLeft className="cursor-pointer" onClick={handleBackClick} />
        )}
        <div className="xl:space-y-2 space-y-1">
          <h1 className="xl:text-3xl lg:text-xl font-medium">{title}</h1>
          {desc && (
            <p className="xl:text-lg lg:text-sm font-secondary">{desc}</p>
          )}
        </div>
      </div>

      {endContent && <div>{endContent}</div>}
    </div>
  );
}
