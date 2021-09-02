function Contact() {
  return (
    <>
      <div className="container w-50 h-50 my-5">
        <h2 className="fw-bold text-center mb-3">CONTACTO</h2>
        <form>
          <div className="mb-3">
            <label for="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Ingresar nombre completo..."
            />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Ingresar Email..."
            />
          </div>
          <div className="mb-3">
            <label for="message" className="form-label">
              Mensaje
            </label>
            <textarea
              name="message"
              rows="8"
              cols="40"
              className="form-control"
              placeholder="Ingresar mensaje..."
            ></textarea>
          </div>
        </form>
        <div className="text-end pe-4">
          <button className="btn btn-dark text-white">Enviar</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
