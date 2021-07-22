import { Button, FormControl, Paper, TextField } from "@material-ui/core";
import "./LogIn.css";
import React from "react";
import { useState, Redirect } from "react";
import { AuthContext } from "../components/Auth";
import firebaseConfig from "../config";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefalut();
    console.log("ok");
    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };

  // const {currentUser} = useContext(AuthContext);

  return (
    <div className="main__login">
      <Paper elevation={10} className="main__paper">
        <FormControl className="main__form" fullWidth>
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <TextField
              label="Email"
              placeholder="Enter email"
              fullWidth
              required
              // onInput={(e) => {
              //   setEmail(e.target.value);
              // }}
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              // onInput={(e) => {
              //   setPassword(e.target.value);
              // }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign in
            </Button>
            <Button type="button" variant="outlined" color="primary" fullWidth>
              Sign up
            </Button>
          </form>
        </FormControl>
      </Paper>
    </div>
  );
}

export default LogIn;
