import React from "react";
import LandingPage from "./components/landingPage/LandingPage";
import Attorneys from "./components/Attorneys/Attorneys";
import AreaOfPractice from "./components/AreaOfPractice/AreaOfPractice";
import Reviews from "./components/Reviews/Reviews";
import Team from "./components/Team/Team";
import Faq from "./components/Faq/Faq";
import Newslater from "./components/Newslater/Newslater";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <LandingPage />
      <Attorneys />
      <AreaOfPractice />
      <Reviews />
      <Team />
      <Faq />
      <Newslater />
      <Footer />
    </>
  );
};

export default App;
