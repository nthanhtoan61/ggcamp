"use client";
import type {Metadata} from "next";
import Script from "next/script";
import {getTemplateImageUrl} from "@/lib/assets";
import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import { Calendar, Users, MapPin } from "lucide-react";
import { HeroSection } from "@/components/layouts";

// Extend Window interface for Leaflet
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
  rating?: number; // Rating from 1 to 5
}

// NOTE: This file is a client component ("use client").
// Next.js disallows exporting `metadata` from client components.
// If you want route metadata, export it from a server component (for example
// in a parent `layout.tsx` or a dedicated server-only file for this route).

export default function BookingPage() {
  const [filteredCamps, setFilteredCamps] = useState<Camp[]>([]);
  const [sortBy, setSortBy] = useState("name-asc");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Show 12 items per page

  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedHolidays, setSelectedHolidays] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAge, setSelectedAge] = useState("");
  const [ratingWise, setRatingWise] = useState(""); // Rating filter: "5", "4", "3", "2", "1" or ""

  // Search bar states (only applied when Search button is clicked)
  const [searchLocation, setSearchLocation] = useState("");
  const [searchHolidaySeason, setSearchHolidaySeason] = useState("");
  // Applied search filters (used for actual filtering)
  const [appliedSearchLocation, setAppliedSearchLocation] = useState("");
  const [appliedSearchHolidaySeason, setAppliedSearchHolidaySeason] =
    useState("");

  const basePrograms = [
    {value: "adventure", label: "Adventure, Sports & Creative"},
    {value: "arts-crafts", label: "Arts & Crafts"},
    {value: "climbing", label: "Climbing"},
    {value: "dancing", label: "Dancing"},
    {value: "diving", label: "Diving"},
    {value: "englisch-camps", label: "Englischcamps"},
    {value: "englisch-toefl", label: "Englisch TOEFL©"},
    {value: "fishing", label: "Fishing"},
    {value: "german-camps", label: "German Camps"},
    {value: "horseback", label: "Horseback Riding"},
    {value: "husky", label: "Husky Camp"},
    {
      value: "icit",
      label: "International Counsellor in Training (ICIT)",
    },
    {value: "lifeguarding", label: "Lifeguarding"},
    {value: "language", label: "Language"},
    {value: "leadership", label: "Leadership"},
    {value: "multi-water", label: "Multi Water Adventure"},
    {value: "sailing", label: "Sailing"},
    {value: "skating", label: "Skating"},
    {value: "soccer", label: "Soccer"},
    {value: "space", label: "Space Exploration"},
    {value: "spanish", label: "Spanishcourse"},
    {value: "survival", label: "Survival"},
    {value: "swimming", label: "Swimming"},
    {value: "tennis", label: "Tennis"},
    {value: "windsurf", label: "Windsurfing"},
  ];

  const holidays = [
    {value: "autumn", label: "Autumn"},
    {value: "spring", label: "Spring"},
    {value: "summer", label: "Summer"},
  ];

  const locations = [
    {value: "philippines", label: "Philippines"},
    {value: "vietnam", label: "Vietnam"},
    {value: "portugal", label: "Portugal"},
    {value: "china", label: "China"},
    {value: "thailand", label: "Thailand"},
    {value: "malaysia", label: "Malaysia"},
    {value: "holiday", label: "Holiday"},
  ];

  // Camp data
  const campsMemo = useMemo(
    () => [
      {
        name: "Adventure, Sports & Creative",
        price: 395,
        priceText: "from 395 USD",
        season: ["spring", "summer", "autumn"],
        age: [12, 18],
        locations: ["thailand"],
        image: getTemplateImageUrl(
          "yootheme/cache/53/00_Abenteuercamp-Hike-533b20fa.jpg"
        ),
        link: "/activities/adventure-sports-creative",
        program: "adventure",
        rating: 5,
      },
      {
        name: "Arts & Crafts",
        price: 500,
        priceText: "from 500 USD",
        season: ["spring", "summer", "autumn"],
        age: [12, 18],
        locations: ["vietnam"],
        image: getTemplateImageUrl(
          "yootheme/cache/c6/01-Kreativprogramm-in-der-Ferienfreizeit-c6e95722.jpg"
        ),
        link: "/activities/arts-crafts",
        program: "arts-crafts",
        rating: 4,
      },
      {
        name: "Climbing",
        price: 515,
        priceText: "from 515 USD",
        season: ["summer"],
        age: [12, 18],
        locations: ["philippines"],
        image: getTemplateImageUrl(
          "yootheme/cache/40/00-Kletterkurs_Sommercamp_Bayern-40f1bd8d.jpg"
        ),
        link: "/activities/climbing",
        program: "climbing",
        rating: 5,
      },
      {
        name: "Dancing",
        price: 520,
        priceText: "from 520 USD",
        season: ["summer", "autumn"],
        age: [12, 18],
        locations: ["malaysia"],
        image: getTemplateImageUrl(
          "yootheme/cache/c1/00-Tanzen-im-Feriencamp-c1834fc7.jpg"
        ),
        link: "/activities/dancing",
        program: "dancing",
        rating: 4,
      },
      {
        name: "Diving",
        price: 1190,
        priceText: "from 1190 USD",
        season: ["summer"],
        age: [12, 18],
        locations: ["philippines"],
        image: getTemplateImageUrl(
          "yootheme/cache/33/01-Tauchkurs-im-Sommercamp-3309e219.jpg"
        ),
        link: "/activities/diving",
        program: "diving",
        rating: 5,
      },
      {
        name: "Englisch TOEFL®",
        price: 1290,
        priceText: "from 1290 USD",
        season: ["spring", "summer"],
        age: [12, 18],
        locations: ["malaysia"],
        image: getTemplateImageUrl(
          "yootheme/cache/b9/07-Language-Camps-by-Camp-Adventure-b9f01b6a.jpg"
        ),
        link: "/activities/englisch-toefl",
        program: "englisch-toefl",
        rating: 5,
      },
      {
        name: "Englischcamps",
        price: 530,
        priceText: "from 530 USD",
        season: ["spring", "summer", "autumn"],
        age: [12, 18],
        locations: ["philippines", "thailand"],
        image: getTemplateImageUrl(
          "yootheme/cache/ad/00-Language-Camps-by-Camp-Adventure-add7aa60.jpg"
        ),
        link: "/activities/englischcamps",
        program: "englisch-camps",
        rating: 4,
      },
      {
        name: "Fishing",
        price: 580,
        priceText: "from 580 USD",
        season: ["spring", "summer", "autumn"],
        age: [12, 18],
        locations: ["vietnam"],
        image: getTemplateImageUrl(
          "yootheme/cache/02/01-Angeln-im-Ferienlager-02243939.jpg"
        ),
        link: "/activities/fishing",
        program: "fishing",
        rating: 4,
      },
      {
        name: "German Camps",
        price: 610,
        priceText: "from 610 USD",
        season: ["summer"],
        age: [12, 18],
        locations: ["thailand", "vietnam"],
        image: getTemplateImageUrl(
          "yootheme/cache/0e/Deutschcamps-in-Deutschland-0ed3ea07.jpg"
        ),
        link: "/activities/german-camps",
        program: "german-camps",
        rating: 4,
      },
      {
        name: "Horseback Riding",
        price: 620,
        priceText: "from 620 USD",
        season: ["summer"],
        age: [12, 18],
        locations: ["portugal"],
        image: getTemplateImageUrl(
          "yootheme/cache/69/00-Reiten-Sommercamp-Ausritt-6930f841.jpg"
        ),
        link: "/activities/horseback-riding",
        program: "horseback",
        rating: 5,
      },
      {
        name: "Husky Camp",
        price: 525,
        priceText: "from 525 USD",
        season: ["spring", "summer", "autumn"],
        age: [12, 18],
        locations: ["china"],
        image: getTemplateImageUrl(
          "yootheme/cache/9c/00-Husky%20Camp_sommercamp%20mit%20Hunden-9c098a17.jpg"
        ),
        link: "/activities/husky-camp",
        program: "husky",
        rating: 5,
      },
      {
        name: "International Counsellor in Training (ICIT)",
        price: 995,
        priceText: "from 995 USD",
        season: ["summer"],
        age: [16, 18],
        locations: ["thailand", "malaysia"],
        image: getTemplateImageUrl(
          "yootheme/cache/3b/00-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_teambuilding-3b91547c.jpg"
        ),
        link: "/activities/international-counsellor-in-training-icit",
        program: "icit",
        rating: 5,
      },
      {
        name: "Leadership",
        price: 1185,
        priceText: "from 1185 USD",
        season: ["summer"],
        age: [16, 18],
        locations: ["philippines"],
        image: getTemplateImageUrl(
          "yootheme/cache/0d/00-Leadership-Camp-0d21c60a.jpg"
        ),
        link: "/activities/senior-plus-leadership",
        program: "leadership",
        rating: 5,
      },
      {
        name: "Lifeguarding",
        price: 580,
        priceText: "from 580 USD",
        season: ["summer"],
        age: [12, 18],
        locations: ["malaysia"],
        image: getTemplateImageUrl(
          "yootheme/cache/6a/00-Rettungsschwimmen-Feriencamp-6a364891.jpg"
        ),
        link: "/activities/lifeguarding",
        program: "lifeguarding",
        rating: 4,
      },
      {
        name: "Multi Water Adventure",
        price: 990,
        priceText: "from 990 USD",
        season: ["summer"],
        age: [12, 18],
        locations: ["philippines"],
        image: getTemplateImageUrl(
          "yootheme/cache/a4/00-Multi-Water-Adventure-im-Sommercamp-a47c08a3.jpg"
        ),
        link: "/activities/multi-water-adventure",
        program: "multi-water",
        rating: 1,
      },
      {
        name: "Sailing",
        price: 990,
        priceText: "from 990 USD",
        season: ["summer"],
        age: [12, 18],
        locations: ["thailand"],
        image: getTemplateImageUrl(
          "yootheme/cache/e9/01-Segeln-im-Sommercamp-in-Spanien-e9d06b28.jpg"
        ),
        link: "/activities/sailing",
        program: "sailing",
        rating: 2,
      },
      {
        name: "Skating",
        price: 420,
        priceText: "from 420 USD",
        season: ["summer"],
        age: [12, 18],
        locations: ["vietnam"],
        image: getTemplateImageUrl(
          "yootheme/cache/82/00-Skaten im Sommercamp-8240a4c7.jpg"
        ),
        link: "/activities/skating",
        program: "skating",
        rating: 3,
      },
      {
        name: "Soccer",
        price: 495,
        priceText: "from 495 USD",
        season: ["summer"],
        age: [12, 18],
        locations: ["malaysia"],
        image: getTemplateImageUrl(
          "yootheme/cache/54/00-Soccer-Camps-543a1625.jpg"
        ),
        link: "/activities/soccer",
        program: "soccer",
        rating: 3,
      },
      {
        name: "Space Exploration",
        price: 595,
        priceText: "from 595 USD",
        season: ["summer"],
        age: [12, 18],
        locations: ["china"],
        image: getTemplateImageUrl(
          "yootheme/cache/59/00-Space-Exploration-Sommer-Camp-599962e5.jpg"
        ),
        link: "/activities/space-exploration",
        program: "space",
        rating: 4,
      },
      {
        name: "Spanish Camps",
        price: 595,
        priceText: "from 595 USD",
        season: ["summer"],
        age: [12, 18],
        locations: ["portugal"],
        image: getTemplateImageUrl(
          "yootheme/cache/d1/Spanischcamp-in-Spanien-d118b0e9.jpg"
        ),
        link: "/activities/spanish-camps",
        program: "spanish",
        rating: 4,
      },
      {
        name: "Survival",
        price: 495,
        priceText: "from 495 USD",
        season: ["summer"],
        age: [12, 18],
        locations: ["vietnam"],
        image: getTemplateImageUrl(
          "yootheme/cache/e0/03-Walsrode-Survival-e00c16d7.jpg"
        ),
        link: "/activities/survival",
        program: "survival",
        rating: 4,
      },
      {
        name: "Swimming",
        price: 495,
        priceText: "from 495 USD",
        season: ["summer"],
        age: [12, 18],
        locations: ["philippines"],
        image: getTemplateImageUrl(
          "yootheme/cache/98/Schwimmen_camp-98f48b76.jpg"
        ),
        link: "/activities/swimming",
        program: "swimming",
        rating: 4,
      },
      {
        name: "Tennis",
        price: 495,
        priceText: "from 495 USD",
        season: ["summer"],
        age: [12, 18],
        locations: ["malaysia"],
        image: getTemplateImageUrl(
          "yootheme/cache/57/00-Tenniscamp-57cd2c79.jpg"
        ),
        link: "/activities/tennis",
        program: "tennis",
        rating: 4,
      },
      {
        name: "Windsurfing",
        price: 990,
        priceText: "from 990 USD",
        season: ["summer"],
        age: [12, 18],
        locations: ["thailand"],
        image: getTemplateImageUrl(
          "yootheme/cache/ac/00-Windsurfen-im-Sommercamp-ac31b126.jpg"
        ),
        link: "/activities/windsurfing",
        program: "windsurf",
        rating: 5,
      },
    ],
    []
  );

  const programs = useMemo(() => {
    return basePrograms.map((p) => ({
      ...p,
      count: campsMemo.filter((c) => c.program === p.value).length,
    }));
  }, [campsMemo]);

  const handleCheckboxChange = (
    value: string,
    selectedArray: string[],
    setSelectedArray: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selectedArray.includes(value)) {
      setSelectedArray(selectedArray.filter((item) => item !== value));
    } else {
      setSelectedArray([...selectedArray, value]);
    }
  };

  // Auto-apply filters when any relevant value changes
  useEffect(() => {
    const filtered = campsMemo.filter((camp) => {
      // Price range filter (up to selected price)
      if (camp.price > priceRange[1]) return false;

      // Location filter from search bar (only applied when Search is clicked)
      if (appliedSearchLocation) {
        if (appliedSearchLocation === "holiday") {
          // If searching by holiday, filter by season
          if (
            appliedSearchHolidaySeason &&
            !camp.season.includes(appliedSearchHolidaySeason)
          ) {
            return false;
          }
        } else {
          // If searching by specific location, filter by location
          if (!camp.locations.includes(appliedSearchLocation)) return false;
        }
      }

      // Program filter
      if (selectedProgram && camp.program !== selectedProgram) return false;

      // Holiday filter
      if (
        selectedHolidays.length > 0 &&
        !camp.season.some((s) => selectedHolidays.includes(s))
      )
        return false;

      // Location filter
      if (
        selectedLocations.length > 0 &&
        !camp.locations.some((l) => selectedLocations.includes(l))
      )
        return false;

      // Age filter
      if (selectedAge) {
        const age = parseInt(selectedAge);
        if (age < camp.age[0] || age > camp.age[1]) return false;
      }

      // Rating filter
      if (ratingWise && ratingWise !== "") {
        const minRating = parseInt(ratingWise, 10);
        if (!camp.rating || isNaN(camp.rating) || camp.rating < minRating) {
          return false;
        }
      }

      return true;
    });

    const sorted = sortCamps(filtered, sortBy);
    setFilteredCamps(sorted);
    setCurrentPage(1);
  }, [
    sortBy,
    priceRange,
    selectedProgram,
    selectedHolidays,
    selectedLocations,
    selectedAge,
    ratingWise,
    appliedSearchLocation,
    appliedSearchHolidaySeason,
    campsMemo,
  ]);

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

  // Calculate items to display on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCamps.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCamps.length / itemsPerPage);

  // Handle reset
  const handleReset = () => {
    setSortBy("name-asc");
    setPriceRange([0, 2000]);
    setSelectedProgram("");
    setSelectedHolidays([]);
    setSelectedLocations([]);
    setSelectedAge("");
    setRatingWise("");
    setSearchLocation("");
    setSearchHolidaySeason("");
    setAppliedSearchLocation("");
    setAppliedSearchHolidaySeason("");
    setFilteredCamps(sortCamps(campsMemo, "name-asc"));
    setCurrentPage(1);
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Minimal custom styles for range slider */
            .price-slider {
              -webkit-appearance: none;
              appearance: none;
              height: 0.8vh;
              border-radius: 0.26vw;
              background: linear-gradient(to right, #cbca7b var(--slider-progress, 0%), #e0e0e0 var(--slider-progress, 0%));
              outline: none;
              transition: background 0.3s;
            }
            .price-slider::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 1vw;
              height: 2vh;
              border-radius: 50%;
              background: #cbca7b;
              cursor: pointer;
              box-shadow: 0 0.2vh 0.2vw rgba(0, 0, 0, 0.2);
              transition: all 0.3s;
            }
            .price-slider::-webkit-slider-thumb:hover {
              background: #45a049;
              transform: scale(1.1);
              box-shadow: 0 0.3vh 0.3vw rgba(76, 175, 80, 0.4);
            }
            .price-slider::-moz-range-thumb {
              width: 1vw;
              height: 2vh;
              border-radius: 50%;
              background: #cbca7b;
              cursor: pointer;
              border: none;
              box-shadow: 0 0.2vh 0.2vw rgba(0, 0, 0, 0.2);
              transition: all 0.3s;
            }
            .price-slider::-moz-range-thumb:hover {
              background: #45a049;
              transform: scale(1.1);
              box-shadow: 0 0.3vh 0.3vw rgba(76, 175, 80, 0.4);
            }
          `,
        }}
      />
      {/* Hero Section */}
      <HeroSection
        title="Booking"
        backgroundImage="yootheme/banner/b13.jpg"
        overlayColor="rgba(0, 0, 0, 0)"
        sectionClass="uk-section-primary uk-section-overlap"
        titleClass="uk-heading-large uk-text-center !text-[5vw]"
        enableScrollspy={true}
        backgroundPosition="top-center"
      />

      {/* Search Bar Section */}
      <div className="py-[5vh] px-[10vw]">
        <div className="bg-white rounded-[0.625vw] shadow-md p-[2vw]">
          <div className="flex gap-[1vw] items-end flex-wrap md:flex-nowrap">
            {/* Location Field */}
            <div className="flex-1 min-w-[10.4vw] w-full md:w-auto">
              <label className="block font-semibold text-gray-700 mb-[0.5vh] text-[1vw] uppercase">
                <span className="mr-[0.5vw]">📍</span>
                Location
              </label>
              <select
                value={searchLocation}
                onChange={(e) => {
                  setSearchLocation(e.target.value);
                  if (e.target.value !== "holiday") {
                    setSearchHolidaySeason("");
                  }
                }}
                className="w-full py-[0.75vh] px-[1vw] border-[0.1vw] border-primary rounded-[0.4vw] text-[1vw] bg-white text-gray-700 cursor-pointer focus:outline-none focus:border-green-600 focus:ring-[0.15vw] focus:ring-green-100"
              >
                <option value="">Select...</option>
                {locations.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Holiday Season Field - Hidden by default, shown when Holiday is selected */}
            <div
              className={`flex-1 min-w-[10.4vw] w-full md:w-auto ${
                searchLocation === "holiday" ? "block" : "hidden"
              }`}
            >
              <label className="block font-semibold text-gray-700 mb-[0.5vh] text-[1vw] uppercase">
                <span className="mr-[0.5vw]">👥</span>
                Holiday Season
              </label>
              <div className="relative">
                <select
                  value={searchHolidaySeason}
                  onChange={(e) => setSearchHolidaySeason(e.target.value)}
                  className="w-full py-[0.75vh] px-[1vw] border-[0.1vw] border-primary rounded-[0.4vw] text-[1vw] bg-white text-gray-700 cursor-pointer focus:outline-none focus:border-green-600 focus:ring-[0.15vw] focus:ring-green-100"
                  style={{
                    paddingRight: searchHolidaySeason ? "2vw" : "1vw",
                  }}
                >
                  <option value="">Select...</option>
                  {holidays.map((holiday) => (
                    <option key={holiday.value} value={holiday.value}>
                      {holiday.label}
                    </option>
                  ))}
                </select>
                {searchHolidaySeason && (
                  <button
                    type="button"
                    onClick={() => setSearchHolidaySeason("")}
                    className="absolute right-[0.5vw] top-1/2 -translate-y-1/2 bg-transparent hover:bg-gray-100 border-none cursor-pointer text-[1.8vh] text-gray-600 w-[1.2vw] h-[2.4vh] flex items-center justify-center rounded-full transition-colors"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Search Button */}
            <button
              type="button"
              onClick={() => {
                setAppliedSearchLocation(searchLocation);
                setAppliedSearchHolidaySeason(searchHolidaySeason);
              }}
              className="py-[0.75vh] px-[2vw] bg-primary hover:bg-green-600 text-white border-none rounded-[0.4vw] text-[1vw] font-semibold cursor-pointer flex items-center gap-[0.5vw] transition-all active:scale-95 w-full md:w-auto justify-center"
            >
              <span>🌐</span>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Layout with Balanced Design */}
      <div className="py-[5vh] px-[10vw]">
        <div className="flex flex-wrap gap-[2vw] my-[2vh] lg:flex-nowrap">
          {/* Filter and Sort Panel - Left Side */}
          <div className="w-full lg:w-[18.2vw] lg:shrink-0 bg-white p-0 rounded-[0.4vw] shadow-md h-fit sticky top-[1vh] self-start order-2 lg:order-1">
            <h2 className="mt-[1.5vh] text-center mb-[1.5vh] text-[1.7vw]! text-black font-bold">
              FIND YOUR CAMP!
            </h2>

            {/* Price Section */}
            <div className="mb-[3vh] px-[1.5vw] pt-[3vh] border-t border-b border-gray-200">
              <h3 className="text-[1vw]! font-bold text-gray-900 mb-[2vh] tracking-wide">
                Price
              </h3>
              <div className="space-y-[2vh]">
                {/* Price Input */}
                <div>
                  <label className="block text-[0.75vw]! text-gray-600 mb-[1vh]">
                    Maximum Price (USD)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => {
                      const value = Math.min(
                        2000,
                        Math.max(0, parseInt(e.target.value) || 0)
                      );
                      const newPriceRange: [number, number] = [0, value];
                      setPriceRange(newPriceRange);
                    }}
                    className="w-full px-[1vw] py-[1vh] border border-gray-300 rounded-[0.5vw] focus:ring-[0.1vw] focus:ring-green-500 focus:border-transparent text-[1vw]"
                    placeholder="Enter max price"
                  />
                </div>

                {/* Price Slider */}
                <div>
                  <div className="flex justify-between items-center mb-[1vh]">
                    <span className="text-[0.75vw]! text-gray-600">$0</span>
                    <span className="text-[1vw]! font-semibold text-primary!">
                      Up to ${priceRange[1]}
                    </span>
                    <span className="text-[0.75vw]! text-gray-600">$2000</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="1"
                    value={priceRange[1]}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      const newPriceRange: [number, number] = [0, value];
                      setPriceRange(newPriceRange);
                      // Update slider progress color
                      const slider = e.target as HTMLInputElement;
                      const progress = (value / 2000) * 100;
                      slider.style.setProperty(
                        "--slider-progress",
                        `${progress}%`
                      );
                    }}
                    onInput={(e) => {
                      const slider = e.target as HTMLInputElement;
                      const value = parseInt(slider.value);
                      const progress = (value / 2000) * 100;
                      slider.style.setProperty(
                        "--slider-progress",
                        `${progress}%`
                      );
                    }}
                    className="price-slider w-full"
                    style={
                      {
                        "--slider-progress": `${(priceRange[1] / 2000) * 100}%`,
                      } as React.CSSProperties
                    }
                  />
                </div>
              </div>
            </div>

            {/* Filter Form */}
            <div className="bg-white">
              {/* Programs & Courses Section */}
              <div className="mb-[3vh] px-[1.5vw] pt-[3vh]">
                <h3 className="text-[1vw]! font-bold text-gray-900 mb-[2vh] tracking-wide">
                  Activities
                </h3>
                <div className="space-y-[1vh] max-h-[48vh] overflow-y-auto pr-[0.5vw]">
                  {programs.map((program) => (
                    <label
                      key={program.value}
                      className="flex items-center justify-between cursor-pointer group hover:bg-gray-50 p-[1vh] rounded-[0.3vw] transition-colors"
                    >
                      <div className="flex items-center flex-1">
                        <input
                          type="checkbox"
                          checked={selectedProgram === program.value}
                          onChange={() =>
                            setSelectedProgram(
                              selectedProgram === program.value
                                ? ""
                                : program.value
                            )
                          }
                          className="w-[1vw] h-[2vh] text-green-600 border-gray-300 rounded-[0.2vw] focus:ring-[0.1vw] focus:ring-green-500"
                        />
                        <span className="ml-[0.75vw] text-[1vw]! text-gray-700 group-hover:text-gray-900">
                          {program.label}
                        </span>
                      </div>
                      <span className="text-[1vw]! text-gray-500 font-medium ml-[0.5vw]">
                        {program.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Age Section */}
              <div className="mb-[3vh] px-[1.5vw]">
                <h3 className="text-[1vw]! font-bold text-gray-900 mb-[2vh] tracking-wide">
                  AGE
                </h3>
                <select
                  value={selectedAge}
                  onChange={(e) => setSelectedAge(e.target.value)}
                  className="w-full px-[1vw] py-[1vh] border border-gray-300 rounded-[0.5vw] focus:ring-[0.1vw] focus:ring-green-500 focus:border-transparent text-[1vw]!"
                >
                  <option value="">Select age</option>
                  {Array.from({length: 12}, (_, i) => i + 7).map((age) => (
                    <option key={age} value={age}>
                      {age} years old
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating Wise Section */}
              <div className="mb-[3vh] px-[1.5vw]">
                <h3 className="text-[1vw] font-bold text-gray-900 mb-[2vh] tracking-wide">
                  RATING WISE
                </h3>
                <select
                  value={ratingWise}
                  onChange={(e) => setRatingWise(e.target.value)}
                  className="w-full px-[1vw] py-[1vh] border border-gray-300 rounded-[0.5vw] focus:ring-[0.1vw] focus:ring-green-500 focus:border-transparent text-[1vw]"
                >
                  <option value="">All Ratings</option>
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars & Up</option>
                  <option value="3">3 Stars & Up</option>
                  <option value="2">2 Stars & Up</option>
                  <option value="1">1 Star & Up</option>
                </select>
              </div>

              {/* Reset Button */}
              <div className="flex items-center justify-center px-[1.5vw] pb-[3vh] pt-[2vh] border-t border-b border-gray-200">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-[1.5vw] py-[1.25vh] text-gray-600 text-[1vw] font-medium hover:text-gray-900 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Camps Cards Panel - Right Side */}
          <div className="flex-1 min-w-[15.6vw] order-1 lg:order-2">
            {/* Results Info */}
            <div className="text-black font-bold py-[0.75vh] bg-white rounded-[0.2vw] min-h-[6vh] text-right mb-[3vh]">
              <div className="uk-text-right@s uk-text-center">
                Showing {currentItems.length} of {filteredCamps.length} camps
                (Page {currentPage} of {totalPages})
              </div>
            </div>
            <div className="space-y-[3vh]">
              {currentItems.map((camp, index) => (
                <div key={indexOfFirstItem + index} className="camp-card">
                  <div className="max-w-full mx-auto">
                    <div className="bg-white rounded-[0.3vw] shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
                      {/* Image Section - Left side */}
                      <div className="relative md:w-2/5">
                         <div className="relative w-full h-full">
                            <Image
                              src={camp.image}
                              alt={camp.name}
                              fill
                              className="object-cover"
                              sizes="100vw, 50vw"
                            />
                          </div>
                        <span className="absolute top-[0.5vh] left-0 bg-yellow-400 text-gray-900 font-medium px-[0.4vw] py-[0.3vh] text-[0.55vw] rounded-r-[0.15vw]">
                          Featured
                        </span>
                      </div>

                      {/* Content Section */}
                      <div className="md:w-3/5 p-[0.5vw] flex flex-col justify-between">
                        <div>
                          {/* Holiday Season */}
                          <div className="flex items-center text-teal-600 text-[1vw]! mb-[0.5vh]">
                            <Calendar className="w-[0.55vw] h-[1.1vh] mr-[0.2vw] flex-shrink-0" />
                            <span>{camp.season.join(", ")}</span>
                          </div>

                          {/* Camp Name */}
                          <h2 className="text-[1vw] font-bold text-gray-900 mb-[0.5vh]">
                            {camp.name}
                          </h2>

                          {/* Description */}
                          <p className="text-gray-600 text-[1vw]! mb-[0.6vh] leading-relaxed line-clamp-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Laborum excepturi qui eum. Fugit sapiente
                            doloremque harum veniam nemo nulla voluptatibus in.
                          </p>

                          {/* Age and Location */}
                          <div className="flex flex-col gap-[0.4vh] text-[0.55vw] text-gray-700 mb-[0.6vh]">
                            <div className="flex items-center">
                              <Users className="w-[0.55vw] h-[1.1vh] mr-[0.2vw] flex-shrink-0" />
                              <span>
                                From {camp.age[0]} - {camp.age[1]} years old
                              </span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-[0.55vw] h-[1.1vh] mr-[0.2vw] flex-shrink-0" />
                              <span>{camp.locations.join(", ")}</span>
                            </div>
                            <div className="text-[1vw]! flex space-x-3 items-center">
                              <span className="text-gray-500">Free spots:</span>
                              <div className="flex gap-[0.3vw] mt-[0.1vh]">
                                <span className="text-blue-600 font-medium">
                                  ♂ {Math.floor(Math.random() * 10) + 5}
                                </span>
                                <span className="text-pink-600 font-medium">
                                  ♀ {Math.floor(Math.random() * 10) + 5}
                                </span>
                              </div>
                            </div>
                            <div className="text-left">
                              <div className="text-[1vw]! font-bold text-primary">
                                ${camp.price}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Section: Free Spots, Price, and Button */}
                        <div className="flex items-center justify-end space-x-1.5 pt-[0.5vh] border-t border-gray-200">
                          <button className="px-[0.5vw] py-[0.4vh] bg-transparent border border-primary text-primary hover:bg-primary hover:text-white rounded-[0.15vw] text-[1vw]! font-medium transition-colors">
                            Details
                          </button>
                          <button className="px-[0.5vw] py-[0.4vh] bg-primary hover:bg-green-600 text-white rounded-[0.15vw] text-[1vw]! font-medium transition-colors">
                            Booking
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 &&
              (() => {
                // Calculate which pages to show
                const getPageNumbers = () => {
                  const pages: (number | string)[] = [];
                  const maxVisible = 5;

                  if (totalPages <= maxVisible) {
                    // Show all pages if total is small
                    for (let i = 1; i <= totalPages; i++) {
                      pages.push(i);
                    }
                  } else {
                    // Always show first page
                    pages.push(1);

                    if (currentPage <= 3) {
                      // Near the beginning
                      for (let i = 2; i <= 4; i++) {
                        pages.push(i);
                      }
                      pages.push("ellipsis");
                      pages.push(totalPages);
                    } else if (currentPage >= totalPages - 2) {
                      // Near the end
                      pages.push("ellipsis");
                      for (let i = totalPages - 3; i <= totalPages; i++) {
                        pages.push(i);
                      }
                    } else {
                      // In the middle
                      pages.push("ellipsis");
                      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                        pages.push(i);
                      }
                      pages.push("ellipsis");
                      pages.push(totalPages);
                    }
                  }

                  return pages;
                };

                const pageNumbers = getPageNumbers();

                return (
                  <div className="flex items-center justify-center gap-[0.5vw] my-[2vh]">
                    {/* Previous Arrow */}
                    <button
                      className="w-[2vw] h-[4vh] rounded-full bg-gray-100 border-none flex items-center justify-center cursor-pointer transition-all text-primary text-[1.8vw] hover:bg-gray-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(1, prev - 1))
                      }
                      disabled={currentPage === 1}
                      aria-label="Previous page"
                    >
                      ‹
                    </button>

                    {/* Page Numbers Container */}
                    <div className="flex items-center gap-[0.25vw] bg-gray-100 p-[0.25vh] rounded-[0.4vw]">
                      {pageNumbers.map((page, index) => {
                        if (page === "ellipsis") {
                          return (
                            <span
                              key={`ellipsis-${index}`}
                              className="min-w-[2vw] h-[4vh] px-[0.4vw] flex items-center justify-center text-gray-600 text-[1.4vw]"
                            >
                              ...
                            </span>
                          );
                        }
                        return (
                          <button
                            key={page}
                            className={`min-w-[2vw] h-[4vh] px-[0.6vw] rounded-[0.3vw] border-none text-[1.4vw] font-medium cursor-pointer transition-all flex items-center justify-center ${
                              currentPage === page
                                ? "bg-primary text-white font-semibold"
                                : "bg-transparent text-gray-700 hover:bg-gray-200"
                            }`}
                            onClick={() => setCurrentPage(page as number)}
                          >
                            {page}
                          </button>
                        );
                      })}
                    </div>

                    {/* Next Arrow */}
                    <button
                      className="w-[2vw] h-[4vh] rounded-full bg-gray-100 border-none flex items-center justify-center cursor-pointer transition-all text-primary text-[1.8vw] hover:bg-gray-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                      }
                      disabled={currentPage === totalPages}
                      aria-label="Next page"
                    >
                      ›
                    </button>
                  </div>
                );
              })()}
          </div>
        </div>
      </div>
    </>
  );
}
