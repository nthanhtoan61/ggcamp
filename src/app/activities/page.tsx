"use client";

import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { getTemplateImageUrl } from "@/lib/assets";
import { programs } from "@/data/programs";
import { Calendar, Users, MapPin } from "lucide-react";
import { HeroSection } from "@/components/layouts";

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
  rating?: number; // Rating from 1 to 5
}

export default function CampProfilesPage() {
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

  const programs = useMemo(() => [
    { value: "adventure", label: "Adventure, Sports & Creative", count: 0 },
    { value: "arts-crafts", label: "Arts & Crafts", count: 0 },
    { value: "climbing", label: "Climbing", count: 0 },
    { value: "dancing", label: "Dancing", count: 0 },
    { value: "diving", label: "Diving", count: 0 },
    { value: "englisch-camps", label: "Englischcamps", count: 0 },
    { value: "englisch-toefl", label: "Englisch TOEFL©", count: 0 },
    { value: "fishing", label: "Fishing", count: 0 },
    { value: "german-camps", label: "German Camps", count: 0 },
    { value: "horseback", label: "Horseback Riding", count: 0 },
    { value: "husky", label: "Husky Camp", count: 0 },
    {
      value: "icit",
      label: "International Counsellor in Training (ICIT)",
      count: 0,
    },
    { value: "lifeguarding", label: "Lifeguarding", count: 0 },
    { value: "language", label: "Language", count: 0 },
    { value: "leadership", label: "Leadership", count: 0 },
    { value: "multi-water", label: "Multi Water Adventure", count: 0 },
    { value: "sailing", label: "Sailing", count: 0 },
    { value: "skating", label: "Skating", count: 0 },
    { value: "soccer", label: "Soccer", count: 0 },
    { value: "space", label: "Space Exploration", count: 0 },
    { value: "spanish", label: "Spanishcourse", count: 0 },
    { value: "survival", label: "Survival", count: 0 },
    { value: "swimming", label: "Swimming", count: 0 },
    { value: "tennis", label: "Tennis", count: 0 },
    { value: "windsurf", label: "Windsurfing", count: 0 },
  ], []);

  const holidays = useMemo(() => [
    { value: "autumn", label: "Autumn" },
    { value: "spring", label: "Spring" },
    { value: "summer", label: "Summer" },
  ], []);

  const locations = useMemo(() => [
    { value: "philippines", label: "Philippines" },
    { value: "vietnam", label: "Vietnam" },
    { value: "portugal", label: "Portugal" },
    { value: "china", label: "China" },
    { value: "thailand", label: "Thailand" },
    { value: "malaysia", label: "Malaysia" },
    { value: "holiday", label: "Holiday" },
  ], []);

  // Camp data
  const camps: Camp[] = useMemo(() => [
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
      link: "/adventure-sports-creative",
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
      link: "/arts-crafts",
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
      link: "/climbing",
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
      link: "/dancing",
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
      link: "/diving",
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
      link: "/englisch-toefl",
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
      link: "/englischcamps",
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
      link: "/fishing",
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
      link: "/german-camps",
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
      link: "/horseback-riding",
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
      link: "/husky-camp",
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
      link: "/international-counsellor-in-training-icit",
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
      link: "/senior-plus-leadership",
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
      link: "/lifeguarding",
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
      link: "/multi-water-adventure",
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
      link: "/sailing",
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
      link: "/skating",
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
      link: "/soccer",
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
      link: "/space-exploration",
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
      link: "/spanish-camps",
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
      link: "/survival",
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
      link: "/swimming",
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
      link: "/tennis",
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
      link: "/windsurfing",
      program: "windsurf",
      rating: 5,
    },
  ], []);
  
  const setCount = useCallback(() => {
    camps.forEach((camp) => {
      programs.forEach((program) => {
        if (camp.program === program.value) {
          program.count++;
        }
      });
    });
  }, [camps, programs]);
  
  useEffect(() => {
    setCount();
  }, [setCount, programs]);

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
            title: "Go and Grow Camp Office - Hamburg",
          },
          {
            lat: 52.8625,
            lng: 9.5883,
            title: "Go and Grow Camp Academy - Lüneburger Heide",
          },
          {
            lat: 48.9701,
            lng: 13.1263,
            title: "Go and Grow Camp - Bayerischer Wald",
          },
          {
            lat: 53.9246,
            lng: -3.00764,
            title: "Go and Grow Camp - Rossall School",
          },
          {
            lat: 51.3802,
            lng: -2.36674,
            title: "Go and Grow Camp - Bath University",
          },
          {
            lat: 53.6279,
            lng: 10.687,
            title: "Go and Grow Camp - Lauenburgische Seen",
          },
          { lat: 54.627, lng: 8.38935, title: "Go and Grow Camp - Amrum" },
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

  // Handle filter form submission and auto-apply filters when any filter changes
  const handleFilterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Save current scroll position
    const scrollPosition = typeof window !== "undefined" ? window.scrollY : 0;
  };

  // Also auto-apply filters when any relevant value changes
  useEffect(() => {
    const filtered = camps.filter((camp) => {
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
        // Filter: show camps with rating >= minRating
        // "4 Stars & Up" means rating >= 4 (so 4 and 5 stars)
        // "3 Stars & Up" means rating >= 3 (so 3, 4, and 5 stars)
        if (!camp.rating || isNaN(camp.rating) || camp.rating < minRating) {
          return false;
        }
      }

      return true;
    });

    const sorted = sortCamps(filtered, sortBy);
    setFilteredCamps(sorted);
    // Reset to first page when filters change
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
  ]);

  // Calculate items to display on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCamps.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCamps.length / itemsPerPage);

  // Handle reset
  const handleReset = () => {
    const form = document.getElementById("filter-form") as HTMLFormElement;
    if (form) form.reset();
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
    setFilteredCamps(sortCamps(camps, "name-asc"));
    setCurrentPage(1);
  };

  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Save current scroll position
    const scrollPosition = typeof window !== "undefined" ? window.scrollY : 0;

    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    setFilteredCamps(sortCamps(filteredCamps, newSortBy));

    // Restore scroll position after sorting
    if (typeof window !== "undefined" && scrollPosition !== undefined) {
      window.scrollTo(0, scrollPosition);
    }
  };

