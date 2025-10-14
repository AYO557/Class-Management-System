import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  Clock,
  Edit,
  Trash2,
  Download,
  AlertCircle,
  CheckCircle,
  XCircle,
  Users,
  UserCheck,
  Send,
  Upload,
} from "lucide-react";

export default function ViewStudentPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Enhanced student data combining best from both
  const student: Student = {
    id: "STU-2024-001",
    firstName: "Chioma",
    lastName: "Okafor",
    email: "chioma.okafor@bafuto.org",
    phone: "+234 803 456 7890",
    dateOfBirth: "1998-05-15",
    gender: "Female",
    nationality: "Nigerian",
    address: "15 Ikeja Road, Lagos, Nigeria",
    enrollmentDate: "2024-01-10",
    status: "Active",

    photo: "https://randomuser.me/api/portraits/women/78.jpg",
    batch: "FSD-2024-Q1",
    expectedGraduation: "2024-12-20",
    religion: "Christian",

    program: {
      track: "Full Stack Development",
      cohort: "FSD-2024-Q1",
      startDate: "2024-01-10",
      endDate: "2024-12-20",
      instructor: "David Thompson",
      progress: 65,
    },

    // Payment Information (enhanced from A)
    payment: {
      totalFee: 500000,
      amountPaid: 350000,
      balance: 150000,
      paymentPlan: "Installment",
      nextPaymentDue: "2024-11-15",
      transactions: [
        {
          id: "PAY-001",
          date: "2024-01-10",
          amount: 150000,
          method: "Bank Transfer",
          status: "Completed",
          dueDate: "2024-01-10",
        },
        {
          id: "PAY-002",
          date: "2024-03-15",
          amount: 100000,
          method: "Card Payment",
          status: "Completed",
          dueDate: "2024-03-15",
        },
        {
          id: "PAY-003",
          date: "2024-06-20",
          amount: 100000,
          method: "Bank Transfer",
          status: "Completed",
          dueDate: "2024-06-20",
        },
        {
          id: "PAY-004",
          date: "2024-09-10",
          amount: 150000,
          method: "Pending",
          status: "Overdue",
          dueDate: "2024-09-10",
        },
      ],
    },

    // Academic Information (from A)
    courses: [
      {
        name: "HTML & CSS Fundamentals",
        progress: 100,
        grade: "A",
        status: "Completed",
      },
      {
        name: "JavaScript Advanced",
        progress: 100,
        grade: "B+",
        status: "Completed",
      },
      {
        name: "React.js Development",
        progress: 75,
        grade: "-",
        status: "In Progress",
      },
      {
        name: "Node.js & Express",
        progress: 60,
        grade: "-",
        status: "In Progress",
      },
      {
        name: "Database Design",
        progress: 30,
        grade: "-",
        status: "In Progress",
      },
    ],

    attendance: {
      total: 85,
      present: 78,
      absent: 5,
      late: 2,
      percentage: 91.8,
    },

    projects: [
      {
        name: "E-commerce Website",
        status: "Completed",
        grade: "A",
        submittedDate: "2024-05-20",
      },
      {
        name: "Todo App with React",
        status: "Completed",
        grade: "B+",
        submittedDate: "2024-07-15",
      },
      {
        name: "Full Stack Blog Platform",
        status: "In Progress",
        grade: "-",
        submittedDate: "-",
      },
    ],

    // Performance metrics from B
    performance: {
      assignments: 85,
      projects: 92,
      attendance: 91.8,
      overall: 88,
    },

    // Documents from B
    documents: [
      {
        name: "Admission Form",
        type: "PDF",
        date: "2024-01-10",
        status: "Approved",
      },
      {
        name: "ID Card Photo",
        type: "JPG",
        date: "2024-01-10",
        status: "Approved",
      },
      {
        name: "Academic Transcript",
        type: "PDF",
        date: "2024-06-15",
        status: "Pending",
      },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
      case "completed":
      case "approved":
        return "bg-green-100 text-green-800";
      case "in progress":
        return "bg-yellow-100 text-yellow-800";
      case "overdue":
      case "failed":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPaymentStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "overdue":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const paymentPercentage =
    (student.payment.amountPaid / student.payment.totalFee) * 100;

  return (
    <div
      className="min-h-screen bg-gray-50 p-6"
      style={{ fontFamily: "Gabarito, sans-serif" }}
    >
      {/* Header - Enhanced from A with B's routing */}
      <div className="max-w-7xl mx-auto mb-6">
        <Link
          to="/students"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft size={20} />
          <span>Back to Students</span>
        </Link>

        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Student Profile
            </h1>
            <p className="text-gray-600">View and manage student information</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download size={18} />
              Export
            </button>
            <Link to={`/students/${student.id}/edit`}>
              <button
                className="flex items-center gap-2 px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#6d006d" }}
              >
                <Edit size={18} />
                Edit Student
              </button>
            </Link>
            <button className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Student Info Card - Enhanced from A */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-start gap-6">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold"
              style={{ backgroundColor: "#6d006d" }}
            >
              {student.firstName[0]}
              {student.lastName[0]}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-gray-900">
                  {student.firstName} {student.lastName}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    student.status
                  )}`}
                >
                  {student.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={18} style={{ color: "#6d006d" }} />
                  <span className="text-sm">{student.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone size={18} style={{ color: "#6d006d" }} />
                  <span className="text-sm">{student.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} style={{ color: "#6d006d" }} />
                  <span className="text-sm">
                    Enrolled: {student.enrollmentDate}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <BookOpen size={18} style={{ color: "#6d006d" }} />
                  <span className="text-sm">{student.program.track}</span>
                </div>
              </div>
            </div>

            {/* Student ID from B */}
            <div className="text-right">
              <p className="text-2xl font-bold" style={{ color: "#6d006d" }}>
                {student.id}
              </p>
              <p className="text-gray-600 text-sm">Student ID</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Enhanced from A with B's tab names */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="flex gap-1 p-2">
            {[
              { id: "overview", name: "Overview" },
              { id: "payment", name: "Payment Info" },
              { id: "academic", name: "Academic" },
              { id: "performance", name: "Performance" },
              { id: "documents", name: "Documents" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                style={
                  activeTab === tab.id ? { backgroundColor: "#6d006d" } : {}
                }
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto">
        {activeTab === "overview" && <OverviewTab student={student} />}
        {activeTab === "payment" && (
          <PaymentTab
            student={student}
            paymentPercentage={paymentPercentage}
            getStatusColor={getStatusColor}
            getPaymentStatusIcon={getPaymentStatusIcon}
          />
        )}
        {activeTab === "academic" && (
          <AcademicTab student={student} getStatusColor={getStatusColor} />
        )}
        {activeTab === "performance" && <PerformanceTab student={student} />}
        {activeTab === "documents" && (
          <DocumentsTab student={student} getStatusColor={getStatusColor} />
        )}
      </div>
    </div>
  );
}

interface Transaction {
  id: string;
  date: string;
  amount: number;
  method: string;
  status: string;
  dueDate: string;
}

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  religion: string;
  enrollmentDate: string;
  documents: {
    name: string;
    type: string;
    date: string;
    status: string;
  }[];
  projects: {
    name: string;
    submittedDate: string;
    status: string;
    grade: string;
  }[];
  courses: {
    name: string;
    progress: number;
    grade: string;
    status: string;
  }[];
  attendance: {
    total: number;
    present: number;
    absent: number;
    late: number;
    percentage: number;
  };
  program: {
    track: string;
    cohort: string;
    startDate: string;
    endDate: string;
    progress: number;
    instructor: string;
  };
  status: string;
  photo: string;
  batch: string;
  expectedGraduation: string;
  payment: {
    totalFee: number;
    amountPaid: number;
    balance: number;
    paymentPlan: string;
    nextPaymentDue: string;
    transactions: Transaction[];
  };
  performance: {
    assignments: number;
    projects: number;
    attendance: number;
    overall: number;
  };
}

// Tab Components
function OverviewTab({ student }: { student: Student }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Personal Information - Enhanced */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem label="Student ID" value={student.id} />
            <InfoItem label="Date of Birth" value={student.dateOfBirth} />
            <InfoItem label="Gender" value={student.gender} />
            <InfoItem label="Nationality" value={student.nationality} />
            <InfoItem label="Cohort" value={student.program.cohort} />
            <InfoItem
              label="Expected Graduation"
              value={student.program.endDate}
            />
            <div className="col-span-2">
              <p className="text-sm text-gray-500 mb-1">Address</p>
              <p className="font-medium text-gray-900 flex items-center gap-2">
                <MapPin size={16} style={{ color: "#6d006d" }} />
                {student.address}
              </p>
            </div>
          </div>
        </div>

        {/* Program Information from B */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Program Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem
              icon={<BookOpen size={16} />}
              label="Track"
              value={student.program.track}
            />
            <InfoItem
              icon={<Users size={16} />}
              label="Cohort"
              value={student.program.cohort}
            />
            <InfoItem
              icon={<Calendar size={16} />}
              label="Start Date"
              value={student.program.startDate}
            />
            <InfoItem
              icon={<Calendar size={16} />}
              label="End Date"
              value={student.program.endDate}
            />
            <InfoItem
              icon={<UserCheck size={16} />}
              label="Instructor"
              value={student.program.instructor}
            />
          </div>
        </div>
      </div>

      {/* Quick Stats - Enhanced */}
      <div className="space-y-6">
        {/* Program Progress from B */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Award size={24} style={{ color: "#6d006d" }} />
            <h3 className="font-bold text-gray-900">Program Progress</h3>
          </div>
          <div className="text-center">
            <div className="relative inline-block">
              <svg className="w-32 h-32" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#6d006d"
                  strokeWidth="3"
                  strokeDasharray={`${student.program.progress}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">
                  {student.program.progress}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance from A */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Clock size={24} style={{ color: "#6d006d" }} />
            <h3 className="font-bold text-gray-900">Attendance</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {student.attendance.percentage}%
          </p>
          <p className="text-sm text-gray-600 mt-1">
            {student.attendance.present} of {student.attendance.total} classes
          </p>
        </div>

        {/* Payment Summary from B */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Payment Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Fee:</span>
              <span className="font-semibold">
                ₦{student.payment.totalFee.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Paid:</span>
              <span className="text-green-600 font-semibold">
                ₦{student.payment.amountPaid.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Balance:</span>
              <span className="text-red-600 font-semibold">
                ₦{student.payment.balance.toLocaleString()}
              </span>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="rounded-full h-2 transition-all duration-300"
                  style={{
                    width: `${
                      (student.payment.amountPaid / student.payment.totalFee) *
                      100
                    }%`,
                    backgroundColor: "#6d006d",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PaymentTabProps {
  student: Student;
  paymentPercentage: number;
  getStatusColor: (status: string) => string;
  getPaymentStatusIcon: (status: string) => React.ReactNode;
}

function PaymentTab({
  student,
  paymentPercentage,
  getStatusColor,
  getPaymentStatusIcon,
}: PaymentTabProps) {
  return (
    <div className="space-y-6">
      {/* Payment Stats from B */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-800 font-semibold">Total Paid</p>
              <p className="text-2xl font-bold text-green-900">
                ₦{student.payment.amountPaid.toLocaleString()}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-800 font-semibold">Balance</p>
              <p className="text-2xl font-bold text-yellow-900">
                ₦{student.payment.balance.toLocaleString()}
              </p>
            </div>
            <Clock className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-800 font-semibold">Completion</p>
              <p className="text-2xl font-bold text-blue-900">
                {paymentPercentage.toFixed(1)}%
              </p>
            </div>
            <Award className="w-8 h-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Payment Progress from A */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Payment Progress
        </h3>
        <div className="mb-2 flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Payment Plan: {student.payment.paymentPlan}
          </span>
          <span className="font-bold text-gray-900">
            {paymentPercentage.toFixed(1)}% Completed
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="h-4 rounded-full transition-all duration-300"
            style={{
              width: `${paymentPercentage}%`,
              backgroundColor: "#6d006d",
            }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Next Payment Due: {student.payment.nextPaymentDue}</span>
          <span>Balance: ₦{student.payment.balance.toLocaleString()}</span>
        </div>
      </div>

      {/* Transaction History - Enhanced */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">
            Transaction History
          </h3>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Send size={18} />
              Send Reminder
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#6d006d" }}
            >
              <Award size={18} />
              Record Payment
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Payment ID
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Amount
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Method
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Due Date
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {student.payment.transactions.map((transaction: Transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">
                    {transaction.id}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {transaction.date}
                  </td>
                  <td className="py-3 px-4 text-sm font-semibold text-gray-900">
                    {transaction.amount > 0
                      ? `₦${transaction.amount.toLocaleString()}`
                      : "-"}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {transaction.method}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {transaction.dueDate}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {getPaymentStatusIcon(transaction.status)}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          transaction.status
                        )}`}
                      >
                        {transaction.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function AcademicTab({
  student,
  getStatusColor,
}: {
  student: Student;
  getStatusColor: (status: string) => string;
}) {
  return (
    <div className="space-y-6">
      {/* Courses Progress from A */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Course Progress
        </h3>
        <div className="space-y-4">
          {student.courses.map((course, index: number) => (
            <div
              key={index}
              className="border-b border-gray-100 pb-4 last:border-0"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{course.name}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                        course.status
                      )}`}
                    >
                      {course.status}
                    </span>
                    {course.grade !== "-" && (
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "#6d006d" }}
                      >
                        Grade: {course.grade}
                      </span>
                    )}
                  </div>
                </div>
                <span className="font-bold text-gray-900">
                  {course.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${course.progress}%`,
                    backgroundColor: "#6d006d",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects from A */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Projects</h3>
        <div className="space-y-3">
          {student.projects.map((project, index: number) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <h4 className="font-semibold text-gray-900">{project.name}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Submitted: {project.submittedDate}
                </p>
              </div>
              <div className="text-right">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
                {project.grade !== "-" && (
                  <p
                    className="text-sm font-semibold mt-1"
                    style={{ color: "#6d006d" }}
                  >
                    Grade: {project.grade}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PerformanceTab({ student }: { student: Student }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900">Performance Metrics</h3>
        <div className="space-y-4">
          <MetricItem
            label="Assignments"
            score={student.performance.assignments}
          />
          <MetricItem label="Projects" score={student.performance.projects} />
          <MetricItem
            label="Attendance"
            score={student.performance.attendance}
          />
          <div className="pt-4 border-t border-gray-200">
            <MetricItem
              label="Overall Performance"
              score={student.performance.overall}
              isOverall
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          <ActivityItem
            title="Advanced React Project"
            date="2024-11-15"
            score={95}
            type="project"
          />
          <ActivityItem
            title="JavaScript Fundamentals Quiz"
            date="2024-11-10"
            score={88}
            type="assignment"
          />
          <ActivityItem
            title="Database Design Assignment"
            date="2024-11-05"
            score={92}
            type="assignment"
          />
        </div>
      </div>
    </div>
  );
}

function DocumentsTab({
  student,
  getStatusColor,
}: {
  student: Student;
  getStatusColor: (status: string) => string;
}) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-900">Student Documents</h3>
        <button
          className="flex items-center gap-2 px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#6d006d" }}
        >
          <Upload size={18} />
          Upload Document
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Document Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Upload Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {student.documents.map((doc, index: number) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {doc.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {doc.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {doc.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      doc.status
                    )}`}
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="font-medium" style={{ color: "#6d006d" }}>
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Helper Components
function InfoItem({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <div className="flex items-center gap-2">
        {icon && <span style={{ color: "#6d006d" }}>{icon}</span>}
        <p className="font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );
}

function MetricItem({
  label,
  score,
  isOverall = false,
}: {
  label: string;
  score: number;
  isOverall?: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span
          className={`font-medium ${isOverall ? "text-lg" : "text-gray-700"}`}
          style={isOverall ? { color: "#6d006d" } : {}}
        >
          {label}
        </span>
        <span
          className={`font-bold ${isOverall ? "text-xl" : ""}`}
          style={{ color: "#6d006d" }}
        >
          {score}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="rounded-full h-2 transition-all duration-300"
          style={{
            width: `${score}%`,
            backgroundColor: "#6d006d",
          }}
        ></div>
      </div>
    </div>
  );
}

function ActivityItem({
  title,
  date,
  score,
  type,
}: {
  title: string;
  date: string;
  score: number;
  type: string;
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <div className="text-right">
        <p className="font-bold" style={{ color: "#6d006d" }}>
          {score}%
        </p>
        <p className="text-xs text-gray-500 capitalize">{type}</p>
      </div>
    </div>
  );
}
