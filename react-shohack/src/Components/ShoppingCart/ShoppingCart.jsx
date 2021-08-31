import { useSelector } from "react-redux";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import Item from "./Item";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  let total = 0;

  return (
    <>
      <Navbar />
      <div className="container ">
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
                </div>
              </div>
              <hr />
            </div>
            {cart.length === 0 ? (
              <p>No hay productos en el carrito</p>
            ) : (
              cart.map((item) => {
                total = total + item.price * item.quantity;
                return <Item item={item} />;
              })
            )}
          </div>
          <div className="col-sm-5">
            <div className="border p-3 w-100 h-100">
              <p className="text-start">TOTAL DEL CARRITO</p>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Total</p>
                <p className="fw-bold">$ {total}</p>
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
      <ToastContainer bottom-right autoClose={4000} />
      <Footer />
    </>
  );
}

export default ShoppingCart;
