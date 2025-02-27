import React from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Item({ item }) {
  const dispatch = useDispatch();
  const closeAfter4 = (text) =>
    toast.dark(text, { position: toast.POSITION.BOTTOM_RIGHT });

  function handleAddItem(item) {
    dispatch({ type: "ADD_ITEM", payload: item });
  }

  function handleSubstractItem(item) {
    dispatch({ type: "SUBSTRACT_ITEM", payload: item });
  }

  function handleRemoveItem(item) {
    closeAfter4("Se eliminó del carrito correctamente");
    dispatch({ type: "REMOVE_ITEM", payload: item });
  }
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-3 ">
          <img
            className="img-fluid"
            src={process.env.REACT_APP_IMG_URL + item.imageName}
            alt="Champion nike"
          />
        </div>

        <div className="col-sm-3">
          <p className="fw-bold fs-6">{item.name}</p>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => handleRemoveItem(item)}
          >
            Quitar
          </span>
        </div>

        <div className="col-sm-3">
          <p className="fw-bold">$ {item.price}</p>
        </div>
        <div className="col-sm-3  d-flex align-items-center">
          <button
            onClick={() => item.quantity > 1 && handleSubstractItem(item)}
            className="btn btn-outline-secondary "
          >
            <i className="fas fa-minus"></i>
          </button>
          <div className=" px-3 pt-1 pb-1 text-center  ">{item.quantity}</div>
          <button
            onClick={() => handleAddItem(item)}
            className="btn btn-outline-secondary "
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
      <ToastContainer bottom-right autoClose={4000} />
    </div>
  );
}
export default Item;
