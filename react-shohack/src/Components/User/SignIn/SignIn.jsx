import React from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(false);
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
        url: "http://localhost:8000/users",
        data: { username, firstname, lastname, email, password },
      });
      console.log(response.data.user);
      dispatch({ type: "ADD_USER", payload: response.data });
      history.push("/");
    } catch (error) {
      setError("Intentelo nuevamente");
    }
  };

  return (
    <div className="border p-2">
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
        <button className="btn btn-dark text-white mt-3">SignIn</button>
      </form>
    </div>
  );
}

export default SignIn;
