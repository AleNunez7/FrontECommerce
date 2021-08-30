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
              <span
                className="btn btn-dark"
                onClick={() => handleRemoveItem(item)}
              >
                Quitar
              </span>
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
              <div className=" px-3 pt-1 pb-1 text-center  ">
                {item.quantity}
              </div>
              <button className="btn btn-outline-secondary ">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <p className="fw-bold fs-5">$ {item.price * item.quantity}</p>
          </div>
        </div>
      </div>
      <ToastContainer bottom-right autoClose={4000} />
    </>
  );
}
export default Item;
