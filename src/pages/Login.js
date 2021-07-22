import { Button, FormControl, Paper, TextField } from "@material-ui/core";
import "./LogIn.css";
import React from "react";

function Login() {
  return (
    <div className="main__login">
      <Paper elevation={10} className="main__paper">
        <FormControl className="main__form" fullWidth>
          <h1>Sign in</h1>
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
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign in
          </Button>
          <Button type="submit" variant="outlined" color="primary" fullWidth>
            Sign up
          </Button>
        </FormControl>
      </Paper>
    </div>
  );
}

export default Login;
