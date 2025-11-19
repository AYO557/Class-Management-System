import { useState } from "react";
import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  Edit,
  Mail,
  Phone,
  Calendar,
  MapPin,
  BookOpen,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Download,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data - replace with actual API call
const mockStudentData = {
  id: "STU-2024-001",
  firstName: "Ayomide",
  lastName: "Olasupo",
  email: "ayomide.olasupo@bafuto.org",
  phone: "+234 812 345 6789",
  dateOfBirth: "2003-06-15",
  gender: "Male",
  nationality: "Nigerian",
  address: "12 Unity Close, Lagos, Nigeria",
  enrollmentDate: "2024-09-01",
  status: "active",

  program: {
    track: "Full Stack Development",
    cohort: "FSD-2024-Q3",
    startDate: "2024-09-01",
    endDate: "2025-03-01",
    progress: 65,
    instructor: "David Thompson",
  },

  payment: {
    totalFee: 750000,
    paid: 600000,
    balance: 150000,
    currency: "NGN",
    paymentHistory: [
      {
        id: "PAY-001",
        date: "2024-09-01",
        amount: 300000,
        method: "Bank Transfer",
        status: "completed",
        dueDate: "2024-09-01",
      },
      {
        id: "PAY-002",
        date: "2024-10-15",
        amount: 300000,
        method: "Card",
        status: "completed",
        dueDate: "2024-10-15",
      },
      {
        id: "PAY-003",
        date: "2024-11-30",
        amount: 150000,
        method: "Pending",
        status: "pending",
        dueDate: "2024-11-30",
      },
    ],
  },

  performance: {
    assignments: 85,
    projects: 92,
    attendance: 88,
    overall: 88,
  },
};

export default function ViewStudentPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const student = mockStudentData; // In real app, fetch by id

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
    switch (status) {
      case "active":
        return `${baseClasses} bg-green-100 text-green-800`;
      case "inactive":
        return `${baseClasses} bg-gray-100 text-gray-800`;
      case "suspended":
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const getPaymentStatus = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "failed":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/students">
                <Button variant="ghost" className="p-2 hover:bg-gray-100">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 font-main">
                  Student Details
                </h1>
                <p className="text-gray-600">
                  Manage and view student information
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </Button>
              <Link to={`/students/${id}/edit`}>
                <Button className="flex items-center space-x-2 bg-darkpurple hover:bg-tertiary">
                  <Edit className="w-4 h-4" />
                  <span>Edit Student</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Student Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gradient-to-br from-darkpurple to-secondary rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white font-main">
                  {student.firstName[0]}
                  {student.lastName[0]}
                </span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 font-main">
                  {student.firstName} {student.lastName}
                </h2>
                <p className="text-gray-600 mt-1">{student.program.track}</p>
                <div className="flex items-center space-x-4 mt-3">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{student.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{student.phone}</span>
                  </div>
                  <div className={getStatusBadge(student.status)}>
                    {student.status.charAt(0).toUpperCase() +
                      student.status.slice(1)}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-darkpurple font-main">
                {student.id}
              </p>
              <p className="text-gray-600 text-sm">Student ID</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {["overview", "payment", "performance", "documents"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm capitalize font-main ${
                      activeTab === tab
                        ? "border-secondary text-secondary"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab === "overview"
                      ? "Overview"
                      : tab === "payment"
                      ? "Payment Info"
                      : tab === "performance"
                      ? "Performance"
                      : "Documents"}
                  </button>
                )
              )}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "overview" && <OverviewTab student={student} />}
            {activeTab === "payment" && (
              <PaymentTab
                student={student}
                getPaymentStatus={getPaymentStatus}
              />
            )}
            {activeTab === "performance" && (
              <PerformanceTab student={student} />
            )}
            {activeTab === "documents" && <DocumentsTab />}
          </div>
        </div>
      </div>
    </div>
  );
}

