import React from "react";

function CardImage() {
  return (
    <div className="container">
      <div className="row text-center fw-bold">
        <div className="col-sm-4">
          <img
            className="img-fluid "
            src="img/vans.jpg"
            alt="Champion Vans"
          />
          <div className="mt-3">
            <p className="fs-4">ADIDAS</p>
            <p className="fs-3">$ 2500</p>
          </div>
        </div>
        <div className="col-sm-4">
          <img
            className="img-fluid "
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
            className="img-fluid "
            src="img/nike.jpg"
            alt="Champion Nike"
          />
          <div className="mt-3">
            <p className="fs-4">ADIDAS</p>
            <p className="fs-3">$ 2500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardImage;
