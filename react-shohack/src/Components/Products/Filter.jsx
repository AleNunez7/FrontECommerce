import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Filter() {
  const closeAfter7 = () =>
    toast.dark("Esta funcionalidad no está disponible en esta versión", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  return (
    <div className="container">
      <div className="row my-4 d-flex justify-content-between">
        <div className="col-sm-4 ">
          <button
            className="btn btn-dark dropdown-toggle mb-2"
            onClick={() => closeAfter7()}
          >
            Marca
          </button>
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
            <button
              className="btn btn-outline-secondary"
              onClick={() => closeAfter7()}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <ToastContainer bottom-right autoClose={4000} />
      </div>
    </div>
  );
}

export default Filter;
