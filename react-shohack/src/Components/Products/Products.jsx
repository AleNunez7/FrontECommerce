import React from "react";
import CardImage from "../Home/CardImage/CardImage";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import Filter from "./Filter";

function Products() {
  return (
    <>
      <Navbar />
      <h2 className="text-center fs-2 fw-bold my-4">PRODUCTOS</h2>
      <Filter />
      <CardImage />
      <Footer />
    </>
  );
}

export default Products;
