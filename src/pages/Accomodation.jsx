import React from "react";

const Accomodation = () => {
  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-lg p-6 md:p-10 overflow-hidden">
        {/* subtle accent */}
        <div className="absolute top-0 left-0 w-1 h-full"></div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          For Authors/Presenters
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          veritatis omnis fugiat eaque earum cupiditate, assumenda est, maiores
          sint esse, voluptate inventore officia aut. Dolorum harum ea totam
          culpa dolore!
        </p>

        {/* CTA BOX */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-gray-700 text-sm sm:text-base">
            Submit your accommodation request:
          </p>

          <a
            href="abcd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-4 py-2 rounded-lg transition text-center"
          >
            Fill Form →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Accomodation;
