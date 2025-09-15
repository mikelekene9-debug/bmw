import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const models = [
  { src: "/m2.webp", name: "M2", type: "Sport", tagline: "Agile. Compact. Powerful." },
  { src: "/m2comp.webp", name: "M2 Competition", type: "Competition", tagline: "Track-ready performance." },
  { src: "/m2cs.jpg", name: "M2 CS", type: "Limited", tagline: "Exclusive driving experience." },
  { src: "/m3.webp", name: "M3", type: "Sport", tagline: "The legend reborn." },
  { src: "/m44.webp", name: "M4", type: "Sport", tagline: "Precision and power." },
  { src: "/m3cs.webp", name: "M3 CS", type: "Limited", tagline: "Track-focused performance." },
  { src: "/m4.6.jpg", name: "M4 GTS", type: "Extreme", tagline: "Race track ready." },
  { src: "/m4.webp", name: "M4 Coupe", type: "Sport", tagline: "Elegance meets aggression." },
  { src: "/m4comp.jpg", name: "M4 Competition", type: "Competition", tagline: "Enhanced performance." },
  { src: "/m4cs.webp", name: "M4 CS", type: "Limited", tagline: "Powerful and exclusive." },
  { src: "/m5.webp", name: "M5", type: "Luxury", tagline: "The executive express." },
  { src: "/m5comp.webp", name: "M5 Competition", type: "Competition", tagline: "Ultimate performance sedan." },
  { src: "/m5cs.jpg", name: "M5 CS", type: "Limited", tagline: "The pinnacle of M performance." },
  { src: "/m6.webp", name: "M6", type: "Luxury", tagline: "Gran Turismo redefined." },
  { src: "/m8.webp", name: "M8", type: "Luxury", tagline: "Luxury and performance in harmony." },
  { src: "/m8comp.webp", name: "M8 Competition", type: "Competition", tagline: "Track-capable luxury." },
  { src: "/m6cs.webp", name: "M6 CS", type: "Limited", tagline: "A true collector's item." },
  { src: "/m8cs.webp", name: "M8 CS", type: "Limited", tagline: "Extreme performance, limited production." },
  { src: "/m31.webp", name: "M3 E30", type: "Classic", tagline: "The original M3." },
  { src: "/m32.webp", name: "M3 E92", type: "Classic", tagline: "V8 power in a classic shell." },
  { src: "/m33.webp", name: "M3 F80", type: "Modern Classic", tagline: "Turbocharged and timeless." },
  { src: "/m34.webp", name: "M4 G82", type: "Latest", tagline: "The newest member of the M family." },
  { src: "/m41.webp", name: "M5 E60", type: "Classic", tagline: "The V10 M5." },
  { src: "/m2cs.jpg", name: "M2 CS", type: "Limited", tagline: "Exclusive driving experience." },
  { src: "/main.jpg", name: "Main Image", type: "Overview", tagline: "The essence of BMW M." },
  { src: "/m44.webp", name: "M4", type: "Sport", tagline: "Precision and power." },
  { src: "/m45.jpg", name: "M5 E39", type: "Classic", tagline: "The iconic M5." }
];

export default function mseries() {
  return (
    <main>
      <div className="bg-gradient-to-r from-red-700 to-black min-h-screen pb-10">
        {/* Video Section with Overlay */}
        <div className="relative flex justify-center items-center pt-8">
          <video
            src="/vid3.mp4"
            loop
            autoPlay
            muted
            className="rounded-md shadow-lg w-full max-w-4xl h-[200px] sm:h-[350px] md:h-[500px] object-cover"
          >
            Your browser does not support the video tag.
          </video>
          {/* Overlay Text */}
          <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base sm:text-xl md:text-3xl font-bold bg-black bg-opacity-40 px-4 py-2 rounded-lg text-center shadow-lg">
            The heart of German Automobile
            {/* Glowing Red Line */}
            <div className="mx-auto mt-4 h-2 w-1/2 rounded-full bg-red-600 shadow-lg shadow-red-500"></div>
          </div>
        </div>

        {/* Section Title */}
        <p className="text-2xl font-bold mt-8 ml-3 border-t-2 border-l-2 w-fit px-4 py-2 bg-gradient-to-r from-black to-red-900 text-gray-300 md:text-3xl lg:text-4xl">
          All Available
        </p>

        {/* Enhanced Card Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-2">
          {models.map((model, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-gray-900 via-black to-red-900 rounded-2xl shadow-xl border border-red-700 overflow-hidden transition-all duration-300 hover:shadow-red-500 hover:scale-105 group"
            >
              {/* Floating Badge */}
              <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                {model.type}
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
                <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-full shadow-md transition duration-300">
                  Learn More <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Brief Description */}
        <p className="mt-10 text-center text-lg text-gray-200 max-w-3xl mx-auto px-4">
          Each card on this page showcases a different BMW M series model, featuring a high-quality cars. The cars are designed to highlight the unique style, performance, and luxury of each vehicle, allowing owners to visually explore the range of feature present in each model  in an engaging and modern layout.
        </p>
      </div>
    </main>
  );
}