import Image from "next/image";

const xSeriesModels = [
  { src: "/x2.webp", name: "X2", tagline: "Sporty elegance meets versatility." },
  { src: "/x2comp.webp", name: "X2 Competition", tagline: "Performance redefined." },
  { src: "/x3.webp", name: "X3", tagline: "Dynamic driving, everyday comfort." },
  { src: "/x4.jpg", name: "X4", tagline: "Coupe-inspired SUV." },
  { src: "/x4comp.webp", name: "X4 Competition", tagline: "Track-ready power." },
  { src: "/x4cs.jpg", name: "X4 CS", tagline: "Exclusive and bold." },
  { src: "/x5.webp", name: "X5", tagline: "Luxury and capability." },
  { src: "/x5comp.webp", name: "X5 Competition", tagline: "Unmatched performance." },
  { src: "/x5cs.webp", name: "X5 CS", tagline: "Limited edition excellence." },
  { src: "/x6.webp", name: "X6", tagline: "Striking design, thrilling drive." },
  { src: "/x6comp.webp", name: "X6 Competition", tagline: "Ultimate driving machine." },
  { src: "/x6cs.webp", name: "X6 CS", tagline: "Elite road presence." },
];

export default function XSeries() {
  return (
    <main>
      <div className="bg-gradient-to-r from-blue-900 via-black to-red-900 min-h-screen pb-10">
        {/* Hero Section with Video */}
        <div className="relative flex justify-center items-center pt-8">
          <video
            src="/vid3.mp4"
            loop
            autoPlay
            muted
            className="rounded-xl shadow-2xl w-full max-w-5xl h-[220px] sm:h-[350px] md:h-[500px] object-cover"
          >
            Your browser does not support the video tag.
          </video>
          
        </div>

        {/* Section Description */}
        <p className="mt-12 text-center text-lg text-gray-200 max-w-2xl mx-auto px-4">
          Discover the BMW X Series: a fusion of luxury, power, and versatility. Each model is crafted for those who demand more from every journey.
        </p>

        {/* Card Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
          {xSeriesModels.map((model, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-gray-900 via-black to-blue-900 rounded-2xl shadow-xl border border-blue-700 overflow-hidden transition-all duration-300 hover:shadow-blue-500 hover:scale-105 group"
            >
              {/* Floating Badge */}
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                X Series
              </span>
              {/* Image */}
              <Image
                src={model.src}
                alt={model.name}
                height={350}
                width={350}
                className="rounded-t-2xl w-full object-cover"
              />
              {/* Card Content */}
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-xl font-bold text-white mb-1">{model.name}</h3>
                <p className="text-sm text-gray-300 mb-3 italic">{model.tagline}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full shadow-md transition duration-300">
                  Explore Model
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
