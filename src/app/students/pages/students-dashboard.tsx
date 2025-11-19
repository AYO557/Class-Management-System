import PageHeader from "../../ui/page-header";
import StatsCardsSection from "../../ui/stat-cards-section";
import CustomTable from "../../ui/table";
import Loader from "@/components/ui/loader";
import CustomError from "@/components/ui/error";
import useStudentsDashboardData from "../hooks/useStudentsDashboardData";

export default function StudentsDashboardPage() {
  const {
    tableData,
    customErrorData,
    pageHeaderData,
    showLoader,
    showError,
    mockStudentStats,
  } = useStudentsDashboardData();

  return (
    <>
      <PageHeader {...pageHeaderData} />

      <StatsCardsSection data={mockStudentStats} />

      {showLoader ? (
        <Loader />
      ) : showError ? (
        <CustomError {...customErrorData} />
      ) : (
        <CustomTable {...tableData} />
      )}
    </>
  );
}
