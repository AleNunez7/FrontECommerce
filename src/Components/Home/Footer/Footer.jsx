function Footer() {
  return (
    <>
      <footer className="footer p-5 mt-3 bg-dark sticky">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <ul>
                <h5 className="mb-3">CONTACTO</h5>
                <li className="fw-bold pt-2">Santiago Quintela</li>
                <li>santiqdel@gmail.com</li>
                <li>+598 99 37 00 53</li>

                <li className="fw-bold pt-2">Joaquin Rosales</li>
                <li>joacorosales97@gmail.com</li>
                <li>+598 95 65 04 02</li>

                <li className="fw-bold pt-2">Alejandro Núñez</li>
                <li>nunezalejandro019@gmail.com</li>
                <li>+598 91 68 87 43</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <h5 className="mb-3">ACERCA DE</h5>
                <li>
                  <a className="pt-2 text-decoration-none" href="/productos">
                    Ver Productos
                  </a>
                </li>
                <li>
                  <a
                    className="pt-2 text-decoration-none"
                    href="/sobre-nosotros"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a className="pt-2 text-decoration-none" href="/contacto">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <h5 className="mb-3">TECNOLOGÍAS</h5>
                <li>
                  <a
                    className="text-decoration-none"
                    href="https://es.reactjs.org/docs/getting-started.html"
                  >
                    React.js
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none"
                    href="https://nodejs.org/es/docs/"
                  >
                    Node.js
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none"
                    href="https://docs.mongodb.com/manual/"
                  >
                    MongoDB
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-3">
              <ul>
                <h5>
                  <i class="fab fa-github"></i> GITHUB
                </h5>
                <li className="my-1">
                  <a
                    className="fw-bold text-decoration-none"
                    href="https://github.com/SantiagoQuintela"
                  >
                    Santiago Quintela
                  </a>
                </li>
                <li className="fw-bold my-1">
                  <a
                    className="fw-bold text-decoration-none"
                    href="https://github.com/rotza1802"
                  >
                    Joaquin Rosales
                  </a>
                </li>
                <li className="fw-bold my-1">
                  <a
                    className="fw-bold text-decoration-none "
                    href="https://github.com/AleNunez7"
                  >
                    Alejandro Núñez
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="/" className="fs-2 m-4 text-decoration-none">
            ShoHack
          </a>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col text-start">
              Copyright 2021 © ShoHack Shoes Enterprise
            </div>
            <div className="col text-end">
              <a href="/">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