// Overview Tab Component
function OverviewTab({ student }: { student: typeof mockStudentData }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Personal Information */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 font-main">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem
              icon={<Calendar className="w-4 h-4" />}
              label="Date of Birth"
              value={student.dateOfBirth}
            />
            <InfoItem
              icon={<User className="w-4 h-4" />}
              label="Gender"
              value={student.gender}
            />
            <InfoItem
              icon={<Globe className="w-4 h-4" />}
              label="Nationality"
              value={student.nationality}
            />
            <InfoItem
              icon={<MapPin className="w-4 h-4" />}
              label="Address"
              value={student.address}
            />
          </div>
        </div>

        {/* Program Information */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 font-main">
            Program Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem
              icon={<BookOpen className="w-4 h-4" />}
              label="Track"
              value={student.program.track}
            />
            <InfoItem
              icon={<Users className="w-4 h-4" />}
              label="Cohort"
              value={student.program.cohort}
            />
            <InfoItem
              icon={<Calendar className="w-4 h-4" />}
              label="Start Date"
              value={student.program.startDate}
            />
            <InfoItem
              icon={<Calendar className="w-4 h-4" />}
              label="End Date"
              value={student.program.endDate}
            />
            <InfoItem
              icon={<UserCheck className="w-4 h-4" />}
              label="Instructor"
              value={student.program.instructor}
            />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-darkpurple to-secondary rounded-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-4 font-main">
            Program Progress
          </h3>
          <div className="text-center">
            <div className="relative inline-block">
              <svg className="w-32 h-32" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
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

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 font-main">
            Payment Summary
          </h3>
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
                ₦{student.payment.paid.toLocaleString()}
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
                  className="bg-secondary rounded-full h-2"
                  style={{
                    width: `${
                      (student.payment.paid / student.payment.totalFee) * 100
                    }%`,
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

interface Payment {
  id: string;
  date: string;
  amount: number;
  method: string;
  status: string;
  dueDate: string;
}

// Payment Tab Component
function PaymentTab({
  student,
  getPaymentStatus,
}: {
  student: typeof mockStudentData;
  getPaymentStatus: (status: string) => React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-800 font-semibold">Total Paid</p>
              <p className="text-2xl font-bold text-green-900">
                ₦{student.payment.paid.toLocaleString()}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-800 font-semibold">Pending</p>
              <p className="text-2xl font-bold text-yellow-900">
                ₦{student.payment.balance.toLocaleString()}
              </p>
            </div>
            <Clock className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-800 font-semibold">Completion</p>
              <p className="text-2xl font-bold text-blue-900">
                {Math.round(
                  (student.payment.paid / student.payment.totalFee) * 100
                )}
                %
              </p>
            </div>
            <DollarSign className="w-8 h-8 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900 font-main">
            Payment History
          </h3>
          <Button className="bg-secondary hover:bg-quaternary flex items-center space-x-2">
            <Send className="w-4 h-4" />
            <span>Send Reminder</span>
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {student.payment.paymentHistory.map((payment: Payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {payment.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₦{payment.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.method}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.dueDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {getPaymentStatus(payment.status)}
                      <span className="text-sm text-gray-900 capitalize">
                        {payment.status}
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

// Performance Tab Component
function PerformanceTab({ student }: { student: typeof mockStudentData }) {
  const performance = student.performance;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 font-main">
          Performance Metrics
        </h3>

        <div className="space-y-4">
          <MetricItem label="Assignments" score={performance.assignments} />
          <MetricItem label="Projects" score={performance.projects} />
          <MetricItem label="Attendance" score={performance.attendance} />
          <div className="pt-4 border-t border-gray-200">
            <MetricItem
              label="Overall Performance"
              score={performance.overall}
              isOverall
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 font-main">
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

// Documents Tab Component
function DocumentsTab() {
  const documents = [
    {
      name: "Admission Form",
      type: "PDF",
      date: "2024-09-01",
      status: "Approved",
    },
    {
      name: "ID Card Photo",
      type: "JPG",
      date: "2024-09-01",
      status: "Approved",
    },
    {
      name: "Academic Transcript",
      type: "PDF",
      date: "2024-09-15",
      status: "Pending",
    },
    {
      name: "Payment Receipts",
      type: "ZIP",
      date: "2024-10-01",
      status: "Approved",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 font-main">
          Student Documents
        </h3>
        <Button className="bg-secondary hover:bg-quaternary">
          Upload Document
        </Button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
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
            {documents.map((doc, index) => (
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
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      doc.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-secondary hover:text-darkpurple font-medium">
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
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-darkpurple">{icon}</div>
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-sm text-gray-900">{value}</p>
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
          className={`font-medium ${
            isOverall ? "text-lg text-darkpurple" : "text-gray-700"
          }`}
        >
          {label}
        </span>
        <span
          className={`font-bold ${
            isOverall ? "text-xl text-secondary" : "text-gray-900"
          }`}
        >
          {score}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`rounded-full h-2 ${
            score >= 90
              ? "bg-green-500"
              : score >= 80
              ? "bg-secondary"
              : score >= 70
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
          style={{ width: `${score}%` }}
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
    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <div className="text-right">
        <p className="font-bold text-secondary">{score}%</p>
        <p className="text-xs text-gray-500 capitalize">{type}</p>
      </div>
    </div>
  );
}

// Add missing Lucide icons
function User({ className }: { className?: string }) {
  return <div className={className}>👤</div>;
}

function Globe({ className }: { className?: string }) {
  return <div className={className}>🌍</div>;
}

function Users({ className }: { className?: string }) {
  return <div className={className}>👥</div>;
}

function UserCheck({ className }: { className?: string }) {
  return <div className={className}>✓👤</div>;
}
