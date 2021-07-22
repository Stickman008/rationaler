import { Button, FormControl, Paper, TextField } from "@material-ui/core";
import "./LogIn.css";
import React from "react";
import { Redirect } from "react";
import { AuthContext } from "../components/Auth";
import firebaseConfig from "../config";

function Login() {
  // const handleSubmit = (e) => {
  //   e.preventDefalut();
  //   console.log("ok");
  //   try {
  //     firebaseConfig
  //       .auth()
  //       .signInWithEmailAndPassword(email.value, password.value);
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

  // const {currentUser} = useContext(AuthContext);
  // if(currentUser) {
  //   return <Redirect to="../App" />
  // }

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