import React from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (ev) => {
    try {
      ev.preventDefault();
      const response = await axios({
        method: "POST",
        url: process.env.REACT_APP_API + "/users",
        data: { username, firstname, lastname, email, password },
      });
      dispatch({ type: "ADD_USER", payload: response.data });
      history.push("/productos");
    } catch (error) {
      alert("Intentelo nuevamente");
    }
  };

  return (
    <div>
      <div className="container my-5 d-flex justify-content-center">
        <div className="p-3 w-50 ">
          <p className="fw-bold fs-4 text-center">REGISTRO</p>
          <form onSubmit={handleSignIn}>
            <label className="mt-3 fw-bold" htmlFor="">
              Nombre
            </label>
            <input
              type="text"
              className="form-control mt-2"
              name="firstname"
              value={firstname}
              onChange={(ev) => setFirstname(ev.target.value)}
              placeholder="Ingrese su nombre"
            />
            <label className="mt-3 fw-bold" htmlFor="">
              Apellido
            </label>
            <input
              type="text"
              className="form-control mt-2"
              name="lastname"
              value={lastname}
              onChange={(ev) => setLastname(ev.target.value)}
              placeholder="Ingrese su apellido"
            />
            <label className="mt-3 fw-bold" htmlFor="">
              Usuario
            </label>
            <input
              type="text"
              className="form-control mt-2"
              name="username"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              placeholder="Ingrese su usuario"
            />
            <label className="mt-3 fw-bold" htmlFor="">
              Email
            </label>
            <input
              type="email"
              className="form-control mt-2"
              name="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Ingrese su email"
            />
            <label className="mt-3 fw-bold" htmlFor="">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control mt-2"
              name="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              placeholder="Ingrese su contraseña"
            />
            <div className="text-center">
              <button className="btn btn-dark text-white mt-3">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
