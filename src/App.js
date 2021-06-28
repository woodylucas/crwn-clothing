import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "../src/pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SigninAndSignup from "./pages/signup-signin/SigninAndSignup";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Homepage */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninAndSignup} />
      </Switch>
    </div>
  );
}

export default App;
