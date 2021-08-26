import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import "./AboutUs.css";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="fw-light mt-5 mb-5 text-center">
          {" "}
          CONOCÉ MAS SOBRE NOSOTROS{" "}
        </h1>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-between text-center">
          <div className="col-md-4 text-center mt-5 mb-5">
            <img
              className="img-fluid avatar"
              src="/img/JoaquinRosales.jpeg"
              alt="Avatar"
            />
            <h3 className="fw-light mt-3">Joaquin Rosales</h3>
            <p>CEO-Co Founder</p>
            <p>Full Stack Developer</p>
            <hr className="hrAboutUs" />
            <Link
              className="text-decoration-none"
              to="https://www.linkedin.com/in/joaquin-rosales/"
            >
              <i class="linkedinColor fab fa-linkedin-in"></i>
              <p>Linkedin</p>
            </Link>
          </div>
          <div className="col-md-4 text-center mt-5 mb-5">
            <img
              className="img-fluid avatar"
              src="/img/SantiagoQuintela.jpg"
              alt="Avatar"
            />
            <h3 className="fw-light mt-3">Santiago Quintela</h3>
            <p>CEO-Co Founder</p>
            <p>Full Stack Developer</p>
            <hr className="hrAboutUs" />
            <Link
              className="text-decoration-none"
              to="https://www.linkedin.com/in/santiago-quintela-delfino-73a6bb132/"
            >
              <i class="linkedinColor fab fa-linkedin-in"></i>
              <p>Linkedin</p>
            </Link>
          </div>
          <div className="col-md-4 text-center mt-5 mb-5">
            <img
              className="img-fluid avatar"
              src="/img/AlejandroNúñez.jpg"
              alt="Avatar"
            />
            <h3 className="fw-light mt-3">Alejandro Núñez</h3>
            <p>CEO-Co Founder</p>
            <p>Full Stack Developer</p>
            <hr className="hrAboutUs" />
            <Link
              className="text-decoration-none"
              to="https://www.linkedin.com/in/alenunez/"
            >
              <i class="linkedinColor fab fa-linkedin-in"></i>
              <p>Linkedin</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="fw-light mt-5 mb-5 text-center"> SOBRE EL PROYECTO </h1>
        <div className="text-start fs-4">
          <p>
            ShoHack es un proyecto final desarrollado en el correr de tres
            semanas, el cual pusimos en práctica todo lo aprendido durante el
            curso Coding Bootcamp. <br />
            Este proyecto está dividido en tres principales tecnologías,
            React.js para el desarrollo FrontEnd de nuestro e-commerce, Node.js
            para generar nuestra propia API y MongoDB del cual obtenemos nuestra
            base de datos, guardando ahí todos nuestros productos, usuarios
            registrados y los administradores de nuestro e-commerce.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
