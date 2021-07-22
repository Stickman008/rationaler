import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Paper, FormControl, TextField, Button } from "@material-ui/core";
import firebaseConfig from "../config";

function SignUp() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    console.log("submit");

    // try {
    //   console.log("test");
    //   // firebaseConfig
    //   //   .auth()
    //   //   .createUserWithEmailAndPassword(email.value, password.value);
    //   // setCurrentUser(true);
    // } catch (error) {
    //   alert(error);
    // }
  };

  if (currentUser) {
    return <Redirect to="../App" />;
  }

  return (
    <div className="main__login">
      <Paper elevation={10} className="main__paper">
        <FormControl className="main__formControl" fullWidth>
          <from onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <TextField
              label="Email"
              placeholder="Enter email"
              autoComplete="email"
              fullWidth
              required
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              autoComplete="current-password"
              fullWidth
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign up
            </Button>
          </from>
        </FormControl>
      </Paper>
    </div>
  );
}

export default SignUp;
