"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

const newsItems = [
  {
    id: "lunch-12-11-2024",
    title: "Lunch info Session 12.11.2024",
    description:
      "Take part in our information sessions and find out more about staying at any of our camp locations.",
    language: "German",
    time: "13:00 - 14:30 (CET)",
    link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MmMwZWE2M2MtMTBjMC00ODFlLWEyYTEtYzNjOTE4Zjc1YmRj%40thread.v2/0?context=%7b%22Tid%22%3a%229221dffc-55ab-403b-a4f3-f4c068bdf934%22%2c%22Oid%22%3a%22981a5c5d-e044-4f6d-80ac-5483350beea4%22%7d",
  },
  {
    id: "evening-10-12-2024",
    title: "Evening info Session 10.12.2024",
    description:
      "Take part in our information sessions and find out more about staying at any of our camp locations.",
    language: "English",
    time: "18:00 - 19:30 (CET)",
    link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YWY2ZDk0YmEtYjZiNS00OTllLTk0MWMtN2EyMWUzNTBiOTdl%40thread.v2/0?context=%7b%22Tid%22%3a%229221dffc-55ab-403b-a4f3-f4c068bdf934%22%2c%22Oid%22%3a%22981a5c5d-e044-4f6d-80ac-5483350beea4%22%7d",
  },
  {
    id: "lunch-07-01-2025",
    title: "Lunch info Session 07.01.2025",
    description:
      "Take part in our information sessions and find out more about staying at any of our camp locations.",
    language: "English",
    time: "13:00 - 14:30 (CET)",
    link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDE3OGIzMjYtNTVmNy00ZmNiLWE0OWEtMDU0N2FlNGNlZTM5%40thread.v2/0?context=%7b%22Tid%22%3a%229221dffc-55ab-403b-a4f3-f4c068bdf934%22%2c%22Oid%22%3a%22981a5c5d-e044-4f6d-80ac-5483350beea4%22%7d",
  },
  {
    id: "evening-11-02-2025",
    title: "Evening info Session 11.02.2025",
    description:
      "Take part in our information sessions and find out more about staying at any of our camp locations.",
    language: "German",
    time: "18:00 - 19:30 (CET)",
    link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZmU0MjZkNTEtZmQxNC00ZWEzLThiZjEtMmJkZTBjM2M1ZTQ5%40thread.v2/0?context=%7b%22Tid%22%3a%229221dffc-55ab-403b-a4f3-f4c068bdf934%22%2c%22Oid%22%3a%22981a5c5d-e044-4f6d-80ac-5483350beea4%22%7d",
  },
  {
    id: "lunch-25-03-2025",
    title: "Lunch info Session 25.03.2025",
    description:
      "Take part in our information sessions and find out more about staying at any of our camp locations.",
    language: "English",
    time: "13:00 - 14:30 (CET)",
    link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NGRmMDY0Y2MtODU2Yy00ODMwLThmMzEtZDNhNzIxNzMxOWU3%40thread.v2/0?context=%7b%22Tid%22%3a%229221dffc-55ab-403b-a4f3-f4c068bdf934%22%2c%22Oid%22%3a%22981a5c5d-e044-4f6d-80ac-5483350beea4%22%7d",
  },
  {
    id: "evening-15-04-2025",
    title: "Evening info Session 15.04.2025",
    description:
      "Take part in our information sessions and find out more about staying at any of our camp locations.",
    language: "German",
    time: "18:00 - 19:30 (CEST)",
    link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YjgzNjQ0MDQtZmVhMy00ZTllLTgzMzMtODYzMjdhM2I5MDNi%40thread.v2/0?context=%7b%22Tid%22%3a%229221dffc-55ab-403b-a4f3-f4c068bdf934%22%2c%22Oid%22%3a%22981a5c5d-e044-4f6d-80ac-5483350beea4%22%7d",
  },
  {
    id: "lunch-13-05-2025",
    title: "Lunch info Session 13.05.2025",
    description:
      "Take part in our information sessions and find out more about staying at any of our camp locations.",
    language: "German",
    time: "13:00 - 14:30 (CEST)",
    link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MGY4OTYyNzgtNTdlNy00NzYzLWJlNGItYjlhN2NiZTdhZTA3%40thread.v2/0?context=%7b%22Tid%22%3a%229221dffc-55ab-403b-a4f3-f4c068bdf934%22%2c%22Oid%22%3a%22981a5c5d-e044-4f6d-80ac-5483350beea4%22%7d",
  },
  {
    id: "open-house-18-05-2025",
    title: "Camp Adventure open house 18.05.2025",
    description:
      "Online info sessions not convincing enough? Then come and visit us at our Lüneburger Heide location and try out some of our amazing activities",
    language: "",
    time: "12:00 - 16:00 (CEST)",
    link: "",
  },
  {
    id: "lunch-10-06-2025",
    title: "Lunch info Session 10.06.2025",
    description:
      "Take part in our information sessions and find out more about staying at any of our camp locations.",
    language: "English",
    time: "13:00 - 14:30 (CEST)",
    link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZmZmMGFlMzctMDg2MC00MDEwLWIzMWEtZGY0NmViNzFiOWMy%40thread.v2/0?context=%7b%22Tid%22%3a%229221dffc-55ab-403b-a4f3-f4c068bdf934%22%2c%22Oid%22%3a%22981a5c5d-e044-4f6d-80ac-5483350beea4%22%7d",
  },
  {
    id: "evening-24-06-2025",
    title: "Evening info Session 24.06.2025",
    description:
      "Take part in our information sessions and find out more about staying at any of our camp locations.",
    language: "German",
    time: "18:00 - 19:30 (CEST)",
    link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MmNmMzg2YjQtMTY4NS00ZWJhLWJlZjUtZjgyNGI2NzM3ZGNi%40thread.v2/0?context=%7b%22Tid%22%3a%229221dffc-55ab-403b-a4f3-f4c068bdf934%22%2c%22Oid%22%3a%22981a5c5d-e044-4f6d-80ac-5483350beea4%22%7d",
  },
  {
    id: "lunch-15-07-2025",
    title: "Lunch info Session 15.07.2025",
    description:
      "Take part in our information sessions and find out more about staying at any of our camp locations.",
    language: "English",
    time: "13:00 - 14:30 (CEST)",
    link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NGEzNGI2MWMtODA4YS00ZmZlLTlkZDktODZkNjc3ZTg2YmJj%40thread.v2/0?context=%7b%22Tid%22%3a%229221dffc-55ab-403b-a4f3-f4c068bdf934%22%2c%22Oid%22%3a%22981a5c5d-e044-4f6d-80ac-5483350beea4%22%7d",
  },
];

