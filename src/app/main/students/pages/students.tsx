import { Button } from "@/components/ui/button";
import PageHeader from "@/app/main/components/page-header";
import { Plus } from "lucide-react";
import StatsCard from "../../components/stats-card";
import { mockStudentStats } from "../libs/mock";

export default function StudentsPage() {
  return (
    <div className="">
      <PageHeader
        title="Students"
        desc="Manage your students"
        endContent={
          <Button startAdornment={<Plus size={20} />} variant="secondary">
            Add Student
          </Button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-2 gap-4 mt-10">
        {mockStudentStats.map((item) => (
          <StatsCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
