import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import "./Signup.css";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("Passwords do not match");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch {
      setError("Sign up error");
    }
    setLoading(false);
  };

  return (
    <div className="signup">
      <Paper elevation={10} className="signup__paper">
        <Typography variant="h4">Sign Up</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit} className="signup__form">
          <TextField
            label="Email"
            placeholder="Enter email"
            inputRef={emailRef}
            fullWidth
            autoFocus
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
        <Typography variant="h5">Already have an account?</Typography>
        <Button component={Link} to="/login" variant="outlined" color="primary" fullWidth>
          login
        </Button>
      </Paper>
    </div>
  );
}

export default Signup;
