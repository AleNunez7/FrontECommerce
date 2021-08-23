import React from "react";

function Filter() {
  return (
    <div className="container">
      <div className="row my-4 d-flex justify-content-between">
        <div className="col-sm-4 ">
          <div className="dropdown text-center">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Marca
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
              <li>
                <a className="dropdown-item active" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              name="search"
              /* value={username}
              onChange={(ev) => setUsername(ev.target.value)} */
              placeholder="Ingrese un producto"
            />
            <button className="btn btn-outline-secondary">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
