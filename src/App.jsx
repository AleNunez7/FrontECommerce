import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import Product from "./Components/Product/Product";
import AboutUs from "./Components/AboutUs/AboutUs";
import Login from "./Components/User/Login/Login";
import SignIn from "./Components/User/SignIn/SignIn";
import Navbar from "./Components/Home/Navbar/Navbar";
import Footer from "./Components/Home/Footer/Footer";
import Success from "./Components/ShoppingCart/Success";
import Contact from "./Components/Contact/Contact";
import Order from "./Components/Order/Order";
import "./App.css";

function App() {
  return (
    <div className="general-container">
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/producto/:id" component={Product} />
            <Route path="/productos" component={Products} />
            <Route path="/carrito" component={ShoppingCart} />
            <Route path="/sobre-nosotros" component={AboutUs} />
            <Route path="/contacto" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/registro" component={SignIn} />
            <Route path="/success" component={Success} />
            <Route path="/orden/:id" component={Order} />
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
