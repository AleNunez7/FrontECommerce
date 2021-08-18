import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container fw-bold mt-2 mb-2">
          <a className="navbar-brand " href="#">
            ShoHack
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
              <a
                className="nav nav-link active px-4"
                aria-current="page"
                href="#"
              >
                Productos
              </a>
              <a className="nav-link active " aria-current="page" href="#">
                Sobre Nuestro Proyecto
              </a>
            </div>
            <div className="ms-auto">
              <i className="far fa-user px-2"></i>
              <i className="fas fa-search px-2"></i>
              <i className="fas fa-shopping-cart px-2"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
