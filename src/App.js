import React from "react";
import LandingPage from "./components/landingPage/LandingPage";
import Attorneys from "./components/Attorneys/Attorneys";
import AreaOfPractice from "./components/AreaOfPractice/AreaOfPractice";

const App = () => {
  return (
    <>
      <LandingPage />
      <Attorneys />
      <AreaOfPractice />
    </>
  );
};

export default App;
