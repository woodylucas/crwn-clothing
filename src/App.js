import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* Header */}
      {/* Homepage */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
