import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Navbar() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [btnLogOut, setBtnLogOut] = useState(false);
  const dispatch = useDispatch();

  function handleLogOut(ev) {
    setBtnLogOut(false);
  }

  useEffect(() => {
    window.addEventListener("click", handleLogOut);
    return () => window.removeEventListener("click", handleLogOut);
  }, []);

  useEffect(() => {
    setBtnLogOut(btnLogOut);
  }, [btnLogOut]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container fw-bold mt-2 mb-2 ">
          <a className="navbar-brand fs-1" href="/">
            SHOHACK
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <a className="nav nav-link active " aria-current="page" href="/productos">
                Productos
              </a>
              <a className="nav-link active " aria-current="page" href="/sobre-nosotros">
                Sobre nosotros
              </a>
            </div>
            {user ? (
              <div className="ms-auto">
                <Link to="/carrito" className="text-decoration-none text-dark pe-1">
                  <button className="bg-light btnShoppingCart position-relative">
                    <i className="fas fa-shopping-cart "></i>
                    <span className="position-absolute top-50 start-0 translate-middle p-2">
                      <span className="pe-2 fw-bold">{cart.length}</span>
                    </span>
                  </button>
                </Link>
                <span className="pe-3 fw-bold fs-5 text-uppercase">{user.username}</span>
                <Link
                  to="/login"
                  onClick={() => dispatch({ type: "REMOVE_USER" })}
                  className="btn btn-dark text-white rounded"
                >
                  LOGOUT
                </Link>
              </div>
            ) : (
              <div className="ms-auto">
                <Link to="/login" className="btn btn-dark text-white rounded me-1">
                  LOGIN
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
