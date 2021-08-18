import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./AboutUs.css";
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
            <img
              className="img-fluid avatar"
              src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
              alt="Avatar"
            />
            <h3 className="fw-light mt-3">Joaquin Rosales</h3>
            <p>CEO-Co Founder</p>
            <p>Full Stack Developer</p>
            <hr className="hrAboutUs" />
            <i class="linkedinColor fab fa-linkedin-in"> Linkedin</i>
          </div>
          <div className="col-md-4 text-center mt-5 mb-5">
            <img
              className="img-fluid avatar"
              src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
              alt="Avatar"
            />
            <h3 className="fw-light mt-3">Santiago Quintela</h3>
            <p>CEO-Co Founder</p>
            <p>Full Stack Developer</p>
            <hr className="hrAboutUs" />
            <i class="linkedinColor fab fa-linkedin-in"> Linkedin</i>
          </div>
          <div className="col-md-4 text-center mt-5 mb-5">
            <img
              className="img-fluid avatar"
              src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
              alt="Avatar"
            />
            <h3 className="fw-light mt-3">Alejandro Núñez</h3>
            <p>CEO-Co Founder</p>
            <p>Full Stack Developer</p>
            <hr className="hrAboutUs" />
            <i class="linkedinColor fab fa-linkedin-in"> Linkedin</i>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="fw-light mt-5 mb-5"> SOBRE EL PROYECTO </h1>
        <p>
          Loremipsumdolorsitametconsecteturadipisicingelit. Inciduntexcepturilaboriosamfacere,
          repudiandaeexercitationemsimiliquemollitiafacilisdebitisoditnulla,
          autemculpavoluptatumvero. Adameteostemporacumqueexpedita!
        </p>
        <p>
          Loremipsumdolorsitametconsecteturadipisicingelit. Inciduntexcepturilaboriosamfacere,
          repudiandaeexercitationemsimiliquemollitiafacilisdebitisoditnulla,
          autemculpavoluptatumvero. Adameteostemporacumqueexpedita!
        </p>
        <p>
          Loremipsumdolorsitametconsecteturadipisicingelit. Inciduntexcepturilaboriosamfacere,
          repudiandaeexercitationemsimiliquemollitiafacilisdebitisoditnulla,
          autemculpavoluptatumvero. Adameteostemporacumqueexpedita!
        </p>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
