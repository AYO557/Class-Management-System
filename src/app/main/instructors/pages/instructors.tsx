import { Button } from "@/components/ui/button";
import PageHeader from "../../components/page-header";
import { Plus } from "lucide-react";
import CustomTable, { type Column } from "../../components/table";
import InstructorsData from "../instructors-data.json"

function instructorsPage() {
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
	] as Column<(typeof InstructorsData)[0]>[];

	return (
		<div>
			<PageHeader
				title='Instructors'
				desc='Manage your teachers'
				endContent={
					<Button
						// onClick={() => navigate("/students/create")}
						startAdornment={<Plus size={20} />}
						variant='secondary'
					>
						Add Instructor
					</Button>
				}
			/>

			<CustomTable 
				columns={columns} 
				data={InstructorsData} 
				showSearch
				searchPlaceholder="search teachers..."
			/>
		</div>
	);
}

export default instructorsPage;
