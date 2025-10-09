import { Button } from "@/components/ui/button";
import PageHeader from "@/app/main/components/page-header";
import { Plus } from "lucide-react";
import { mockStudentStats } from "../libs/mock";
import StatsCardsSection from "../../components/stat-cards-section";
import studentsData from "../libs/students-data.json";
import { useNavigate } from "react-router";
import CustomTable from "../../components/table";
import type { Column } from "../../components/table";

export default function StudentsPage() {
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
	] as Column<(typeof studentsData)[0]>[];

	const navigate = useNavigate();

	return (
		<>
			<PageHeader
				title='Students'
				desc='Manage your students'
				endContent={
					<Button
						onClick={() => navigate("/students/create")}
						startAdornment={<Plus size={20} />}
						variant='secondary'
					>
						Add Student
					</Button>
				}
			/>

			<StatsCardsSection data={mockStudentStats} />

			<CustomTable
				columns={columns}
				data={studentsData}
				showSearch
				searchPlaceholder='search student...'
			/>
		</>
	);
}
