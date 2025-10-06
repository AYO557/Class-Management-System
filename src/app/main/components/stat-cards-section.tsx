import StatsCard from "./stats-card";

interface StatsCardsSectionProps {
  data: {
    title: string;
    value: string | number;
  }[];
}

export default function StatsCardsSection({ data }: StatsCardsSectionProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-2 gap-4 mt-10">
      {data.map((item) => (
        <StatsCard key={item.title} {...item} />
      ))}
    </div>
  );
}
