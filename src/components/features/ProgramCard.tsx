"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getTemplateImageUrl } from "@/lib/assets";
import MagicButton from "../home/MagicButton";

interface ProgramCardProps {
  id: string;
  title: string;
  price: string;
  seasons: string[];
  age: string;
  location: string;
  image: string;
  slug: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  price,
  seasons,
  age,
  location,
  image,
  slug,
}) => {
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <div className="el-item uk-grid-item-match">
      <div className="uk-card uk-card-default uk-card-small uk-card-hover">
        <Link href={`/camp-profiles/${slug}`}>
          <div className="uk-card-media-top">
            <Image
              src={getTemplateImageUrl(image)}
              width={1920}
              height={1275}
              alt={`Camp Profile - ${title}`}
              className="el-image"
              loading="lazy"
            />
          </div>
        </Link>
        <div className="uk-card-body uk-margin-remove-first-child !pd-1vw">
          <Link href={`/camp-profiles/${slug}`} className="!no-underline">
            <div className="el-title uk-h3 uk-heading-bullet !text-2xl  !md:text-[2.5vw] uk-margin-top uk-margin-remove-bottom hover:!text-[var(--color-primary)] transition-colors duration-300">
              {title}
            </div>
          </Link>
          {price !== "0" && (
            <div className="el-meta uk-margin-top text-black">
              from {price} USD
            </div>
          )}
          <div className="el-content uk-panel uk-margin-top">
            <ul className="uk-list uk-list-divider text-black">
              <li>
                <span className="uk-margin-small-right" uk-icon="clock"></span>
                {seasons.join(", ")}
              </li>
              <li>
                <span className="uk-margin-small-right" uk-icon="user"></span>
                {age}
              </li>
              <li>
                <span
                  className="uk-margin-small-right"
                  uk-icon="location"
                ></span>
                {location}
              </li>
            </ul>
          </div>
          <div className="uk-margin-top">
            <MagicButton href={`/camp-profiles/${slug}`} label="Camp Detail" />
          </div>
        </div>
      </div>
    </div>
  );
};
