import {getTemplateImageUrl} from "@/lib/assets";

interface FeatureProps {
  icon: React.ReactNode | string;
  title: string;
  description: string;
}

export default function Feature({icon, title, description}: FeatureProps) {
  const renderIcon = () => {
    if (typeof icon === "string") {
      return (
        <img
          src={getTemplateImageUrl(icon)}
          alt={title}
          className="w-full h-full object-contain rounded-full"
        />
      );
    }

    return icon;
  };

  return (
    <div className="group text-center px-4 sm:px-[1vw]">
      <div className="p-4 rounded-lg transition-shadow transition-transform duration-200 bg-transparent hover:shadow-xl hover:-translate-y-1 hover:border-2 hover:border-[#e6c76a]">
        <div className="mx-auto w-16 h-16 sm:w-[5vw] sm:h-[5vw] rounded-full bg-green-50 flex items-center justify-center mb-3 sm:mb-[1.5vh]">
          {renderIcon()}
        </div>
        <h3 className="font-semibold text-lg! sm:text-[1.7vw]! text-[#274423]">
          {title}
        </h3>
        <p className="text-sm sm:text-[1vw] mt-2 sm:mt-[1vh] text-gray-500 xl:px-20">
          {description}
        </p>
      </div>
    </div>
  );
}
