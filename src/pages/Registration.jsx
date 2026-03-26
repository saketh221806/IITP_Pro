import React from "react";

const Registration = () => {
  return (
    <div className="pt-24 bg-gray-100 min-h-screen px-4 py-10 flex justify-center">
      <div className="w-full max-w-6xl space-y-10">
        {/* REGISTRATION GUIDELINES */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-red-500 mb-4">
            Registration Guidelines
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm sm:text-base leading-relaxed">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Integer nec odio. Praesent libero. Sed cursus ante dapibus.</li>
            <li>Nulla quis sem at nibh elementum imperdiet.</li>
            <li>Duis sagittis ipsum. Praesent mauris.</li>
            <li>Fusce nec tellus sed augue semper porta.</li>
          </ul>

          <p className="mt-4 text-blue-600 text-sm sm:text-base font-medium">
            Note: Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>

          <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-600 text-sm sm:text-base">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Consectetur adipiscing elit.</li>
            <li>Sed do eiusmod tempor incididunt.</li>
          </ul>
        </section>

        {/* REGISTRATION FEE IMAGE */}
        <section className="bg-white rounded-2xl shadow-md p-4 md:p-6">
          <h3 className="text-center text-lg sm:text-xl font-semibold mb-4">
            REGISTRATION FEE DETAILS (Excluding tax)
          </h3>

          <div className="overflow-hidden rounded-xl border">
            <img
              src=""
              alt="registration fee table"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* ACCOUNT DETAILS IMAGE */}
        <section className="bg-white rounded-2xl shadow-md p-4 md:p-6">
          <h3 className="text-center text-lg sm:text-xl font-semibold text-red-500 mb-4">
            ACCOUNT DETAILS
          </h3>

          <div className="overflow-hidden rounded-xl border">
            <img
              src=""
              alt="payment details"
              className="w-full h-auto object-contain"
            />
          </div>

          <p className="mt-4 text-sm text-gray-600">
            SWIFT Code: Lorem ipsum dolor sit amet (Required for foreign
            authors)
          </p>

          <p className="mt-2 text-sm sm:text-base">
            Registration Link:{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Lorem Ipsum 2026
            </span>
          </p>
        </section>

        {/* NOTE SECTION */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">NOTE:</h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm sm:text-base leading-relaxed">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Praesent libero. Sed cursus ante dapibus diam.</li>
            <li>Integer nec odio. Nulla quis sem at nibh elementum.</li>
            <li>Duis sagittis ipsum. Praesent mauris.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
export default Registration;
