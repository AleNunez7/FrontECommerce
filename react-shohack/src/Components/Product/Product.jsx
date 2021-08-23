function Product() {
  return (
    <>
      <hr />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <img className="img-fluid " src="img/nike.jpg" alt="Champion Nike" />
          </div>
          <div className="col-sm-6">
            <h2 className="mt-5">Nike</h2>
            <p className="fs-3 fw-bold ">$ 2500</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta placeat, accusantium
            asperiores voluptas beatae non recusandae veniam? Totam, esse, neque nostrum, dolore
            explicabo provident quas tempora at cupiditate ex animi.
            <div className=" d-flex align-items-center mt-3 ">
              <button className="btn btn-outline-secondary">
                <i class="fas fa-minus"></i>
              </button>
              <div className=" px-3 pt-1 pb-1 text-center  ">1</div>
              <button className="btn btn-outline-secondary ">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <button type="button" className="btn btn-dark rounded-pill mt-3">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
