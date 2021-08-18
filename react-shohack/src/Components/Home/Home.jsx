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
      <CardImage />
      <div className="text-center mt-3">
        <Link
          className="p-3 text-white text-decoration-none btn btn-dark rounded"
          to="/"
        >
          VER TODOS
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
