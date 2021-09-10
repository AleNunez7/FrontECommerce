/* eslint-disable jsx-a11y/anchor-is-valid */

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
              <a className="nav-link active " aria-current="page" href="/contacto">
                Contacto
              </a>
            </div>
            {user ? (
              <div className="ms-auto">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle pe-3 fw-bold fs-5 text-uppercase"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {user.username}
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-light"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <Link to="/carrito" className="text-decoration-none dropdown-item ">
                          <i className="fas fa-shopping-cart me-2"></i>
                          {cart.length}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-decoration-none dropdown-item"
                          to={`/orden/${user._id}`}
                        >
                          Ordenes
                        </Link>
                      </li>
                      <Link
                        className="text-decoration-none dropdown-item"
                        to="/login"
                        onClick={() => dispatch({ type: "REMOVE_USER" })}
                      >
                        Log out
                      </Link>
                    </ul>
                  </li>
                </ul>
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
