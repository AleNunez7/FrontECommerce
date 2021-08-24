import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import Item from "./Item";
import { Link } from "react-router-dom";

function ShoppingCart() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-7">
            <div className="row">
              <div className="col-sm-6">
                <p>PRODUCTO</p>
              </div>
              <div className="col-sm-6">
                <div className="d-flex justify-content-between">
                  <p>PRECIO</p>
                  <p>CANTIDAD</p>
                  <p>SUBTOTAL</p>
                </div>
              </div>
              <hr />
            </div>
            <Item />
          </div>
          <div className="col-sm-5">
            <div className="border p-3">
              <p className="text-start">TOTAL DEL CARRITO</p>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Subtotal</p>
                <p className="fw-bold">$ 1210</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Total</p>
                <p className="fw-bold">$ 1210</p>
              </div>
              <div className="text-center mt-3">
                <Link
                  className="p-1 w-50 text-white text-decoration-none btn btn-dark rounded"
                  to="/"
                >
                  FINALIZAR COMPRA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShoppingCart;
