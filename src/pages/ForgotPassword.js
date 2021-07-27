import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import "./Login.css";

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
    } catch (error) {
      setError("Failed to reset password");
    }
    setLoading(false);
  };

  return (
    <div className="login">
      <Paper elevation={10} className="login__paper">
        <Typography variant="h4">Password Reset</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form className="login__form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            placeholder="Enter email"
            inputRef={emailRef}
            required
            fullWidth
          />
          <Button
            disabled={loading}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Reset Password
          </Button>
        </form>
        <Button component={Link} to="/login" color="primary" fullWidth>
          login
        </Button>
      </Paper>
    </div>
  );
}

export default ForgotPassword;
