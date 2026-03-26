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
          <h1 className="text-white whitespace-nowrap text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
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
            {/* your text */}
          </p>
        </div>

        <Separator />

        {/* About Institute */}
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-10 py-10 max-w-5xl mx-auto text-center">
          <h1 className="font-bold font-mono text-2xl sm:text-3xl md:text-4xl mb-5">
            About The Institute
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            {/* your text */}
          </p>
        </div>

        <Separator />

        {/* Sponsor */}
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-10 py-10">
          <h1 className="font-bold font-mono text-2xl sm:text-3xl md:text-4xl mb-5">
            Sponsors
          </h1>

          <p className="mb-5 text-sm sm:text-base text-center max-w-2xl">
            Lorem ipsum...
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
            <li>Registration Opens – April 1, 2026</li>
            <li>Submission Deadline – May 15, 2026</li>
            <li>Review Results – June 10, 2026</li>
            <li>Final Submission – June 25, 2026</li>
            <li>Conference Date – July 10, 2026</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;