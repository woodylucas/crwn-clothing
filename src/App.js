import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
function App() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Homepage */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
