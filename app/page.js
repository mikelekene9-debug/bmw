import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center bg-gradient-to-br from-blue-900 via-black to-gray-900 min-h-screen">
        {/* Hero Video Section */}
        <div className="mt-10 w-full flex justify-center">
          <div className="relative w-full max-w-5xl">
            <video
              src="/vid2.mp4"
              loop
              autoPlay
              muted
              className="rounded-xl shadow-2xl w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] object-cover"
            >
              Your browser does not support the video tag.
            </video>
            {/* Headline overlay removed */}
          </div>
        </div>
        {/* Glowing accent line */}
        <div className="mx-auto mt-6 h-2 w-1/2 rounded-full bg-red-600 shadow-lg shadow-red-500"></div>

        {/* Card Section */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 py-10">
          {/* Card 1 */}
          <div className="card bg-white bg-opacity-80 shadow-xl max-w-xl w-full rounded-2xl overflow-hidden">
            <figure className="relative">
              <video
                src="/vid4.mp4"
                loop
                autoPlay
                muted
                className="rounded-t-2xl w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[300px] object-cover"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-6 py-2 rounded-full text-white text-base sm:text-xl font-semibold shadow-md">
                Experience the Power
              </div>
            </figure>
            <div className="card-body flex flex-col items-center">
              <h2 className="font-bold text-2xl sm:text-3xl text-blue-900 mb-2 tracking-wide">GERMAN</h2>
              <p className="text-gray-700 text-base sm:text-lg text-center mb-4">
                Discover the ultimate driving machines, crafted with precision and passion. Explore the BMW M series and feel the thrill of German automotive excellence.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg transition duration-300">
                Book a Test Drive
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card bg-white bg-opacity-80 shadow-xl max-w-xl w-full rounded-2xl overflow-hidden">
            <figure className="relative">
              <video
                src="/vid3.mp4"
                loop
                autoPlay
                muted
                className="rounded-t-2xl w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[300px] object-cover"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-6 py-2 rounded-full text-white text-base sm:text-xl font-semibold shadow-md">
                Unleash the Beast
              </div>
            </figure>
            <div className="card-body flex flex-col items-center">
              <h2 className="font-bold text-2xl sm:text-3xl text-blue-900 mb-2 tracking-wide">PERFORMANCE</h2>
              <p className="text-gray-700 text-base sm:text-lg text-center mb-4">
                Feel the adrenaline rush with every drive. The BMW M series delivers unmatched performance and cutting-edge technology for true enthusiasts.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg transition duration-300">
                Explore Models
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card bg-white bg-opacity-80 shadow-xl max-w-xl w-full rounded-2xl overflow-hidden">
            <figure className="relative">
              <video
                src="/vid6.mp4"
                loop
                autoPlay
                muted
                className="rounded-t-2xl w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[300px] object-cover"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-6 py-2 rounded-full text-white text-base sm:text-xl font-semibold shadow-md">
                Luxury Redefined
              </div>
            </figure>
            <div className="card-body flex flex-col items-center">
              <h2 className="font-bold text-2xl sm:text-3xl text-blue-900 mb-2 tracking-wide">LUXURY</h2>
              <p className="text-gray-700 text-base sm:text-lg text-center mb-4">
                Indulge in comfort and style. The BMW M series combines luxury interiors with dynamic design, making every journey unforgettable.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg transition duration-300">
                View Gallery
              </button>
            </div>
          </div>
        </div>

        {/* Image Card Section */}
        <div className="w-full max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">BMW Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { src: "/m2.webp", title: "BMW M2", desc: "Compact, agile, and thrilling to drive." },
              { src: "/m3.webp", title: "BMW M3", desc: "Iconic sports sedan with legendary performance." },
              { src: "/m4.webp", title: "BMW M4", desc: "Coupe styling meets track-ready power." },
              { src: "/m5.webp", title: "BMW M5", desc: "Luxury and speed in perfect harmony." },
              { src: "/m6.webp", title: "BMW M6", desc: "Grand touring with a racing spirit." },
              { src: "/m8.webp", title: "BMW M8", desc: "The pinnacle of BMW performance and luxury." },
              { src: "/main.jpg", title: "BMW Collection", desc: "Explore the full range of BMW excellence." },
              { src: "/m2comp.webp", title: "BMW M2 Competition", desc: "Enhanced dynamics for true enthusiasts." }
            ].map((car, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-80 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-red-500 flex flex-col items-center"
              >
                <Image
                  src={car.src}
                  alt={car.title}
                  width={350}
                  height={220}
                  className="w-full object-cover rounded-t-2xl"
                />
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{car.title}</h3>
                  <p className="text-gray-700 text-center mb-2">{car.desc}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full shadow-md transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}

