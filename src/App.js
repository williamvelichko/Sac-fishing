import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Listing from "./components/Listing";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div className="routes">
        <Switch>
          <Route path="/cart" component={Checkout} />
          <Route path="/listing" component={Listing} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
