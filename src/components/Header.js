import React from "react";
import PollIcon from "@material-ui/icons/Poll";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import "./Header.css";
import { Avatar, Button } from "@material-ui/core";

function Header() {
  return (
    // <h1>Header</h1>
    <div className="header">
      {/* header left */}
      <div className="header__left">
        <PollIcon className="header__icon" fontSize="large" />
        <div>
          <input type="text" placeholder="Search" />
        </div>
      </div>

      {/* header center */}
      <div className="header__center">
        <div className="header__option">
          <ThumbsUpDownIcon fontSize="large" />
        </div>
        <div className="header__option">
          <QuestionAnswerIcon fontSize="large" />
        </div>
      </div>

      {/* header right */}
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h3>NAME</h3>
        </div>
        <Button variant="contained" color="secondary">Logout</Button>
      </div>
    </div>
  );
}

export default Header;
