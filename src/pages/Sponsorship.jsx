import React from "react";

const Sponsorship = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 flex justify-center pt-26">
      <div className="w-full max-w-5xl space-y-10">
        {/* SPONSORSHIP DETAILS */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            How to become a Sponsor?
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            autem, quaerat nihil consequatur fugit ut laboriosam omnis dolorem
            temporibus quae dolores culpa aperiam! Vero libero neque eius,
            similique dicta ipsum.
          </p>

          <div className="space-y-2 text-sm sm:text-base">
            <p>
              <span className="font-semibold">Platinum:</span> ₹6,00,000
            </p>
            <p>
              <span className="font-semibold">Diamond:</span> ₹5,00,000
            </p>
            <p>
              <span className="font-semibold">Gold:</span> ₹4,00,000
            </p>
            <p>
              <span className="font-semibold">Silver:</span> ₹2,00,000
            </p>
            <p>
              <span className="font-semibold">Bronze:</span> ₹1,00,000
            </p>
          </div>

          <h3 className="text-lg sm:text-xl font-semibold mb-4 mt-4">
            Main Sponsor:
          </h3>
          <ul className="list-disc pl-5 mt-4 text-gray-600 text-sm sm:text-base space-y-1">
            <li>Logo on conference website (with link)</li>
            <li>Logo in conference program</li>
            <li>Promotional video/webcast opportunity</li>
            <li>Custom sponsorship options available</li>
          </ul>
          <p className="mt-4 text-gray-700 text-sm sm:text-base">
            Early confirmation of your Sponsorship will ensure an even higher
            level of exposure.
          </p>
        </section>

        {/* PAYMENT DETAILS IMAGE */}
        <section className="bg-white rounded-2xl shadow-md p-4 md:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">
            Account Details
          </h2>

          <div className="overflow-hidden rounded-xl border">
            <img
              src=""
              alt="payment details"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* CONTACT */}
        <section className="text-center text-sm sm:text-base text-gray-600">
          For enquiries, contact:
          <br />
          <span className="text-blue-600">abcd@iitp.ac.in</span> or{" "}
          <span className="text-blue-600">abcd.ee@iitp.ac.in</span>
        </section>
      </div>
    </div>
  );
};

export default Sponsorship;
