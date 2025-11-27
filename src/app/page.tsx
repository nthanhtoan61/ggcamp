"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getTemplateImageUrl } from "@/lib/assets";
import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/features/ProgramCard";

// Declare jQuery for TypeScript
declare const jQuery: any;

export default function HomePage() {
  const [filteredPrograms, setFilteredPrograms] = useState(programs);

  useEffect(() => {
    const applyFilters = () => {
      // Lấy params từ URL hash hoặc search
      const hash = window.location.hash;
      const searchParams = new URLSearchParams(window.location.search);
      
      let field4 = "";
      let field5 = "";
      let field6 = "";
      let field7 = "";

      // Nếu có hash với params
      if (hash.includes("?")) {
        const hashParams = new URLSearchParams(hash.split("?")[1]);
        field4 = hashParams.get("field_4") || searchParams.get("field_4") || "";
        field5 = hashParams.get("field_5") || searchParams.get("field_5") || "";
        field6 = hashParams.get("field_6") || searchParams.get("field_6") || "";
        field7 = hashParams.get("field_7") || searchParams.get("field_7") || "";
      } else {
        // Kiểm tra search params
        field4 = searchParams.get("field_4") || "";
        field5 = searchParams.get("field_5") || "";
        field6 = searchParams.get("field_6") || "";
        field7 = searchParams.get("field_7") || "";
      }

      // Set values vào hidden fields và multiselect
      if (field4) {
        const hiddenField4 = document.getElementById("field_4") as HTMLInputElement;
        if (hiddenField4) hiddenField4.value = field4;
        // Set selected values trong multiselect
        if (typeof jQuery !== "undefined" && jQuery.fn.multiselect) {
          const values = field4.split(",");
          jQuery("#field_4_select").multiselect("select", values);
        }
      }
      if (field5) {
        const hiddenField5 = document.getElementById("field_5") as HTMLInputElement;
        if (hiddenField5) hiddenField5.value = field5;
        if (typeof jQuery !== "undefined" && jQuery.fn.multiselect) {
          const values = field5.split(",");
          jQuery("#field_5_select").multiselect("select", values);
        }
      }
      if (field6) {
        const hiddenField6 = document.getElementById("field_6") as HTMLInputElement;
        if (hiddenField6) hiddenField6.value = field6;
        if (typeof jQuery !== "undefined" && jQuery.fn.multiselect) {
          const values = field6.split(",");
          jQuery("#field_6_select").multiselect("select", values);
        }
      }
      if (field7) {
        const field7Select = document.getElementById("field_7_select") as HTMLSelectElement;
        if (field7Select) field7Select.value = field7;
      }

      // Apply filters
      if (field4 || field5 || field6 || field7) {
        let filtered = [...programs];

        // Filter by program (multiple values)
        if (field4) {
          const programValues = field4.split(",");
          const programMap: Record<string, string> = {
            adventure: "adventure-sports-creative",
            fishing: "fishing",
            "arts-crafts": "arts-crafts",
            englisch: "englischcamps",
            "englisch-toefl": "englisch-toefl",
            soccer: "soccer",
            husky: "husky-camp",
            climbing: "climbing",
            "top-rope": "climbing",
            horseback: "horseback-riding",
            diving: "diving",
            tennis: "tennis",
            icit: "icit",
            leadership: "leadership",
            "water-sports": "multi-water-adventure",
            dlrg: "lifeguarding",
            swimming: "swimming",
            sailing: "sailing",
            skating: "skating",
            space: "space-exploration",
            spanish: "spanishcourse",
            survival: "survival",
            dancing: "dancing",
            windsurf: "windsurfing",
            german: "german-camps",
            coding: "coding",
          };
          filtered = filtered.filter((p) =>
            programValues.some(
              (v) => p.id === programMap[v] || p.slug === programMap[v] || p.slug === v
            )
          );
        }

        // Filter by season (multiple values)
        if (field5) {
          const seasonValues = field5.split(",");
          filtered = filtered.filter((p) =>
            seasonValues.some((s) => p.seasons.includes(s))
          );
        }

        // Filter by location (multiple values)
        if (field6) {
          const locationValues = field6.split(",");
          filtered = filtered.filter((p) =>
            locationValues.some((l) => {
              const locationMap: Record<string, string> = {
                "northern-germany": "northern germany",
                "west-germany": "west germany",
                "south-germany": "south germany",
                england: "england",
                spain: "spain",
              };
              const locationStr = locationMap[l] || l;
              return p.location.toLowerCase().includes(locationStr.toLowerCase());
            })
          );
        }

        // Filter by age (single value)
        if (field7) {
          const age = parseInt(field7);
          filtered = filtered.filter((p) => {
            const ageMatch = p.age.match(/(\d+)\s*-\s*(\d+)/);
            if (ageMatch) {
              const minAge = parseInt(ageMatch[1]);
              const maxAge = parseInt(ageMatch[2]);
              return age >= minAge && age <= maxAge;
            }
            return true;
          });
        }

        setFilteredPrograms(filtered);
      } else {
        setFilteredPrograms(programs);
      }
    };

    // Khởi tạo multiselect khi jQuery đã sẵn sàng
    const initMultiselect = () => {
      if (typeof jQuery !== "undefined" && jQuery.fn.multiselect) {
        jQuery(".multiselect[multiple]").multiselect({
          texts: {
            placeholder: "",
            selectedOptions: ""
          },
          selectAll: false,
          selectGroup: true
        });
        // Apply filters sau khi multiselect đã khởi tạo
        applyFilters();
      } else {
        // Retry sau 100ms nếu jQuery chưa sẵn sàng
        window.setTimeout(() => {
          initMultiselect();
        }, 100);
      }
    };

    // Chờ DOM và jQuery sẵn sàng
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initMultiselect);
    } else {
      initMultiselect();
    }

    // Listen for hash changes
    window.addEventListener("hashchange", applyFilters);

    return () => {
      window.removeEventListener("hashchange", applyFilters);
    };
  }, []);

  const handleFilterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Update hidden fields with current multiselect values before processing
    if (typeof jQuery !== "undefined" && jQuery.fn.multiselect) {
      document.querySelectorAll('.multiselect').forEach(function(selectElement) {
        const select = jQuery(selectElement);
        const hiddenFieldId = select.attr('data-hidden');
        const hiddenField = document.getElementById(hiddenFieldId);
        const selectedValues = select.val(); // Get values from MultiSelect

        if (hiddenField) {
          hiddenField.value = selectedValues ? selectedValues.join(',') : '';
        }
      });
    }
    
    // Get values from hidden fields (which are updated by the multiselect)
    const field4Hidden = document.getElementById("field_4") as HTMLInputElement;
    const field5Hidden = document.getElementById("field_5") as HTMLInputElement;
    const field6Hidden = document.getElementById("field_6") as HTMLInputElement;
    const field7Select = document.getElementById("field_7_select") as HTMLSelectElement;
    
    const field4 = field4Hidden?.value || "";
    const field5 = field5Hidden?.value || "";
    const field6 = field6Hidden?.value || "";
    const field7 = field7Select?.value || "";
    
    const params = new URLSearchParams();
    if (field4) params.set("field_4", field4);
    if (field5) params.set("field_5", field5);
    if (field6) params.set("field_6", field6);
    if (field7) params.set("field_7", field7);

    // Apply filter immediately
    let filtered = [...programs];

    // Filter by program (multiple values)
    if (field4) {
      const programValues = field4.split(",");
      const programMap: Record<string, string> = {
        adventure: "adventure-sports-creative",
        fishing: "fishing",
        "arts-crafts": "arts-crafts",
        englisch: "englischcamps",
        "englisch-toefl": "englisch-toefl",
        soccer: "soccer",
        husky: "husky-camp",
        climbing: "climbing",
        "top-rope": "climbing",
        horseback: "horseback-riding",
        diving: "diving",
        tennis: "tennis",
        icit: "icit",
        leadership: "leadership",
        "water-sports": "multi-water-adventure",
        dlrg: "lifeguarding",
        swimming: "swimming",
        sailing: "sailing",
        skating: "skating",
        space: "space-exploration",
        spanish: "spanishcourse",
        survival: "survival",
        dancing: "dancing",
        windsurf: "windsurfing",
        german: "german-camps",
        coding: "coding",
      };
      filtered = filtered.filter((p) =>
        programValues.some(
          (v) => p.id === programMap[v] || p.slug === programMap[v] || p.slug === v
        )
      );
    }

    // Filter by season (multiple values)
    if (field5) {
      const seasonValues = field5.split(",");
      filtered = filtered.filter((p) =>
        seasonValues.some((s) => p.seasons.includes(s))
      );
    }

    // Filter by location (multiple values)
    if (field6) {
      const locationValues = field6.split(",");
      filtered = filtered.filter((p) =>
        locationValues.some((l) => {
          // Map location values to actual location strings
          const locationMap: Record<string, string> = {
            "northern-germany": "northern germany",
            "west-germany": "west germany",
            "south-germany": "south germany",
            england: "england",
            spain: "spain",
          };
          const locationStr = locationMap[l] || l;
          return p.location.toLowerCase().includes(locationStr.toLowerCase());
        })
      );
    }

    // Filter by age (single value)
    if (field7) {
      const age = parseInt(field7);
      filtered = filtered.filter((p) => {
        const ageMatch = p.age.match(/(\d+)\s*-\s*(\d+)/);
        if (ageMatch) {
          const minAge = parseInt(ageMatch[1]);
          const maxAge = parseInt(ageMatch[2]);
          return age >= minAge && age <= maxAge;
        }
        return true;
      });
    }

    setFilteredPrograms(filtered);

    // Update URL without reload
    const queryString = params.toString();
    const newUrl = queryString ? `/#searchform?${queryString}` : `/#searchform`;
    window.history.pushState({}, "", newUrl);

    // Scroll to searchform
    const searchForm = document.getElementById("searchform");
    if (searchForm) {
      searchForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main id="tm-main">
      {/* Hero Section với Background Image và Filter Form */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          #page\\#0,
          #page\\#0 .el-title {
            text-shadow: 0px 0px 10px #00000099;
          }
          #page\\#1 {
            background: rgba(0, 0, 0, 0.55);
            padding: 20px;
            padding-bottom: 80px;
            margin-bottom: -100px;
          }
          #searchform {
            background: #006533;
          }
          #page\\#2 .el-meta {
            position: absolute;
            top: 0;
            right: 25px;
            background: #fff;
            padding: 3px 15px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 10px;
          }
        `,
        }}
      />

      <div
        id="searchform"
        className="uk-section-primary uk-section-overlap uk-position-relative"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/banner/b3.jpg"
            )})`,
            minHeight: "500px",
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          ></div>

          <div className="uk-container uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-margin-remove-bottom">
              <div className="uk-width-1-1">
                <h1
                  className="uk-heading-small uk-text-center !text-[5vw]"
                  id="page#0"
                  style={{ color: "#fff" }}
                >
                  International holiday camps with Go and Grow
                </h1>
                <div className="uk-margin uk-width-medium uk-margin-auto uk-text-center">
                  <Link className="el-link" href="/booking">
                    <Image
                      src={getTemplateImageUrl(
                        "yootheme/cache/12/Storer-min-125a5bd1.png"
                      )}
                      width={400}
                      height={200}
                      className="el-image"
                      alt="Camps 2026 online, Book now!"
                      priority
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Filter Form */}
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1">
                <div id="page#1">
                  <form
                    id="filter-form"
                    method="GET"
                    action="/#searchform"
                    onSubmit={handleFilterSubmit}
                    uk-grid=""
                  >
                    <div className="uk-width-1-4@m">
                      <label
                        className="uk-form-label"
                        style={{ color: "#fff" }}
                      >
                        Programs & Courses
                      </label>
                      {/* MultiSelect cho Programs */}
                      <select
                        id="field_4_select"
                        className="multiselect"
                        data-hidden="field_4"
                        multiple
                      >
                        <option value="adventure">
                          Adventure, Sport and Creative
                        </option>
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
                        <option value="water-sports">
                          Multi Water Adventure
                        </option>
                        <option value="horseback">Horseback Riding</option>
                        <option value="dlrg">
                          Lifeguard course (DLRG bronze)
                        </option>
                        <option value="swimming">Swimming course</option>
                        <option value="sailing">Sailing</option>
                        <option value="skating">Skating</option>
                        <option value="space">Space Exploration</option>
                        <option value="spanish">Spanish course</option>
                        <option value="survival">Survival</option>
                        <option value="dancing">Dancing</option>
                        <option value="diving">
                          Diving course (PADI Open Water)
                        </option>
                        <option value="climbing">Climbing</option>
                        <option value="tennis">Tennis</option>
                        <option value="windsurf">Windsurfing</option>
                      </select>
                      {/* Hidden field để lưu giá trị đã chọn */}
                      <input type="hidden" id="field_4" name="field_4" value="" />
                    </div>

                    <div className="uk-width-1-4@m">
                      <label
                        className="uk-form-label"
                        style={{ color: "#fff" }}
                      >
                        Holiday
                      </label>
                      {/* MultiSelect cho Holiday */}
                      <select
                        id="field_5_select"
                        className="multiselect"
                        data-hidden="field_5"
                        multiple
                      >
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="autumn">Autumn</option>
                      </select>
                      {/* Hidden field để lưu giá trị đã chọn */}
                      <input type="hidden" id="field_5" name="field_5" value="" />
                    </div>

                    <div className="uk-width-1-4@m">
                      <label
                        className="uk-form-label"
                        style={{ color: "#fff" }}
                      >
                        Location
                      </label>
                      {/* MultiSelect cho Location */}
                      <select
                        id="field_6_select"
                        className="multiselect"
                        data-hidden="field_6"
                        multiple
                      >
                        <option value="northern-germany">
                          Northern Germany
                        </option>
                        <option value="west-germany">West Germany</option>
                        <option value="south-germany">South Germany</option>
                        <option value="england">England</option>
                        <option value="spain">Spain</option>
                      </select>
                      {/* Hidden field để lưu giá trị đã chọn */}
                      <input type="hidden" id="field_6" name="field_6" value="" />
                    </div>

                    <div className="uk-width-1-4@m">
                      <label
                        className="uk-form-label"
                        style={{ color: "#fff" }}
                      >
                        Age
                      </label>
                      {/* UIkit Select cho Age (single select) */}
                      <select
                        id="field_7_select"
                        name="field_7"
                        className="uk-select"
                      >
                        <option value=""></option>
                        {Array.from({ length: 12 }, (_, i) => i + 7).map(
                          (age) => (
                            <option key={age} value={age}>
                              {age}
                            </option>
                          )
                        )}
                      </select>
                    </div>

                    <div className="uk-width-1-1">
                      <button
                        className="uk-button uk-button-default"
                        type="submit"
                      >
                        Apply filter
                      </button>
                      <button
                        className="uk-button uk-button-secondary"
                        type="button"
                        onClick={() => {
                          window.location.href = "/#searchform";
                        }}
                      >
                        Reset
                      </button>
                    </div>
                  </form>

                  {/* Script để khởi tạo multiselect và xử lý form submission */}
                  <script
                    dangerouslySetInnerHTML={{
                      __html: `
                        (function() {
                          function initMultiselect() {
                            if (typeof jQuery !== 'undefined' && jQuery.fn.multiselect) {
                              jQuery(document).ready(function($) {
                                // Khởi tạo MultiSelect nếu chưa được khởi tạo
                                if (!$('.multiselect[multiple]').data('plugin_multiselect')) {
                                  $('.multiselect[multiple]').multiselect({
                                    texts: {
                                      placeholder: '',
                                      selectedOptions: ''
                                    },
                                    selectAll: false,
                                    selectGroup: true
                                  });
                                }

                                // Update hidden fields before form submission
                                // Lấy giá trị từ multiselect và đưa vào hidden fields
                                document.querySelectorAll('.multiselect').forEach(function(select) {
                                  const hiddenFieldId = select.getAttribute('data-hidden');
                                  const hiddenField = document.getElementById(hiddenFieldId);
                                  const selectedValues = $(select).val(); // Lấy giá trị từ MultiSelect

                                  if (hiddenField) {
                                    hiddenField.value = selectedValues ? selectedValues.join(',') : '';
                                  }
                                });

                                // Also update the multiselect values when they change
                                $('.multiselect[multiple]').on('change', function() {
                                  const hiddenFieldId = $(this).attr('data-hidden');
                                  const hiddenField = document.getElementById(hiddenFieldId);
                                  const selectedValues = $(this).val();

                                  if (hiddenField) {
                                    hiddenField.value = selectedValues ? selectedValues.join(',') : '';
                                  }
                                });
                              });
                            } else {
                              // Retry sau 100ms nếu jQuery chưa sẵn sàng
                              setTimeout(initMultiselect, 100);
                            }
                          }
                          initMultiselect();
                        })();
                      `,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="uk-section-default uk-section uk-section-small">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <h2 className="uk-h2 uk-text-center@m uk-text-center !text-[1.67vw]">
                <p>Go and Grow program</p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="uk-section-default uk-section uk-padding-remove-top">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <div id="page#2" className="uk-margin">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match"
                  uk-grid=""
                >
                  {filteredPrograms.map((program) => (
                    <ProgramCard key={program.id} {...program} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Go and Grow Camp has organised section */}
      <div className="uk-section-default uk-section uk-section-small uk-padding-remove-bottom">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center@m uk-text-center !font-bold">
                <p>
                  Go and Grow Camp has organised international summer camps and
                  outdoor educational school trips in various countries
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section with Jan Vieth */}
      <div
        className="uk-section-muted uk-section-overlap uk-section uk-section-small"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div
            className="uk-grid tm-grid-expand uk-grid-large uk-margin-xlarge"
            uk-grid=""
          >
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
              <div className="uk-panel uk-width-1-1">
                <div
                  className="uk-margin uk-text-center@s uk-text-center"
                  uk-scrollspy-class="uk-animation-fade"
                >
                  <Image
                    src={getTemplateImageUrl("yootheme/banner/b1.jpg")}
                    width={250}
                    height={166}
                    className="el-image"
                    alt="Jan Vieth, Founder & General Manager of Go and Grow"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="uk-grid-item-match uk-flex-middle uk-width-2-3@m">
              <div className="uk-panel uk-width-1-1">
                <blockquote
                  className="uk-margin-medium uk-text-left@m uk-text-center"
                  uk-scrollspy-class=""
                >
                  <p>
                    Regardless of which country or culture a child, teen or
                    staff member comes from – they should all feel comfortable
                    together and experience a unique and unforgettable time at
                    camp.
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">Go and Grow</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Holidays that do more section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">
                  Holidays that do more – International language and specialty
                  camps for kids & teens
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Outdoor adventures, language travel & unforgettable
                    experiences in Germany, England & Spain – bilingual,
                    media-free & full of camp vibes.
                  </p>
                  <p>
                    For over 20 years, Go and Grow has stood for international
                    summer camps that truly connect kids and teens. Founded by
                    Jan Vieth and inspired by Canadian camp life, we bring young
                    people from all over the world together – to learn, grow,
                    and explore.
                  </p>
                  <p>
                    Our language camps, sports camps, and specialty camps
                    combine nature, community, and real learning by living.
                    Here, you don't just learn a language – you learn life
                    itself: outdoors, together, for real.
                  </p>
                  <p>
                    Because with us, it's not just about what you learn – it's
                    about what you experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Holiday camps for every season section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">
                  Holiday camps for every season | Go and Grow
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Our outdoor, sports, and language camps run all year round –
                    in Germany, England, and Spain.
                    <br />
                    When will your next adventure begin?
                  </p>
                  <p>
                    Spring, Easter & Whitsun – kick off your holidays full of
                    energy!
                    <br />
                    Our spring camps add some excitement to the short breaks:
                    bilingual, active, and packed with that true camp feeling –
                    from tent camps to language holidays in Germany or Spain.
                    <br />
                    Perfect to boost your English, Spanish, or German skills –
                    in class or out in nature during epic outdoor adventures.
                  </p>
                  <p>
                    Summer, summer camps – ready to go?
                    <br />
                    When the sun's out, Go and Grow is in its element!
                    <br />
                    Our summer camps in Germany, Spain, and England offer
                    endless variety: watersports, horseback riding, climbing,
                    football, creative camps, and so much more.
                    <br />
                    With our bilingual teamers, you'll improve your English
                    naturally – the best prep for a confident school start!
                    <br />
                    Or dive straight into language and adventure with our
                    English and Spanish language camps and youth travel programs
                    in Germany, Barcelona, or England.
                  </p>
                  <p>
                    Autumn, fall camps – days full of action?
                    <br />
                    Our autumn camp in Walsrode has become a true tradition –
                    authentic Canadian camp life with kids from all over the
                    world.
                    <br />
                    With over 20 activities, international teamers, and special
                    programs like Husky, horseback riding, or English camps,
                    there's something for everyone.
                  </p>
                  <p>
                    Winter, winter break – when the world slows down?
                    <br />
                    We're busy creating new ideas, training our teamers, and
                    planning fresh adventures – ready to welcome you back to
                    camp next season.
                  </p>
                  <p>
                    Find your perfect camp:
                    <br />→ Easter camp, Whitsun camp, summer camp, autumn camp
                    –
                    <Link href="/camp-profiles" target="_blank" rel="noopener">
                      your next adventure is waiting!
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The perfect camp for every age group section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">
                  The perfect camp for every age group
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    At Go and Grow, kids and teens from all over the world come
                    together – aged 7 to 17. Every age group brings its own
                    unique spirit, and not every camp fits everyone – that's why
                    we offer a wide range of summer camps and youth travel
                    programs for every age and interest!
                  </p>
                  <p>
                    Many start with our kids' camps and holiday programs,
                    experiencing for the first time what it's like to spend a
                    week away from home. It's a chance to grow courage,
                    confidence, and real friendships – that's pure camp life.
                    Our daily structure and activities are tailored to younger
                    campers, helping them feel safe, supported, and right at
                    home.
                  </p>
                  <p>
                    For older participants, we offer summer camps, specialty
                    programs, and international youth trips that encourage
                    independence, adventure, and new connections – always
                    active, inspiring, and full of opportunities to grow.
                  </p>
                  <p>
                    Depending on the location and program, age groups mix
                    differently – sometimes younger, sometimes older, but always
                    international. In our outdoor, language, and adventure
                    camps, everyone finds the perfect space to learn, explore,
                    and have fun.
                  </p>
                  <p>
                    Our{" "}
                    <Link href="/camp-profiles" target="_blank" rel="noopener">
                      specialty camps
                    </Link>{" "}
                    nurture talents, interests, and self-confidence – with no
                    pressure, just plenty of motivation. Whether you're a
                    first-time camper or already a seasoned pro, you'll be seen,
                    supported, and appreciated – just as you are.
                  </p>
                  <p>
                    Find your camp:
                    <br />→ Discover the holiday camp that fits you best – and
                    grow beyond your limits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialty camps & adventure holidays section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">
                  Specialty camps & adventure holidays | Go and Grow
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Our outdoor, sports, and creative camps combine movement,
                    community, and adventure – all powered by true passion.
                    Whether you want to try something new, develop your talent,
                    or simply experience unforgettable holidays, you'll find
                    your personal highlight in our specialty camps.
                  </p>
                  <p>
                    Choose from over 20 different specialty camps across
                    multiple locations – from action to mindfulness, from sports
                    to language. The following examples give you just a taste of
                    our diverse camp world:
                  </p>
                  <p>
                    <Link
                      href="/camp-profiles/soccer"
                      target="_blank"
                      rel="noopener"
                    >
                      Football Camp:
                    </Link>{" "}
                    Train with real coaches from our partner clubs, boost your
                    skills, team spirit, and game understanding – all in an
                    authentic camp atmosphere.
                    <br />
                    <Link
                      href="/camp-profiles/multi-water-adventure"
                      target="_blank"
                      rel="noopener"
                    >
                      Multiwater Camp:
                    </Link>{" "}
                    Sailing, windsurfing, diving, or SUP – it's all about sun,
                    waves, and endless water fun.
                    <br />
                    <Link
                      href="/camp-profiles/climbing"
                      target="_blank"
                      rel="noopener"
                    >
                      Climbing Camp:
                    </Link>{" "}
                    Big climbs, high ropes, and our legendary climbing park –
                    with experienced guides, you'll find out what you're truly
                    capable of.
                    <br />
                    <Link
                      href="/camp-profiles/horseback-riding"
                      target="_blank"
                      rel="noopener"
                    >
                      Riding Camp:
                    </Link>{" "}
                    For all horse lovers – from grooming and care to riding
                    technique. Intensive, warm-hearted, and full of horse
                    passion.
                    <br />
                    <Link
                      href="/camp-profiles/husky-camp"
                      target="_blank"
                      rel="noopener"
                    >
                      Husky Camp:
                    </Link>{" "}
                    Connection, trust, and responsibility – experience pure
                    energy side by side with our huskies. Action, mindfulness,
                    and teamwork combined.
                    <br />
                    <Link
                      href="/camp-profiles/senior-plus-leadership"
                      target="_blank"
                      rel="noopener"
                    >
                      Leadership Camp
                    </Link>
                    <strong>:</strong> For teens ready to grow beyond themselves
                    – with team challenges, communication training, and a
                    wilderness hike that'll definitely push you out of your
                    comfort zone.
                  </p>
                  <p>
                    And if you don't choose a specialty camp? No worries! Every
                    Go and Grow program includes our signature mix of{" "}
                    <Link
                      href="/camp-profiles/adventure-sports-creative"
                      target="_blank"
                      rel="noopener"
                    >
                      adventure, sports, and creativity
                    </Link>{" "}
                    – designed to spark movement, imagination, and team spirit
                    for every age and interest.
                  </p>
                  <p>
                    Because at Go and Grow, one thing's always true: no matter
                    what you choose, you'll discover new things, build
                    friendships, and make memories that last a lifetime.
                  </p>
                  <p>
                    <strong>Find your specialty camp:</strong>
                    <br />→ Football, watersports, horseback riding, huskies,
                    climbing, or leadership –
                    <Link href="/camp-profiles" target="_blank" rel="noopener">
                      your adventure is waiting!
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language camps & adventure trips section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">
                  Language camps & adventure trips | Go and Grow
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    At Go and Grow, language isn't just taught – it's lived. We
                    go beyond vocabulary and grammar to focus on real-life
                    communication, culture, and adventure – true Learning by
                    Living.
                  </p>
                  <p>
                    Our language programs take place in Germany, England, and
                    Spain – for all ages and levels. Whether you're just
                    starting with English or preparing for the TOEFL®, we'll
                    help you grow from where you are.
                  </p>
                  <p>
                    Language is more than grammar drills. Our native-speaking
                    teamers take you out of the classroom and into real
                    experiences: playing football in English, exploring cities
                    in Spanish, connecting with locals – that's how your
                    language holiday becomes a true adventure trip.
                  </p>
                  <p>
                    In{" "}
                    <Link
                      href="/destinations/en-england-bath-university"
                      target="_blank"
                      rel="noopener"
                    >
                      Bath
                    </Link>{" "}
                    and Cornwall, you'll enjoy multi-day excursions to London.
                    In{" "}
                    <Link
                      href="/destinations/en-spain-barcelona"
                      target="_blank"
                      rel="noopener"
                    >
                      Barcelona
                    </Link>
                    , you're right in the heart of the city. And our German
                    locations are hand-picked to feel just as adventurous.
                  </p>
                  <p>
                    <strong>Program overview:</strong>
                    <br />•{" "}
                    <Link
                      href="/camp-profiles/englischcamps"
                      target="_blank"
                      rel="noopener"
                    >
                      English Classic
                    </Link>{" "}
                    – practical, everyday English with native coaches
                    <br />•{" "}
                    <Link
                      href="/camp-profiles/german-camps"
                      target="_blank"
                      rel="noopener"
                    >
                      German Classic
                    </Link>{" "}
                    – hands-on learning for beginners & advanced learners
                    <br />•{" "}
                    <Link
                      href="/camp-profiles/spanishcourse"
                      target="_blank"
                      rel="noopener"
                    >
                      Spanish Classic
                    </Link>{" "}
                    – experience language, sunshine, and culture
                    <br />•{" "}
                    <Link
                      href="/camp-profiles/englisch-toefl"
                      target="_blank"
                      rel="noopener"
                    >
                      TOEFL® Course
                    </Link>{" "}
                    – focused exam preparation with intensive training
                  </p>
                  <p>
                    <strong>Find your language camp:</strong>
                    <br />→
                    <Link
                      href="/camp-profiles/language-camps"
                      target="_blank"
                      rel="noopener"
                    >
                      English, Spanish, or German
                    </Link>{" "}
                    – in Germany, England, or Spain. Language, culture,
                    adventure – all in one camp experience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* School trips & group travel section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">
                  School trips & group travel with Go and Grow
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Whether it's a school trip, group travel, or project days –
                    at Go and Grow, students aged 7 to 17 experience
                    unforgettable days full of teamwork, outdoor fun, and
                    international spirit.
                  </p>
                  <p>
                    Our proven camp concept is perfectly tailored for school
                    groups:
                  </p>
                  <p>
                    • <strong>Age-appropriate programs</strong>, clear daily
                    routines, and diverse activities help every class grow
                    closer together.
                    <br />• Whether it's{" "}
                    <strong>
                      outdoor challenges, creative workshops, or teambuilding
                      programs
                    </strong>{" "}
                    – at Camp Adventure, it's all about connection and
                    collaboration.
                    <br />• Teachers can relax: our internationally trained
                    teamers take care of supervision and educational guidance,
                    building confidence and strengthening group bonds.
                  </p>
                  <p>
                    That's how every school trip becomes a true adventure
                    journey – combining community, exploration, and learning.
                  </p>
                  <p>
                    Our locations in{" "}
                    <strong>Germany, England, and Spain</strong> offer the
                    perfect setting: spacious outdoor areas, a wide range of
                    activities, modern facilities, and plenty of room for real
                    camp life.
                  </p>
                  <p>
                    We also welcome <strong>international schools</strong>!
                    Together, we create learning spaces where cultures,
                    languages, and perspectives meet.
                    <br />
                    Openness and global exchange are part of our DNA – here, the
                    world becomes tangible on a small scale: kids and teens from
                    over 70 nations come together, learn from one another, and
                    discover what global community truly means.
                  </p>
                  <p>
                    <strong>Ready for an extraordinary school trip?</strong>
                    <br />→{" "}
                    <Link href="/schooltrips" target="_blank" rel="noopener">
                      Learn more about our group programs
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Family weekends & parent-child camps section */}
      <div className="uk-section-default uk-section uk-section-xsmall">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">
                  Family weekends & parent-child camps at Go and Grow
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Real camp life – this time, together!
                    <br />
                    At our family weekends, you'll enjoy three days full of
                    adventure, campfires, nature, and connection. Whether it's
                    canoeing, climbing, swimming, stand-up paddling, or archery
                    – a fun-filled program awaits you from morning till night.
                  </p>
                  <p>
                    The best part? You don't have to plan a thing!
                    Accommodation, meals, and activities are all included – true
                    to the Go and Grow motto: arrive, relax, experience.
                  </p>
                  <p>
                    Our international teamers create the perfect camp vibe,
                    guide you through every activity, and make sure it all feels
                    like a real vacation.
                    <br />
                    Ideal for families who want to get a taste of camp life,
                    spend quality time together, and share that unique Go and
                    Grow feeling with their kids.
                  </p>
                  <p>
                    Tip: We also offer <strong>father-child camps</strong> –
                    perfect for creating lasting memories and sharing
                    unforgettable adventures together.
                  </p>
                  <p>
                    → Find your date &{" "}
                    <Link
                      href="/info/family-weekend"
                      target="_blank"
                      rel="noopener"
                    >
                      book your family weekend
                    </Link>
                    <br />→ Experience nature, adventure & togetherness – as a
                    family
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book your Holidaycamp CTA section */}
      <div className="uk-section-default uk-section-overlap uk-section uk-padding-remove-top">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <div className="uk-panel uk-text-emphasis uk-margin">
                  <p>
                    Some holidays you forget. Others change you. At Go and Grow,
                    you grow beyond yourself, discover new languages, cultures,
                    and friends for life.
                    <br />
                    So – what's stopping you? Your next adventure is already
                    waiting.
                  </p>
                </div>
                <div className="uk-blend-difference uk-margin uk-text-center">
                  <Link
                    className="el-content uk-button uk-button-default"
                    href="/booking"
                  >
                    Book your Holidaycamp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We love Camp section */}
      <div
        className="uk-section-muted uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-medium uk-child-width-1-1 uk-grid-margin-medium">
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-1@m">
              <div className="uk-panel uk-width-1-1">
                <h4 className="uk-h2 uk-text-center !text-[2.22vw] !font-bold" uk-scrollspy-class="">
                  <p>We love Camp</p>
                </h4>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class=""
                ></div>
              </div>
            </div>
          </div>
          <div
            className="uk-grid tm-grid-expand uk-grid-large uk-grid-margin-large"
            uk-grid=""
          >
            <div className="uk-width-expand@m">
              <div
                className="uk-panel uk-margin-remove-first-child uk-margin-large uk-text-center@m uk-text-center"
                uk-scrollspy-class=""
              >
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                  Internationality
                </h3>
                <div className="el-content uk-panel uk-margin-top !text-black">
                  <p>&nbsp;participants from more than 70 countries</p>
                </div>
              </div>
              <div
                className="uk-panel uk-margin-remove-first-child uk-margin-large uk-text-center@m uk-text-center"
                uk-scrollspy-class=""
              >
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                  Outdoors
                </h3>
                <div className="el-content uk-panel uk-margin-top !text-black">
                  <p>feel the real nature in the best surroundings</p>
                </div>
              </div>
            </div>
            <div className="uk-width-medium@m">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/logo/logo.png"
                  )}
                  width={640}
                  height={629}
                  className="el-image"
                  alt="Go and Grow"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-expand@m">
              <div
                className="uk-panel uk-margin-remove-first-child uk-margin-large uk-text-center@m uk-text-center"
                uk-scrollspy-class=""
              >
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                  Friendship
                </h3>
                <div className="el-content uk-panel uk-margin-top !text-black">
                  <p>make friends from all over the world</p>
                </div>
              </div>
              <div
                className="uk-panel uk-margin-remove-first-child uk-margin-large uk-text-center@m uk-text-center"
                uk-scrollspy-class=""
              >
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                  Challenge
                </h3>
                <div className="el-content uk-panel uk-margin-top !text-black">
                  <p>leave your comfort zone, challenge yourself</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join the Go and Grow team section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">Join the Go and Grow team</h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Since the very beginning, Go and Grow has stood for
                    openness, diversity, and community – within our team, too!
                    <br />
                    People from all over the world work with us and grow with
                    every season.
                  </p>
                  <p>
                    We train our teamers ourselves – directly within the
                    organization.
                    <br />
                    Our training follows Go and Grow's high standards in
                    experiential education and is personally guided by founder
                    Jan Vieth and our experienced trainers.
                    <br />
                    That's how we get to know every single teamer and build the
                    trust that makes our camps so special.
                  </p>
                  <p>
                    Whether as a <strong>counselor</strong>,{" "}
                    <strong>camp leader</strong>, or <strong>trainer</strong>,
                    you'll grow with us – take on responsibility, gain
                    experience, and inspire kids from around the world.
                  </p>
                  <p>
                    Grow with us – in the team, at camp, and in life.
                    <br />→{" "}
                    <Link href="/academy" target="_blank" rel="noopener">
                      Learn more about our training programs
                    </Link>
                    <br />→{" "}
                    <Link
                      href="/academy/jobs#application"
                      target="_blank"
                      rel="noopener"
                    >
                      Apply now and become part of the Camp Adventure family
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnerships & memberships section */}
      <div
        className="uk-section-default uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-scale-up; delay: false;"
      >
        <div
          data-src={getTemplateImageUrl(
            "yootheme/cache/d1/background_campground-d13d89db.jpeg"
          )}
          uk-img=""
          className="uk-background-norepeat uk-background-contain uk-background-bottom-center uk-section uk-section-small"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/d1/background_campground-d13d89db.jpeg"
            )})`,
            backgroundSize: "contain",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.87)" }}
          ></div>

          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
              <div className="uk-width-1-1@m">
                <div
                  className="uk-h5 uk-margin-small uk-text-center !text-[1.67vw] !font-semibold "
                  uk-scrollspy-class="uk-animation-slide-top-medium"
                >
                  Go and Grow
                </div>
                <h2
                  className="uk-h1 uk-margin-small uk-text-center !text-[5vw] !font-bold"
                  uk-scrollspy-class="uk-animation-slide-bottom-medium"
                >
                  <p>Partnerships & memberships</p>
                </h2>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class=""
                ></div>
              </div>
            </div>
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <div className="uk-margin uk-text-center">
                  <div
                    className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-3@l uk-grid-collapse uk-grid-match"
                    uk-grid=""
                  >
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://simsswiss.ch/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={getTemplateImageUrl("yootheme/logo/sims.jpg")}
                            width={120}
                            height={120}
                            alt="Sims"
                            loading="lazy"
                            className="el-image"
                            style={{ display: "block", margin: "0 auto" }}
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="#"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/logo/terranova.png"
                            )}
                            width={178}
                            height={120}
                            alt="Terra Nova"
                            loading="lazy"
                            className="el-image"
                            style={{ display: "block", margin: "0 auto" }}
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="#"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={getTemplateImageUrl("yootheme/logo/lrn.png")}
                            width={120}
                            height={120}
                            alt="LRN"
                            loading="lazy"
                            className="el-image"
                            style={{ display: "block", margin: "0 auto" }}
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="#"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/logo/salazar.jpg"
                            )}
                            width={112}
                            height={120}
                            alt="Salazar"
                            loading="lazy"
                            className="el-image"
                            style={{ display: "block", margin: "0 auto" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
