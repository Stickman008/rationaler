import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../components/Auth";
import firebaseConfig from "../config";
import { Button, Paper, TextField } from "@material-ui/core";
import "./Login.css";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log("login complete");
    } catch (error) {
      alert(error);
    }
  };

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="./dashboard" />;
  }

  return (
    <div className="main__login">
      <Paper elevation={10} className="main__login__paper">
        <form className="main__login__form" onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <TextField
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
            onInput={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            onInput={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign in
          </Button>
        </form>
        <Button type="button" variant="outlined" color="primary" fullWidth>
          Sign up
        </Button>
      </Paper>
    </div>
  );
}

export default LogIn;
