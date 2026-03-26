import React from "react";

const JournalPublication = () => {
  return (
    <div className="pt-24 bg-gray-100 min-h-screen px-4 py-10 flex justify-center">
      <div className="w-full max-w-5xl space-y-10">
        {/* HEADING */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8 text-center">
          <h2 className="text-lg sm:text-xl font-semibold text-red-500 leading-relaxed">
            Significantly extended versions of the papers presented in
            RITEEC-2025 will be considered in the following journals after
            further editorial scrutiny and peer review
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            (Lorem ipsum dolor sit amet, consectetur adipiscing elit)
          </p>
        </section>

        {/* JOURNAL 1 */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-4">
          <div className="overflow-hidden rounded-xl border">
            <img
              src=""
              alt="energies journal"
              className="w-full h-auto object-contain"
            />
          </div>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <p className="text-sm text-blue-600 break-all">
            https://example.com/journal-link
          </p>
        </section>

        {/* JOURNAL 2 */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-4">
          <div className="overflow-hidden rounded-xl border">
            <img
              src=""
              alt="mapan journal"
              className="w-full h-auto object-contain"
            />
          </div>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Duis sagittis
            ipsum. Praesent mauris.
          </p>

          <p className="text-sm text-blue-600 break-all">
            https://example.com/journal-link-2
          </p>
        </section>
      </div>
    </div>
  );
};

export default JournalPublication;
