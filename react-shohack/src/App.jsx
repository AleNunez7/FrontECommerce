import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import Product from "./Components/Product/Product";
import AboutUs from "./Components/AboutUs/AboutUs";
import Login from "./Components/User/Login/Login";
import SignIn from "./Components/User/SignIn/SignIn";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/producto/:id" component={Product} />
          <Route path="/productos" component={Products} />
          <Route path="/carrito" component={ShoppingCart} />
          <Route path="/sobre-nosotros" component={AboutUs} />
          <Route path="/login" component={Login} />
          <Route path="/registro" component={SignIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
