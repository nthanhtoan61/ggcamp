import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    image: "/templates/yootheme/post/anhnew1.jpg",
    title: "Power of Consistency",
    description:
      "Customized training programs to enhance skills and improve team performance.",
    date: "June 30, 2025",
  },
  {
    id: 2,
    image: "/templates/yootheme/post/anhnew2.jpg",
    title: "You Need to Know",
    description:
      "Expert project management ensuring timely delivery and budget compliance.",
    date: "June 30, 2025",
  },
  {
    id: 3,
    image: "/templates/yootheme/post/anhnew3.jpg",
    title: "Common Mistakes",
    description:
      "Comprehensive marketing strategies focused on increasing brand awareness and sales.",
    date: "June 30, 2025",
  },
  {
    id: 4,
    image: "/templates/yootheme/post/anhnew4.jpg",
    title: "Quality Always Wins",
    description:
      "Innovative design services that bring your creative visions to life.",
    date: "June 30, 2025",
  },
  {
    id: 5,
    image: "/templates/yootheme/post/anhnew5.jpg",
    title: "Tips You Should Know",
    description:
      "Reliable customer support designed to provide fast and effective solutions.",
    date: "June 30, 2025",
  },
  {
    id: 6,
    image: "/templates/yootheme/post/anhnew6.jpg",
    title: "Make the Most of It",
    description:
      "Professional consulting tailored to meet your unique business challenges and goals.",
    date: "May 31, 2025",
  },
];

const latestPosts = [
  {
    id: 1,
    image: "/templates/yootheme/post/anhnew7.jpg",
    title: "Make the Most of It",
    description:
      "Professional consulting tailored to meet your unique business challenges.",
  },
  {
    id: 2,
    image: "/templates/yootheme/post/anhnew8.jpg",
    title: "Tips You Should Know",
    description:
      "Reliable customer support designed to provide fast and effective solutions.",
  },
  {
    id: 3,
    image: "/templates/yootheme/post/anhnew1.jpg",
    title: "Quality Always Wins",
    description:
      "Innovative design services that bring your creative visions to life.",
  },
];

export default function LatestPostsSection() {
  return (
    <div className="uk-section-default uk-section !py-[10vh]">
      <div className="">
        <div
          className="uk-grid tm-grid-expand uk-child-width-1-1"
          uk-grid=""
          suppressHydrationWarning
        >
          {/* Cột trái: 6 bài post - masonry layout */}
          <div className="uk-width-3-5@m uk-width-1-1">
            <div
              className="uk-grid uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s uk-child-width-1-1"
              uk-grid="masonry: true"
              uk-height-match="target: > div > div"
              suppressHydrationWarning
            >
              {blogPosts.map((post) => (
                <div key={post.id}>
                  <div className="relative overflow-hidden group cursor-pointer shadow-lg">
                    <Image
                      src={post.image}
                      width={post.id === 1 ? 800 : 600}
                      height={post.id === 1 ? 600 : 520}
                      alt={post.title}
                      className="!w-[90vw] md:!w-[40vw] !h-[60vw] md:!h-[60vh] object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/30 to-transparent"></div>

                    <div className="absolute bottom-0 !left-[1vw] !right-[1vw] !p-[1vw] flex flex-col gap-0">
                      <div className="!-mb-[4vh]">
                        <span className="inline-block bg-[var(--color-primary)] text-black !text-[3.5vw] md:!text-[1.7vw] lg:!text-[1.5vw] font-extrabold !px-[4vw] md:!px-[1.5vw] !py-[1vh] md:!py-[0.5vh] shadow-lg">
                          {post.date}
                        </span>
                      </div>

                      <h3
                        className={`${
                          post.id === 1
                            ? "!text-[5vw] md:!text-[1.7vw] lg:!text-[1.5vw]"
                            : "!text-[4.5vw] md:!text-[1.7vw] lg:!text-[1.5vw]"
                        } !font-bold !text-white !mb-[1vh] md:!mb-[0.5vh] leading-tight drop-shadow-2xl`}
                      >
                        {post.title}
                      </h3>
                      <p className="!text-[3.5vw] md:!text-[1vw] lg:!text-[0.95vw] !font-bold !text-white font-medium leading-relaxed drop-shadow-lg">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar phải */}
          <div className="uk-width-1-5@m uk-width-1-1 mt-8@m mt-12 sticky top-[12vh] self-start">
            {/* Search Box */}
            <div className="bg-white shadow-lg overflow-hidden !mb-[4vh]">
              <form className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full !px-[4vw] md:!px-[1.5vw] !py-[2vh] border border-gray-200 !font-bold !text-[3.5vw] md:!text-[1vw] lg:!text-[0.95vw] !text-gray-900 placeholder-gray-400 bg-transparent focus:outline-none"
                />
                <button className="absolute right-0 top-0 h-full !px-[4vw] md:!px-[1.5vw] bg-[var(--color-primary)] hover:bg-[#b8b76a] transition-colors">
                  <svg
                    className="!w-[5vw] md:!w-[1.5vw] !h-[5vw] md:!h-[1.5vw] text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Latest Posts */}
            <div className="!py-[3vh]">
              <h3 className="!text-[5vw] md:!text-[1.5vw] lg:!text-[1.3vw] !font-bold text-gray-900 !mb-[2vh]">
                Latest Posts
              </h3>

              <div className="!space-y-[2vh]">
                {latestPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex !gap-[3vw] md:!gap-[1vw] group cursor-pointer"
                  >
                    <Image
                      src={post.image}
                      width={100}
                      height={100}
                      alt={post.title}
                      className="!w-[20vw] md:!w-[6vw] !h-[20vw] md:!h-[6vw] !object-cover flex-shrink-0 transition-all duration-300 group-hover:grayscale"
                    />
                    <div className="flex-1">
                      <h4 className="!font-bold !text-[3.5vw] md:!text-[1.7vw] lg:!text-[1.5vw] !text-gray-900 leading-tight !mb-[0.5vh]">
                        {post.title}
                      </h4>
                      <p className="!text-[3vw] md:!text-[1vw] lg:!text-[0.95vw] !font-bold !text-gray-600 !leading-relaxed !line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Card lớn */}
            <div className="relative !mt-[2vh] group">
              <Image
                src="/templates/yootheme/post/anhnew2.jpg"
                width={500}
                height={250}
                alt="Comfort Plus"
                className="!w-[90vw] md:!w-[50vw] !h-[30vh] md:!h-[50vh] object-cover"
              />

              <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0"></div>

              <div className="absolute inset-0 !p-[5vw] md:!p-[2vw] flex flex-col justify-center items-center text-center transition-opacity duration-500 group-hover:opacity-0">
                <h4 className="!text-[5vw] md:!text-[1.7vw] lg:!text-[1.5vw] font-bold !mb-[1vh] leading-tight !text-white">
                  Comfort Plus
                </h4>
                <p className="!text-[3.5vw] md:!text-[1vw] lg:!text-[0.95vw] leading-relaxed opacity-95 !text-white">
                  Expert project management ensuring timely delivery and budget
                  compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
