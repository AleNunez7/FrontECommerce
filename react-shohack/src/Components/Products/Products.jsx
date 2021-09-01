import React from "react";
import CardImage from "../Home/CardImage/CardImage";
import Filter from "./Filter";

function Products() {
  return (
    <>
      <h2 className="text-center fs-2 fw-bold my-5">NUESTROS PRODUCTOS</h2>
      <Filter />
      <CardImage />
    </>
  );
}

export default Products;
