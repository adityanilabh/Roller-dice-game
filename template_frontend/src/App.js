import React from "react";
import "./App.css";
import Intro from "./Components/Intro";
import Navigation from "./Components/Navigation";
import GetStarted from "./Components/GetStarted";
import IntroText from "./Components/IntroText";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Navigation />
      <Intro />
      <IntroText />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
