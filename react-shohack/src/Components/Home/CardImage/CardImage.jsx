import React from "react";
import { Link } from "react-router-dom";

function CardImage() {
  return (
    <div className="container">
      <div className="row text-center fw-bold">
        <div className="col-sm-4">
          <img
            className="img-fluid shadow"
            src="img/vans.jpg"
            alt="Champion Adidas"
          />
          <div className="mt-3">
            <p className="fs-4">ADIDAS</p>
            <p className="fs-3">$ 2500</p>
          </div>
        </div>
        <div className="col-sm-4">
          <img
            className="img-fluid shadow"
            src="img/adidas1.jpg"
            alt="Champion Adidas"
          />
          <div className="mt-3">
            <p className="fs-4">ADIDAS</p>
            <p className="fs-3">$ 2500</p>
          </div>
        </div>
        <div className="col-sm-4">
          <img
            className="img-fluid shadow"
            src="img/nike.jpg"
            alt="Champion Adidas"
          />
          <div className="mt-3">
            <p className="fs-4">ADIDAS</p>
            <p className="fs-3">$ 2500</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <Link
          className="p-3 text-white text-decoration-none btn btn-dark rounded"
          to="/"
        >
          VER TODOS
        </Link>
      </div>
    </div>
  );
}

export default CardImage;
