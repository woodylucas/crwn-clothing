import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "../src/pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SigninAndSignup from "./pages/signup-signin/SigninAndSignup";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [users, setUsers] = useState({
    currentUser: null,
  });

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((user) => {
      setUsers(user);
    });
    return () => {
      unsubsribe();
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <Header currentUser={users} />
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
