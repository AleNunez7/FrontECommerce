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
                  <i class="fas fa-shopping-cart"></i>
                </Link>
                <span className="pe-3 fw-bold fs-5">
                  <i class="fas fa-user ps-1 fa-sm"></i> {user.username}
                </span>
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
