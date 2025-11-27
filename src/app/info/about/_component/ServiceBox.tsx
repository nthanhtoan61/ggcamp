interface ServiceBoxProps {
  title: string;
  description: string;
}

export default function ServiceBox({title, description}: ServiceBoxProps) {
  return (
    <div className="bg-white px-[0.5vw] py-[0.5vh] rounded-[1vw] shadow">
      <p className="text-[#274423] text-[1.458vw] flex items-center">{title}</p>
      <p className="text-gray-500 leading-[1vw] text-[1vw]">{description}</p>
    </div>
  );
}
