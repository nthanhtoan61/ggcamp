"use client";

import { getTemplateImageUrl } from "@/lib/assets";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string;
  backgroundImage: string;
  overlayColor?: string;
  sectionClass?: string;
  titleClass?: string;
  enableScrollspy?: boolean;
  backgroundPosition?: "top-center" | "center-center" | "bottom-center";
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  overlayColor = "rgba(0, 0, 0, 0)",
  sectionClass = "uk-section-primary",
  titleClass = "uk-heading-large uk-text-center !text-[5vw]",
  enableScrollspy = true,
  backgroundPosition = "top-center",
}: HeroSectionProps) {
  const imageUrl = getTemplateImageUrl(backgroundImage);
  const bgPositionClass =
    backgroundPosition === "center-center"
      ? "uk-background-center-center"
      : backgroundPosition === "bottom-center"
      ? "uk-background-bottom-center"
      : "uk-background-top-center";

  return (
    <div
      className={`${sectionClass} uk-section-overlap uk-position-relative`}
      style={{
        overflow: "visible", // Allow image to show fully
      }}
      {...(enableScrollspy &&
        ({
          "uk-scrollspy":
            "target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;",
        } as React.HTMLAttributes<HTMLDivElement>))}
    >
      <div
        data-src={imageUrl}
        uk-img=""
        className={`uk-background-norepeat ${bgPositionClass} uk-section uk-section-xlarge`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition:
            backgroundPosition === "center-center"
              ? "center center"
              : backgroundPosition === "bottom-center"
              ? "center bottom"
              : "center top",
          backgroundRepeat: "no-repeat",
          minHeight: "50vw",
          position: "relative",
          display: "flex",
          alignItems: "center",
          paddingBottom: "8vw", // Extra padding to ensure image bottom is visible
        }}
      >
        <div
          className="uk-position-cover"
          style={{ backgroundColor: overlayColor }}
        ></div>
        <div
          className="uk-container uk-container-large uk-position-relative"
          style={{ zIndex: 1, width: "100%" }}
        >
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h1
                className={titleClass}
                {...(enableScrollspy &&
                  ({
                    "uk-scrollspy-class": "",
                  } as React.HTMLAttributes<HTMLHeadingElement>))}
              >
                {title}
              </h1>
              {subtitle && (
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  {...(enableScrollspy &&
                    ({
                      "uk-scrollspy-class": "",
                    } as React.HTMLAttributes<HTMLDivElement>))}
                >
                  {subtitle}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
