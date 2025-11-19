import React from "react";
import Button from "@/components/ui/button";
import { Plus } from "lucide-react";
import useRouting from "@/hooks/useRouting";

const AddStudentButton: React.FC = () => {
  const { goTo } = useRouting();

  return (
    <Button
      onClick={() => goTo("/students/create")}
      startAdornment={<Plus size={20} />}
      variant="secondary"
    >
      Add Student
    </Button>
  );
};

export default AddStudentButton;
