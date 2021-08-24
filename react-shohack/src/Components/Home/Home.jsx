import React from "react";
import CardImage from "./CardImage/CardImage";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
