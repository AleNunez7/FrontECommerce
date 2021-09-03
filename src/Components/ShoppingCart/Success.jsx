import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="text-center my-5">
      <div className="my-4">
        <h1>SU COMPRA FUE REALIZADA</h1>
        <h2>GRACIAS!</h2>
      </div>
      <Link to="/productos">
        <button className="btn btn-dark mx-2 text-center">Volver a productos</button>
      </Link>
    </div>
  );
}

export default Success;
