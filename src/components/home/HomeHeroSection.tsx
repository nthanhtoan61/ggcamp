"use client";

import { getTemplateImageUrl } from "@/lib/assets";
import { useMemo } from "react";
import MagicButton from "@/components/home/MagicButton";
import ContactBox from "@/components/home/ContactBox";

export default function HomeHeroSection() {
    const backgroundImage = "yootheme/banner/b2.jpg";

    const imageUrl = useMemo(() => {
        const isFullUrl = backgroundImage.startsWith("http://") || backgroundImage.startsWith("https://");
        const baseImageUrl = isFullUrl ? backgroundImage : getTemplateImageUrl(backgroundImage);
        const cacheBuster = backgroundImage.split("/").pop() || backgroundImage;
        return `${baseImageUrl}${baseImageUrl.includes("?") ? "&" : "?"}v=${encodeURIComponent(cacheBuster)}`;
    }, [backgroundImage]);

    return (
        <div
            className="uk-position-relative"
            style={{
                width: "98%",
                height: "130vh",
                margin: "0 auto",
                borderRadius: "2vw",
                overflow: "hidden",
                position: "relative",
                top: "-10vh",
            }}
        >
            {/* Background Image */}
            <div
                data-src={imageUrl}
                uk-img=""
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                }}
            />

            {/* Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.35)",
                }}
            />

            {/* Content Container */}
            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0 2rem",
                }}
            >
                {/* Welcome Text */}
                <div
                    className="uk-text-center"
                    style={{
                        marginBottom: "1rem",
                    }}
                    uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
                >
                </div>

                {/* Main Title */}
                <div
                    className="uk-container uk-position-relative"
                    style={{
                        maxWidth: "65.25rem",
                        margin: "0 auto",
                        zIndex: 2,
                    }}
                >
                    <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
                        <div className="uk-width-1-1@m uk-text-center">
                            <h1
                                className="uk-heading-large uk-text-center uk-text-white"
                                style={{
                                    fontSize: "clamp(2rem, 5vw, 4.5rem)",
                                    fontWeight: "bold",
                                    lineHeight: "1.2",
                                    marginBottom: "1.5rem",
                                    color: "white",
                                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                                }}
                                uk-scrollspy-class=""
                            >
                                Discover Adventure and Friendship
                            </h1>

                            {/* Description */}
                            <p
                                className="uk-text-white"
                                style={{
                                    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                                    maxWidth: "800px",
                                    margin: "0 auto 2rem",
                                    lineHeight: "1.6",
                                    color: "white",
                                    textShadow: "0 1px 5px rgba(0, 0, 0, 0.3)",
                                }}
                                uk-scrollspy-class=""
                            >
                                Step into a world where adventure meets comfort. Discover breathtaking landscapes, thrilling outdoor activities, and the serenity of luxury camping.
                            </p>

                            {/* Button */}
                            <div
                                className="flex flex-col items-center justify-center text-center w-full"
                                style={{ marginTop: "2rem" }}
                            >
                                <MagicButton href="/booking" label="Book Your Adventure" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ContactBox - Positioned at bottom */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "3rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100%",
                        maxWidth: "1200px",
                        zIndex: 3,
                        padding: "0 1rem",
                    }}
                >
                    <ContactBox />
                </div>
            </div>
        </div>
    );
}
