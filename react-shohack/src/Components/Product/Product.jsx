import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Product() {
  const closeAfter7 = () =>
    toast.dark(
      "Se agregó el producto al carrito!",
      { position: toast.POSITION.BOTTOM_RIGHT },
      { autoClose: 4000 }
    );
  const dispatch = useDispatch();
  const params = useParams();
  const [product, setProduct] = useState({});
  const user = useSelector((state) => state.user);
  console.log(product);

  async function handleAddItem() {
    product.quantity = 1;
    dispatch({ type: "ADD_ITEM", payload: product });
    closeAfter7();
  }

  useEffect(() => {
    const getproduct = async () => {
      const response = await axios({
        method: "get",
        url: "http://localhost:8000/products/" + params.id,
      });
      setProduct(response.data);
    };
    getproduct();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <img
              className="img-fluid "
              src={process.env.REACT_APP_API_URL + product.imageName}
              alt="Champion Nike"
            />
          </div>
          <div className="col-sm-6">
            <h2 className="mt-5">{product.name}</h2>
            <p className="fs-3 fw-bold ">$ {product.price}</p>
            {product.description}
            <div className=" d-flex align-items-center mt-3 ">
              <button className="btn btn-outline-secondary">
                <i class="fas fa-minus"></i>
              </button>
              <div className=" px-3 pt-1 pb-1 text-center  ">1</div>
              <button className="btn btn-outline-secondary ">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <button onClick={handleAddItem} className="btn btn-dark rounded-pill mt-3">
              <ToastContainer bottom-right autoClose={4000} />
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
