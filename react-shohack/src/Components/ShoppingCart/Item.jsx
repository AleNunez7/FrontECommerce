import React from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Item({ item }) {
  console.log(item);
  const dispatch = useDispatch();
  const closeAfter4 = () =>
    toast.dark(
      "El producto se retiró de la lista correctamente.",
      { position: toast.POSITION.BOTTOM_RIGHT },
      { autoClose: 4000 }
    );

  function handleRemoveItem(item) {
    closeAfter4();
    dispatch({ type: "REMOVE_ITEM", payload: item });
  }
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-3 ">
            <img
              className="img-fluid"
              src={process.env.REACT_APP_API_URL + item.imageName}
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
          <div className="col-sm-3">
            <button className="btn btn-outline-secondary me-3">
              <i class="fas fa-minus"></i>
            </button>

            {item.quantity}

            <button className="btn btn-outline-secondary mx-3">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer bottom-right autoClose={4000} />
    </>
  );
}
export default Item;
