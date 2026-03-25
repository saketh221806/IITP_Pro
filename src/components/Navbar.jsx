import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [committeeOpen, setCommitteeOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCommitteeOpen, setMobileCommitteeOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  const committeeRef = useRef(null);
  const moreRef = useRef(null);

  const location = useLocation();

  const committeeActive = location.pathname.startsWith("/committee");
  const moreActive =
    location.pathname === "/accommodation" ||
    location.pathname === "/places-to-explore" ||
    location.pathname === "/sponsorship" ||
    location.pathname === "/ContactUs";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        committeeRef.current &&
        !committeeRef.current.contains(e.target) &&
        moreRef.current &&
        !moreRef.current.contains(e.target)
      ) {
        setCommitteeOpen(false);
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setCommitteeOpen(false);
    setMoreOpen(false);
    setMobileMenuOpen(false);
    setMobileCommitteeOpen(false);
    setMobileMoreOpen(false);
  }, [location.pathname]);

  const linkBase =
    "relative whitespace-nowrap px-1 py-3 lg:py-7 text-[15px] xl:text-[16px] font-medium text-white/90 transition duration-300 hover:text-white";

  const underlineClass =
    "after:absolute after:left-1/2 after:bottom-1 lg:after:bottom-3 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  const activeClass = "text-white after:w-full";

  const mobileLinkClass =
    "block w-full rounded-lg px-4 py-3 text-left text-[15px] font-medium text-white/90 transition duration-200 hover:bg-white/10 hover:text-white";

  return (
    <nav className="w-full fixed z-50 top-0 left-0 border-b border-white/10 bg-gradient-to-r from-[#111111] via-[#2b2b2b] to-[#1a1a1a] text-white shadow-lg">
      <div className="mx-auto flex min-h-20 w-full items-center justify-between px-4 lg:px-6">
        {/* Left */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <img
            src="data:image/png;base64,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"
            alt="logo"
            className="h-10 w-10 rounded-full border border-white/20 object-cover sm:h-11 sm:w-11"
          />
          <h1 className="whitespace-nowrap text-[17px] font-semibold tracking-wide text-white sm:text-[20px]">
            IITP 2026
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-4 xl:gap-5 2xl:gap-6 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${underlineClass} ${isActive ? activeClass : ""}`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/book-of-abstracts"
              className={({ isActive }) =>
                `${linkBase} ${underlineClass} ${isActive ? activeClass : ""}`
              }
            >
              Book of Abstracts
            </NavLink>
          </li>

          {/* Committee Desktop */}
          <li className="relative" ref={committeeRef}>
            <button
              onClick={() => {
                setCommitteeOpen((prev) => !prev);
                setMoreOpen(false);
              }}
              className={`${linkBase} ${underlineClass} ${
                committeeActive ? activeClass : ""
              } flex items-center gap-2`}
            >
              <span className="whitespace-nowrap">Committee</span>
              <span
                className={`text-[12px] transition-transform duration-300 ${
                  committeeOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {committeeOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-2 w-[290px] -translate-x-1/2 overflow-hidden rounded-xl border border-white/10 bg-[#1f1f1f] shadow-2xl">
                <NavLink
                  to="/committee/organizing"
                  onClick={() => setCommitteeOpen(false)}
                  className="block whitespace-nowrap px-6 py-4 text-center text-[16px] text-white/90 transition duration-200 hover:bg-[#2d2d2d] hover:text-white"
                >
                  Organizing Committee
                </NavLink>

                <NavLink
                  to="/committee/technical"
                  onClick={() => setCommitteeOpen(false)}
                  className="block whitespace-nowrap px-6 py-4 text-center text-[16px] text-white/90 transition duration-200 hover:bg-[#2d2d2d] hover:text-white"
                >
                  Technical Committee
                </NavLink>

                <NavLink
                  to="/committee/advisory"
                  onClick={() => setCommitteeOpen(false)}
                  className="block whitespace-nowrap px-6 py-4 text-center text-[16px] text-white/90 transition duration-200 hover:bg-[#2d2d2d] hover:text-white"
                >
                  Advisory Committee
                </NavLink>
              </div>
            )}
          </li>

          <li>
            <NavLink
              to="/speakers"
              className={({ isActive }) =>
                `${linkBase} ${underlineClass} ${isActive ? activeClass : ""}`
              }
            >
              Speakers
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/call-for-papers"
              className={({ isActive }) =>
                `${linkBase} ${underlineClass} ${isActive ? activeClass : ""}`
              }
            >
              Call for Papers
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/important-dates"
              className={({ isActive }) =>
                `${linkBase} ${underlineClass} ${isActive ? activeClass : ""}`
              }
            >
              Important Dates
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/submission"
              className={({ isActive }) =>
                `${linkBase} ${underlineClass} ${isActive ? activeClass : ""}`
              }
            >
              Submission
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/journal-publication"
              className={({ isActive }) =>
                `${linkBase} ${underlineClass} ${isActive ? activeClass : ""}`
              }
            >
              Journal Publication
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/registration"
              className={({ isActive }) =>
                `${linkBase} ${underlineClass} ${isActive ? activeClass : ""}`
              }
            >
              Registration
            </NavLink>
          </li>

          {/* More Desktop */}
          <li className="relative" ref={moreRef}>
            <button
              onClick={() => {
                setMoreOpen((prev) => !prev);
                setCommitteeOpen(false);
              }}
              className={`${linkBase} ${underlineClass} ${
                moreActive ? activeClass : ""
              } flex items-center gap-2`}
            >
              <span className="whitespace-nowrap">More</span>
              <span
                className={`text-[12px] transition-transform duration-300 ${
                  moreOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {moreOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-[290px] overflow-hidden rounded-xl border border-white/10 bg-[#1f1f1f] shadow-2xl">
                <NavLink
                  to="/accomodation"
                  onClick={() => setMoreOpen(false)}
                  className="block whitespace-nowrap px-6 py-4 text-center text-[16px] text-white/90 transition duration-200 hover:bg-[#2d2d2d] hover:text-white"
                >
                  Accommodation
                </NavLink>

                <NavLink
                  to="/places-to-explore"
                  onClick={() => setMoreOpen(false)}
                  className="block whitespace-nowrap px-6 py-4 text-center text-[16px] text-white/90 transition duration-200 hover:bg-[#2d2d2d] hover:text-white"
                >
                  Places to Explore
                </NavLink>

                <NavLink
                  to="/sponsorship"
                  onClick={() => setMoreOpen(false)}
                  className="block whitespace-nowrap px-6 py-4 text-center text-[16px] text-white/90 transition duration-200 hover:bg-[#2d2d2d] hover:text-white"
                >
                  Sponsorship
                </NavLink>

                <NavLink
                  to="/ContactUs"
                  onClick={() => setMoreOpen(false)}
                  className="block whitespace-nowrap px-6 py-4 text-center text-[16px] text-white/90 transition duration-200 hover:bg-[#2d2d2d] hover:text-white"
                >
                  Contact Us
                </NavLink>
              </div>
            )}
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => {
            setMobileMenuOpen((prev) => !prev);
            setMobileCommitteeOpen(false);
            setMobileMoreOpen(false);
          }}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white lg:hidden"
        >
          <span className="text-xl">{mobileMenuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#161616] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <NavLink to="/" className={mobileLinkClass}>
              Home
            </NavLink>

            <NavLink to="/book-of-abstracts" className={mobileLinkClass}>
              Book of Abstracts
            </NavLink>

            {/* Committee Mobile */}
            <div className="overflow-hidden rounded-lg border border-white/10">
              <button
                onClick={() => {
                  setMobileCommitteeOpen((prev) => !prev);
                  setMobileMoreOpen(false);
                }}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-[15px] font-medium text-white/90"
              >
                <span>Committee</span>
                <span
                  className={`transition-transform duration-300 ${
                    mobileCommitteeOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {mobileCommitteeOpen && (
                <div className="border-t border-white/10 bg-white/5 flex flex-col items-end text-right">
                  <NavLink
                    to="/committee/organizing"
                    className="block w-full px-6 py-3 text-sm text-right text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    Organizing Committee
                  </NavLink>
                  <NavLink
                    to="/committee/technical"
                    className="block w-full px-6 py-3 text-sm text-right text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    Technical Committee
                  </NavLink>
                  <NavLink
                    to="/committee/advisory"
                    className="block w-full px-6 py-3 text-sm text-right text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    Advisory Committee
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/speakers" className={mobileLinkClass}>
              Speakers
            </NavLink>

            <NavLink to="/call-for-papers" className={mobileLinkClass}>
              Call for Papers
            </NavLink>

            <NavLink to="/important-dates" className={mobileLinkClass}>
              Important Dates
            </NavLink>

            <NavLink to="/submission" className={mobileLinkClass}>
              Submission
            </NavLink>

            <NavLink to="/journal-publication" className={mobileLinkClass}>
              Journal Publication
            </NavLink>

            <NavLink to="/registration" className={mobileLinkClass}>
              Registration
            </NavLink>

            {/* More Mobile */}
            <div className="overflow-hidden rounded-lg border border-white/10">
              <button
                onClick={() => {
                  setMobileMoreOpen((prev) => !prev);
                  setMobileCommitteeOpen(false);
                }}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-[15px] font-medium text-white/90"
              >
                <span>More</span>
                <span
                  className={`transition-transform duration-300 ${
                    mobileMoreOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {mobileMoreOpen && (
                <div className="border-t border-white/10 bg-white/5 flex flex-col items-end text-right">
                  <NavLink
                    to="/accomodation"
                    className="block w-full px-6 py-3 text-sm text-right text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    Accommodation
                  </NavLink>
                  <NavLink
                    to="/places-to-explore"
                    className="block w-full px-6 py-3 text-sm text-right text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    Places to Explore
                  </NavLink>
                  <NavLink
                    to="/sponsorship"
                    className="block w-full px-6 py-3 text-sm text-right text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    Sponsorship
                  </NavLink>
                  <NavLink
                    to="/ContactUs"
                    className="block w-full px-6 py-3 text-sm text-right text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    Contact Us
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;