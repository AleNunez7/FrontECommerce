import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);
  async function handleAddItem() {
    if (user) {
      product.quantity = quantity;
      dispatch({ type: "ADD_ITEM", payload: product });
      closeAfter7();
    } else {
      history.push("/login");
    }
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
            <p className="fs-3 fw-bold ">
              $ {product.price} <span className="fs-6 fw-light">(uy)</span>
            </p>
            {product.description}
            <p className="py-2">
              <span className="fs-5 fw-bold text-success">
                Disponible <span className="text-dark">({product.stock}) unidades</span>
              </span>
            </p>
            <p className="pt-1 fs-5 fw-bold text-dark">Talles</p>
            <div className="row mb-3">
              <div className="col">
                <button className="btn-dark me-2">38</button>
                <button className="btn-dark me-2">39</button>
                <button className="btn-dark me-2">40</button>
                <button className="btn-dark me-2">41</button>
                <button className="btn-dark me-2">42</button>
                <button className="btn-dark me-2">43</button>
              </div>
            </div>
            <div className=" d-flex align-items-center mt-3 ">
              <button
                onClick={() => quantity > 0 && setQuantity((prev) => prev - 1)}
                className="btn btn-outline-secondary"
              >
                <i class="fas fa-minus"></i>
              </button>
              <div className=" px-3 pt-1 pb-1 text-center  ">{quantity}</div>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="btn btn-outline-secondary "
              >
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <button onClick={handleAddItem} className="btn btn-dark rounded-pill mt-3 mb-3">
              Añadir al carrito
            </button>
          </div>
          <ToastContainer bottom-right autoClose={4000} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
