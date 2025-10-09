import { Button } from "@/components/ui/button";
import PageHeader from "../../components/page-header";
import { Plus } from "lucide-react";
import CustomTable, { type Column } from "../../components/table";
import InstructorsData from "../libs/instructors-data.json"
import StatsCardsSection from "../../components/stat-cards-section";
import { mockIntstructorStats } from "../libs/mock";
import { useNavigate } from "react-router";


function instructorsPage() {
	const navigate = useNavigate()
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Phone Number",
			dataIndex: "phone_number",
			key: "phone_number",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
		},
		{
			title: "Class",
			dataIndex: "class",
			key: "class",
		},
		{
			title: "Gender",
			dataIndex: "gender",
			key: "gender",
		}
	] as Column<(typeof InstructorsData)[0]>[];

	return (
		<div>
			<PageHeader
				title='Instructors'
				desc='Manage your teachers'
				endContent={
					<Button
						onClick={() => navigate("/instructors/create")}
						startAdornment={<Plus size={20} />}
						variant='secondary'
					>
						Add Instructor
					</Button>
				}
			/>

			<StatsCardsSection data={mockIntstructorStats}/>

			<CustomTable 
				columns={columns} 
				data={InstructorsData} 
				showSearch
				searchPlaceholder="search teachers..."
			/>

			<div className="mt-5">
				<h1 className="text-2xl">Pending Approval Requests</h1>
			</div>
		</div>
	);
}

export default instructorsPage;
