import { Button } from "@/components/ui/button";
import PageHeader from "@/app/main/components/page-header";
import { Plus } from "lucide-react";
// import { mockClassStats } from "../libs/mock";
import StatsCardsSection from "@/app/main/components/stat-cards-section";
// import classesData from "../libs/classes-data.json";
import { useNavigate } from "react-router";
import CustomTable from "@/app/main/components/table";
import type { Column } from "@/app/main/components/table";

export default function ClassesPage() {
  const classesData = [
    {
      id: 1,
      name: "JSS 1",
      email: "jss1@gmail.com",
      phone: "08012345678",
      age: 10,
      gender: "Male",
      class: "JSS 1",
      address: "123, Main Street, Lagos",
      parent: "Jane Doe",
      parent_phone: "08012345678",
      parent_email: "jane@gmail.com",
    },
  ];

  const mockClassStats = [
    {
      id: 1,
      name: "Total Classes",
      title: "Total Classes",
      value: 10,
      icon: "landmark",
      color: "bg-secondary",
    },
    {
      id: 2,
      name: "Total Students",
      title: "Total Students",
      value: 100,
      icon: "person-standing",
      color: "bg-quaternary",
    },
    {
      id: 3,
      name: "Total Teachers",
      title: "Total Teachers",
      value: 10,
      icon: "user",
      color: "bg-lightgraypurple",
    },
    {
      id: 4,
      name: "Total Parents",
      title: "Total Parents",
      value: 100,
      icon: "users",
      color: "bg-darkgraypurple",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Parent",
      dataIndex: "parent",
      key: "parent",
    },
    {
      title: "Parent Phone Number",
      dataIndex: "parent_phone",
      key: "parent_phone",
    },
    {
      title: "Parent Email",
      dataIndex: "parent_email",
      key: "parent_email",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ] as Column<(typeof classesData)[0]>[];

  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        title="Classes"
        desc="Manage your classes"
        endContent={
          <Button
            onClick={() => navigate("/classes/create")}
            startAdornment={<Plus size={20} />}
            variant="secondary"
          >
            Add Class
          </Button>
        }
      />

      <StatsCardsSection data={mockClassStats} />

      <CustomTable columns={columns} data={classesData} />
    </>
  );
}
