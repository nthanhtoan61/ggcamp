"use client";

import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getTemplateImageUrl } from "@/lib/assets";
import { programs } from "@/data/programs";

// Extend Window interface for Leafletg
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    L?: any;
  }
}

// Camp type definition
interface Camp {
  name: string;
  price: number;
  priceText: string;
  season: string[];
  age: number[];
  locations: string[];
  image: string;
  link: string;
  program: string;
}

export default function CampProfilesPage() {
  const [filteredCamps, setFilteredCamps] = useState<Camp[]>([]);
  const [sortBy, setSortBy] = useState("name-asc");

  // Camp data
  const camps: Camp[] = [
    {
      name: "Adventure, Sports & Creative",
      price: 395,
      priceText: "from 395 USD",
      season: ["spring", "summer", "autumn"],
      age: [12, 18],
      locations: ["northern-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/53/00_Abenteuercamp-Hike-533b20fa.jpg"
      ),
      link: "/camp-profiles/adventure-sports-creative",
      program: "adventure",
    },
    {
      name: "Arts & Crafts",
      price: 500,
      priceText: "from 500 USD",
      season: ["spring", "summer", "autumn"],
      age: [12, 18],
      locations: ["northern-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/c6/01-Kreativprogramm-in-der-Ferienfreizeit-c6e95722.jpg"
      ),
      link: "/camp-profiles/arts-crafts",
      program: "arts-crafts",
    },
    {
      name: "Climbing",
      price: 515,
      priceText: "from 515 USD",
      season: ["summer"],
      age: [12, 18],
      locations: ["south-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/40/00-Kletterkurs_Sommercamp_Bayern-40f1bd8d.jpg"
      ),
      link: "/camp-profiles/climbing",
      program: "top-rope",
    },
    {
      name: "Dancing",
      price: 520,
      priceText: "from 520 USD",
      season: ["summer", "autumn"],
      age: [12, 18],
      locations: ["northern-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/c1/00-Tanzen-im-Feriencamp-c1834fc7.jpg"
      ),
      link: "/camp-profiles/dancing",
      program: "dancing",
    },
    {
      name: "Diving",
      price: 1190,
      priceText: "from 1190 USD",
      season: ["summer"],
      age: [12, 18],
      locations: ["spain"],
      image: getTemplateImageUrl(
        "yootheme/cache/33/01-Tauchkurs-im-Sommercamp-3309e219.jpg"
      ),
      link: "/camp-profiles/diving",
      program: "diving",
    },
    {
      name: "Englisch TOEFL®",
      price: 1290,
      priceText: "from 1290 USD",
      season: ["spring", "summer"],
      age: [12, 18],
      locations: ["england"],
      image: getTemplateImageUrl(
        "yootheme/cache/b9/07-Language-Camps-by-Camp-Adventure-b9f01b6a.jpg"
      ),
      link: "/camp-profiles/englisch-toefl",
      program: "englisch-toefl",
    },
    {
      name: "Englischcamps",
      price: 530,
      priceText: "from 530 USD",
      season: ["spring", "summer", "autumn"],
      age: [12, 18],
      locations: ["england", "northern-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/ad/00-Language-Camps-by-Camp-Adventure-add7aa60.jpg"
      ),
      link: "/camp-profiles/englischcamps",
      program: "englisch",
    },
    {
      name: "Fishing",
      price: 580,
      priceText: "from 580 USD",
      season: ["spring", "summer", "autumn"],
      age: [12, 18],
      locations: ["northern-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/02/01-Angeln-im-Ferienlager-02243939.jpg"
      ),
      link: "/camp-profiles/fishing",
      program: "fishing",
    },
    {
      name: "German Camps",
      price: 610,
      priceText: "from 610 USD",
      season: ["summer"],
      age: [12, 18],
      locations: ["northern-germany", "south-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/0e/Deutschcamps-in-Deutschland-0ed3ea07.jpg"
      ),
      link: "/camp-profiles/german-camps",
      program: "german",
    },
    {
      name: "Horseback Riding",
      price: 620,
      priceText: "from 620 USD",
      season: ["summer"],
      age: [12, 18],
      locations: ["south-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/69/00-Reiten-Sommercamp-Ausritt-6930f841.jpg"
      ),
      link: "/camp-profiles/horseback-riding",
      program: "horseback",
    },
    {
      name: "Husky Camp",
      price: 525,
      priceText: "from 525 USD",
      season: ["spring", "summer", "autumn"],
      age: [12, 18],
      locations: ["northern-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/9c/00-Husky%20Camp_sommercamp%20mit%20Hunden-9c098a17.jpg"
      ),
      link: "/camp-profiles/husky-camp",
      program: "husky",
    },
    {
      name: "International Counsellor in Training (ICIT)",
      price: 995,
      priceText: "from 995 USD",
      season: ["summer"],
      age: [16, 18],
      locations: ["northern-germany", "england"],
      image: getTemplateImageUrl(
        "yootheme/cache/3b/00-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_teambuilding-3b91547c.jpg"
      ),
      link: "/academy/educational-programs/icit-eng",
      program: "icit",
    },
    {
      name: "Leadership",
      price: 1185,
      priceText: "from 1185 USD",
      season: ["summer"],
      age: [16, 18],
      locations: ["northern-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/0d/00-Leadership-Camp-0d21c60a.jpg"
      ),
      link: "/camp-profiles/senior-plus-leadership",
      program: "leadership",
    },
    {
      name: "Lifeguarding",
      price: 580,
      priceText: "from 580 USD",
      season: ["summer"],
      age: [12, 18],
      locations: ["northern-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/6a/00-Rettungsschwimmen-Feriencamp-6a364891.jpg"
      ),
      link: "/camp-profiles/lifeguarding",
      program: "dlrg",
    },
    {
      name: "Multi Water Adventure",
      price: 990,
      priceText: "from 990 USD",
      season: ["summer"],
      age: [12, 18],
      locations: ["northern-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/a4/00-Multi-Water-Adventure-im-Sommercamp-a47c08a3.jpg"
      ),
      link: "/camp-profiles/multi-water-adventure",
      program: "water-sports",
    },
    {
      name: "Sailing",
      price: 990,
      priceText: "from 990 USD",
      season: ["summer"],
      age: [12, 18],
      locations: ["spain"],
      image: getTemplateImageUrl(
        "yootheme/cache/e9/01-Segeln-im-Sommercamp-in-Spanien-e9d06b28.jpg"
      ),
      link: "/camp-profiles/sailing",
      program: "sailing",
    },
    {
      name: "Skating",
      price: 420,
      priceText: "from 420 USD",
      season: ["summer"],
      age: [12, 18],
      locations: ["northern-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/82/00-Skaten im Sommercamp-8240a4c7.jpg"
      ),
      link: "/camp-profiles/skating",
      program: "skating",
    },
    {
      name: "Soccer",
      price: 495,
      priceText: "from 495 USD",
      season: ["summer"],
      age: [12, 18],
      locations: ["northern-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/54/00-Soccer-Camps-543a1625.jpg"
      ),
      link: "/camp-profiles/soccer",
      program: "soccer",
    },
    {
      name: "Space Exploration",
      price: 595,
      priceText: "from 595 USD",
      season: ["summer"],
      age: [12, 18],
      locations: ["northern-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/59/00-Space-Exploration-Sommer-Camp-599962e5.jpg"
      ),
      link: "/camp-profiles/space-exploration",
      program: "space",
    },
    {
      name: "Spanish Camps",
      price: 595,
      priceText: "from 595 USD",
      season: ["summer"],
      age: [12, 18],
      locations: ["spain"],
      image: getTemplateImageUrl(
        "yootheme/cache/d1/Spanischcamp-in-Spanien-d118b0e9.jpg"
      ),
      link: "/camp-profiles/spanish-camps",
      program: "spanish",
    },
    {
      name: "Survival",
      price: 495,
      priceText: "from 495 USD",
      season: ["summer"],
      age: [12, 18],
      locations: ["northern-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/e0/03-Walsrode-Survival-e00c16d7.jpg"
      ),
      link: "/camp-profiles/survival",
      program: "survival",
    },
    {
      name: "Swimming",
      price: 495,
      priceText: "from 495 USD",
      season: ["summer"],
      age: [12, 18],
      locations: ["northern-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/98/Schwimmen_camp-98f48b76.jpg"
      ),
      link: "/camp-profiles/swimming",
      program: "swimming",
    },
    {
      name: "Tennis",
      price: 495,
      priceText: "from 495 USD",
      season: ["summer"],
      age: [12, 18],
      locations: ["northern-germany"],
      image: getTemplateImageUrl(
        "yootheme/cache/57/00-Tenniscamp-57cd2c79.jpg"
      ),
      link: "/camp-profiles/tennis",
      program: "tennis",
    },
    {
      name: "Windsurfing",
      price: 990,
      priceText: "from 990 USD",
      season: ["summer"],
      age: [12, 18],
      locations: ["spain"],
      image: getTemplateImageUrl(
        "yootheme/cache/ac/00-Windsurfen-im-Sommercamp-ac31b126.jpg"
      ),
      link: "/camp-profiles/windsurfing",
      program: "windsurf",
    },
  ];

  // Initialize with all camps
  useEffect(() => {
    setFilteredCamps(sortCamps(camps, sortBy));
  }, []);

  // Leaflet map initialization
  useEffect(() => {
    const initMap = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window === "undefined" || !window.L) return false;

      const mapDiv = document.getElementById("camp-profiles-map");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (!mapDiv || (mapDiv as any)._leaflet) return false;

      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const map = (window.L as any)
          .map("camp-profiles-map")
          .setView([53.5597, 9.9601], 5);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window.L as any)
          .tileLayer(
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            {
              attribution:
                "Leaflet | © Esri | DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community",
              maxZoom: 18,
              minZoom: 0,
            }
          )
          .addTo(map);

        const markers = [
          {
            lat: 53.5597,
            lng: 9.9601,
            title: "Camp Adventure Office - Hamburg",
          },
          {
            lat: 52.8625,
            lng: 9.5883,
            title: "Camp Adventure Academy - Lüneburger Heide",
          },
          {
            lat: 48.9701,
            lng: 13.1263,
            title: "Camp Adventure - Bayerischer Wald",
          },
          {
            lat: 53.9246,
            lng: -3.00764,
            title: "Camp Adventure - Rossall School",
          },
          {
            lat: 51.3802,
            lng: -2.36674,
            title: "Camp Adventure - Bath University",
          },
          {
            lat: 53.6279,
            lng: 10.687,
            title: "Camp Adventure - Lauenburgische Seen",
          },
          { lat: 54.627, lng: 8.38935, title: "Camp Adventure - Amrum" },
        ];

        markers.forEach((marker) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window.L as any)
            .marker([marker.lat, marker.lng])
            .addTo(map)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .bindPopup(`<h3>${marker.title}</h3>`);
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mapDiv as any)._leaflet = true;
        return true;
      } catch (e) {
        console.error("Error initializing map:", e);
        return false;
      }
    };

    const checkAndInit = () => {
      const mapDiv = document.getElementById("camp-profiles-map");
      if (mapDiv && window.L && typeof window.L.map === "function") {
        initMap();
        return true;
      }
      return false;
    };

    const timeout1 = setTimeout(() => {
      if (!checkAndInit()) {
        let retryCount = 0;
        const interval = setInterval(() => {
          retryCount++;
          if (checkAndInit() || retryCount >= 50) {
            clearInterval(interval);
          }
        }, 200);
      }
    }, 500);

    return () => clearTimeout(timeout1);
  }, []);

  // Sort camps
  const sortCamps = (campsToSort: Camp[], sortValue: string): Camp[] => {
    const sorted = [...campsToSort];

    switch (sortValue) {
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "age-asc":
        sorted.sort((a, b) => a.age[0] - b.age[0]);
        break;
      case "age-desc":
        sorted.sort((a, b) => b.age[1] - a.age[1]);
        break;
    }

    return sorted;
  };

  // Handle filter form submission
  const handleFilterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.currentTarget);

    // Get values from hidden fields (these would be populated by JavaScript in a real implementation)
    const selectedPrograms = ((formData.get("field_4") as string) || "")
      .split(",")
      .filter((x) => x);
    const selectedSeasons = ((formData.get("field_5") as string) || "")
      .split(",")
      .filter((x) => x);
    const selectedLocations = ((formData.get("field_6") as string) || "")
      .split(",")
      .filter((x) => x);
    const selectedAge = formData.get("field_7") as string;

    const filtered = camps.filter((camp) => {
      if (
        selectedPrograms.length > 0 &&
        !selectedPrograms.includes(camp.program)
      )
        return false;
      if (
        selectedSeasons.length > 0 &&
        !camp.season.some((s) => selectedSeasons.includes(s))
      )
        return false;
      if (
        selectedLocations.length > 0 &&
        !camp.locations.some((l) => selectedLocations.includes(l))
      )
        return false;
      if (selectedAge) {
        const age = parseInt(selectedAge);
        if (age < camp.age[0] || age > camp.age[1]) return false;
      }
      return true;
    });

    setFilteredCamps(sortCamps(filtered, sortBy));
  };

  // Handle reset
  const handleReset = () => {
    const form = document.getElementById("filter-form") as HTMLFormElement;
    if (form) form.reset();
    setSortBy("name-asc");
    setFilteredCamps(sortCamps(camps, "name-asc"));
  };

  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    setFilteredCamps(sortCamps(filteredCamps, newSortBy));
  };

  // Format location name
  const formatLocation = (location: string) => {
    return location
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Update form submission to handle multiselect properly
  useEffect(() => {
    const initializeMultiselect = () => {
      // In a real implementation, this would initialize a multiselect plugin
      // For now, we'll add event listeners to update hidden fields when selects change
      const multiselects = document.querySelectorAll(".multiselect[multiple]");

      multiselects.forEach((select) => {
        select.addEventListener("change", function (this: HTMLSelectElement) {
          const hiddenFieldId = this.getAttribute("data-hidden");
          if (hiddenFieldId) {
            const hiddenField = document.getElementById(hiddenFieldId);
            if (hiddenField) {
              const selectedValues = Array.from(this.selectedOptions).map(
                (option) => option.value
              );
              (hiddenField as HTMLInputElement).value =
                selectedValues.join(",");
            }
          }
        });
      });
    };

    // Run initialization after component mounts
    if (typeof window !== "undefined") {
      initializeMultiselect();
    }
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            #searchform {
              background: #006533;
              padding: 2rem 0;
            }
            #searchform .uk-button.uk-button-default,
            #searchform .uk-button.uk-button-secondary {
              margin-right: 10px;
              margin-bottom: 10px;
            }
            #searchform select {
              border-color: rgba(255, 255, 255, 0.5) !important;
              background: rgba(255, 255, 255, 0.9) !important;
              color: #333 !important;
            }
            #searchform select[multiple] {
              height: 80px !important;
            }
            #searchform label {
              color: #fff !important;
              font-weight: bold;
              text-transform: uppercase;
              margin-bottom: 5px;
              display: block;
            }
            .camp-card {
              position: relative;
            }
            .camp-card .el-meta {
              position: absolute;
              top: 0;
              right: 25px;
              background: #fff;
              padding: 3px 15px;
              font-size: 16px;
              font-weight: bold;
              border-radius: 10px;
            }
            .camp-card .el-content {
              padding-bottom: 20px;
            }
            .camp-card .el-link {
              position: absolute;
              bottom: 20px;
            }
            .filter-buttons {
              margin-top: 1.5rem;
              text-align: center;
            }
            .filter-buttons .uk-button {
              margin: 0 5px;
            }
          `,
        }}
      />

      {/* Hero Section */}
      <div className="uk-section-default uk-section-overlap uk-preserve-color uk-light uk-position-relative">
        <div
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/banner/b3.jpg"
            )})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.19)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <h1 className="uk-heading-large uk-text-center">
                  International Sport- & Language Camps
                </h1>
                <div className="uk-panel uk-text-lead uk-margin uk-text-center">
                  <p>for Kids and Teenagers from all over the world</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="uk-section-default uk-section uk-padding-remove-bottom">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-text-center@m uk-text-center">
                <p>
                  Adventure & sports camps, vacation camps, as well as English &
                  German language camps in Germany and England, since 2002
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* ProvenExpert Widget + Quote Section */}
      <div className="uk-section-default uk-section-overlap uk-section uk-section-small">
        <div className="uk-container uk-container-large">
          <div
            className="uk-grid tm-grid-expand uk-grid-large uk-margin-xlarge"
            uk-grid=""
          >
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
              <div className="uk-panel uk-width-1-1">
                <center>
                  <a
                    href="https://www.provenexpert.com/camp-adventure/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://images.provenexpert.com/93/fc/d5e99b2883e0bb405862d9993db6/widget_recommendation_465_04f6f.png?t=1662145244032"
                      width={465}
                      height={200}
                      alt="Customer reviews"
                      style={{ border: 0 }}
                      unoptimized
                    />
                  </a>
                </center>
              </div>
            </div>
            <div className="uk-grid-item-match uk-flex-middle uk-width-2-3@m">
              <div className="uk-panel uk-width-1-1">
                <blockquote className="uk-margin-medium uk-text-left@m uk-text-center">
                  <p>
                    My son (age 11) absolutely loved Camp Adventure! After two
                    disastrous camp experiences, this was our last attempt. I am
                    so glad he went! He said he had the time of his life and
                    can&apos;t wait to come back.
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        className="uk-link-muted"
                        href="https://goo.gl/maps/6SUEPwPJtZofokoX7"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Sarah O.
                      </a>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-panel uk-text-large uk-dropcap uk-margin">
                <p>
                  In our international camps in Germany and England we offer
                  various courses that you can book as additional options to our
                  camp activities. Get an overview of what is taking place where
                  and simply decide which camp you would like to spend next
                  summer based on the program of your choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="uk-section-secondary uk-section uk-padding-remove-vertical">
        <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
          <div className="uk-width-1-1@m">
            <div
              className="uk-position-relative uk-dark"
              style={{ height: "600px", width: "100%", zIndex: 1 }}
            >
              <div
                id="camp-profiles-map"
                style={{ height: "100%", width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Form Section */}
      <div
        id="searchform"
        className="uk-section-primary uk-section-overlap uk-section"
      >
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1">
            <div className="uk-width-1-1" style={{ padding: 0 }}>
              <h2
                className="uk-heading-small uk-text-center"
                style={{ color: "#fff" }}
              >
                FIND YOUR CAMP!
              </h2>
            </div>
          </div>

          <form
            id="filter-form"
            onSubmit={handleFilterSubmit}
            className="uk-grid uk-grid-small uk-child-width-1-4@m uk-child-width-1-1"
            uk-grid=""
          >
            {/* Programs & Courses */}
            <div className="uk-width-1-4@m">
              <label
                className="uk-form-label"
                style={{ color: "#fff", textTransform: "uppercase" }}
              >
                PROGRAMS & COURSES
              </label>
              {/* MultiSelect for other fields */}
              <select
                id="field_4_select"
                className="multiselect uk-select"
                data-hidden="field_4"
                multiple
                style={{ height: "80px" }}
              >
                <option value="adventure">Adventure, Sport and Creative</option>
                <option value="fishing">Fishing</option>
                <option value="arts-crafts">Arts & Crafts</option>
                <option value="coding">Coding</option>
                <option value="german">German course</option>
                <option value="englisch">English course</option>
                <option value="englisch-toefl">
                  English course (TOEFL exam)
                </option>
                <option value="soccer">Soccer</option>
                <option value="husky">Husky</option>
                <option value="icit">
                  International Counselor in Training (ICIT)
                </option>
                <option value="top-rope">
                  Climbing course (Top Rope certificate)
                </option>
                <option value="leadership">Leadership</option>
                <option value="water-sports">Multi Water Adventure</option>
                <option value="horseback">Horseback Riding</option>
                <option value="dlrg">Lifeguard course (DLRG bronze)</option>
                <option value="swimming">Swimming course</option>
                <option value="sailing">Sailing</option>
                <option value="skating">Skating</option>
                <option value="space">Space Exploration</option>
                <option value="spanish">Spanish course</option>
                <option value="survival">Survival</option>
                <option value="dancing">Dancing</option>
                <option value="diving">Diving course (PADI Open Water)</option>
                <option value="tennis">Tennis</option>
                <option value="windsurf">Windsurfing</option>
              </select>
              {/* Hidden field for comma-separated values */}
              <input type="hidden" id="field_4" name="field_4" value="" />
            </div>

            {/* Holiday */}
            <div className="uk-width-1-4@m">
              <label
                className="uk-form-label"
                style={{ color: "#fff", textTransform: "uppercase" }}
              >
                HOLIDAY
              </label>
              {/* MultiSelect for other fields */}
              <select
                id="field_5_select"
                className="multiselect uk-select"
                data-hidden="field_5"
                multiple
                style={{ height: "80px" }}
              >
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="autumn">Autumn</option>
              </select>
              {/* Hidden field for comma-separated values */}
              <input type="hidden" id="field_5" name="field_5" value="" />
            </div>

            {/* Location */}
            <div className="uk-width-1-4@m">
              <label
                className="uk-form-label"
                style={{ color: "#fff", textTransform: "uppercase" }}
              >
                LOCATION
              </label>
              {/* MultiSelect for other fields */}
              <select
                id="field_6_select"
                className="multiselect uk-select"
                data-hidden="field_6"
                multiple
                style={{ height: "80px" }}
              >
                <option value="northern-germany">Northern Germany</option>
                <option value="west-germany">West Germany</option>
                <option value="south-germany">South Germany</option>
                <option value="england">England</option>
                <option value="spain">Spain</option>
              </select>
              {/* Hidden field for comma-separated values */}
              <input type="hidden" id="field_6" name="field_6" value="" />
            </div>

            {/* Age */}
            <div className="uk-width-1-4@m">
              <label
                className="uk-form-label"
                style={{ color: "#fff", textTransform: "uppercase" }}
              >
                AGE
              </label>
              {/* UIkit Select for field ID 7 */}
              <select id="field_7_select" name="field_7" className="uk-select">
                <option value=""></option>
                {Array.from({ length: 12 }, (_, i) => i + 7).map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>

            <div className="uk-width-1-1 uk-grid-margin uk-first-column">
              <button className="uk-button uk-button-default" type="submit">
                APPLY FILTER
              </button>
              <button
                className="uk-button uk-button-secondary"
                type="button"
                id="reset-filter-btn"
                onClick={handleReset}
              >
                RESET
              </button>
              
            </div>
          </form>
        </div>
      </div>

      {/* Results Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container">
          {/* Sort and Results Bar */}
          <div
            className="uk-grid uk-grid-small uk-flex-middle uk-margin-medium-bottom"
            uk-grid=""
          >
            <div className="uk-width-expand@m">
              <div className="uk-text-meta">
                <strong>
                  Showing {filteredCamps.length} of {camps.length} camps
                </strong>
              </div>
            </div>
            <div className="uk-width-auto@m">
              <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid="">
                <div className="uk-width-auto">
                  <label className="uk-form-label uk-text-nowrap">
                    Sort by:
                  </label>
                </div>
                <div className="uk-width-auto">
                  <select
                    value={sortBy}
                    onChange={handleSortChange}
                    className="uk-select uk-form-small"
                    style={{ minWidth: "200px" }}
                  >
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                    <option value="price-asc">Price (Low to High)</option>
                    <option value="price-desc">Price (High to Low)</option>
                    <option value="age-asc">Age (Youngest First)</option>
                    <option value="age-desc">Age (Oldest First)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Camps Grid */}
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <div className="uk-margin">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match"
                  uk-grid=""
                >
                  {filteredCamps.map((camp, index) => (
                    <div key={index} className="camp-card uk-grid-item-match">
                      <Link
                        href={camp.link}
                        className="uk-card uk-card-default uk-card-small uk-card-hover uk-link-toggle"
                      >
                        <div className="uk-card-media-top">
                          <Image
                            src={camp.image}
                            width={1920}
                            height={1275}
                            alt={camp.name}
                            loading="lazy"
                            className="el-image"
                          />
                        </div>
                        <div className="uk-card-body uk-margin-remove-first-child">
                          <h3 className="el-title uk-h3 uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                            {camp.name}
                          </h3>
                          <div className="el-meta uk-margin-top">
                            {camp.priceText}
                          </div>
                          <div className="el-content uk-panel uk-margin-top">
                            <ul className="uk-list uk-list-divider">
                              <li>
                                <span
                                  className="uk-margin-small-right uk-icon"
                                  uk-icon="clock"
                                ></span>
                                {camp.season
                                  .map(
                                    (s) =>
                                      s.charAt(0).toUpperCase() + s.slice(1)
                                  )
                                  .join(", ")}
                              </li>
                              <li>
                                <span
                                  className="uk-margin-small-right uk-icon"
                                  uk-icon="user"
                                ></span>
                                From {camp.age[0]} - {camp.age[1]} years old
                              </li>
                              <li>
                                <span
                                  className="uk-margin-small-right uk-icon"
                                  uk-icon="location"
                                ></span>
                                {camp.locations.map(formatLocation).join(", ")}
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cooperations & Memberships Section */}
      <div className="uk-section-default uk-section-overlap uk-position-relative">
        <div
          className="uk-background-norepeat uk-background-contain uk-background-bottom-center uk-section uk-section-large"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/d1/background_campground-d13d89db.jpeg"
            )})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.87)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
              <div className="uk-width-1-1@m">
                <div className="uk-h5 uk-margin-small uk-text-center">
                  Camp Adventure
                </div>
                <h3 className="uk-h1 uk-margin-small uk-text-center">
                  Cooperations & Memberships
                </h3>
                <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              </div>
            </div>
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <div className="uk-margin uk-text-center">
                  <div
                    className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-collapse uk-grid-match"
                    uk-grid=""
                  >
                    {[
                      {
                        img: "../../templates/yootheme/cache/98/reisenetz2-98f3b127.png",
                        link: "https://www.reisenetz.org/",
                        w: 120,
                        h: 120,
                      },
                      {
                        img: "../../templates/yootheme/cache/7a/icf2-7a52c185.png",
                        link: "http://www.campingfellowship.org/",
                        w: 178,
                        h: 120,
                      },
                      {
                        img: "../../templates/yootheme/cache/5f/toefl2-5f52dff4.png",
                        link: "https://www.ets.org/toefl",
                        w: 120,
                        h: 120,
                      },
                      {
                        img: "../../templates/yootheme/cache/bd/kmdd2-bdeae52d.png",
                        link: "https://www.kmdd.de/Home.htm",
                        w: 112,
                        h: 120,
                      },
                      {
                        img: "../../templates/yootheme/cache/f8/dofe2-f84c724b.png",
                        link: "https://dofe-germany.de/",
                        w: 362,
                        h: 120,
                      },
                      {
                        img: "../../templates/yootheme/cache/00/erca2-0047e06a.png",
                        link: "https://www.erca.uk/index.php/de/",
                        w: 276,
                        h: 120,
                      },
                    ].map((partner, idx) => (
                      <div key={idx}>
                        <div className="el-item uk-flex uk-flex-column">
                          <a
                            className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                            href={partner.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image
                              src={getTemplateImageUrl(
                                `yootheme/cache/${partner.img.substring(
                                  0,
                                  2
                                )}/${partner.img}`
                              )}
                              width={partner.w}
                              height={partner.h}
                              alt="Partner"
                              className="el-image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaflet Scripts */}
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        strategy="afterInteractive"
      />
    </>
  );
}
