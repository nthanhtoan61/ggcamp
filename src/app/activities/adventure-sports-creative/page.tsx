"use client";

import type { Metadata } from "next";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components";
import { Star, MapPin, Clock, Moon, Ticket } from "lucide-react";
import ActivityDetailSections from "@/components/features/ActivityDetailSections";

// --- IMPORT HOẶC ĐỊNH NGHĨA PAGE DATA Ở ĐÂY ---
// Trong thực tế, bạn nên import từ file khác: import { pageData } from '@/data/campData';
import pageData from "./content.json" // Giả sử bạn đã lưu data vào file content.json

export default function AdventureSportsCreativePage() {
  // Thay vì dùng prop {}, chúng ta dùng trực tiếp biến pageData
  // Nếu muốn dynamic hoàn toàn, component này nên nhận props: { data: PageContent }
  const data = pageData; 

  const [currentSlide, setCurrentSlide] = useState(0);

  // Logic cuộn trang
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offsetTop = element.offsetTop - 20; 
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  // Logic Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.mainGallery.slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [data.mainGallery.slides.length]);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={data.hero.title}
        backgroundImage={data.hero.bgImage}
        overlayColor="rgba(0, 0, 0, 0.35)"
        sectionClass="uk-section-default uk-preserve-color uk-light"
        titleClass="uk-heading-large uk-text-center ]"
      />

      {/* Basic Info Section */}
      <div id="Start" className="uk-section-default uk-section uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
             {/* ProSeal Widget (Giữ nguyên hoặc đưa vào config nếu cần) */}
            <div className="uk-light uk-width-1-3@s uk-width-1-6@m">
              <div><center><div id="proSealWidget"></div></center></div>
            </div>

            {/* Location Icon Block */}
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span className="uk-text-primary" uk-icon="icon: location; width: 50; height: 50;"></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>{data.basicInfo.location}</p>
              </div>
            </div>

            {/* Age Icon Block */}
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span className="uk-text-primary" uk-icon="icon: users; width: 50; height: 50;"></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p dangerouslySetInnerHTML={{ __html: data.basicInfo.ageRange.replace(/\n/g, '<br/>') }} />
              </div>
            </div>

            {/* Accommodation Icon Block */}
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span className="uk-text-primary" uk-icon="icon: home; width: 50; height: 50;"></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>{data.basicInfo.accommodationType}</p>
              </div>
            </div>

            {/* Care Icon Block */}
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span className="uk-text-primary" uk-icon="icon: heart; width: 50; height: 50;"></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>{data.basicInfo.careLevel}</p>
              </div>
            </div>

            {/* Language Icon Block */}
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span className="uk-text-primary" uk-icon="icon: comments; width: 50; height: 50;"></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p dangerouslySetInnerHTML={{ __html: data.basicInfo.languages.replace(/\n/g, '<br/>') }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ backgroundColor: "var(--color-background)", minHeight: "100vh", padding: "60px 0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
            
            {/* --- SIDEBAR --- */}
            <div className="lg:sticky lg:top-[120px] flex flex-col gap-5 w-full">
              
              {/* Navigation Menu */}
              <style jsx>{`
                  .group:hover .nav-text { color: #ffff !important; font-weight: 600 !important; }
                  .group:hover .sidebar-arrow { color: #ffff !important; transform: rotate(45deg) !important; }
                `}</style>
              <div className="uk-panel uk-padding uk-background-muted uk-border-rounded w-full"
                  style={{ backgroundColor: "var(--color-primary)", borderRadius: "15px", color: "#808080", marginBottom: "20px" }}>
                  <ul className="uk-nav uk-nav-default">
                    {data.sidebar.menuItems.map((item: any, index: number, array: any) => (
                      <li key={item.href} className="uk-margin-small-bottom group"
                        style={{ borderBottom: index < array.length - 1 ? "1px solid #e5e5e5" : "none", paddingBottom: "12px" }}>
                        <button onClick={() => scrollToSection(item.href.substring(1))}
                          className="uk-button uk-button-link uk-text-left uk-padding-remove-left uk-width-1-1 text-[1.1rem] uk-text-normal"
                          style={{ textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", background: "none", border: "none", cursor: "pointer", fontWeight: "400", color: "black" }}>
                          <span className="nav-text" style={{ flex: 1, transition: "color 0.3s ease" }}>{item.name}</span>
                          <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                             {/* Arrow SVG giữ nguyên */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 12 12" fill="currentColor" className="sidebar-arrow" style={{ transform: "rotate(0deg)", transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.3s ease" }}>
                              <path d="M11.7495 0.251043C12.0842 0.585767 12.0842 1.12847 11.7495 1.4632L2.03546 11.1772C1.70074 11.512 1.15803 11.512 0.823308 11.1772C0.488585 10.8425 0.488585 10.2999 0.823308 9.96514L10.5374 0.251043C10.8721 -0.0836809 11.4148 -0.0836809 11.7495 0.251043Z" />
                              <path d="M0 0.857123C0 0.383751 0.383751 0 0.857123 0H11.1426C11.616 0 11.9997 0.383751 11.9997 0.857123V11.1426C11.9997 11.616 11.616 11.9997 11.1426 11.9997C10.6692 11.9997 10.2855 11.616 10.2855 11.1426V1.71425H0.857123C0.383751 1.71425 0 1.3305 0 0.857123Z" />
                            </svg>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="p-4">
                    <a href={`/booking`} className="block"><div className="uk-button uk-button-default w-full">Booking</div></a>
                  </div>
              </div>

              {/* Contact Card */}
              <div className="fadeInUp" style={{ background: "var(--color-primary)", borderRadius: "8px", padding: "40px 30px", animation: "fadeInUp 0.6s ease-out 0.1s backwards" }}>
                 {/* ... SVG Icon lớn giữ nguyên ... */}
                 <div style={{marginBottom: "30px"}}>
                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="currentColor"
                      style={{ color: "black" }}
                    >
                      <path d="M9.96387 23.2148C9.96387 22.9402 9.85433 22.6766 9.66016 22.4824C9.46597 22.2882 9.20247 22.1787 8.92773 22.1787H5.35645C4.60821 22.1787 3.89044 22.4758 3.36133 23.0049C2.83224 23.534 2.53519 24.2518 2.53516 25V30.3574C2.53519 31.1057 2.83227 31.8235 3.36133 32.3525C3.89043 32.8816 4.60823 33.1787 5.35645 33.1787H8.92773C9.20247 33.1787 9.46597 33.0692 9.66016 32.875C9.85433 32.6808 9.96387 32.4173 9.96387 32.1426V23.2148ZM11.4639 32.1426C11.4639 32.8151 11.1963 33.4609 10.7207 33.9365L10.7197 33.9355C10.2442 34.4109 9.60001 34.6787 8.92773 34.6787H5.35645C4.21037 34.6787 3.11117 34.2235 2.30078 33.4131C1.49035 32.6027 1.03519 31.5035 1.03516 30.3574V25C1.03519 23.8539 1.4904 22.7548 2.30078 21.9443C3.11116 21.1341 4.21036 20.6787 5.35645 20.6787H8.92773C9.60001 20.6787 10.2442 20.9465 10.7197 21.4219L10.7207 21.4209C11.1963 21.8965 11.4639 22.5424 11.4639 23.2148V32.1426Z"></path>
                      <path d="M38.5352 23.2148C38.5352 22.5425 38.8023 21.8973 39.2773 21.4219V21.4209C39.7529 20.9453 40.3988 20.6787 41.0713 20.6787H44.6426C45.7886 20.6788 46.8879 21.134 47.6982 21.9443C48.5086 22.7547 48.9638 23.854 48.9639 25V30.3574C48.9638 31.5035 48.5086 32.6028 47.6982 33.4131C46.8879 34.2235 45.7886 34.6787 44.6426 34.6787H41.0713C40.3988 34.6787 39.7529 34.4121 39.2773 33.9365V33.9355C38.8023 33.4601 38.5352 32.815 38.5352 32.1426V23.2148ZM40.0352 32.1426C40.0352 32.4172 40.1447 32.6807 40.3389 32.875C40.5331 33.0692 40.7966 33.1787 41.0713 33.1787H44.6426C45.3908 33.1787 46.1087 32.8816 46.6377 32.3525C47.1668 31.8235 47.4638 31.1057 47.4639 30.3574V25C47.4638 24.2518 47.1668 23.534 46.6377 23.0049C46.1087 22.4759 45.3908 22.1788 44.6426 22.1787H41.0713C40.7966 22.1787 40.5331 22.2882 40.3389 22.4824C40.1447 22.6767 40.0352 22.9403 40.0352 23.2148V32.1426Z"></path>
                      <path d="M40.3184 36.6074V33.9287C40.3184 33.5146 40.6543 33.1789 41.0684 33.1787C41.4826 33.1787 41.8184 33.5145 41.8184 33.9287V36.6074C41.8183 38.7007 40.987 40.7084 39.5068 42.1885C38.0267 43.6687 36.019 44.5 33.9258 44.5C33.5116 44.5 33.1758 44.1642 33.1758 43.75C33.1758 43.3358 33.5116 43 33.9258 43C35.6213 43 37.2475 42.3268 38.4463 41.1279C39.6451 39.9291 40.3183 38.3029 40.3184 36.6074Z"></path>
                      <path d="M33.1807 43.75C33.1805 42.7651 32.7891 41.8204 32.0928 41.124C31.3962 40.4275 30.4509 40.0361 29.4658 40.0361H24.1084C23.1235 40.0362 22.179 40.4276 21.4824 41.124C20.786 41.8204 20.3946 42.765 20.3945 43.75C20.3945 44.7351 20.7859 45.6804 21.4824 46.377C22.179 47.0733 23.1235 47.4647 24.1084 47.4648H29.4658C30.4509 47.4648 31.3962 47.0735 32.0928 46.377C32.7893 45.6804 33.1807 44.735 33.1807 43.75ZM34.6807 43.75C34.6807 45.1328 34.1312 46.4596 33.1533 47.4375C32.1755 48.4154 30.8487 48.9648 29.4658 48.9648H24.1084C22.7257 48.9647 21.3997 48.4152 20.4219 47.4375C19.444 46.4596 18.8945 45.1329 18.8945 43.75C18.8946 42.3673 19.4441 41.0413 20.4219 40.0635C21.3997 39.0857 22.7257 38.5362 24.1084 38.5361H29.4658C30.8487 38.5361 32.1755 39.0856 33.1533 40.0635C34.131 41.0412 34.6805 42.3674 34.6807 43.75Z"></path>
                      <path d="M40.3184 21.4287V17.8574C40.3183 13.794 38.7044 9.89673 35.8311 7.02344C32.9577 4.1502 29.0605 2.53613 24.9971 2.53613C20.9337 2.53618 17.0364 4.15017 14.1631 7.02344C11.2899 9.89674 9.67582 13.794 9.67578 17.8574V21.4287C9.67578 21.8429 9.33999 22.1787 8.92578 22.1787C8.51157 22.1787 8.17578 21.8429 8.17578 21.4287V17.8574C8.17582 13.3962 9.94803 9.11748 13.1025 5.96289C16.2571 2.80831 20.5358 1.03618 24.9971 1.03613C29.4583 1.03613 33.737 2.80835 36.8916 5.96289C40.0462 9.11749 41.8183 13.3962 41.8184 17.8574V21.4287C41.8184 21.8429 41.4826 22.1787 41.0684 22.1787C40.6543 22.1786 40.3184 21.8428 40.3184 21.4287Z"></path>
                      <path d="M18.8945 19.6436V14.2861C18.8945 13.8719 19.2303 13.5361 19.6445 13.5361C20.0587 13.5361 20.3945 13.8719 20.3945 14.2861V19.6436C20.3944 20.0576 20.0586 20.3936 19.6445 20.3936C19.2304 20.3936 18.8947 20.0576 18.8945 19.6436Z"></path>
                      <path d="M29.6055 19.6436V14.2861C29.6055 13.8719 29.9413 13.5361 30.3555 13.5361C30.7697 13.5361 31.1055 13.8719 31.1055 14.2861V19.6436C31.1053 20.0576 30.7696 20.3936 30.3555 20.3936C29.9414 20.3936 29.6056 20.0576 29.6055 19.6436Z"></path>
                      <path d="M18.8945 26.7861C18.8945 26.3719 19.2303 26.0361 19.6445 26.0361C20.0587 26.0361 20.3945 26.3719 20.3945 26.7861C20.3945 27.6395 20.8577 28.3145 21.7002 28.8125C22.56 29.3208 23.7586 29.5986 25.002 29.5986C26.245 29.5986 27.443 29.3206 28.3027 28.8125C29.1452 28.3145 29.6084 27.6395 29.6084 26.7861C29.6084 26.3721 29.9444 26.0364 30.3584 26.0361C30.7726 26.0361 31.1084 26.3719 31.1084 26.7861C31.1084 28.3077 30.2328 29.414 29.0664 30.1035C27.9174 30.7827 26.4371 31.0986 25.002 31.0986C23.5667 31.0986 22.0856 30.7827 20.9365 30.1035C19.7703 29.414 18.8945 28.3076 18.8945 26.7861Z"></path>
                    </svg>
                    <h3 style={{ color: "black", fontSize: "20px", fontWeight: "600", lineHeight: "1.4" }}>Let&apos;s plan your perfect nature escape</h3>
                 </div>
                 <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: "15px" }}>
                       <a href={`tel:${data.sidebar.contact.phone}`} style={{ display: "flex", alignItems: "center", gap: "12px", color: "black", textDecoration: "none", fontSize: "16px", transition: "color 0.3s ease" }}>
                         <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8.8457 5.93115C8.84567 5.64689 8.73343 5.37413 8.53418 5.17139L5.28808 1.92432L5.208 1.85303C5.01329 1.69665 4.76943 1.61084 4.51757 1.61084C4.23001 1.61094 3.95373 1.72334 3.74804 1.92432L3.00586 2.68408L2.99609 2.69385C2.22454 3.45523 1.73864 4.45915 1.62011 5.53662C1.50186 6.61196 1.75664 7.69523 2.34179 8.60498C5.83558 13.7515 10.2803 18.1831 15.4365 21.6626C16.3449 22.2448 17.4253 22.4983 18.498 22.3804C19.5755 22.2619 20.5794 21.7759 21.3408 21.0044L21.3506 20.9946L22.1113 20.2495C22.3112 20.044 22.4238 19.7696 22.4238 19.4829C22.4238 19.1951 22.3115 18.9182 22.1103 18.7124L18.8447 15.4819C18.6423 15.284 18.3701 15.1725 18.0869 15.1724C17.8026 15.1724 17.5289 15.2837 17.3262 15.4829L16.8008 14.9487L17.3252 15.4849C16.8392 15.96 16.1865 16.226 15.5068 16.2261C14.8271 16.2261 14.1736 15.9601 13.6875 15.4849L8.53906 10.3354C8.29886 10.0975 8.1071 9.81434 7.97656 9.50244C7.84519 9.18854 7.77734 8.85152 7.77734 8.51123C7.77734 8.17096 7.84519 7.83391 7.97656 7.52002C8.10639 7.20982 8.29582 6.92801 8.53418 6.69092C8.73343 6.48815 8.8457 6.21544 8.8457 5.93115Z" />
                      </svg>
                          <span>{data.sidebar.contact.phone}</span>
                       </a>
                    </li>
                    <li>
                       <a href={`mailto:${data.sidebar.contact.email}`} style={{ display: "flex", alignItems: "center", gap: "12px", color: "black", textDecoration: "none", fontSize: "16px", transition: "color 0.3s ease" }}>
                           <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                          <span>{data.sidebar.contact.email}</span>
                       </a>
                    </li>
                 </ul>
              </div>

              {/* Upcoming Tours */}
              <div className="mx-auto w-full p-6 bg-gray-50 rounded-lg">
                <div className="text-xl md:text-[1.7vw] font-bold text-gray-900 mb-6">Upcoming Tour</div>
                <div className="space-y-4">
                  {data.sidebar.upcomingTours.map((tour: any) => (
                    <div key={tour.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                      <div className="flex gap-4 p-4">
                        <div className="flex-shrink-0">
                          <img src={tour.image} alt={tour.title} className="w-18 h-18 rounded-lg object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[1.5vw] font-semibold text-gray-900 mb-1">{tour.title}</div>
                          <div className="flex items-center gap-1 mb-2">
                            <Star className="w-4 h-4 fill-gray-900 text-gray-900" />
                            <span className="font-semibold text-gray-900">{tour.rating}</span>
                            <span className="text-sm text-gray-500">({tour.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center gap-1 mb-3">
                            <MapPin className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-600">{tour.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-gray-900">${tour.price}</span>
                            <span className="text-sm text-red-500 line-through">${tour.originalPrice}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className="flex flex-col gap-8 w-full">
              
              {/* Main Image Slider */}
              <div className="fadeInUp relative z-10 rounded-2xl overflow-hidden group cursor-pointer" style={{ position: "relative", borderRadius: "8px", overflow: "hidden", animation: "fadeInUp 0.6s ease-out" }}>
                <img
                  src={data.mainGallery.slides[currentSlide].url}
                  alt={data.mainGallery.slides[currentSlide].alt}
                  style={{ width: "100%", height: "auto", minHeight: "300px", maxHeight: "500px", objectFit: "cover", display: "block" }}
                />
                {/* Overlays... */}
                <div className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/30 z-20 pointer-events-none group-hover:transition-all group-hover:duration-600 group-hover:ease-linear group-hover:h-[250%] group-hover:bg-transparent" />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "250px", background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)", pointerEvents: "none" }} />

                {/* Info Bottom Left */}
                <div style={{ position: "absolute", bottom: "30px", left: "30px", color: "#fff", zIndex: 2 }}>
                  <div className="text-2xl md:text-[3vw]" style={{ color: "#fff", fontWeight: "700", margin: "0 0 15px 0", textShadow: "2px 2px 8px rgba(0,0,0,0.5)", letterSpacing: "-0.5px" }}>
                    <span>{data.mainGallery.overlayInfo.location}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: "16px", fontWeight: "500" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      {/* Calendar Icon SVG */}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      <div className="text-xs md:text-[1vw]">{data.mainGallery.overlayInfo.season}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      {/* Globe Icon SVG */}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      <div className="text-xs md:text-[1w]">{data.mainGallery.overlayInfo.languages}</div>
                    </div>
                  </div>
                </div>

                {/* Slider Dots */}
                <div style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px", zIndex: 2 }}>
                  {data.mainGallery.slides.map((_, idx: number) => (
                    <button key={idx} onClick={() => setCurrentSlide(idx)}
                      style={{ width: idx === currentSlide ? "24px" : "8px", height: "8px", borderRadius: "4px", border: "none", background: idx === currentSlide ? "#fff" : "rgba(255,255,255,0.5)", cursor: "pointer", transition: "all 0.3s ease" }} />
                  ))}
                </div>
              </div>

              {/* Event Schedule */}
              <div className="w-full mt-5">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Schedule</h2>
                <div className="border-t border-b border-gray-200 py-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-gray-700 mt-1" />
                      <div><h3 className="text-sm font-semibold mb-1">Start Date</h3><p className="text-base font-medium">{data.eventSchedule.startDate}</p></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Moon className="w-6 h-6 text-gray-700 mt-1" />
                      <div><h3 className="text-sm font-semibold mb-1">Duration</h3><p className="text-base font-medium">{data.eventSchedule.duration}</p></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Ticket className="w-6 h-6 text-gray-700 mt-1" />
                      <div><h3 className="text-sm font-semibold mb-1">Total Ticket</h3><p className="text-base font-medium">{data.eventSchedule.tickets}</p></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Overview */}
              <div id="overview" className="fadeInUp" style={{ animation: "fadeInUp 0.6s ease-out 0.1s backwards" }}>
                <div className="text-base md:text-[1w]" style={{ lineHeight: "1.8", color: "#666", marginBottom: "15px" }}>
                  {data.sections.overview.intro}
                </div>
              </div>

              <div className="fadeInUp" style={{ animation: "fadeInUp 0.6s ease-out 0.2s backwards" }}>
                <div className="text-xl md:text-[1.7vw]" style={{ fontWeight: "600", color: "#1a1a1a", marginBottom: "20px", fontFamily: "system-ui, -apple-system, sans-serif" }}>Overview</div>
                <div className="text-base md:text-[1vw]" style={{ lineHeight: "1.8", color: "#666", marginBottom: "30px" }}>
                  {data.sections.overview.mainText}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  <div>
                    <div className="fadeInUp" style={{ marginBottom: "30px", animation: "fadeInUp 0.6s ease-out 0.3s backwards" }}>
                      <div className="text-xl md:text-[1.7vw]" style={{ fontWeight: "600", marginBottom: "15px" }}>{data.sections.overview.featuresTitle}</div>
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {data.sections.overview.features.map((feature: string, idx: number) => (
                        <li key={idx} className="fadeInUp" style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "15px", fontSize: "15px", color: "#666", animation: `fadeInUp 0.6s ease-out ${0.4 + idx * 0.1}s backwards` }}>
                          <svg style={{ marginTop: "3px", flexShrink: 0 }} width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="var(--color-primary)" /><path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          <div className="text-base md:text-[1vw]">{feature}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative z-10 rounded-2xl overflow-hidden group cursor-pointer h-[300px] md:h-auto">
                    <img src={data.sections.overview.featureImage} alt="Feature" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} />
                    <div className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/30 z-20 pointer-events-none group-hover:transition-all group-hover:duration-600 group-hover:ease-linear group-hover:h-[250%] group-hover:bg-transparent" />
                  </div>
                </div>
              </div>

              {/* SECTION: Location */}
              <div id="location"></div>
              <div className="fadeInUp" style={{ animation: "fadeInUp 0.6s ease-out 0.4s backwards" }}>
                <div className="text-xl md:text-[1.7vw]" style={{ fontWeight: "600", color: "#1a1a1a", marginBottom: "20px" }}>{data.sections.location.title}</div>
                <div className="text-base md:text-[1vw]" style={{ lineHeight: "1.8", color: "#666", marginBottom: "40px" }}>{data.sections.location.description}</div>
                <div className="flex flex-col md:flex-row gap-8 h-auto md:h-[400px]">
                  {data.sections.location.images.map((img: string, idx: number) => (
                     <div key={idx} className={`relative z-10 rounded-2xl overflow-hidden group cursor-pointer w-full ${idx === 0 ? 'md:flex-[7]' : 'md:flex-[3]'} h-[250px] md:h-full`} style={{ overflow: "hidden", borderRadius: "8px" }}>
                        <img src={img} alt="Location" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/30 z-20 pointer-events-none group-hover:transition-all group-hover:duration-600 group-hover:ease-linear group-hover:h-[250%] group-hover:bg-transparent" />
                     </div>
                  ))}
                </div>
              </div>

              {/* SECTION: Accommodation */}
              <ActivityDetailSections
                id="accommodation"
                heroImage={{ src: data.sections.accommodation.heroImage, alt: "accommodation img" }}
                title={data.sections.accommodation.title}
                subtitle={data.sections.accommodation.subtitle}
                introText={data.sections.accommodation.introText}
                outroText={data.sections.accommodation.outroText}
                quote={data.sections.accommodation.quote}
                mainHeading=""
                mainDescription={["Accommodations are separated by gender, so girls and boys stay in their own tents or lodges. We also organize by age group to make sure everyone feels right at home:"]}
                principles={data.sections.accommodation.principles}
                footerText={data.sections.accommodation.details}
              />

              {/* SECTION: Program */}
              <ActivityDetailSections
                id="program"
                heroImage={{ src: data.sections.program.heroImage, alt: "program img" }}
                title={data.sections.program.title}
                subtitle={data.sections.program.subtitle}
                introText={data.sections.program.introText}
                outroText={data.sections.program.outroText}
                quote={data.sections.program.quote}
                mainHeading={data.sections.program.mainHeading}
                mainDescription={[""]}
                principles={data.sections.program.principles}
                footerText={data.sections.program.footerText}
              />

              {/* SECTION: Meals */}
              <div id="meals"></div>
              <div className="fadeInUp" style={{ animation: "fadeInUp 0.6s ease-out 0.4s backwards" }}>
                <div className="text-xl md:text-[1.7vw]" style={{ fontWeight: "600", color: "#1a1a1a", marginBottom: "20px" }}>{data.sections.meals.title}</div>
                <div className="text-base md:text-[1vw]" style={{ lineHeight: "1.8", color: "#666", marginBottom: "40px" }}>{data.sections.meals.description}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {data.sections.meals.items.map((item: any, idx: number) => (
                    <div key={idx} className="fadeInUp" style={{ animation: `fadeInUp 0.6s ease-out ${0.5 + idx * 0.1}s backwards` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="var(--color-primary)" /><path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <div className="text-lg md:text-[1.7vw]" style={{ fontWeight: "600", color: "#1a1a1a", margin: 0 }}>{item.title}</div>
                      </div>
                      <div className="text-base md:text-[1vw]" style={{ lineHeight: "1.7", color: "#666", margin: 0 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="text-base md:text-[1vw]" style={{ lineHeight: "1.8", color: "#666", margin: "40px 0" }}>{data.sections.meals.footer}</div>
              </div>

              {/* SECTION: Team */}
              <ActivityDetailSections
                id="team"
                heroImage={{ src: data.sections.team.heroImage, alt: "team img" }}
                title={data.sections.team.title}
                subtitle={data.sections.team.subtitle}
                introText={data.sections.team.introText}
                outroText={[]}
                quote={data.sections.team.quote}
                mainHeading={data.sections.team.mainHeading}
                mainDescription={[""]}
                principles={[]}
                footerText={data.sections.team.footerText}
              />

              {/* SECTION: Coverage */}
              <div id="coverage"></div>
              <div className="fadeInUp" style={{ animation: "fadeInUp 0.6s ease-out 0.4s backwards" }}>
                <div className="text-xl md:text-[1.7vw]" style={{ fontWeight: "600", color: "#1a1a1a", marginBottom: "15px" }}>{data.sections.insurance.title}</div>
                <div className="text-base md:text-[1vw]" style={{ lineHeight: "1.7", color: "#999", marginBottom: "40px" }}>{data.sections.insurance.description}</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Insurance Package */}
                  <div style={{ background: "#ffff", borderRadius: "8px", padding: "35px 30px" }}>
                    <div className="text-lg md:text-[1.7vw]" style={{ fontWeight: "700", color: "#1a1a1a", marginBottom: "12px" }}>{data.sections.insurance.package.title}</div>
                    <div className="text-base md:text-[1vw]" style={{ lineHeight: "1.6", color: "#999", marginBottom: "25px" }}>{data.sections.insurance.package.desc}</div>
                    <hr />
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                      {data.sections.insurance.package.items.map((item: string, idx: number) => (
                        <li key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#666", lineHeight: "1.6" }}>
                          <svg style={{ marginTop: "2px", flexShrink: 0 }} width="7" height="7" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="var(--color-primary)" /></svg>
                          <div className="text-sm md:text-[0.86vw]">{item}</div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cancellation Guarantee */}
                  <div style={{ background: "#ffff", borderRadius: "8px", padding: "35px 30px" }}>
                    <div className="text-lg md:text-[1.7vw]" style={{ fontWeight: "700", color: "#1a1a1a", marginBottom: "12px" }}>{data.sections.insurance.cancellation.title}</div>
                    <div className="text-base md:text-[1vw]" style={{ lineHeight: "1.6", color: "#999", marginBottom: "25px" }}>{data.sections.insurance.cancellation.desc}</div>
                    <hr />
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                      {data.sections.insurance.cancellation.items.map((item: string, idx: number) => (
                        <li key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#666", lineHeight: "1.6" }}>
                           <svg style={{ marginTop: "2px", flexShrink: 0 }} width="7" height="7" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="var(--color-primary)" /></svg>
                          <div className="text-sm md:text-[0.86vw]">{item}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <style>{`
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          .fadeInUp { animation-fill-mode: backwards; }
        `}</style>
      </div>
    </>
  );
}