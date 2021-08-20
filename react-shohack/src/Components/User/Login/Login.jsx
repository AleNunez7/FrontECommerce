import React from "react";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";

function Login() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <div className="border p-3">
          <p className="fw-bold fs-4 text-center">LOGIN</p>
          <form onSubmit="#">
            <label className="mt-3 fw-bold" htmlFor="">
              Usuario
            </label>
            <input
              type="text"
              className="form-control mt-2"
              name="username"
              /*     value={username}
          onChange={(ev) => setUsername(ev.target.value)} */
              placeholder="Ingrese su usuario"
            />
            <label className="mt-3 fw-bold" htmlFor="">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control mt-2"
              name="password"
              /*    value={username}
          onChange={(ev) => setUsername(ev.target.value)} */
              placeholder="Ingrese su contraseña"
            />
            <button className="btn btn-dark text-white mt-3">Login</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
