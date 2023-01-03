import React from "react";
import AboutUsPage from "./AboutUsPage";
import './Home.css'
import Navbar from "./Navbar";
import OutletPage from "./OutletPage";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page8 from "./Page8";
import Revenue from "./Revenue";

function Home(props) {
  return (
    <>
      <Navbar />
      <Page1 />
      <Revenue/>
      <OutletPage/>
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <AboutUsPage />
      <Page8 />
    </>
  );
}

export default Home;
