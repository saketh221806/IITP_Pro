import React from "react";

const Submission = () => {
  return (
    <div className="pt-24 bg-gray-100 min-h-screen px-4 py-10 flex justify-center">
      <div className="w-full max-w-5xl space-y-10">
        {/* DECLARATION */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Submission declaration and verification
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <span className="text-blue-600 font-medium">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </p>
        </section>

        {/* MANUSCRIPT PREPARATION */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-4">
          <h3 className="text-lg font-semibold text-red-500">
            Manuscript Preparation
          </h3>

          <p className="text-gray-600 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <p className="font-medium text-gray-800">
            Regular Paper: 5 - 7 pages.
          </p>

          <div>
            <p className="font-medium mb-1">
              Please refer to the author templates given below:
            </p>

            <p className="text-sm sm:text-base">
              MS Word template:{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Doc Template
              </span>
            </p>

            <p className="text-sm sm:text-base">
              LaTex Formatting Macros:{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Tex Template
              </span>
            </p>
          </div>
        </section>

        {/* SUBMISSION SYSTEM */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-4">
          <h3 className="text-lg font-semibold text-red-500">
            Submission System
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>

          <p className="text-sm sm:text-base">
            Submission Link:{" "}
            <span className="text-blue-600 hover:underline cursor-pointer font-medium">
              CMT System
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Submission;
