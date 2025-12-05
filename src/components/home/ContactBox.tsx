export default function ContactBox() {
    return (
        <div
            className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-8 py-5 md:py-6 2xl:py-7 px-6 md:px-10 2xl:px-10 rounded-xl text-white shadow-md contact-box w-full"
            style={{ 
                backgroundColor: "#00000020"}}
        >
            {/* Adventure Journey Text */}
            <div className="flex items-center gap-3 2xl:gap-4 max-sm:hidden whitespace-nowrap flex-shrink-0">
                <div className="p-2 rounded-full"></div>
                <div className="text-[1vw] 2xl:text-[1.5vw] text-white font-semibold leading-tight text-left">
                    <div>Your Adventure Journey<br /> Start Here!</div>
                </div>
            </div>

            <div className="w-px self-stretch -my-4 md:-my-5 2xl:-my-6 bg-white/30 max-sm:hidden flex-shrink-0"></div>

            {/* Call */}
            <a
                href="tel:+123456789"
                className="group flex items-start gap-3 2xl:gap-4 w-full md:w-auto md:items-center justify-start"
            >
                <div className="p-3 md:p-3 2xl:p-4 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-[var(--color-primary)] flex-shrink-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="text-white w-6 h-6 md:w-8 md:h-8 2xl:w-9 2xl:h-9"
                    >
                        <path d="M8.8457 5.93115C8.84567 5.64689 8.73343 5.37413 8.53418 5.17139L5.28808 1.92432L5.208 1.85303C5.01329 1.69665 4.76943 1.61084 4.51757 1.61084C4.23001 1.61094 3.95373 1.72334 3.74804 1.92432L3.00586 2.68408L2.99609 2.69385C2.22454 3.45523 1.73864 4.45915 1.62011 5.53662C1.50186 6.61196 1.75664 7.69523 2.34179 8.60498C5.83558 13.7515 10.2803 18.1831 15.4365 21.6626C16.3449 22.2448 17.4253 22.4983 18.498 22.3804C19.5755 22.2619 20.5794 21.7759 21.3408 21.0044L21.3506 20.9946L22.1113 20.2495C22.3112 20.044 22.4238 19.7696 22.4238 19.4829C22.4238 19.1951 22.3115 18.9182 22.1103 18.7124L18.8447 15.4819C18.6423 15.284 18.3701 15.1725 18.0869 15.1724C17.8026 15.1724 17.5289 15.2837 17.3262 15.4829L16.8008 14.9487L17.3252 15.4849C16.8392 15.96 16.1865 16.226 15.5068 16.2261C14.8271 16.2261 14.1736 15.9601 13.6875 15.4849L8.53906 10.3354C8.29886 10.0975 8.1071 9.81434 7.97656 9.50244C7.84519 9.18854 7.77734 8.85152 7.77734 8.51123C7.77734 8.17096 7.84519 7.83391 7.97656 7.52002C8.10639 7.20982 8.29582 6.92801 8.53418 6.69092C8.73343 6.48815 8.8457 6.21544 8.8457 5.93115Z" />
                    </svg>
                </div>
                <div className="flex flex-col gap-y-0 items-start">
                    <h3 className="!text-white !font-semibold !text-[4vw] md:!text-[1.2vw] 2xl:!text-[1.5vw] mb-0 mt-0 !leading-none whitespace-nowrap !mb-1">
                        Call us
                    </h3>
                    <span className="!text-[3.5vw] md:!text-[0.95vw] 2xl:!text-[1vw] text-white/90 font-normal whitespace-nowrap">
                        +(123) 456 789
                    </span>
                </div>
            </a>

            <div className="w-full md:w-px h-px md:h-12 2xl:h-14 bg-white/30 flex-shrink-0"></div>

            {/* Email */}
            <a
                href="mailto:office@ggcamp.org"
                className="group flex items-start gap-3 2xl:gap-4 w-full md:w-auto md:items-center justify-start"
            >
                <div className="p-3 md:p-3 2xl:p-4 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-[var(--color-primary)] flex-shrink-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="text-white w-6 h-6 md:w-8 md:h-8 2xl:w-9 2xl:h-9"
                    >
                        <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zm0 12H4V8.489l8 5.333 8-5.333V18z" />
                    </svg>
                </div>
                <div className="flex flex-col gap-y-0 items-start">
                    <h3 className="!text-white !font-semibold !text-[4vw] md:!text-[1.2vw] 2xl:!text-[1.5vw] mb-0 mt-0 !leading-none whitespace-nowrap !mb-1">
                        Email
                    </h3>
                    <span className="!text-[3.5vw] md:!text-[0.95vw] 2xl:!text-[1vw] text-white/90 font-normal whitespace-nowrap">
                        office@ggcamp.org
                    </span>
                </div>
            </a>

            <div className="w-full md:w-px h-px md:h-12 2xl:h-14 bg-white/30 flex-shrink-0"></div>

            {/* Working Hours */}
            <a
                href="#"
                className="group flex items-start gap-3 2xl:gap-4 w-full md:w-auto md:items-center justify-start"
            >
                <div className="p-3 md:p-3 2xl:p-4 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-[var(--color-primary)] flex-shrink-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="text-white w-6 h-6 md:w-8 md:h-8 2xl:w-9 2xl:h-9"
                    >
                        <path d="M12 1.75C6.072 1.75 1.25 6.572 1.25 12.5S6.072 23.25 12 23.25 22.75 18.428 22.75 12.5 17.928 1.75 12 1.75zm0 20c-4.69 0-8.5-3.81-8.5-8.5s3.81-8.5 8.5-8.5 8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5z" />
                        <path d="M12.75 7h-1.5v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                    </svg>
                </div>
                <div className="flex flex-col gap-y-0 items-start">
                    <h3 className="!text-white !font-semibold !text-[4vw] md:!text-[1.2vw] 2xl:!text-[1.5vw] mb-0 mt-0 !leading-none whitespace-nowrap !mb-1">
                        Working Hours
                    </h3>
                    <span className="!text-[3.5vw] md:!text-[0.95vw] 2xl:!text-[1vw] text-white/90 font-normal whitespace-nowrap">
                        Monday-Saturday: 08:pm to 05:am
                    </span>
                </div>
            </a>
        </div>
    );
}
