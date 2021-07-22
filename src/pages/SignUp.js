import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import firebase from "firebase";
import { Paper, FormControl, TextField, Button } from "@material-ui/core";
import firebaseConfig from "../config";

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
    console.log("already sign up");
    return <Redirect to="../App" />;
  }

  return (
    <div className="main__login">
      <Paper elevation={10} className="main__paper">
        <FormControl className="main__formControl" fullWidth>
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
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
        </FormControl>
      </Paper>
    </div>
  );
}

export default SignUp;
