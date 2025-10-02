import { ArrowBigLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";

interface FormHeaderProps {
  title: string;
  desc?: string;
  link?: string;
  linkText?: string;
  showBack?: boolean;
}

export default function FormHeader({
  title,
  desc,
  link,
  linkText,
  showBack = false,
}: FormHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-medium flex gap-2 items-center">
        <ArrowBigLeft
          size={30}
          className={
            showBack
              ? "inline-block cursor-pointer hover:text-lightpurple transition duration-150"
              : "hidden"
          }
          onClick={() => navigate(-1)}
        />
        <span>{title}</span>
      </h1>

      {desc && (
        <p className="text-lg">
          {desc}{" "}
          {link && (
            <Link
              to={link}
              className="text-lightpurple font-bold hover:underline"
            >
              {linkText}
            </Link>
          )}
        </p>
      )}
    </div>
  );
}
