import Image from "next/image";
import {getTemplateImageUrl} from "@/lib/assets";

interface EventCardProps {
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  authorName: string;
  authorRole: string;
  authorImage?: string;
}

export default function EventCard({
  imageUrl,
  date,
  title,
  description,
  authorName,
  authorRole,
  authorImage,
}: EventCardProps) {
  return (
    <article className="bg-white rounded-[1vw] shadow-md overflow-hidden">
      <div className="relative h-[30vh]">
        <Image
          src={getTemplateImageUrl(imageUrl)}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-[2vw]">
        <div className="text-[0.9vw] text-[#2ca06c] mb-[1vw] flex items-center gap-[0.5vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1vw"
            height="1vw"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
          </svg>
          <span className="uppercase text-[0.9vw]">{date}</span>
        </div>

        <h3 className="font-semibold text-[#274423] mb-[1vw] text-[1.2vw]">
          {title}
        </h3>

        <p className="text-gray-500 mb-[1.5vw] text-[1vw] leading-[1.5vw]">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[1vw]">
            <div>
              <div className="text-[1vw] font-semibold">{authorName}</div>
              <div className="text-[0.8vw] text-gray-400">{authorRole}</div>
            </div>
          </div>

          <a
            href="#"
            className="text-[#2ca06c] flex items-center gap-[0.5vw] text-[0.9vw]"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1.2vw"
              height="1.2vw"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
