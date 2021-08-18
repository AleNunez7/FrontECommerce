import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import "./AboutUs.css";
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          odit commodi tenetur odio nobis praesentium fugiat voluptatem vero
          laborum. Id deserunt soluta earum dolores sapiente in ea est totam
          doloremque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ad
          hic eos sit id quisquam necessitatibus minus vero, accusantium,
          corrupti reprehenderit nam doloremque dolor. Iste nostrum aut
          exercitationem. Ipsam, accusamus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus facilis rerum mollitia aspernatur voluptates molestiae
          temporibus in laboriosam nam voluptatum. Facere a adipisci porro totam
          deleniti corporis impedit officia doloribus.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
