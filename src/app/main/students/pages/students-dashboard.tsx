import { Button } from "@/components/ui/button";
import PageHeader from "@/app/main/components/page-header";
import { Plus } from "lucide-react";
import { mockStudentStats } from "../libs/mock";
import StatsCardsSection from "../../components/stat-cards-section";
import { useNavigate } from "react-router";
import CustomTable from "../../components/table";
import useGetStudentsApi from "../api/useGetStudents";
import { columns } from "../libs/constants";
import Loader from "@/components/ui/loader";
import CustomError from "@/components/ui/error";
import { useState } from "react";
import type { Student } from "../libs/types";

export default function StudentsPage() {
  const navigate = useNavigate();
  const [searchStudentsResult, setSearchStudentsResult] = useState<
    Student[] | undefined
  >();

  const { studentsResponse, isStudentsLoading, studentsError } =
    useGetStudentsApi();

  const studentsData = studentsResponse?.data;

  const handleSearch = (val: string) => {
    const nameResult = studentsData?.filter((student) => {
      return student.name.toLowerCase().includes(val.toLowerCase());
    });

    const emailResult = studentsData?.filter((student) => {
      return student.email.toLowerCase().includes(val.toLowerCase());
    });

    const result =
      nameResult && nameResult?.length > 0 ? nameResult : emailResult;

    setSearchStudentsResult(result);
  };

  return (
    <>
      <PageHeader
        title="Students"
        desc="Manage your students"
        endContent={
          <Button
            onClick={() => navigate("/students/create")}
            startAdornment={<Plus size={20} />}
            variant="secondary"
          >
            Add Student
          </Button>
        }
      />

      <StatsCardsSection data={mockStudentStats} />

      {isStudentsLoading ? (
        <Loader />
      ) : studentsError ? (
        <CustomError msg={studentsError.message} dataName="students" />
      ) : (
        <CustomTable
          columns={columns}
          data={searchStudentsResult || studentsData || []}
          actions={[
            {
              label: "View",
              onClick: (record) => navigate(`/students/${record._id}`),
            },
            {
              label: "Edit",
              onClick: (record) => navigate(`/students/${record._id}/edit`),
            },
          ]}
          showSearch
          searchPlaceholder="search student..."
          showPagination={true}
          pageSize={10}
          selectable
          onSearch={handleSearch}
        />
      )}
    </>
  );
}
