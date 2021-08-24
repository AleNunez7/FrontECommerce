import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Product() {
  const dispatch = useDispatch();
  const params = useParams();
  const [productById, setProductById] = useState({});
  const user = useSelector((state) => state.user);
  console.log(productById);

  async function handleAddItem() {
    dispatch({ type: "ADD_ITEM", payload: productById });
  }

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios({
        method: "get",
        url: "http://localhost:8000/products/" + params.id,
      });
      setProductById(response.data);
    };
    getProductById();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <img
              className="img-fluid "
              src={process.env.REACT_APP_API_URL + productById.imageName}
              alt="Champion Nike"
            />
          </div>
          <div className="col-sm-6">
            <h2 className="mt-5">{productById.name}</h2>
            <p className="fs-3 fw-bold ">$ {productById.price}</p>
            {productById.description}
            <div className=" d-flex align-items-center mt-3 ">
              <button className="btn btn-outline-secondary">
                <i class="fas fa-minus"></i>
              </button>
              <div className=" px-3 pt-1 pb-1 text-center  ">1</div>
              <button className="btn btn-outline-secondary ">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <Link
              to="/carrito"
              onClick={handleAddItem}
              className="btn btn-dark rounded-pill mt-3"
            >
              Añadir al carrito
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
