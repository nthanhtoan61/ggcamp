import Image from "next/image";

export default function NewsletterSection() {
  return (
    <div className="uk-section-default uk-section uk-section-small">
      <div className="uk-container uk-container-large">
        <div className="uk-grid uk-grid-collapse uk-child-width-1-1" uk-grid="">
          <div className="uk-width-1-1">
            <div className="uk-grid uk-grid-collapse uk-flex-middle" uk-grid="">
              {/* Left side - Image */}
              <div className="uk-width-1-2@m uk-width-1-1">
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src="/templates/yootheme/post/anhsendemail.jpg"
                    width={800}
                    height={400}
                    alt="Newsletter"
                    className="!w-full !h-full !object-cover !flex-shrink-0"
                  />
                </div>
              </div>

              {/* Right side - Newsletter Form */}
              <div className="uk-width-1-2@m uk-width-1-1">
                <div className="bg-[#f5f1e8] p-16 h-[400px] flex flex-col justify-center">
                  <h3 className="text-2xl !font-bold !text-gray-900 mb-1">
                    Stay Updated with Our Monthly
                  </h3>
                  <div className="mb-4">
                    <h3 className="text-2xl !font-black !text-gray-900 mb-2">
                      Newsletter
                    </h3>
                    <svg
                      width="160"
                      height="12"
                      viewBox="0 0 160 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative -mt-7"
                    >
                      <path
                        d="M0 8 Q 70 1, 160 0"
                        stroke="#22c55e"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-6 !text-lg leading-relaxed">
                    Select a category that best suites your interest. Use
                    filters to
                    <br />
                    opportunities. Don't miss out on anything fun!
                  </p>
                  <form className="flex gap-1">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-3 py-2 border border-gray-300 bg-white shadow-sm focus:outline-none"
                      suppressHydrationWarning
                    />
                    <button
                      type="submit"
                      className="bg-green-500 rounded hover:bg-green-600 text-white px-4 py-2 !font-bold transition-colors flex items-center justify-center gap-1.5 text-xl whitespace-nowrap focus:outline-none"
                    >
                      Subscribe
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M17 7H7M17 7v10"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
