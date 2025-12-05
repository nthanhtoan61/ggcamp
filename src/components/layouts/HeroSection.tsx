"use client";

import { getTemplateImageUrl } from "@/lib/assets";
import { ReactNode, useMemo } from "react";

interface HeroSectionProps {
  title: string | ReactNode;
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
  backgroundImage,
  overlayColor = "rgba(0, 0, 0, 0)",
  sectionClass = "uk-section-primary",
  titleClass = "uk-heading-large uk-text-center !text-[5vw]",
  enableScrollspy = true,
  backgroundPosition = "top-center",
  buttonContent,
  children,
}: HeroSectionProps) {
  // Check if backgroundImage is a full URL (from CMS) or relative path
  // Use useMemo to only recalculate when backgroundImage changes
  const imageUrl = useMemo(() => {
    const isFullUrl =
      backgroundImage.startsWith("http://") ||
      backgroundImage.startsWith("https://");
    const baseImageUrl = isFullUrl
      ? backgroundImage
      : getTemplateImageUrl(backgroundImage);
    // Add cache-busting query parameter based on image URL to force browser reload when image changes
    // Use filename from URL as cache buster - when image changes, filename changes, so browser will reload
    const cacheBuster = backgroundImage.split("/").pop() || backgroundImage;
    return `${baseImageUrl}${baseImageUrl.includes("?") ? "&" : "?"
      }v=${encodeURIComponent(cacheBuster)}`;
  }, [backgroundImage]);

  const bgPositionClass =
    backgroundPosition === "center-center"
      ? "uk-background-center-center"
      : backgroundPosition === "bottom-center"
        ? "uk-background-bottom-center"
        : "uk-background-top-center";

  return (
    <div
      className={`${sectionClass} uk-position-relative`}
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
          backgroundAttachment: "scroll",
          height: "70vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: "10vh",
          overflow: "hidden",
          clipPath: "none",
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
              {buttonContent && (
                <div className="flex flex-col items-center justify-center text-center w-full mt-4">
                  {buttonContent}
                </div>
              )}
            </div>
          </div>
        </div>
        {children && (
          <div
            style={{
              zIndex: 1,
              width: "100%",
              maxWidth: "none",
              marginTop: "20rem",
              position: "relative",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            <div className="flex flex-col items-center justify-center w-full">
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
