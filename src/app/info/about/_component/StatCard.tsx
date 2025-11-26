interface StatCardProps {
  number: string;
  description: string;
}

export default function StatCard({number, description}: StatCardProps) {
  return (
    <div className="flex flex-col justify-between items-center">
      <p className="text-[5vw]">{number}</p>
      <p className="text-[1vw]">{description}</p>
    </div>
  );
}
