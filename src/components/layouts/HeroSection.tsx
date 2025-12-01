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
  buttonContent?: ReactNode;
  children?: ReactNode;
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
  buttonContent,
  children,
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
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: "8vw", // Extra padding to ensure image bottom is visible
        }}
      >
        <div
          className="uk-position-cover"
          style={{ backgroundColor: overlayColor }}
        ></div>
        <div
          className="uk-container uk-position-relative"
          style={{ zIndex: 1, maxWidth: "65.25rem", margin: "0 auto" }}
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
              {buttonContent && (
                <div className="flex flex-col items-center justify-center text-center w-full mt-4">
                  {buttonContent}
                </div>
              )}
            </div>
          </div>
        </div>
        {children && (
          <div className="uk-container uk-container-large" style={{ zIndex: 1, maxWidth: "100%", marginTop: "8rem", position: "relative", paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
            <div className="flex flex-col items-center justify-center w-full">
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
