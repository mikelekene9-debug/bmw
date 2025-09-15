import Image from "next/image";

export default function showroom() {
  return (
    <main>
      <div className="bg-gradient-to-l from-blue-800 to-red-900 min-h-screen pb-10">
        {/* Hero Video */}
        <div className="relative flex justify-center items-center pt-8">
          <video
            src="/vid.mp4"
            loop
            autoPlay
            muted
            width="800"
            className="rounded-xl shadow-2xl w-full max-w-5xl h-[220px] sm:h-[350px] md:h-[500px] object-cover"
          >
            Your browser does not support the video tag.
          </video>
          {/* Overlay Title */}
          
        </div>

        {/* CLASSICS Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold ml-4 mb-2 text-white flex items-center gap-3">
            <span className="border-t-2 border-l-2 px-4 py-2 bg-gradient-to-r from-black to-red-900 rounded-lg">
              CLASSICS
            </span>
            <span className="h-2 w-16 bg-red-600 rounded-full shadow-red-500 shadow-md"></span>
          </h2>
          <p className="ml-4 text-gray-200 mb-6 max-w-xl">
            Explore the timeless BMX classics, each representing the spirit of
            BMW’s legendary engineering and design.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {["/bmx.webp", "/bmx2.webp", "/bmx3.webp", "/bmx4.webp", "/bmx5.webp", "/bmx6.webp"].map(
              (src, idx) => (
                <div
                  key={idx}
                  className="bg-black bg-opacity-40 rounded-xl shadow-lg hover:shadow-red-500 transition-all duration-300 p-2"
                >
                  <Image
                    src={src}
                    alt="BMW Classic"
                    height={350}
                    width={350}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
              )
            )}
          </div>
        </section>

        {/* I_8 Concept Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold ml-4 mb-2 text-white flex items-center gap-3">
            <span className="border-t-2 border-l-2 px-4 py-2 bg-gradient-to-r from-black to-blue-900 rounded-lg">
              I_8 Concept
            </span>
            <span className="h-2 w-16 bg-blue-600 rounded-full shadow-blue-500 shadow-md"></span>
          </h2>
          <p className="ml-4 text-gray-200 mb-6 max-w-xl">
            Discover the futuristic I_8 Concept, blending innovation,
            sustainability, and dynamic performance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {["/i8.webp", "/i82.webp", "/i83.webp", "/i84.webp", "/i8bac.jpg", "/i86.webp"].map(
              (src, idx) => (
                <div
                  key={idx}
                  className="bg-black bg-opacity-40 rounded-xl shadow-lg hover:shadow-blue-500 transition-all duration-300 p-2"
                >
                  <Image
                    src={src}
                    alt="BMW I8 Concept"
                    height={350}
                    width={350}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
              )
            )}
          </div>
        </section>

        {/* I_X Concept Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold ml-4 mb-2 text-white flex items-center gap-3">
            <span className="border-t-2 border-l-2 px-4 py-2 bg-gradient-to-r from-black to-gray-900 rounded-lg">
              I_X Concept
            </span>
            <span className="h-2 w-16 bg-gray-400 rounded-full shadow-gray-500 shadow-md"></span>
          </h2>
          <p className="ml-4 text-gray-200 mb-6 max-w-xl">
            The I_X Concept redefines electric mobility with bold design and
            advanced technology.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {["/s.webp", "/s2.webp", "/s3.avif", "/s4.webp", "/s5.webp", "/s6.webp"].map(
              (src, idx) => (
                <div
                  key={idx}
                  className="bg-black bg-opacity-40 rounded-xl shadow-lg hover:shadow-gray-500 transition-all duration-300 p-2"
                >
                  <Image
                    src={src}
                    alt="BMW IX Concept"
                    height={350}
                    width={350}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
              )
            )}
          </div>
        </section>

        {/* Z Concept Section */}
        <section className="mt-16 mb-10">
          <h2 className="text-3xl font-bold ml-4 mb-2 text-white flex items-center gap-3">
            <span className="border-t-2 border-l-2 px-4 py-2 bg-gradient-to-r from-black to-red-900 rounded-lg">
              Z Concept
            </span>
            <span className="h-2 w-16 bg-red-600 rounded-full shadow-red-500 shadow-md"></span>
          </h2>
          <p className="ml-4 text-gray-200 mb-6 max-w-xl">
            The Z Concept embodies BMW’s passion for roadsters, combining open-air
            freedom with exhilarating performance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {["/z2.jpg", "/z7.webp", "/z8.webp", "/z9.webp", "/z10.jpg", "/z5.webp"].map(
              (src, idx) => (
                <div
                  key={idx}
                  className="bg-black bg-opacity-40 rounded-xl shadow-lg hover:shadow-red-500 transition-all duration-300 p-2"
                >
                  <Image
                    src={src}
                    alt="BMW Z Concept"
                    height={350}
                    width={350}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </main>
  );
}