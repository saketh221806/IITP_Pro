import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Separator } from "@/components/ui/separator";
import Hero from "../assets/hero.png";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <div className="relative w-full h-[80vh] md:h-screen">
        <img
          src="/backdrop.jpeg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <h1 className="text-white whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Indian Institute Of Technology Patna
          </h1>
        </div>

        <div className="absolute bottom-0 w-full">
          <button
            onClick={() => {
              document.getElementById("next")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="w-full bg-black/80 backdrop-blur-md hover:bg-black text-white py-3 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg tracking-wide font-semibold border-t border-white/10"
          >
            Explore
            <span>↓</span>
          </button>
        </div>
      </div>

      <div className="">
        <Separator />

        {/* About Conference */}
        <div id="next" className="flex scroll-mt-20 flex-col items-center px-4 sm:px-6 md:px-10 py-10 max-w-5xl mx-auto text-center">
          <h1 className="font-bold font-mono text-2xl sm:text-3xl md:text-4xl mb-5">
            About The Conference
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            The International Conference on Emerging Technologies (ICET 2026) aims to bring together researchers, academicians, industry professionals, and students to exchange ideas and present advancements in the fields of Artificial Intelligence, Machine Learning, Systems, and Computational Sciences.

            The conference will feature keynote talks from leading experts, technical paper presentations, workshops, and panel discussions focusing on real-world applications and future research directions. ICET 2026 provides a platform to foster collaboration, encourage innovation, and bridge the gap between academia and industry.

            Participants will have the opportunity to showcase their work, gain insights from global leaders, and engage in meaningful discussions shaping the future of technology.
          </p>
        </div>

        <Separator />

        {/* About Institute */}
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-10 py-10 max-w-5xl mx-auto text-center">
          <h1 className="font-bold font-mono text-2xl sm:text-3xl md:text-4xl mb-5">
            About The Institute
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            Indian Institute of Technology Patna (IIT Patna) is one of the premier institutes of national importance established by the Government of India. Known for its excellence in teaching, research, and innovation, IIT Patna offers undergraduate, postgraduate, and doctoral programs across various disciplines of engineering, science, and humanities.

            The institute is committed to advancing knowledge through cutting-edge research and fostering a culture of innovation and entrepreneurship. With state-of-the-art infrastructure, modern laboratories, and a vibrant academic environment, IIT Patna continues to contribute significantly to technological development and societal progress.

            Situated in Bihar, the institute is rapidly emerging as a hub for academic excellence and industry collaboration in India.
          </p>
        </div>

        <Separator />

        {/* Sponsor */}
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-10 py-10">
          <h1 className="font-bold font-mono text-2xl sm:text-3xl md:text-4xl mb-5">
            Sponsors
          </h1>

          <p className="mb-5 text-sm sm:text-base text-center max-w-2xl">
            We are grateful to our sponsors and partners for their continuous support in making this conference possible. Their contribution helps foster innovation, support research initiatives, and provide a platform for knowledge exchange among participants from diverse domains.
          </p>

          <div className="w-full max-w-xs sm:max-w-md md:max-w-xl">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="flex justify-center items-center">
                  <img
                    src={Hero}
                    className="max-h-40 sm:max-h-60 md:max-h-80 object-contain"
                  />
                </CarouselItem>

                <CarouselItem className="flex justify-center items-center">
                  <img
                    src={Hero}
                    className="max-h-40 sm:max-h-60 md:max-h-80 object-contain"
                  />
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <Separator />

        {/* Important Dates */}
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-10 py-10">
          <h1 className="font-bold font-mono text-2xl sm:text-3xl md:text-4xl mb-5">
            Important Dates
          </h1>

          <ul className="list-disc list-inside text-left text-sm sm:text-base max-w-md">
            <li>Registration Opens: April 1, 2026</li>
            <li>Paper Submission Deadline: May 15, 2026</li>
            <li>Notification of Acceptance: June 10, 2026</li>
            <li>Camera Ready Submission: June 25, 2026</li>
            <li>Conference Dates: July 10–12, 2026</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;