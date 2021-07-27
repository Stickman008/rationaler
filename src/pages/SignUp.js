import React, { useState, useRef } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../components/Auth";
import { Paper, TextField, Button, Typography} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import "./SignUp.css";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("Passwords do not match!");
      return;
    }

    try {
      setError("");
      setLoading(true)
      console.log(emailRef.current.value, passwordRef.current.value);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch {
      setError("Sign up error");
    }
    setLoading(false);
  };

  // if (currentUser) {
  //   return <Link to="./dashboard" />;
  // }

  return (
    <div className="signup">
      <Paper elevation={10} className="signup__paper">
        <Typography variant="h4">Sign Up</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit} className="main__signup__form">
          <TextField
            label="Email"
            placeholder="Enter email"
            inputRef={emailRef}
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            inputRef={passwordRef}
            fullWidth
            required
          />
          <TextField
            label="Confirm Password"
            placeholder="Enter confirm password"
            type="password"
            inputRef={passwordConfirmRef}
            fullWidth
            required
          />
          <Button
            disabled={loading}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default SignUp;
