import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import Product from "./Components/Product/Product";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/producto" component={Product} />
          <Route path="/productos" component={Products} />
          <Route path="/carrito" component={ShoppingCart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
