import "./App.css";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div className="routes">
        <Route path="/homepage" component={HomePage} />
        <Route path="/" component={HomePage} />
      </div>
    </div>
  );
}

export default App;
