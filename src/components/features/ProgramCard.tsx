import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

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
  return (
    <div className="el-item uk-grid-item-match">
      <Link
        className="uk-card uk-card-default uk-card-small uk-card-hover uk-link-toggle"
        href={`/camp-profiles/${slug}`}
      >
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
        <div className="uk-card-body uk-margin-remove-first-child !pd-1vw">
          <h3 className="el-title uk-h3 uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
            {title}
          </h3>
          {price !== "0" && (
            <div className="el-meta uk-margin-top text-black">from {price} USD</div>
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
            <div className="el-link uk-button uk-button-default">
              Camp Details
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
