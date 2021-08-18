import React from "react";
import CardImage from "./CardImage/CardImage";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <CardImage />
      <Footer />
    </div>
  );
}

export default Home;
