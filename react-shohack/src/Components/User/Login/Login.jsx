import React from "react";

function Login() {
  return (
    <div className="border p-2">
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
  );
}

export default Login;
