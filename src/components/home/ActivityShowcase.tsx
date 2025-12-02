import Image from "next/image";

export default function ActivityShowcase() {
  return (
    <div className="relative min-h-screen md:h-[70vh] md:min-h-[100vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/templates/yootheme/post/anhthuyen.jpg"
        fill
        alt="Activities Background"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Grid */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full px-[5vw] md:px-[10vw] grid grid-cols-1 md:grid-cols-4 gap-0">
          {/* Card 1 - Surfing Adventures */}
          <div className="!p-6 md:!p-[2vw] !text-white !border-b md:!border-b-0 md:!border-r !border-white/10">
            <h3 className="!text-xl md:!text-[1.7vw] !text-white !font-bold !mb-3 md:!mb-[1vh]">
              Surfing Adventures
            </h3>
            <p className="!text-base md:!text-[1vw] !text-white/90 leading-relaxed">
              Catch the waves and learn water safety while having a blast on the
              beach.
            </p>
          </div>

          {/* Card 2 - River Kayaking */}
          <div className="!p-6 md:!p-[2vw] !text-white !border-b md:!border-b-0 md:!border-r !border-white/10">
            <h3 className="!text-xl md:!text-[1.7vw] !text-white !font-bold !mb-3 md:!mb-[1vh]">
              River Kayaking
            </h3>
            <p className="!text-base md:!text-[1vw] !text-white/90 leading-relaxed">
              Paddle along scenic rivers, surrounded by wildlife and stunning
              landscapes.
            </p>
          </div>

          {/* Card 3 - Campfire Nights */}
          <div className="!p-6 md:!p-[2vw] !text-white !border-b md:!border-b-0 md:!border-r !border-white/10">
            <h3 className="!text-xl md:!text-[1.7vw] !text-white !font-bold !mb-3 md:!mb-[1vh]">
              Campfire Nights
            </h3>
            <p className="!text-base md:!text-[1vw] !text-white/90 leading-relaxed">
              Gather around the fire, roast marshmallows, and share stories
              under the stars
            </p>
          </div>

          {/* Card 4 - Community Service */}
          <div className="!p-6 md:!p-[2vw] !text-white !border-white/10">
            <h3 className="!text-xl md:!text-[1.7vw] !text-white !font-bold !mb-3 md:!mb-[1vh]">
              Community Service Projects
            </h3>
            <p className="!text-base md:!text-[1vw] !text-white/90 leading-relaxed">
              Participate in meaningful activities such as beach clean-ups, tree
              planting, and helping local community initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
