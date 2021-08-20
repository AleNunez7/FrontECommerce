import React from "react";

function Banner() {
  return (
    <div className="colorSectionBanner">
      <section className=" py-5 text-center container">
        <div className="row py-lg-5">
          <div className="divColor col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light mt-4"> NO TE QUEDES SIN </h1>
            <h2 className="lead mt-4">
              Café en la puerta de tu casa cada dos semanas a solo $900
            </h2>
            <button type="button" class="btn btn-light rounded mt-4">
              Unite al culto
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
