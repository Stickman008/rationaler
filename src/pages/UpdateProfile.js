import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import "./UpdateProfile.css";

function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(emailRef.current.value);

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setLoading(true);

    const promises = [];
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (
      passwordRef.current.value &&
      passwordRef.current.value !== currentUser.password
    ) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed update profile");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="update_profile">
      <Paper elevation={10} className="update_profile__paper">
        <Typography variant="h4">Update Profile</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit} autoComplete="off" className="update_profile__form">
          <TextField
            label="Email"
            placeholder={currentUser.email}
            type="email"
            inputRef={emailRef}
            fullWidth
            autoFocus
          />
          <TextField
            label="Password"
            placeholder="Leave blank to keep the same"
            type="password"
            autoComplete="new-password"
            inputRef={passwordRef}
            fullWidth
          />
          <TextField
            label="Confirm Password"
            placeholder="Leave blank to keep the same"
            type="password"
            autoComplete="new-password"
            inputRef={passwordConfirmRef}
            fullWidth
          />
          <Button
            disabled={loading}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Update
          </Button>
        </form>
        {/* <Typography variant="h5">Already have an account?</Typography> */}
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="secondary"
          fullWidth
        >
          Cancel
        </Button>
      </Paper>
    </div>
  );
}

export default UpdateProfile;
