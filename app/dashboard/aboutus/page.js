import { SiBmw } from "react-icons/si";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-tr from-blue-900 via-black to-red-900 pb-16">
        {/* Top Section */}
        <section className="flex flex-col items-center justify-center pt-16 pb-10">
          <SiBmw className="text-blue-400 text-6xl animate-pulse mb-4" />
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold tracking-wide mb-4 text-center drop-shadow-lg">
            Welcome to BMW
          </h1>
          <video
            src="/vid2.mp4"
            loop
            autoPlay
            muted
            className="rounded-2xl shadow-2xl w-full max-w-3xl h-[160px] sm:h-[260px] md:h-[350px] object-cover mb-6"
          >
            Your browser does not support the video tag.
          </video>
          <p className="text-gray-200 text-lg max-w-2xl text-center px-4">
            BMW stands for innovation, luxury, and driving pleasure. Our legacy is
            built on precision engineering and a relentless pursuit of excellence.
            Every BMW is crafted for those who desire more from every journey.
          </p>
        </section>

        {/* Team Section */}
        <section className="max-w-5xl mx-auto mt-16 px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">
            Meet the BMW Team
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
            <div className="bg-gradient-to-br from-blue-900 via-black to-red-900 rounded-2xl shadow-xl p-8 flex flex-col items-center w-full sm:w-1/3 hover:scale-105 transition-transform duration-300">
              <Image
                src="/m2.webp"
                alt="Engr MIKEL"
                width={120}
                height={120}
                className="rounded-full mb-4 object-cover border-4 border-blue-600"
              />
              <h3 className="text-white text-xl font-bold mb-1">Engr MIKEL</h3>
              <p className="text-blue-300 text-base mb-2">Chief Designer</p>
              <p className="text-gray-300 text-center text-sm">
                Visionary behind BMW’s iconic lines and dynamic forms.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900 via-black to-red-900 rounded-2xl shadow-xl p-8 flex flex-col items-center w-full sm:w-1/3 hover:scale-105 transition-transform duration-300">
              <Image
                src="/m3.webp"
                alt="OLA"
                width={120}
                height={120}
                className="rounded-full mb-4 object-cover border-4 border-blue-600"
              />
              <h3 className="text-white text-xl font-bold mb-1">OLA</h3>
              <p className="text-blue-300 text-base mb-2">Lead Engineer</p>
              <p className="text-gray-300 text-center text-sm">
                Driving innovation and performance in every BMW model.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900 via-black to-red-900 rounded-2xl shadow-xl p-8 flex flex-col items-center w-full sm:w-1/3 hover:scale-105 transition-transform duration-300">
              <Image
                src="/m4.webp"
                alt="DIVINE"
                width={120}
                height={120}
                className="rounded-full mb-4 object-cover border-4 border-blue-600"
              />
              <h3 className="text-white text-xl font-bold mb-1">DIVINE</h3>
              <p className="text-blue-300 text-base mb-2">Brand Manager</p>
              <p className="text-gray-300 text-center text-sm">
                Championing the BMW experience and customer satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-4xl mx-auto mt-20 px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-black bg-opacity-40 rounded-xl p-6 shadow-lg">
              <h4 className="text-blue-400 text-lg font-semibold mb-2">
                Innovation
              </h4>
              <p className="text-gray-300">
                We push boundaries to shape the future of mobility.
              </p>
            </div>
            <div className="bg-black bg-opacity-40 rounded-xl p-6 shadow-lg">
              <h4 className="text-red-400 text-lg font-semibold mb-2">
                Performance
              </h4>
              <p className="text-gray-300">
                Delivering exhilarating driving experiences every time.
              </p>
            </div>
            <div className="bg-black bg-opacity-40 rounded-xl p-6 shadow-lg">
              <h4 className="text-gray-300 text-lg font-semibold mb-2">
                Luxury
              </h4>
              <p className="text-gray-300">
                Crafting comfort and elegance in every detail.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-2xl mx-auto mt-20 px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-300 mb-4">
            Want to know more or book a test drive? Reach out to our team!
          </p>
          <a
            href=""
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            info@bmw.com
          </a>
        </section>
        </div>
        </main>
  )}