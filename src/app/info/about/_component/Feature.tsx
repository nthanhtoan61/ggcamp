interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Feature({icon, title, description}: FeatureProps) {
  return (
    <div className="text-center px-[1vw]">
      <div className="mx-auto w-[5vw] h-[5vw] rounded-full bg-green-50 flex items-center justify-center mb-[1.5vh]">
        {icon}
      </div>
      <h3 className="font-semibold text-[1.7vw] text-[#274423]">{title}</h3>
      <p className="text-[1vw] mt-[1vh] text-gray-500">{description}</p>
    </div>
  );
}
