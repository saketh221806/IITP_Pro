import React from "react";

const CallForPapers = () => {
  return (
    <div className="pt-24 bg-gray-100 min-h-screen px-4 py-10 flex justify-center">
      <div className="w-full max-w-6xl space-y-10">
        {/* INTRO */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8 text-center">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h2 className="mt-4 text-lg sm:text-xl font-semibold underline cursor-pointer">
            Link for CFP Brochure
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>

        {/* TRACKS GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* COLUMN 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
            <div>
              <h3 className="font-semibold mb-2">
                Control Systems and Automation
              </h3>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Sed do eiusmod tempor</li>
                <li>Ut labore et dolore magna</li>
                <li>Aliqua ut enim ad minim</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Circuits, Systems, VLSI and Nanoelectronics
              </h3>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Integer nec odio</li>
                <li>Praesent libero</li>
                <li>Sed cursus ante dapibus</li>
                <li>Duis sagittis ipsum</li>
              </ul>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
            <div>
              <h3 className="font-semibold mb-2">
                Power Electronics and Drives
              </h3>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Ut enim ad minim veniam</li>
                <li>Quis nostrud exercitation</li>
                <li>Ullamco laboris nisi</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Electrical Power Systems and Renewable Energy
              </h3>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Energy storage systems</li>
                <li>Power system stability</li>
                <li>Renewable integration</li>
                <li>Electric vehicles</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EMERGING TECH */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h3 className="font-semibold mb-3">
            Emerging Technologies in Electrical, Electronics, and Computing
          </h3>

          <ul className="text-blue-600 text-sm sm:text-base space-y-1">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Quantum computing concepts</li>
            <li>AI and deep learning applications</li>
            <li>Smart sensors and IoT</li>
            <li>Digital twins in engineering</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CallForPapers;
