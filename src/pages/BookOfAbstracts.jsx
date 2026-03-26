import React from "react";

const BookOfAbstracts = () => {
  return (
    <div
  id="pdf-section"
  className="scroll-mt-24 bg-gray-100 pt-20 sm:pt-24 md:pt-28 pb-10 px-4 flex justify-center"
>
  <div className="w-full max-w-4xl text-center">

    {/* Heading */}
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">
      Book of Abstracts
    </h2>

    {/* PDF Preview */}
    <div className="w-full h-[300px] sm:h-[400px] md:h-[550px] border rounded-lg overflow-hidden shadow">
      <iframe src="/abstracts.pdf" className="w-full h-full" />
    </div>

    {/* Button */}
    <div className="flex justify-center mt-5 sm:mt-6">
      <a
        href="/abstracts.pdf"
        download
        className="bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-gray-800 text-sm sm:text-base"
      >
        Download PDF
      </a>
    </div>

  </div>
</div>
  );
};

export default BookOfAbstracts;
