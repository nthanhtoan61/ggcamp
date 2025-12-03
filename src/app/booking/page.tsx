"use client";
import type { Metadata } from "next";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";
import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import { Calendar, Users, MapPin } from "lucide-react";

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
    { value: "adventure", label: "Adventure, Sports & Creative" },
    { value: "arts-crafts", label: "Arts & Crafts" },
    { value: "climbing", label: "Climbing" },
    { value: "dancing", label: "Dancing" },
    { value: "diving", label: "Diving" },
    { value: "englisch-camps", label: "Englischcamps" },
    { value: "englisch-toefl", label: "Englisch TOEFL©" },
    { value: "fishing", label: "Fishing" },
    { value: "german-camps", label: "German Camps" },
    { value: "horseback", label: "Horseback Riding" },
    { value: "husky", label: "Husky Camp" },
    {
      value: "icit",
      label: "International Counsellor in Training (ICIT)",
    },
    { value: "lifeguarding", label: "Lifeguarding" },
    { value: "language", label: "Language" },
    { value: "leadership", label: "Leadership" },
    { value: "multi-water", label: "Multi Water Adventure" },
    { value: "sailing", label: "Sailing" },
    { value: "skating", label: "Skating" },
    { value: "soccer", label: "Soccer" },
    { value: "space", label: "Space Exploration" },
    { value: "spanish", label: "Spanishcourse" },
    { value: "survival", label: "Survival" },
    { value: "swimming", label: "Swimming" },
    { value: "tennis", label: "Tennis" },
    { value: "windsurf", label: "Windsurfing" },
  ];

  const holidays = [
    { value: "autumn", label: "Autumn" },
    { value: "spring", label: "Spring" },
    { value: "summer", label: "Summer" },
  ];

  const locations = [
    { value: "philippines", label: "Philippines" },
    { value: "vietnam", label: "Vietnam" },
    { value: "portugal", label: "Portugal" },
    { value: "china", label: "China" },
    { value: "thailand", label: "Thailand" },
    { value: "malaysia", label: "Malaysia" },
    { value: "holiday", label: "Holiday" },
  ];

  // Camp data
  const campsMemo = useMemo(() => [
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
  ], []);

  const programs = useMemo(() => {
    return basePrograms.map(p => ({
      ...p,
      count: campsMemo.filter(c => c.program === p.value).length
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
            #searchform {
              background: #006533;
              padding: 2rem 0;
            }
            .search-bar-container {
              background: white;
              border-radius: 12px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              padding: 2rem;
              margin: 2rem auto;
              max-width: 1200px;
            }
            .search-bar-form {
              display: flex;
              gap: 1rem;
              align-items: flex-end;
              flex-wrap: wrap;
            }
            .search-field-group {
              flex: 1;
              min-width: 200px;
            }
            .search-field-label {
              display: block;
              font-weight: 600;
              color: #333;
              margin-bottom: 0.5rem;
              font-size: 0.875rem;
              text-transform: uppercase;
            }
            .search-field-input {
              width: 100%;
              padding: 0.75rem 1rem;
              border: 2px solid #cbca7b;
              border-radius: 8px;
              font-size: 1rem;
              background: white;
              color: #333;
              cursor: pointer;
            }
            .search-field-input:focus {
              outline: none;
              border-color: #45a049;
              box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
            }
            .search-field-input option {
              padding: 0.5rem;
            }
            .search-button {
              padding: 0.75rem 2rem;
              background: #cbca7b;
              color: white;
              border: none;
              border-radius: 8px;
              font-size: 1rem;
              font-weight: 600;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 0.5rem;
              transition: background 0.2s;
            }
            .search-button:hover {
              background: #45a049;
            }
            .search-button:active {
              transform: scale(0.98);
            }
            .holiday-season-field {
              display: none;
              position: relative;
            }
            .holiday-season-field.show {
              display: block;
            }
            @media (max-width: 768px) {
              .search-bar-form {
                flex-direction: column;
              }
              .search-field-group {
                width: 100%;
              }
              .search-button {
                width: 100%;
                justify-content: center;
              }
            }
            .main-layout {
              display: flex;
              flex-wrap: wrap;
              gap: 2rem;
              margin: 2rem 0;
              scroll-behavior: auto;
              overflow-anchor: none;
            }
            .filter-sort-panel {
              flex: 0 0 350px;
              background: #ffffff;
              padding: 0;
              border-radius: 8px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
              height: fit-content;
              position: sticky;
              top: 20px;
              align-self: flex-start;
            }
            .cards-panel {
              flex: 2;
              min-width: 300px;
            }
            .panel-title {
              margin-top: 1.5rem;
              color: black;
              text-align: center;
              margin-bottom: 1.5rem;
              font-size: 1.5rem;
            }
            .results-info {
              color: black;
              font-weight: bold;
              text-align: center;
              padding: 0.75rem;
              background: #ffffff;
              border-radius: 4px;
              min-height: 60px;
              text-align: right;
            }
            .filter-buttons {
              display: flex;
              gap: 1rem;
              justify-content: center;
            }
            .filter-buttons .uk-button {
              flex: 1;
              max-width: 200px;
            }
            .camp-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
              gap: 1.5rem;
              min-height: 500px;
              overflow-anchor: none;
            }
            .camp-card-link {
              height: 100%;
              display: block;
            }
            .camp-card-content {
              height: 100%;
              display: flex;
              flex-direction: column;
            }
            .camp-card-body {
              flex: 1;
              display: flex;
              flex-direction: column;
            }
            .price-slider {
              -webkit-appearance: none;
              appearance: none;
              height: 8px;
              border-radius: 5px;
              background: #e0e0e0;
              outline: none;
              transition: background 0.3s;
            }
            .price-slider::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: #cbca7b;
              cursor: pointer;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
              transition: all 0.3s;
              margin-top: -6px;
            }
            .price-slider::-webkit-slider-thumb:hover {
              background: #45a049;
              transform: scale(1.1);
              box-shadow: 0 3px 6px rgba(76, 175, 80, 0.4);
            }
            @media (max-width: 960px) {
              .main-layout {
                flex-direction: column;
              }
              .filter-sort-panel,
              .cards-panel {
                min-width: 100%;
              }
              .filter-sort-panel {
                order: 2;
              }
              .cards-panel {
                order: 1;
              }
            }
            @media (max-width: 768px) {
              .camp-grid {
                grid-template-columns: 1fr;
              }
              .results-info {
                text-align: center;
                font-size: 0.9rem;
              }
            }
            /* Modern Pagination Styles (match activities page) */
            .modern-pagination {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              margin: 2rem 0;
            }
            .pagination-arrow {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: #f5f5f5;
              border: none;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: all 0.2s;
              color: #cbca7b;
              font-size: 18px;
            }
            .pagination-arrow:hover:not(:disabled) {
              background: #e0e0e0;
              transform: scale(1.05);
            }
            .pagination-arrow:disabled {
              opacity: 0.5;
              cursor: not-allowed;
            }
            .pagination-pages {
              display: flex;
              align-items: center;
              gap: 0.25rem;
              background: #f5f5f5;
              padding: 0.25rem;
              border-radius: 8px;
            }
            .pagination-page {
              min-width: 40px;
              height: 40px;
              padding: 0 12px;
              border-radius: 6px;
              background: transparent;
              border: none;
              color: #333;
              font-size: 14px;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.2s;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .pagination-page:hover {
              background: #e0e0e0;
            }
            .pagination-page.active {
              background: #cbca7b;
              color: white;
              font-weight: 600;
            }
            .pagination-ellipsis {
              min-width: 40px;
              height: 40px;
              padding: 0 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #666;
              font-size: 14px;
            }
          `,
        }}
      />
      {/* Hero Section */}
      <div
        className="uk-section-primary uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          data-src={getTemplateImageUrl("yootheme/banner/b7.jpg")}
          uk-img=""
          className="uk-background-norepeat uk-background-cover uk-background-top-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl("yootheme/banner/b7.jpg")})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <h1
                  className="uk-heading-large uk-text-center"
                  uk-scrollspy-class=""
                >
                  Booking
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  uk-scrollspy-class=""
                >
                  <p>International Sports & Language Camps</p>
                </div>
                <div className="uk-margin uk-text-right" uk-scrollspy-class="">
                  <Image
                    src={getTemplateImageUrl(
                      "yootheme/cache/12/Storer-min-125a5bd1.png"
                    )}
                    width={400}
                    height={200}
                    className="el-image"
                    alt="Book Now!"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    {/* Search Bar Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="search-bar-container">
            <div className="search-bar-form">
              {/* Location Field */}
              <div className="search-field-group">
                <label className="search-field-label">
                  <span style={{ marginRight: "0.5rem" }}>📍</span>
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
                  className="search-field-input"
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
                className={`search-field-group holiday-season-field ${
                  searchLocation === "holiday" ? "show" : ""
                }`}
              >
                <label className="search-field-label">
                  <span style={{ marginRight: "0.5rem" }}>👥</span>
                  Holiday Season
                </label>
                <div style={{ position: "relative" }}>
                  <select
                    value={searchHolidaySeason}
                    onChange={(e) => setSearchHolidaySeason(e.target.value)}
                    className="search-field-input"
                    style={{
                      paddingRight: searchHolidaySeason ? "40px" : "1rem",
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
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "18px",
                        color: "#666",
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f0f0f0";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
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
                className="search-button"
              >
                <span>🌐</span>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    

    

          {/* Main Layout with Balanced Design */}
      <div className="uk-container">
        <div className="main-layout">
          {/* Filter and Sort Panel - Left Side */}
          <div className="filter-sort-panel ">
            <h2 className="panel-title">FIND YOUR CAMP!</h2>

            {/* Price Section */}
            <div className="mb-6 px-6 pt-6 border-t border-b border-gray-200">
              <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                PRICE
              </h3>
              <div className="space-y-4">
                {/* Price Input */}
                <div>
                  <label className="block text-xs text-gray-600 mb-2">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    placeholder="Enter max price"
                  />
                </div>

                {/* Price Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-600">$0</span>
                    <span className="text-sm font-semibold text-green-600">
                      Up to ${priceRange[1]}
                    </span>
                    <span className="text-xs text-gray-600">$2000</span>
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
              <div className="mb-6 px-6 pt-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                  Activities
                </h3>
                <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                  {programs.map((program) => (
                    <label
                      key={program.value}
                      className="flex items-center justify-between cursor-pointer group hover:bg-gray-50 p-2 rounded transition-colors"
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
                          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                        />
                        <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                          {program.label}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 font-medium ml-2">
                        {program.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Holiday Section */}
              {/* <div className="mb-6 px-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                  HOLIDAY
                </h3>
                <div className="space-y-2">
                  {holidays.map((holiday) => (
                    <label
                      key={holiday.value}
                      className="flex items-center justify-between cursor-pointer group hover:bg-gray-50 p-2 rounded transition-colors"
                    >
                      <div className="flex items-center flex-1">
                        <input
                          type="checkbox"
                          checked={selectedHolidays.includes(holiday.value)}
                          onChange={() =>
                            handleCheckboxChange(
                              holiday.value,
                              selectedHolidays,
                              setSelectedHolidays
                            )
                          }
                          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                        />
                        <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                          {holiday.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div> */}

              {/* Location Section */}
              {/* <div className="mb-6 px-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                  LOCATION
                </h3>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <label
                      key={location.value}
                      className="flex items-center justify-between cursor-pointer group hover:bg-gray-50 p-2 rounded transition-colors"
                    >
                      <div className="flex items-center flex-1">
                        <input
                          type="checkbox"
                          checked={selectedLocations.includes(location.value)}
                          onChange={() =>
                            handleCheckboxChange(
                              location.value,
                              selectedLocations,
                              setSelectedLocations
                            )
                          }
                          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                        />
                        <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                          {location.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div> */}

              {/* Age Section */}
              <div className="mb-6 px-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                  AGE
                </h3>
                <select
                  value={selectedAge}
                  onChange={(e) => setSelectedAge(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                >
                  <option value="">Select age</option>
                  {Array.from({ length: 12 }, (_, i) => i + 7).map((age) => (
                    <option key={age} value={age}>
                      {age} years old
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating Wise Section */}
              <div className="mb-6 px-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                  RATING WISE
                </h3>
                <select
                  value={ratingWise}
                  onChange={(e) => setRatingWise(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
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
              <div className="flex items-center justify-center px-6 pb-6 pt-4 border-t border-b border-gray-200">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Camps Cards Panel - Right Side */}
          <div className="cards-panel">
            {/* Results Info */}
            <div className="results-info mb-6">
              <div className="uk-text-right@s uk-text-center">
                Showing {currentItems.length} of {filteredCamps.length} camps
                (Page {currentPage} of {totalPages})
              </div>
            </div>
            <div className="space-y-6">
              {currentItems.map((camp, index) => (
                <div key={indexOfFirstItem + index} className="camp-card">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow">
                      {/* Image Section - Full left side */}
                      <div className="relative md:w-1/2">
                        <div className="relative w-full h-full">
                          <Image
                            src={camp.image}
                            alt={camp.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <span className="absolute top-4 left-0 bg-yellow-400 text-gray-900 font-semibold px-4 py-2 text-sm rounded-r-md">
                          Featured
                        </span>
                      </div>

                      {/* Content Section */}
                      <div className="md:w-1/2 p-6 flex flex-col justify-between">
                        {/* Holiday Season */}
                        <div className="flex items-center text-teal-600 text-sm mb-3">
                          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span>{camp.season.join(", ")}</span>
                        </div>

                        {/* Camp Name */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                          {camp.name}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Laborum excepturi qui eum. Fugit sapiente
                          doloremque harum veniam nemo nulla voluptatibus in,
                          alias provident voluptatem. Iure voluptatum quis
                          ratione incidunt cum.
                        </p>

                        {/* Age and Location */}
                        <div className="flex flex-col gap-2 text-sm text-gray-700 mb-6">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span>
                              From {camp.age[0]} - {camp.age[1]} years old
                            </span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span>{camp.locations.join(", ")}</span>
                          </div>
                        </div>
                        <div>
                          <div className=" uk-button uk-button-default">
                            Camp Details
                          </div>
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
                  <div className="modern-pagination">
                    {/* Previous Arrow */}
                    <button
                      className="pagination-arrow"
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(1, prev - 1))
                      }
                      disabled={currentPage === 1}
                      aria-label="Previous page"
                    >
                      ‹
                    </button>

                    {/* Page Numbers Container */}
                    <div className="pagination-pages">
                      {pageNumbers.map((page, index) => {
                        if (page === "ellipsis") {
                          return (
                            <span
                              key={`ellipsis-${index}`}
                              className="pagination-ellipsis"
                            >
                              ...
                            </span>
                          );
                        }
                        return (
                          <button
                            key={page}
                            className={`pagination-page ${
                              currentPage === page ? "active" : ""
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
                      className="pagination-arrow"
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

