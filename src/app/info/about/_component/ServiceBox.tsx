interface ServiceBoxProps {
  title: string;
  description: string;
  bgColor?: string; // tailwind background class, default 'bg-white'
}

export default function ServiceBox({
  title,
  description,
  bgColor = "bg-white",
}: ServiceBoxProps) {
  return (
    <div
      className={`${bgColor} px-4 py-3 md:px-[0.5vw] md:py-[0.5vh] rounded-[1rem] shadow-sm`}
    >
      <p className="text-[#274423] text-base md:text-[1.458vw] font-semibold flex items-center">
        {title}
      </p>
      <p className="text-gray-500 text-sm md:text-[1vw] md:leading-[1vw] leading-relaxed mt-1">
        {description}
      </p>
    </div>
  );
}
