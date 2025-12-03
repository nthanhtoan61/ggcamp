import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WhyChooseUs() {
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-[10vh] overflow-hidden min-h-screen">
      {/* Background Image */}
      <Image
        src="/templates/yootheme/post/anhnui.png"
        fill
        alt="Background"
        className="absolute z-0 object-cover opacity-80"
        priority
      />

      {/* Nền núi mờ nhẹ */}
      <div className="absolute inset-x-0 bottom-0 h-[25vh] bg-gradient-to-t from-gray-300/20 to-transparent pointer-events-none"></div>

      <div className="w-full px-[5vw] md:px-[10vw] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[5vw] items-start py-8 md:py-[5vh]">
          {/* === CỘT TRÁI: WHY CHOOSE US + TIÊU ĐỀ === */}
          <div className="space-y-2 md:space-y-0">
            <p className="inline-flex items-center gap-2 md:gap-[0.5vw] !text-primary !font-bold tracking-widest uppercase text-xl md:text-[2vw] mb-2 md:mb-0 leading-none">
              <img
                src="https://demo.awaikenthemes.com/wildex/wp-content/themes/wildex/assets/images/icon-sub-heading.svg"
                alt="icon"
                className="w-6 h-6 md:w-[2vw] md:h-[2vw] object-contain"
              />
              Why Choose Us
            </p>

            <div className="!mt-0 !pt-0 text-2xl md:text-[2.5vw] !font-bold  text-gray-900 leading-tight">
              Creating unforgettable camp experiences
              <br className="hidden md:block" />
              with safety, fun, and friendship.
            </div>
          </div>

          {/* === CỘT PHẢI: MÔ TẢ + NÚT LEARN MORE === */}
          <div className="flex flex-col items-start">
            <p className="text-gray-600 text-lg md:text-[1.2vw] leading-relaxed mb-4 md:mb-[3vh]">
              Go and Grow Camp has organized international summer camps and
              educational outdoor trips across multiple countries. We are
              committed to providing a safe, inclusive, and inspiring
              environment—no violence, drugs, alcohol, or cigarettes are
              permitted for any participant.
            </p>

            <Link href="/booking">
              <button
                className="relative overflow-hidden rounded-full px-6 md:px-[2vw] py-3 md:py-[1.5vh] font-bold bg-[var(--color-primary)] hover:bg-[#b8b76a] text-black text-base md:text-[1vw] mt-4 md:mt-[2vh] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1"
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setCoords({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                  setHovered(true);
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setCoords({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }}
                onMouseLeave={() => setHovered(false)}
              >
                <span className="relative z-10 flex items-center gap-2 md:gap-[0.5vw] transition-colors duration-300">
                  Explore Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="currentColor"
                    className="w-4 h-4 md:w-[1.2vw] md:h-[1.2vw] transition-transform duration-500"
                    style={{
                      transform: hovered ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.1103 5.37457C13.5933 6.89163 10.771 6.83466 9.19008 5.25375L8.5419 4.60556L7.29739 5.85007L7.94557 6.49825C9.09544 7.64813 10.6581 8.24259 12.21 8.2749L4.53199 15.9529L5.82836 17.2493L13.5063 9.57126C13.5387 11.1231 14.1331 12.6858 15.283 13.8357L15.9312 14.4839L17.1757 13.2393L16.5275 12.5912C14.9466 11.0103 14.8896 8.18799 16.4067 6.67094L17.0289 6.04868L15.7326 4.75232L15.1103 5.37457Z"
                    />
                  </svg>
                </span>

                <span
                  className="absolute w-5 h-5 bg-white rounded-full pointer-events-none z-[5] transition-all duration-500 ease-out"
                  style={{
                    left: coords.x,
                    top: coords.y,
                    transform: hovered
                      ? "translate(-50%, -50%) scale(20)"
                      : "translate(-50%, -50%) scale(0)",
                    opacity: hovered ? 1 : 0,
                  }}
                ></span>
              </button>
            </Link>
          </div>
        </div>

        {/* 4 Feature Cards - Grid 4 cột trên desktop */}
        <div className="mt-8 md:mt-[5vh] grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-[3vw] mb-8 md:mb-[5vh]">
          {/* Card 1 */}
          <div className="relative overflow-hidden bg-white rounded-2xl md:rounded-[2vw] p-6 md:p-[1vw] shadow-lg hover:shadow-xl transition-all duration-300 group before:absolute before:inset-0 before:bg-gradient-to-t before:from-[var(--color-primary)] before:to-transparent before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-500 before:rounded-2xl md:before:rounded-[2vw]">
            <div className="relative z-10 w-16 h-16 md:w-[4vw] md:h-[4vw] !bg-[var(--color-primary)] rounded-full mx-auto mb-4 md:mb-[1.5vh] flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 25"
                fill="currentColor"
              >
                <path d="M22.2861 12.6035C22.286 6.86382 17.6324 2.21094 11.8926 2.21094C6.15301 2.21107 1.50016 6.8639 1.5 12.6035C1.5 18.3432 6.15291 22.9969 11.8926 22.9971C17.6325 22.9971 22.2861 18.3433 22.2861 12.6035ZM23.7861 12.6035C23.7861 19.1717 18.4609 24.4971 11.8926 24.4971C5.32448 24.4969 0 19.1716 0 12.6035C0.000155651 6.03548 5.32458 0.711074 11.8926 0.710938C18.4608 0.710938 23.786 6.03539 23.7861 12.6035Z" />
                <path d="M23.0361 11.8535C23.4502 11.8537 23.7861 12.1894 23.7861 12.6035C23.7861 13.0176 23.4502 13.3533 23.0361 13.3535H0.75C0.335786 13.3535 0 13.0177 0 12.6035C0 12.1893 0.335786 11.8535 0.75 11.8535H23.0361Z" />
                <path d="M11.8916 0.710938C12.117 0.711049 12.3303 0.812566 12.4727 0.987305C15.1473 4.27643 16.7071 8.33169 16.9258 12.5654C16.9271 12.5911 16.9271 12.6169 16.9258 12.6426C16.7071 16.8762 15.1473 20.9307 12.4727 24.2197C12.3303 24.3947 12.1171 24.497 11.8916 24.4971C11.6659 24.4971 11.452 24.3948 11.3096 24.2197C8.63485 20.9307 7.07519 16.8762 6.85646 12.6426C6.85513 12.6169 6.85514 12.5911 6.85646 12.5654C7.07518 8.33169 8.63484 4.27643 11.3096 0.987305L11.3662 0.925781C11.5056 0.788999 11.6941 0.710936 11.8916 0.710938ZM11.8906 2.69336C9.78175 5.57983 8.54913 9.0208 8.35646 12.6035C8.54902 16.1863 9.7818 19.6272 11.8906 22.5137C13.9997 19.6271 15.2322 16.1865 15.4248 12.6035C15.2321 9.02059 13.9997 5.57993 11.8906 2.69336Z" />
              </svg>
            </div>
            <div className="relative z-10 font-bold text-gray-900 text-xl md:text-[1.5vw] mb-2 md:mb-[1vh] text-center">
              Inclusive & Welcoming
            </div>
            <div className="relative z-10 text-gray-600 text-lg md:text-[1vw] leading-relaxed text-center">
              Every child, teen, and staff member, regardless of country or
              culture, feels comfortable and valued, creating a unique and
              unforgettable camp experience.
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden bg-white rounded-[2vw] !p-[1vw] shadow-lg hover:shadow-xl transition-all duration-300 group before:absolute before:inset-0 before:bg-gradient-to-t before:from-[var(--color-primary)] before:to-transparent before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-500 before:rounded-[2vw]">
            <div className="relative z-10 w-[4vw] h-[4vw] min-w-[60px] min-h-[60px] !bg-[var(--color-primary)] rounded-full mx-auto mb-[1.5vh] flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 23 24"
                fill="currentColor"
              >
                <path d="M11.3066 0.0585938C11.449 0.0743692 11.5874 0.112869 11.7188 0.169922L11.7197 0.168945L21.3193 4.06055L21.3232 4.06152C21.5973 4.17416 21.8277 4.3661 21.9922 4.60547H21.9912C22.2058 4.89807 22.312 5.25423 22.2998 5.6123V18.1016C22.296 18.411 22.2065 18.7171 22.0361 18.9795C21.887 19.209 21.6798 19.3988 21.4326 19.5244L21.3242 19.5742L11.7236 23.5352C11.6332 23.5724 11.5363 23.5917 11.4385 23.5918H10.8623C10.7643 23.5918 10.6668 23.5725 10.5762 23.5352L0.975586 19.5742C0.680359 19.4522 0.435104 19.2419 0.264648 18.9795H0.263672C0.093556 18.7173 0.00374566 18.4113 0 18.1016V5.53613L0.00683594 5.40625C0.0342294 5.10569 0.144867 4.81501 0.332031 4.57227L0.380859 4.51465C0.544391 4.34158 0.748265 4.21115 0.975586 4.13184V4.13086L10.5762 0.170898V0.171875C10.7567 0.0926337 10.9518 0.0498047 11.1504 0.0498047L11.3066 0.0585938ZM11.1484 1.55762L1.54785 5.51758C1.53328 5.52359 1.51785 5.52715 1.50293 5.53223C1.50182 5.53865 1.50008 5.54539 1.5 5.55273V18.084L1.50684 18.1279C1.51085 18.1414 1.51625 18.1535 1.52246 18.1631C1.53438 18.1813 1.54598 18.1873 1.54883 18.1885H1.54785L11.0107 22.0918H11.29L20.752 18.1885L20.7773 18.1631C20.7894 18.1444 20.7993 18.1167 20.7998 18.084V5.6123C20.7998 5.59666 20.8008 5.58104 20.8018 5.56543C20.8039 5.53146 20.7929 5.50411 20.7822 5.49023C20.7733 5.47875 20.7641 5.46706 20.7559 5.45508C20.75 5.44655 20.7473 5.4469 20.7529 5.44922L11.1562 1.55957C11.154 1.55865 11.1517 1.55758 11.1494 1.55664L11.1484 1.55762Z" />
                <path d="M10.4004 22.9609V9.31543C10.4004 8.90122 10.7362 8.56543 11.1504 8.56543C11.5646 8.56543 11.9004 8.90122 11.9004 9.31543V22.9609C11.9004 23.3752 11.5646 23.7109 11.1504 23.7109C10.7362 23.7109 10.4004 23.3752 10.4004 22.9609Z" />
                <path d="M21.0881 4.4055C21.471 4.24761 21.9097 4.42986 22.0676 4.81272C22.2255 5.19553 22.0431 5.63416 21.6604 5.79221L11.4358 10.009C11.2527 10.0845 11.0476 10.0844 10.8645 10.009L0.63987 5.79221C0.257033 5.63423 0.0747161 5.1956 0.232644 4.81272C0.39063 4.42988 0.829257 4.24757 1.21214 4.4055L11.1496 8.50413L21.0881 4.4055Z" />
              </svg>
            </div>
            <div className="relative z-10 font-bold text-gray-900 text-xl md:text-[1.5vw] mb-2 md:mb-[1vh] text-center">
              Adventure-Ready Experiences
            </div>
            <div className="relative z-10 text-gray-600 text-lg md:text-[1vw] leading-relaxed text-center">
              From team challenges to outdoor exploration, creative workshops,
              and water sports, we offer a wide range of activities that build
              confidence, teamwork, and independence.
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden bg-white rounded-[2vw] !p-[1vw] shadow-lg hover:shadow-xl transition-all duration-300 group before:absolute before:inset-0 before:bg-gradient-to-t before:from-[var(--color-primary)] before:to-transparent before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-500 before:rounded-[2vw]">
            <div className="relative z-10 w-[4vw] h-[4vw] min-w-[60px] min-h-[60px] !bg-[var(--color-primary)] rounded-full mx-auto mb-[1.5vh] flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 25"
                fill="currentColor"
              >
                <path d="M22.2861 5.5332C22.2861 5.22549 22.1262 4.84816 21.6553 4.41992C21.1841 3.99146 20.4607 3.57054 19.5029 3.20215C17.5923 2.46729 14.9016 1.99707 11.8926 1.99707C8.88384 1.9971 6.19376 2.46738 4.2832 3.20215C3.32539 3.57054 2.60107 3.99145 2.12988 4.41992C1.65923 4.84804 1.5 5.22556 1.5 5.5332C1.50014 5.84085 1.65912 6.21841 2.12988 6.64648C2.60107 7.07495 3.32539 7.49489 4.2832 7.86328C6.19376 8.59806 8.88382 9.06833 11.8926 9.06836C14.9016 9.06836 17.5923 8.59814 19.5029 7.86328C20.4605 7.49498 21.1841 7.07484 21.6553 6.64648C22.126 6.21841 22.286 5.84085 22.2861 5.5332ZM23.7861 5.5332C23.786 6.40867 23.3216 7.15879 22.665 7.75586C22.0085 8.35286 21.0997 8.8565 20.041 9.26367C17.9188 10.0798 15.0374 10.5684 11.8926 10.5684C8.74769 10.5683 5.86637 10.0799 3.74414 9.26367C2.68555 8.85651 1.7776 8.35284 1.12109 7.75586C0.464455 7.15876 0.00014729 6.40876 0 5.5332C0 4.65746 0.46435 3.90677 1.12109 3.30957C1.77754 2.71267 2.6857 2.20986 3.74414 1.80273C5.86637 0.986491 8.74769 0.497097 11.8926 0.49707C15.0376 0.49707 17.9187 0.986494 20.041 1.80273C21.0997 2.20991 22.0085 2.71257 22.665 3.30957C23.3217 3.90675 23.7861 4.65753 23.7861 5.5332Z" />
                <path d="M0 19.2471V5.5332C0 5.11899 0.335786 4.7832 0.75 4.7832C1.16421 4.7832 1.5 5.11899 1.5 5.5332V19.2471C1.5 19.5544 1.65896 19.9321 2.12988 20.3604C2.60108 20.7888 3.3254 21.2087 4.2832 21.5771C6.19375 22.3121 8.88369 22.7832 11.8926 22.7832C14.9017 22.7832 17.5923 22.3122 19.5029 21.5771C20.4605 21.2087 21.1841 20.7887 21.6553 20.3604C22.1263 19.9321 22.2861 19.5544 22.2861 19.2471V5.5332C22.2861 5.11899 22.6219 4.7832 23.0361 4.7832C23.4502 4.78342 23.7861 5.11912 23.7861 5.5332V19.2471C23.7861 20.1224 23.3215 20.8727 22.665 21.4697C22.0086 22.0666 21.0996 22.5703 20.041 22.9775C17.9188 23.7939 15.0376 24.2832 11.8926 24.2832C8.7475 24.2832 5.86633 23.7939 3.74414 22.9775C2.68557 22.5703 1.77755 22.0666 1.12109 21.4697C0.464533 20.8727 0 20.1225 0 19.2471Z" />
                <path d="M0 12.3896C0 11.9754 0.335786 11.6396 0.75 11.6396C1.16421 11.6396 1.5 11.9754 1.5 12.3896C1.5 12.6969 1.65916 13.0738 2.12988 13.502C2.60108 13.9304 3.3254 14.3513 4.2832 14.7197C6.19374 15.4546 8.88377 15.9258 11.8926 15.9258C14.9017 15.9258 17.5923 15.4547 19.5029 14.7197C20.4607 14.3513 21.1841 13.9304 21.6553 13.502C22.1262 13.0737 22.2861 12.697 22.2861 12.3896C22.2861 11.9754 22.6219 11.6396 23.0361 11.6396C23.4502 11.6399 23.7861 11.9756 23.7861 12.3896C23.7861 13.2651 23.3216 14.0153 22.665 14.6123C22.0086 15.2092 21.0996 15.7119 20.041 16.1191C17.9188 16.9355 15.0377 17.4258 11.8926 17.4258C8.7475 17.4258 5.86633 16.9355 3.74414 16.1191C2.68567 15.7119 1.77751 15.2091 1.12109 14.6123C0.464442 14.0152 0 13.2652 0 12.3896Z" />
              </svg>
            </div>
            <div className="relative z-10 font-bold text-gray-900 text-xl md:text-[1.5vw] mb-2 md:mb-[1vh] text-center">
              Personal Growth & Friendship
            </div>
            <div className="relative z-10 text-gray-600 text-lg md:text-[1vw] leading-relaxed text-center">
              Campers develop life skills, make lifelong friends, and return
              home more confident, motivated, and inspired.
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative overflow-hidden bg-white rounded-[2vw] !p-[1vw] shadow-lg hover:shadow-xl transition-all duration-300 group before:absolute before:inset-0 before:bg-gradient-to-t before:from-[var(--color-primary)] before:to-transparent before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-500 before:rounded-[2vw]">
            <div className="relative z-10 w-[4vw] h-[4vw] min-w-[60px] min-h-[60px] !bg-[var(--color-primary)] rounded-full mx-auto mb-[1.5vh] flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 23 25"
                fill="currentColor"
              >
                <path d="M10.4004 19.1357V17.4043C10.4004 16.9901 10.7362 16.6543 11.1504 16.6543C11.5646 16.6543 11.9004 16.9901 11.9004 17.4043V19.1357C11.9004 19.55 11.5646 19.8857 11.1504 19.8857C10.7362 19.8857 10.4004 19.55 10.4004 19.1357Z" />
                <path d="M10.4004 10.4277V8.81641C10.4004 8.40219 10.7362 8.06641 11.1504 8.06641C11.5646 8.06641 11.9004 8.40219 11.9004 8.81641V10.4277C11.9004 10.8419 11.5646 11.1777 11.1504 11.1777C10.7362 11.1777 10.4004 10.8419 10.4004 10.4277Z" />
                <path d="M20.5713 16.4961C20.5713 14.0587 19.9653 12.0715 18.7803 10.3926C17.5879 8.70348 15.7722 7.2748 13.2715 6.02441C13.0707 5.92399 12.9258 5.73844 12.876 5.51953C12.8262 5.30063 12.8771 5.07092 13.0146 4.89355L14.9971 2.33789C15.0239 2.28586 15.0411 2.22895 15.042 2.16992C15.0424 2.13653 15.0384 2.10335 15.0303 2.07129L14.9932 1.97852C14.9602 1.9197 14.9123 1.87014 14.8545 1.83594C14.8256 1.81888 14.7947 1.80579 14.7627 1.79688L14.6631 1.7832H7.4082L7.30859 1.79688C7.27659 1.8058 7.24564 1.81888 7.2168 1.83594C7.15891 1.8702 7.11097 1.91987 7.07812 1.97852C7.04539 2.03711 7.02827 2.10377 7.0293 2.1709C7.03028 2.23015 7.04698 2.28748 7.07422 2.33984L9.05859 4.91211C9.19524 5.08932 9.24497 5.31891 9.19531 5.53711C9.14559 5.75506 9.00139 5.93944 8.80176 6.04004C6.30032 7.29909 4.48469 8.73321 3.29199 10.4248C2.10664 12.106 1.50001 14.093 1.5 16.5303C1.5 18.6036 2.42323 20.0745 4.03516 21.0645C5.69116 22.0814 8.10599 22.6035 11.0361 22.6035C13.9662 22.6035 16.3798 22.0811 18.0352 21.0605C19.646 20.0674 20.5713 18.5887 20.5713 16.4961ZM22.0713 16.4961C22.0713 19.1346 20.854 21.0843 18.8223 22.3369C16.835 23.562 14.1057 24.1035 11.0361 24.1035C7.96631 24.1035 5.23685 23.563 3.25 22.3428C1.21911 21.0955 0 19.154 0 16.5303C1.08583e-05 13.8248 0.679497 11.5264 2.06543 9.56055C3.30138 7.80756 5.07033 6.36074 7.32617 5.12207L5.84766 3.20508C5.83005 3.18224 5.81369 3.1585 5.79883 3.13379C5.62792 2.84948 5.53538 2.525 5.53027 2.19336C5.52521 1.86175 5.60749 1.53449 5.76953 1.24512C5.93161 0.955747 6.16774 0.714824 6.45312 0.545898C6.73842 0.37704 7.06303 0.286132 7.39453 0.283203H14.6768L14.8008 0.288086C15.089 0.309664 15.3685 0.398206 15.6182 0.545898C15.9037 0.714893 16.1397 0.955897 16.3018 1.24512C16.4637 1.53448 16.547 1.86193 16.542 2.19336H16.541C16.5359 2.52482 16.4435 2.84935 16.2725 3.13379C16.2572 3.15911 16.2408 3.18368 16.2227 3.20703L14.749 5.10449C17.0029 6.33572 18.7706 7.77831 20.0059 9.52832C21.392 11.4922 22.0713 13.7909 22.0713 16.4961Z" />
                <path d="M11.1747 9.76454C11.594 9.74324 12.0132 9.81161 12.4032 9.96766C12.8023 10.1274 13.1613 10.3733 13.454 10.6884C13.7359 10.9918 13.7184 11.467 13.4149 11.7489C13.1115 12.0305 12.6372 12.013 12.3554 11.7099C12.2136 11.5572 12.0392 11.4377 11.8456 11.3602C11.6522 11.2829 11.4442 11.2489 11.2362 11.2616C11.2018 11.2637 11.1671 11.2633 11.1327 11.2606C10.8694 11.2404 10.6084 11.3118 10.3925 11.4599L10.3026 11.5282C10.091 11.706 9.95147 11.9533 9.90712 12.2245C9.95383 12.4962 10.0952 12.7434 10.3075 12.9218C10.5392 13.1165 10.8374 13.2138 11.1395 13.1932C11.8289 13.1463 12.51 13.3688 13.039 13.8134C13.5678 14.2579 13.904 14.8908 13.9765 15.578C13.9819 15.6301 13.9819 15.6831 13.9765 15.7352C13.9039 16.4223 13.5677 17.0545 13.039 17.4989C12.526 17.93 11.87 18.1498 11.202 18.12C10.8245 18.1332 10.4487 18.0722 10.0956 17.9403L9.94325 17.8788C9.54117 17.7019 9.18508 17.4352 8.90224 17.0995C8.63541 16.7827 8.67631 16.3097 8.99306 16.0429C9.3098 15.7761 9.78282 15.816 10.0497 16.1327C10.1852 16.2935 10.3556 16.4212 10.5477 16.5057C10.74 16.5904 10.949 16.6297 11.1591 16.621C11.1864 16.6198 11.2138 16.6201 11.2411 16.622C11.5431 16.6426 11.8414 16.5452 12.0731 16.3505C12.2846 16.1728 12.4243 15.9265 12.4716 15.6561C12.4243 15.3858 12.2846 15.1395 12.0731 14.9618C11.8414 14.7671 11.5431 14.6697 11.2411 14.6903C10.5518 14.7373 9.87071 14.5148 9.34169 14.0702C8.81293 13.6257 8.47669 12.9935 8.40419 12.3065C8.39891 12.2564 8.39935 12.2053 8.40419 12.1552C8.47105 11.464 8.806 10.8266 9.33778 10.3798C9.85082 9.94866 10.507 9.73164 11.1747 9.76454Z" />
              </svg>
            </div>
            <div className="relative z-10 font-bold text-gray-900 text-xl md:text-[1.5vw] mb-2 md:mb-[1vh] text-center">
              Safe & Responsible Environment
            </div>
            <div className="relative z-10 text-gray-600 text-lg md:text-[1vw] leading-relaxed text-center">
              Our trained staff ensure every camper enjoys a secure, supportive,
              and funfilled experience.
            </div>
          </div>
        </div>

        {/* Tags + CTA cuối trang */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-3 md:gap-[2vw] mb-6 md:mb-[5vh]">
            <div className="px-4 md:px-[2vw] py-2 md:py-[1vh] bg-white rounded-full shadow-sm flex items-center gap-2 md:gap-[0.5vw] text-gray-700 font-medium text-base md:text-[1vw]">
              <span className="w-2 h-2 md:w-[0.5vw] md:h-[0.5vw] min-w-[8px] min-h-[8px] !bg-[var(--color-primary)] rounded-full"></span>
              Nature-Friendly
            </div>
            <div className="px-4 md:px-[2vw] py-2 md:py-[1vh] bg-white rounded-full shadow-sm flex items-center gap-2 md:gap-[0.5vw] text-gray-700 font-medium text-base md:text-[1vw]">
              <span className="w-2 h-2 md:w-[0.5vw] md:h-[0.5vw] min-w-[8px] min-h-[8px] !bg-[var(--color-primary)] rounded-full"></span>
              Adventure-Ready
            </div>
            <div className="px-4 md:px-[2vw] py-2 md:py-[1vh] bg-white rounded-full shadow-sm flex items-center gap-2 md:gap-[0.5vw] text-gray-700 font-medium text-base md:text-[1vw]">
              <span className="w-2 h-2 md:w-[0.5vw] md:h-[0.5vw] min-w-[8px] min-h-[8px] !bg-[var(--color-primary)] rounded-full"></span>
              Community Service
            </div>
            <div className="px-4 md:px-[2vw] py-2 md:py-[1vh] bg-white rounded-full shadow-sm flex items-center gap-2 md:gap-[0.5vw] text-gray-700 font-medium text-base md:text-[1vw]">
              <span className="w-2 h-2 md:w-[0.5vw] md:h-[0.5vw] min-w-[8px] min-h-[8px] !bg-[var(--color-primary)] rounded-full"></span>
              Inspiring Locations
            </div>
          </div>

          <div className="text-gray-700 text-base md:text-[1vw] flex flex-wrap items-center justify-center gap-1">
            <span>Let's make something great work together.</span>
            <Link
              href="#"
              className="!text-[var(--color-primary)] font-bold hover:underline whitespace-nowrap"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
