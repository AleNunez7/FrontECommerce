import React from "react";

function Footer() {
  return (
    <div>
      <footer className="p-5 mt-5 bg-dark ">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h4 className="mb-3">Contacto</h4>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-github"></i>
              <i className="fab fa-twitter"></i>
            </div>
            <div className="col-sm-3">
              <ul>
                <h5 className="mb-3">PRODUCT</h5>
                <li>
                  <a href="">Landing</a>
                </li>
                <li>
                  <a href="">Pages</a>
                </li>
                <li>
                  <a href="">Sections</a>
                </li>
                <li>
                  <a href="">Documentation</a>
                </li>
                <li>
                  <a href="">Changelog</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <h5 className="mb-3">TECHNICAL</h5>
                <li>
                  <a href="">Documentation</a>
                </li>
                <li>
                  <a href="">Changelog</a>
                </li>
                <li>
                  <a href="">Theme Customizer</a>
                </li>
                <li>
                  <a href="">UI Kit</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-3">
              <ul>
                <h5>LEGAL</h5>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms and Conditions</a>
                </li>
                <li>
                  <a href="">License</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h2 className="text-center m-4">ShoHack</h2>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col text-start">Copyright © Your Website 2021</div>
            <div className="col text-end">
              <a href="">Privacy Policy</a> · <a href="">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
