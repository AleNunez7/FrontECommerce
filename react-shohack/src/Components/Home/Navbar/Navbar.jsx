import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Navbar() {
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
          <a className="navbar-brand fs-2" href="/">
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
            <div className="navbar-nav ms-auto">
              <a className="nav nav-link active " aria-current="page" href="/productos">
                Productos
              </a>
              <a className="nav-link active " aria-current="page" href="/sobre-nosotros">
                Sobre nosotros
              </a>
            </div>
            <div className="ms-auto">
              {!user && (
                <Link to="/login" className="btn btn-dark text-white rounded me-1">
                  LOGIN
                </Link>
              )}
              {user && (
                <Link
                  to="/login"
                  onClick={() => dispatch({ type: "REMOVE_USER" })}
                  className="btn btn-dark text-white rounded"
                >
                  LOGOUT
                </Link>
              )}
              {/* <Link className="text-dark" to="/user">
                <i className="far fa-user px-2"></i>
              </Link>

              <Link className="text-dark" to="/carrito">
                <i className="fas fa-shopping-cart px-2"></i>
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
