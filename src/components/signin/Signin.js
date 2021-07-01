import React, { useState } from "react";
import "../signin/Signin.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-buttom/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";

function Signin() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setInput("");
  };

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setInput((state) => ({ ...state, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={input.email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={input.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default Signin;
