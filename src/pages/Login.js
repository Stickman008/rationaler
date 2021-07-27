import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import "./Login.css";

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/")
    } catch (error) {
      setError("Login error");
    }
    setLoading(false);
  };

  return (
    <div className="main__login">
      <Paper elevation={10} className="main__login__paper">
        <Typography variant="h4">Login</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form className="main__login__form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
            inputRef={emailRef}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            inputRef={passwordRef}
          />
          <Button
            disabled={loading}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Login
          </Button>
        </form>
        <h2>Need Account?</h2>
        <Button component={Link} to="/singup" variant="outlined" color="primary" fullWidth>
          Sign up
        </Button>
      </Paper>
    </div>
  );
}

export default Login;
