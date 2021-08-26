import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Item({ item }) {
  const closeAfter7 = () =>
    toast.dark(
      "El producto se retiró de la lista correctamente",
      { position: toast.POSITION.BOTTOM_RIGHT },
      { autoClose: 4000 }
    );
  const dispatch = useDispatch();

  async function handleRemoveItem(item) {
    dispatch({ type: "REMOVE_ITEM", payload: item });
    closeAfter7();
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div className="row mb-2">
            <div className="col-sm-4">
              <img
                className="img-fluid"
                src={process.env.REACT_APP_API_URL + item.imageName}
                alt="Champion nike"
              />
            </div>
            <div className="col-sm-8">
              <p className="fw-bold fs-6">{item.name}</p>
              <button className="btn btn-dark" onClick={() => handleRemoveItem(item)}>
                <ToastContainer bottom-right autoClose={4000} />
                Quitar
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-flex justify-content-between">
            <p className="fw-bold fs-5">$ {item.price}</p>
            <div className=" d-flex align-items-center mt-3 ">
              <button className="btn btn-outline-secondary">
                <i class="fas fa-minus"></i>
              </button>
              <div className=" px-3 pt-1 pb-1 text-center  ">{item.quantity}</div>
              <button className="btn btn-outline-secondary ">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <p className="fw-bold fs-5">$ {item.price * item.quantity}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
