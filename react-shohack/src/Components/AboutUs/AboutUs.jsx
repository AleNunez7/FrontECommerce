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
        <h1 className="fw-light mt-5 mb-5 text-center"> CONOCÉ MAS SOBRE NOSOTROS </h1>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-between text-center">
          <div className="col-md-4 text-center mt-5 mb-5">
            <img className="img-fluid avatar" src="/img/JoaquinRosales.jpeg" alt="Avatar" />
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
            <img className="img-fluid avatar" src="/img/SantiagoQuintela.jpg" alt="Avatar" />
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
            <img className="img-fluid avatar" src="/img/AlejandroNúñez.jpg" alt="Avatar" />
            <h3 className="fw-light mt-3">Alejandro Núñez</h3>
            <p>CEO-Co Founder</p>
            <p>Full Stack Developer</p>
            <hr className="hrAboutUs" />
            <Link className="text-decoration-none" to="https://www.linkedin.com/in/alenunez/">
              <i class="linkedinColor fab fa-linkedin-in"></i>
              <p>Linkedin</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="text-center">
          <h1 className="fw-light mt-5 mb-5"> SOBRE EL PROYECTO </h1>
          <p>
            El E-Commerce SHOHACK es un proyecto realizado en un tiempo de dos semanas y tres días
            el cual es parte de un proyecto final dentro de un Coding Bootcamp en Hack Academy, los
            creadores de este sitio son Santiago Quintela, Joaquin Rosales y Alejandro Núñez. Este
            trabaja engloba todo lo aprendido en el curso, juntando todas las tecnologías y
            herramientas para poder darle funcionamiento al mismo. Para el Frontend de este proyecto
            utilizamos React js y Node js (Express) para el backend.
          </p>
          <p></p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
