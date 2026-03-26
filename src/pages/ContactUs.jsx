import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
const ContactUs = () => {
  return (
    <div className="pt-28 scroll-mt-20 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center">
      <section className="w-full max-w-6xl px-6 py-12 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4">
          Welcome to IIT PATNA
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
          Building innovation, connecting minds, and creating impactful
          solutions.
        </p>
      </section>

      <section className="w-full max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>

            <div className="flex items-center gap-3">
              <span>📧</span>
              <span className="text-gray-700">abcd@iitp.ac.in</span>
            </div>

            <div className="flex items-center gap-3">
              <span>📱</span>
              <span className="text-gray-700">+91 xxxxxxxxx</span>
            </div>

            <div className="flex items-center gap-3">
              <span>📍</span>
              <span className="text-gray-700">Patna, Bihar 800005, India</span>
            </div>
          </div>

          {/* MAP */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=IIT%20Patna%20Bihta&output=embed"
              className="w-full h-[300px] md:h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="text-gray-500 text-sm pb-6">
        © 2026 RIT EEC. All rights reserved.
      </footer> */}
    </div>
  );
};

export default ContactUs;
