import React from "react";

function Filter() {
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-sm-4 ">
          <div class="dropdown text-center">
            <button
              class="btn btn-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categoria
            </button>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a class="dropdown-item active" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4 ">
          <div class="dropdown w-100 text-center">
            <button
              class="btn btn-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Marca
            </button>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a class="dropdown-item active" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
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
