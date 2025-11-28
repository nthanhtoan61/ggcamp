"use client";

import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getTemplateImageUrl } from "@/lib/assets";
import { programs } from "@/data/programs";
import { Calendar, Users, MapPin } from "lucide-react";

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
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Show 12 items per page

  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedHolidays, setSelectedHolidays] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAge, setSelectedAge] = useState("");

  const programs = [
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
  ];

  const holidays = [
    { value: "autumn", label: "Autumn" },
    { value: "spring", label: "Spring" },
    { value: "summer", label: "Summer" },
  ];

  const locations = [
    { value: "england", label: "England" },
    { value: "northern-germany", label: "Northern Germany" },
    { value: "south-germany", label: "South Germany" },
    { value: "spain", label: "Spain" },
    { value: "west-germany", label: "West Germany" },
  ];

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
      link: "/activities/adventure-sports-creative",
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
      link: "/activities/arts-crafts",
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
      link: "/activities/climbing",
      program: "climbing",
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
      link: "/activities/dancing",
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
      link: "/activities/diving",
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
      link: "/activities/englisch-toefl",
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
      link: "/activities/englischcamps",
      program: "englisch-camps",
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
      link: "/activities/fishing",
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
      link: "/activities/german-camps",
      program: "german-camps",
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
      link: "/activities/horseback-riding",
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
      link: "/activities/husky-camp",
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
      link: "/activities/international-counsellor-in-training-icit",
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
      link: "/activities/senior-plus-leadership",
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
      link: "/activities/lifeguarding",
      program: "lifeguarding",
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
      link: "/activities/multi-water-adventure",
      program: "multi-water",
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
      link: "/activities/sailing",
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
      link: "/activities/skating",
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
      link: "/activities/soccer",
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
      link: "/activities/space-exploration",
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
      link: "/activities/spanish-camps",
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
      link: "/activities/survival",
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
      link: "/activities/swimming",
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
      link: "/activities/tennis",
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
      link: "/activities/windsurfing",
      program: "windsurf",
    },
  ];
  const setCount = () => {
    camps.forEach((camp) => {
      programs.forEach((program) => {
        if (camp.program === program.value) {
          program.count++;
        }
      });
    });
  };
  setCount();

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

  // Handle filter form submission
  const handleFilterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Save current scroll position
    const scrollPosition = typeof window !== "undefined" ? window.scrollY : 0;

    const filtered = camps.filter((camp) => {
      // Price range filter (up to selected price)
      if (camp.price > priceRange[1]) return false;

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

    setFilteredCamps(sortCamps(filtered, sortBy));

    // Restore scroll position after filtering
    if (typeof window !== "undefined" && scrollPosition !== undefined) {
      window.scrollTo(0, scrollPosition);
    }
  };

  // Calculate items to display on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCamps.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCamps.length / itemsPerPage);

  // Initialize with all camps
  useEffect(() => {
    setFilteredCamps(sortCamps(camps, sortBy));
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [
    sortBy,
    priceRange,
    selectedProgram,
    selectedHolidays,
    selectedLocations,
    selectedAge,
  ]);

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
          `,
        }}
      />

      {/* Hero Section */}
      <div className="uk-section-default uk-section-overlap uk-preserve-color uk-light uk-position-relative">
        <div
          className="h-[40vh] md:h-[60vh] uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-xlarge  "
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

          <div className="relative z-10  flex flex-col items-center justify-center h-full">
            <p className="text-[4.5vw] text-white font-bold">
              International Sport- & Language Camps
            </p>
            <p className="text-[1.667vw] text-white">
              for Kids and Teenagers from all over the world
            </p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="text-center p-12 m-8">
        <p className="text-[1.67vw]">
          Adventure & sports camps, vacation camps, as well as English & German
          language camps in Germany and England, since 2002
        </p>
      </div>

      {/* ProvenExpert Widget + Quote Section */}

      <div className="uk-grid tm-grid-expand uk-grid-large uk-margin-xlarge uk-padding ">
        <div className="h-[30vh] md:h-[40vh]  uk-grid-item-match uk-flex-middle uk-width-1-3@m ">
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
                  style={{ border: 0, width: "100%", height: "100%" }}
                  unoptimized
                />
              </a>
            </center>
          </div>
        </div>
        <div className="uk-grid-item-match uk-flex-middle uk-width-2-3@m ">
          <div className="uk-panel uk-width-1-1">
            <blockquote className="uk-margin-medium uk-text-left@m uk-text-center">
              <p className="text-[1.67vw]">
                My son (age 11) absolutely loved Camp Adventure! After two
                disastrous camp experiences, this was our last attempt. I am so
                glad he went! He said he had the time of his life and can&apos;t
                wait to come back.
              </p>
              <footer className="el-footer">
                <cite className="el-author">
                  <a
                    className="uk-link-muted text-[1.67vw]"
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

      {/* Description */}
      <div className="uk-section-default uk-section  p-12 m-8">
        <div className="uk-panel uk-text-large uk-dropcap uk-margin">
          <p className="text-[1.67vw]">
            I In our international camps in Germany and England we offer various
            courses that you can book as additional options to our camp
            activities. Get an overview of what is taking place where and simply
            decide which camp you would like to spend next summer based on the
            program of your choice.
          </p>
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

      {/* Main Layout with Balanced Design */}
      <div className="uk-container">
        <div className="main-layout">
          {/* Filter and Sort Panel - Left Side */}
          <div className="filter-sort-panel ">
            <h2 className="panel-title text-[2.67vw]">FIND YOUR CAMP!</h2>

            {/* Price Range Section */}
            <div className="sort-section px-6 pb-6 pt-4 border-t border-b border-gray-200">
              <label className="sort-label">
                Sort by Price: Up to ${priceRange[1]}
              </label>
              <div className="uk-margin">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[1]}
                  onChange={(e) => {
                    const newPriceRange: [number, number] = [
                      0,
                      parseInt(e.target.value),
                    ];
                    setPriceRange(newPriceRange);
                    // Apply filter immediately when slider changes
                    applyPriceFilter(newPriceRange);
                  }}
                  className="uk-range"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            {/* Filter Form */}
            <form onSubmit={handleFilterSubmit} className="bg-white">
              {/* Programs & Courses Section */}
              <div className="mb-6 px-6 pt-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                  PROGRAMS & COURSES
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
              <div className="mb-6 px-6">
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
              </div>

              {/* Location Section */}
              <div className="mb-6 px-6">
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

              {/* Buttons */}
              <div className="flex items-center justify-between px-6 pb-6 pt-4 border-t border-b border-gray-200">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Apply Filter
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors"
                >
                  Reset
                </button>
              </div>
            </form>
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

                        {/* Price and Button */}
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="flex items-center">
                            <span className="text-3xl font-bold text-gray-900">
                              ${camp.price}
                            </span>
                          </div>
                          <a
                            href={camp.link}
                            className="font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 transform"
                            style={{
                              textDecoration: "none",
                              backgroundColor: "#389f6d",
                              color: "white",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#2e8a5a";
                              e.currentTarget.style.transform = "translateY(-2px)";
                              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "#389f6d";
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          >
                            Camp Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="uk-margin-top uk-flex uk-flex-center">
                <ul className="uk-pagination" style={{ flexWrap: "wrap" }}>
                  <li className={currentPage === 1 ? "uk-disabled" : ""}>
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(1, prev - 1))
                      }
                      className="uk-button uk-button-default uk-button-small"
                      disabled={currentPage === 1}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Previous
                    </button>
                  </li>

                  {/* Only show first, last, and nearby pages on mobile */}
                  {totalPages <= 5 ? (
                    Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <li
                          key={page}
                          className={currentPage === page ? "uk-active" : ""}
                        >
                          <button
                            onClick={() => setCurrentPage(page)}
                            className="uk-button uk-button-default uk-button-small uk-margin-small-left uk-margin-small-right"
                            style={{ minWidth: "30px" }}
                          >
                            {page}
                          </button>
                        </li>
                      )
                    )
                  ) : (
                    <>
                      <li className={currentPage === 1 ? "uk-active" : ""}>
                        <button
                          onClick={() => setCurrentPage(1)}
                          className="uk-button uk-button-default uk-button-small uk-margin-small-left uk-margin-small-right"
                          style={{ minWidth: "30px" }}
                        >
                          1
                        </button>
                      </li>
                      {currentPage > 3 && (
                        <li>
                          <span
                            className="uk-button uk-button-default uk-button-small uk-margin-small-left uk-margin-small-right"
                            style={{ minWidth: "30px" }}
                          >
                            ...
                          </span>
                        </li>
                      )}
                      {currentPage > 2 && currentPage < totalPages - 1 && (
                        <li className="uk-active">
                          <button
                            onClick={() => setCurrentPage(currentPage)}
                            className="uk-button uk-button-default uk-button-small uk-margin-small-left uk-margin-small-right"
                            style={{ minWidth: "30px" }}
                          >
                            {currentPage}
                          </button>
                        </li>
                      )}
                      {currentPage < totalPages - 2 && (
                        <li>
                          <span
                            className="uk-button uk-button-default uk-button-small uk-margin-small-left uk-margin-small-right"
                            style={{ minWidth: "30px" }}
                          >
                            ...
                          </span>
                        </li>
                      )}
                      <li
                        className={
                          currentPage === totalPages ? "uk-active" : ""
                        }
                      >
                        <button
                          onClick={() => setCurrentPage(totalPages)}
                          className="uk-button uk-button-default uk-button-small uk-margin-small-left uk-margin-small-right"
                          style={{ minWidth: "30px" }}
                        >
                          {totalPages}
                        </button>
                      </li>
                    </>
                  )}

                  <li
                    className={currentPage === totalPages ? "uk-disabled" : ""}
                  >
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                      }
                      className="uk-button uk-button-default uk-button-small"
                      disabled={currentPage === totalPages}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </div>
            )}
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
                <div className="text-[2.5vw] uk-margin-small uk-text-center ">
                  Camp Adventure
                </div>
                <div className="text-[3vw] uk-margin-small uk-text-center">
                  Cooperations & Memberships
                </div>
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
