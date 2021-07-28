import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Avatar, Button, TextField, Typography } from "@material-ui/core";
import PollIcon from "@material-ui/icons/Poll";
import Search from "@material-ui/icons/Search";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import "./Header.css";

function Header() {
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="header">
      {/* header left */}
      <div className="header__left">
        <PollIcon className="header__icon" fontSize="large" />
        <div className="header__search">
          <TextField
            className="header__searchField"
            size="small"
            placeholder="Search"
            variant="outlined"
          />
          <Search className="header__searchButton" fontSize="small" />
        </div>
      </div>

      {/* header center */}
      <div className="header__center">
        <div className="header__option">
          <ThumbsUpDownIcon fontSize="medium" />
        </div>
        <div className="header__option">
          <QuestionAnswerIcon fontSize="medium" />
        </div>
      </div>

      {/* header right */}
      <div className="header__right">
        <div className="header__info">
          <Avatar
            component={Link}
            to="update-profile"
            className="header__avatar"
          />
          <Typography component="h3" variant="body1">{currentUser.email}</Typography>
        </div>
        <Button onClick={handleLogout} variant="contained" color="secondary">
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Header;
