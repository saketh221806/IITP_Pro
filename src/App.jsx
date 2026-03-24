import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BookOfAbstracts from "./pages/BookOfAbstracts";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import TechnicalCommittee from "./pages/TechnicalCommittee";
import AdvisoryCommittee from "./pages/AdvisoryCommittee";
import Speakers from "./pages/Speakers";
import CallForPapers from "./pages/CallForPapers";
import ImportantDates from "./pages/ImportantDates";
import Submission from "./pages/Submission";
import JournalPublication from "./pages/JournalPublication";
import Registration from "./pages/Registration";
import Accomodation from "./pages/Accomodation"
import PlacesToExplore from "./pages/PlacesToExplore";
import Sponsorship from "./pages/Sponsorship";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-of-abstracts" element={<BookOfAbstracts />} />
        <Route path="/committee/organizing" element={<OrganizingCommittee />} />
        <Route path="/committee/technical" element={<TechnicalCommittee />} />
        <Route path="/committee/advisory" element={<AdvisoryCommittee />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/important-dates" element={<ImportantDates />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/journal-publication" element={<JournalPublication />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/accomodation" element={<Accomodation/>} />
        <Route path="/places-to-explore" element={<PlacesToExplore />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
