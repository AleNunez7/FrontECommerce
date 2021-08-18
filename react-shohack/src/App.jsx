import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Productos" component={Product} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
