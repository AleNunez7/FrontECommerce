import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sobre-nosotros" component={AboutUs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