// Instagram post URLs
const instagramPosts = [
  "https://www.instagram.com/p/C8kaABgMmZO/",
  "https://www.instagram.com/p/CzoIHFphgaR/",
  "https://www.instagram.com/p/Czb7hVURQ77/",
  "https://www.instagram.com/p/Cwhqg6ystEs/",
  "https://www.instagram.com/p/CleX2Vhsu5d/",
  "https://www.instagram.com/p/ClFIc6LIRZp/",
  "https://www.instagram.com/p/CjLGvpVNaYl/",
  "https://www.instagram.com/p/CZcIO-LKvP-/",
  "https://www.instagram.com/p/CZbO6ffNGV2/",
  "https://www.instagram.com/p/CZYqH4VNy-F/",
  "https://www.instagram.com/p/CZOW9B-ofM8/",
  "https://www.instagram.com/p/CZGoi39tIIn/",
  "https://www.instagram.com/p/CY6ubdcM325/",
  "https://www.instagram.com/p/CY6YA3ytOAC/",
  "https://www.instagram.com/p/CY0m_ReFa8n/",
  "https://www.instagram.com/p/CYcn-N-MsTn/",
];

export default function NewsPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://www.instagram.com/embed.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-primary uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-top-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/6a/news_header-6adb590b.jpeg"
            )})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <div
                  className="uk-heading-large uk-text-center"
                  uk-scrollspy-class=""
                >
                  News
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="uk-section-muted uk-section-overlap uk-section uk-padding-remove-bottom">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h1 className="uk-h1 uk-text-center">
                Latest news from Camp Adventure
              </h1>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-margin">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match"
                  uk-grid=""
                >
                  {newsItems.map((item) => (
                    <div key={item.id}>
                      <div className="el-item uk-panel uk-margin-remove-first-child">
                        <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                          {item.title}
                        </h3>
                        <div className="el-content uk-panel uk-margin-top">
                          <p>{item.description}</p>
                          {item.language && <p>Language: {item.language}</p>}
                          {item.time && <p>{item.time}</p>}
                          {!item.language && item.time && <p>{item.time}</p>}
                        </div>
                        {item.link && (
                          <div className="uk-margin-top">
                            <a
                              href={item.link}
                              className="el-link uk-button uk-button-default"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Click here to join
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Feed Section */}
      <div className="uk-section-muted uk-section-overlap uk-section">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            {instagramPosts.map((postUrl, index) => (
              <div key={index} className="uk-width-1-3@m">
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      position: "relative",
                      maxWidth: "400px",
                      minWidth: "100px",
                      margin: "0 auto",
                    }}
                  >
                    <blockquote
                      className="instagram-media"
                      data-instgrm-captioned
                      data-instgrm-permalink={`${postUrl}?utm_source=ig_embed&utm_campaign=loading`}
                      data-instgrm-version="14"
                      style={{
                        background: "#FFF",
                        border: "0",
                        borderRadius: "3px",
                        boxShadow:
                          "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                        margin: "1px",
                        maxWidth: "400px",
                        minWidth: "326px",
                        padding: "0",
                        width: "99.375%",
                      }}
                    >
                      <div style={{ padding: "16px" }}>
                        <a
                          href={`${postUrl}?utm_source=ig_embed&utm_campaign=loading`}
                          style={{
                            background: "#FFFFFF",
                            lineHeight: "0",
                            padding: "0 0",
                            textAlign: "center",
                            textDecoration: "none",
                            width: "100%",
                          }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#F4F4F4",
                                borderRadius: "50%",
                                flexGrow: "0",
                                height: "40px",
                                marginRight: "14px",
                                width: "40px",
                              }}
                            ></div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: "1",
                                justifyContent: "center",
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#F4F4F4",
                                  borderRadius: "4px",
                                  flexGrow: "0",
                                  height: "14px",
                                  marginBottom: "6px",
                                  width: "100px",
                                }}
                              ></div>
                              <div
                                style={{
                                  backgroundColor: "#F4F4F4",
                                  borderRadius: "4px",
                                  flexGrow: "0",
                                  height: "14px",
                                  width: "60px",
                                }}
                              ></div>
                            </div>
                          </div>
                          <div style={{ padding: "19% 0" }}></div>
                          <div
                            style={{
                              display: "block",
                              height: "50px",
                              margin: "0 auto 12px",
                              width: "50px",
                            }}
                          >
                            <svg
                              width="50px"
                              height="50px"
                              viewBox="0 0 60 60"
                              version="1.1"
                              xmlns="https://www.w3.org/2000/svg"
                              xmlnsXlink="https://www.w3.org/1999/xlink"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  transform="translate(-511.000000, -20.000000)"
                                  fill="#000000"
                                >
                                  <g>
                                    <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div style={{ paddingTop: "8px" }}>
                            <div
                              style={{
                                color: "#3897f0",
                                fontFamily: "Arial,sans-serif",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: "550",
                                lineHeight: "18px",
                              }}
                            >
                              View this post on Instagram
                            </div>
                          </div>
                          <div style={{ padding: "12.5% 0" }}></div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginBottom: "14px",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  backgroundColor: "#F4F4F4",
                                  borderRadius: "50%",
                                  height: "12.5px",
                                  width: "12.5px",
                                  transform: "translateX(0px) translateY(7px)",
                                }}
                              ></div>
                              <div
                                style={{
                                  backgroundColor: "#F4F4F4",
                                  height: "12.5px",
                                  transform:
                                    "rotate(-45deg) translateX(3px) translateY(1px)",
                                  width: "12.5px",
                                  flexGrow: "0",
                                  marginRight: "14px",
                                  marginLeft: "2px",
                                }}
                              ></div>
                              <div
                                style={{
                                  backgroundColor: "#F4F4F4",
                                  borderRadius: "50%",
                                  height: "12.5px",
                                  width: "12.5px",
                                  transform:
                                    "translateX(9px) translateY(-18px)",
                                }}
                              ></div>
                            </div>
                            <div style={{ marginLeft: "8px" }}>
                              <div
                                style={{
                                  backgroundColor: "#F4F4F4",
                                  borderRadius: "50%",
                                  flexGrow: "0",
                                  height: "20px",
                                  width: "20px",
                                }}
                              ></div>
                              <div
                                style={{
                                  width: "0",
                                  height: "0",
                                  borderTop: "2px solid transparent",
                                  borderLeft: "6px solid #f4f4f4",
                                  borderBottom: "2px solid transparent",
                                  transform:
                                    "translateX(16px) translateY(-4px) rotate(30deg)",
                                }}
                              ></div>
                            </div>
                            <div style={{ marginLeft: "auto" }}>
                              <div
                                style={{
                                  width: "0px",
                                  borderTop: "8px solid #F4F4F4",
                                  borderRight: "8px solid transparent",
                                  transform: "translateY(16px)",
                                }}
                              ></div>
                              <div
                                style={{
                                  backgroundColor: "#F4F4F4",
                                  flexGrow: "0",
                                  height: "12px",
                                  width: "16px",
                                  transform: "translateY(-4px)",
                                }}
                              ></div>
                              <div
                                style={{
                                  width: "0",
                                  height: "0",
                                  borderTop: "8px solid #F4F4F4",
                                  borderLeft: "8px solid transparent",
                                  transform: "translateY(-4px) translateX(8px)",
                                }}
                              ></div>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              flexGrow: "1",
                              justifyContent: "center",
                              marginBottom: "24px",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#F4F4F4",
                                borderRadius: "4px",
                                flexGrow: "0",
                                height: "14px",
                                marginBottom: "6px",
                                width: "224px",
                              }}
                            ></div>
                            <div
                              style={{
                                backgroundColor: "#F4F4F4",
                                borderRadius: "4px",
                                flexGrow: "0",
                                height: "14px",
                                width: "144px",
                              }}
                            ></div>
                          </div>
                        </a>
                        <p
                          style={{
                            color: "#c9c8cd",
                            fontFamily: "Arial,sans-serif",
                            fontSize: "14px",
                            lineHeight: "17px",
                            marginBottom: "0",
                            marginTop: "8px",
                            overflow: "hidden",
                            padding: "8px 0 7px",
                            textAlign: "center",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <a
                            href={`${postUrl}?utm_source=ig_embed&utm_campaign=loading`}
                            style={{
                              color: "#c9c8cd",
                              fontFamily: "Arial,sans-serif",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "normal",
                              lineHeight: "17px",
                              textDecoration: "none",
                            }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            A post shared by Camp Adventure
                            (@campadventuregermany)
                          </a>
                        </p>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