// Apply price filter immediately and sort by price
const applyPriceFilter = (newPriceRange: [number, number]) => {
  // Save current scroll position
  const scrollPosition = typeof window !== "undefined" ? window.scrollY : 0;

  // Use requestAnimationFrame to prevent UI blocking
  requestAnimationFrame(() => {
    const filtered = camps.filter((camp) => {
      // Price range filter (up to selected price)
      if (camp.price > newPriceRange[1]) return false;

      if (selectedProgram && camp.program !== selectedProgram) return false;
      if (
        selectedHolidays.length > 0 &&
        !camp.season.some((s) => selectedHolidays.includes(s))
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

    // Sort by price ascending when filtering by price range
    setFilteredCamps(sortCamps(filtered, "price-asc"));

    // Restore scroll position after filtering
    if (typeof window !== "undefined" && scrollPosition !== undefined) {
      window.scrollTo(0, scrollPosition);
    }
  });
};
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
    <React.Fragment>
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
                align-items: stretch;
              }
              .search-field-group {
                width: 100%;
                min-width: 0;
              }
              .search-button {
                width: 100%;
                justify-content: center;
              }
              .search-bar-container {
                padding: 1.5rem;
                margin: 1rem;
              }
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
              display: flex;
              flex-direction: column;
              height: 100%;
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
            /* Balanced layout styles */
            .main-layout {
              display: flex;
              flex-wrap: wrap;
              gap: 2rem;
              margin: 2rem 0;
              scroll-behavior: auto; /* Prevent smooth scrolling during updates */
              overflow-anchor: none; /* Prevent scroll anchoring */
            }
            .filter-sort-panel {
              flex: 0 0 350px;
              background: #ffffff; /* Thay đổi từ #f8f9fa */
              padding: 0;
              border-radius: 8px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
              height: fit-content;
              position: sticky;
              top: 20px;
              align-self: flex-start; /* Keep panel at top */
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
            .sort-section {
              background: rgba(255, 255, 255, 0.1);
              padding: 1rem;
              border-radius: 6px;
              margin-bottom: 1.5rem;
            }
            .sort-label {
              color: black;
              font-weight: bold;
              margin-bottom: 0.5rem;
              display: block;
            }
            .filter-section {
              margin-bottom: 1.5rem;
            }
            .filter-group {
              margin-bottom: 1rem;
            }
            .filter-group label {
              margin-bottom: 0.5rem;
            }
            .scrollable-section {
              max-height: 200px;
              overflow-y: auto;
              padding-right: 10px;
            }
            .results-info {
              color: black;
              font-weight: bold;
              text-align: center;
              padding: 0.75rem;
              background: #ffffff;
              border-radius: 4px;
              min-height: 60px; /* Prevent layout shift */
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
            /* Card grid adjustments for better balance */
            .camp-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
              gap: 1.5rem;
              min-height: 500px; /* Prevent layout shift during filtering */
              overflow-anchor: none; /* Prevent scroll anchoring issues */
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
          
            @media (max-width: 960px) {
              .main-layout {
                flex-direction: column;
              }
              .filter-sort-panel,
              .cards-panel {
                min-width: 100%;
                flex: 1 1 auto;
              }
              .filter-sort-panel {
                order: 2;
                position: relative;
                top: 0;
              }
              .cards-panel {
                order: 1;
              }
              /* Allow panel title to be smaller on mobile */
              .panel-title {
                 font-size: 1.25rem;
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
              .uk-pagination {
                flex-wrap: wrap;
              }
              .uk-pagination li {
                margin: 0.25rem;
              }
            }
            @media (max-width: 480px) {
              .camp-grid {
                gap: 1rem;
              }
              .filter-sort-panel {
                padding: 0.5rem;
              }
              .panel-title {
                font-size: 1.25rem;
              }
              .sort-section, .mb-6 {
                padding: 0.5rem;
              }
              .filter-buttons {
                flex-direction: column;
                gap: 0.5rem;
              }
              .filter-buttons .uk-button {
                max-width: 100%;
              }
            }
            /* Modern Pagination Styles */
            .modern-pagination {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              margin: 2rem 0;
              flex-wrap: wrap;
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
              flex-wrap: wrap;
              justify-content: center;
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
            /* Price Slider Styles */
            .price-slider {
              -webkit-appearance: none;
              appearance: none;
              height: 8px;
              border-radius: 5px;
              background: #e0e0e0;
              outline: none;
              transition: background 0.3s;
              width: 100%;
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
            .price-slider::-moz-range-thumb {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: #cbca7b;
              cursor: pointer;
              border: none;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
              transition: all 0.3s;
              margin-top: -6px;
            }
            .price-slider::-moz-range-thumb:hover {
              background: #45a049;
              transform: scale(1.1);
              box-shadow: 0 3px 6px rgba(76, 175, 80, 0.4);
            }
            .price-slider::-webkit-slider-runnable-track {
              height: 8px;
              border-radius: 5px;
              background: linear-gradient(to right, #cbca7b 0%, #cbca7b var(--slider-progress, 50%), #e0e0e0 var(--slider-progress, 50%), #e0e0e0 100%);
            }
            .price-slider::-moz-range-track {
              height: 8px;
              border-radius: 5px;
              background: #e0e0e0;
            }
            .price-slider::-moz-range-progress {
              height: 8px;
              border-radius: 5px;
              background: #cbca7b;
            }
          `,
        }}
      />

      {/* Hero Section */}
      <HeroSection
        title="Activities"
        backgroundImage="yootheme/banner/b9.jpg"
        overlayColor="rgba(0, 0, 0, 0.19)"
        sectionClass="uk-section-default uk-preserve-color uk-light"
        titleClass="uk-heading-large uk-text-center"
      />

      {/* Intro Section - Responsive text sizing */}
      <div className="uk-section-default uk-section-overlap uk-section uk-section-small">
        <div className="uk-container uk-container-large">
          <div className="text-center">
            {/* Fixed: text-base on mobile, vw on desktop */}
            <p className="text-base md:text-[1.67vw]">
              Adventure & sports camps, vacation camps, as well as English & German
              language camps in Germany and England, since 2002
            </p>
          </div>
        </div>
      </div>

      {/* ProvenExpert Widget + Quote Section - Stack on mobile */}
      <div className="uk-grid tm-grid-expand uk-grid-large uk-margin uk-padding">
        <div className="h-[30vh] md:h-[40vh] uk-grid-item-match uk-flex-middle uk-width-1-3@m uk-width-1-1@s">
          <div className="uk-panel uk-width-1-1">
            <center>
              <a
                href="https://www.provenexpert.com/camp-adventure/"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <Image
                    src={getTemplateImageUrl("yootheme/activities/campfire.jpg")}
                    width={465}
                    height={200}
                  alt="Customer reviews"
                  style={{ border: 0, width: "100%", height: "100%", objectFit: "contain" }}
                  unoptimized
                />
              </a>
            </center>
          </div>
        </div>
        <div className="uk-grid-item-match uk-flex-middle uk-width-2-3@m uk-width-1-1@s">
          <div className="uk-panel uk-width-1-1">
            <blockquote className="uk-margin-medium uk-text-left@m uk-text-center">
              {/* Fixed: text-lg on mobile, vw on desktop */}
              <p className="text-lg md:text-[1.7vw]">
                My son (age 11) absolutely loved Go and Grow Camp! After two
                disastrous camp experiences, this was our last attempt. I am so
                glad he went! He said he had the time of his life and can&apos;t
                wait to come back.
              </p>
              <footer className="el-footer">
                <cite className="el-author">
                  <a
                    className="uk-link-muted text-base md:text-[1.67vw]"
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

      {/* Description - Responsive text */}
      <div className="uk-section-default uk-section p-6 md:p-12 m-0 md:m-8">
        <div className="uk-panel uk-text-large uk-dropcap uk-margin">
           {/* Fixed: text-base on mobile, vw on desktop */}
          <p className="text-base md:text-[1.7vw] leading-relaxed">
             In our international camps in Germany and England we offer various
            courses that you can book as additional options to our camp
            activities. Get an overview of what is taking place where and simply
            decide which camp you would like to spend next summer based on the
            program of your choice.
          </p>
        </div>
      </div>

      {/* Map Section - Adjusted height for mobile */}
      <div
        className="uk-section uk-padding-remove-vertical"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div
          className="uk-grid tm-grid-expand uk-child-width-1-1"
          style={{ marginLeft: 0, marginRight: 0 }}
        >
          <div
            className="uk-width-1-1@m"
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <div
              className="uk-position-relative uk-dark"
              // Adjusted height: 400px on mobile, 600px on desktop
              style={{ height: "600px", minHeight: "400px", width: "100%", zIndex: 1 }}
            >
              <div
                id="camp-profiles-map"
                style={{ height: "100%", width: "100%" }}
              ></div>
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
                        background: "#cbca7b",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "24px",
                        height: "24px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        lineHeight: "1",
                        padding: 0,
                      }}
                      aria-label="Clear selection"
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
                  <div className="max-w-4xl mx-auto w-full">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow h-full">
                      {/* Image Section - Full width on mobile, half on desktop */}
                      <div className="relative w-full h-64 md:h-auto md:w-1/2 flex-shrink-0">
                        <div className="relative w-full h-full">
                          <Image
                            src={camp.image}
                            alt={camp.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <span className="absolute top-4 left-0 bg-yellow-400 text-gray-900 font-semibold px-4 py-2 text-sm rounded-r-md z-10">
                          Featured
                        </span>
                      </div>

                      {/* Content Section */}
                      <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-between">
                        {/* Holiday Season */}
                        <div className="flex items-center text-teal-600 text-sm mb-3">
                          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm md:text-[1vw] capitalize">{camp.season.join(", ")}</span>
                        </div>

                        {/* Camp Name */}
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                          {camp.name}
                        </h2>

                        {/* Description */}
                        <p className="text-sm md:text-[1vw] text-gray-600 mb-4 leading-relaxed line-clamp-2">
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
                            <span className="text-sm md:text-[1vw]">
                              From {camp.age[0]} - {camp.age[1]} years old
                            </span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="text-sm md:text-[1vw] capitalize">{camp.locations.join(", ")}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <div>
                            <div className="text-lg md:text-[1.67vw] font-semibold">${camp.price}</div>
                          </div>
                          
                          <a href={`/activities/${camp.link}`} className="block">
                            <div className="uk-button uk-button-default">
                              Camp Details                                         
                            </div>
                          </a>
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
                    for (let i = 1; i <= totalPages; i++) {
                      pages.push(i);
                    }
                  } else {
                    pages.push(1);
                    if (currentPage <= 3) {
                      for (let i = 2; i <= 4; i++) {
                        pages.push(i);
                      }
                      pages.push("ellipsis");
                      pages.push(totalPages);
                    } else if (currentPage >= totalPages - 2) {
                      pages.push("ellipsis");
                      for (let i = totalPages - 3; i <= totalPages; i++) {
                        pages.push(i);
                      }
                    } else {
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

      {/* Newsletter Section - Completely overhauled for Mobile */}
      <section>
        <div className="py-8 md:py-[8vh] bg-[#fbf8f0] mt-[5vh]">
          {/* Changed gap and flex direction for mobile */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[4vw] px-4 md:px-0">
            {/* LEFT: image with play button */}
            <div className="w-full md:w-1/2 relative h-64 md:h-[45vh] rounded-xl md:rounded-[1.25vw] overflow-hidden bg-white">
              <div className="absolute inset-1 md:inset-[0.3vw] rounded-lg md:rounded-[calc(1.25vw-0.3vw)] overflow-hidden">
                <Image
                  src={getTemplateImageUrl("yootheme/aboutImage/beach.jpg")}
                  alt="Beach"
                  fill
                  className="object-cover"
                />
              </div>

              {/* circular play button */}
              <button
                type="button"
                className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-[45%] bg-white rounded-full p-3 md:p-[0.8vw] shadow-lg z-20 flex items-center justify-center"
                aria-label="Play video"
              >
                <div className="w-12 h-12 md:w-[3.2vw] md:h-[3.2vw] bg-transparent rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 md:w-[2.2vw] md:h-[2.2vw] bg-[#f3f3f3] rounded-full flex items-center justify-center shadow-inner">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20" // Fixed px for mobile
                      height="20"
                      className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw]"
                      fill="#214a28"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>

            {/* RIGHT: newsletter content */}
            <div className="w-full md:w-1/2 px-4 md:px-0 text-center md:text-left">
              {/* Responsive Text Size */}
              <h2 className="text-2xl md:text-[2.2vw] text-[#274423] font-bold leading-tight md:leading-[1.05] mb-4 md:mb-[1.5vh]">
                Stay Updated with Our Monthly Newsletter
              </h2>

              <div className="mb-6 md:mb-[2vh]">
                 {/* Responsive Bar Size */}
                <div className="w-24 h-1 md:w-[6.5vw] md:h-[0.5vh] bg-[#cbca7b] rounded-full -mt-2 mb-4 mx-auto md:mx-0" />
                <p className="text-base md:text-[1vw] text-gray-600 leading-normal md:leading-[1.4vw]">
                  Sign up to receive the latest news about new camps,
                  activities, and exciting opportunities. Don’t miss out on
                  anything fun!
                </p>
              </div>

              <form
                className="flex items-center w-full md:max-w-[28vw] shadow-sm rounded-full mx-auto md:mx-0"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Enter your email address"
                  className="flex-1 py-3 px-4 md:py-[1.5vh] md:px-[1.5vw] rounded-l-full md:rounded-l-[0.8vw] border border-gray-200 bg-white focus:outline-none text-sm md:text-[0.9vw]"
                />
                <button
                  type="submit"
                  className="bg-[#cbca7b] text-white px-6 md:px-[3vw] py-3 md:py-[1.5vh] rounded-r-full md:rounded-lg shadow hover:bg-[#238a56] flex items-center gap-2 md:gap-[0.5vw] text-sm md:text-[0.9vw] font-medium"
                >
                  <span>Subscribe</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    className="w-4 h-4 md:w-[1.2vw] md:h-[1.2vw]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Leaflet Scripts */}
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        strategy="afterInteractive"
      />
    </React.Fragment>
    );
}