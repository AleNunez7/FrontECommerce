import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Item() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      {cart.map((item) => {
        return (
          <div className="row">
            <div className="col-sm-6">
              <div className="row mb-2">
                <div className="col-sm-4">
                  <img
                    className="img-fluid"
                    src="/img/nike.jpg"
                    alt="Champion nike"
                  />
                </div>
                <div className="col-sm-8">
                  <p className="fw-bold fs-6">{item.name}</p>
                  <a className="text-dark" href="">
                    Quitar
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex justify-content-between">
                <p className="fw-bold fs-5">$ {item.price}</p>
                <div className="border d-flex justify-content-between">
                  <div className="px-2 border-end">
                    <i class="fas fa-minus pt-2"></i>
                  </div>
                  <p className="px-2 pt-1">3</p>
                  <div className="px-2 border-start">
                    <i class="fas fa-plus pt-2"></i>
                  </div>
                </div>
                <p className="fw-bold fs-5">$ {item.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Item;
