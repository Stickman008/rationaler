import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Paper, FormControl, TextField, Button } from "@material-ui/core";
import firebaseConfig from "../config";

function SignUp() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="main__login">
      <Paper elevation={10} className="main__paper">
        <FormControl className="main__form" fullWidth>
          <h1>Sign Up</h1>
          <TextField
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <Button type="submit" variant="outlined" color="primary" fullWidth>
            Sign up
          </Button>
        </FormControl>
      </Paper>
    </div>
  );
}

export default SignUp;
