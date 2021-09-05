import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <>
      <div>
        <h1 className="fw-light mt-5 mb-5 text-center">CONOCÉ MAS SOBRE NOSOTROS</h1>
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
              to={{ pathname: "https://www.linkedin.com/in/joaquin-rosales/" }}
              target="_blank"
            >
              <i className="linkedinColor fab fa-linkedin-in"></i>
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
              to={{
                pathname: "https://www.linkedin.com/in/santiago-quintela-delfino-73a6bb132/",
              }}
              target="_blank"
            >
              <i className="linkedinColor fab fa-linkedin-in"></i>
              <p>Linkedin</p>
            </Link>
          </div>
          <div className="col-md-4 text-center mt-5 mb-5">
            <img className="img-fluid avatar" src="/img/AlejandroNúñez.jpg" alt="Avatar" />
            <h3 className="fw-light mt-3">Alejandro Núñez</h3>
            <p>CEO-Co Founder</p>
            <p>Full Stack Developer</p>
            <hr className="hrAboutUs" />
            <Link
              className="text-decoration-none"
              to={{ pathname: "https://www.linkedin.com/in/alenunez/" }}
              target="_blank"
            >
              <i className="linkedinColor fab fa-linkedin-in"></i>
              <p>Linkedin</p>
            </Link>
          </div>
        </div>
        <hr />
        <h1 className="fw-light mt-5 mb-5 text-center"> SOBRE EL PROYECTO </h1>
        <div className="text-start fs-4 mb-5">
          <p>
            ShoHack es un proyecto final desarrollado en el correr de tres semanas, el cual pusimos
            en práctica todo lo aprendido durante el curso Coding Bootcamp. <br />
            Este proyecto está dividido en tres principales tecnologías, React.js para el desarrollo
            FrontEnd de nuestro e-commerce, Node.js para generar nuestra propia API y MongoDB del
            cual obtenemos nuestra base de datos, guardando ahí todos nuestros productos, usuarios
            registrados y los administradores de nuestro e-commerce.
          </p>
        </div>
        <hr />
        <h1 className="fw-light mt-5 mb-5 text-center">COMO INGRESAR A ADMINISTRADOR</h1>
        <div className="text-start fs-4 mb-5">
          <p>
            Link para ingresar a la vista de Administrador: <br /> https://admin-shohack.vercel.app
            En esta sección se podrá leer, crear, modificar y eliminar usuarios, productos y roles.
            <br /> También se podrán ver las ordenes realizadas por cada usuario. <br />
            Usuario: admin <br /> Password: admin
          </p>
        </div>
        <hr />
        <h1 className="fw-light mt-5 mb-5 text-center">TECNOLOGÍAS EMPLEADAS EN EL PROYECTO</h1>
        <div className="container  d-flex justify-content-center">
          <div className="row">
            <div className="col me-5 fw-bold fs-4">
              React Js <br /> Node.js <br /> MongoDB <br /> Express js <br /> Mongoose
            </div>
            <div className="col ms-5 fw-bold mb-5 fs-4">
              Redux <br /> JWT <br /> SupaBase <br /> Git <br /> Visual
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
