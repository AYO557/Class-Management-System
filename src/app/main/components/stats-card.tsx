import { ChartBarIncreasing } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
}

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-darkpurple text-white rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-lightgraypurple">
            <ChartBarIncreasing size={20} />
          </div>
          <div>
            <h3 className="xl:text-lg font-medium">{title}</h3>
            <p className="text-sm">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
