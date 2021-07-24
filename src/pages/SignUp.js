import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../config";
import { Paper, TextField, Button } from "@material-ui/core";
import "./SignUp.css";

function SignUp() {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);

    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email, password);
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };

  if (currentUser) {
    return <Redirect to="./dashboard" />;
  }

  return (
    <div className="main__signup">
      <Paper elevation={10} className="main__signup__paper">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className="main__signup__form">
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
            Sign up
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default SignUp;
