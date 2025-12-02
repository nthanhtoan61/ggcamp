interface StatCardProps {
  number: string;
  description: string;
}

export default function StatCard({number, description}: StatCardProps) {
  return (
    <div className="flex flex-col justify-between items-center">
      <p className="text-[7.5vw] md:text-[5vw] text-white! lg:text-[4vw] font-semibold">
        {number}
      </p>
      <p className="text-[3.2vw] md:text-[1vw] text-white! text-center">
        {description}
      </p>
    </div>
  );
}
