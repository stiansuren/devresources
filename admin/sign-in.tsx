import React, { useState, useContext } from "react";
import { AuthContext } from "./authContext";
import "./sign-in.scss";

export const SignIn = () => {
  const { handleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    handleSignIn(email, password);
  };

  return (
    <form className="sign-in" onSubmit={e => handleSubmit(e)}>
      <label>
        E-mail
        <input type="text" onChange={e => setEmail(e.target.value)}></input>
      </label>
      <label>
        Password
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
        ></input>
      </label>
      <button>Sign In</button>
    </form>
  );
};
