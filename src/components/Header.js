import React from "react";
import PollIcon from "@material-ui/icons/Poll";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Avatar, Button, TextField} from "@material-ui/core";
import "./Header.css";

function Header() {
  return (
    // <h1>Header</h1>
    <div className="header">
      {/* header left */}
      <div className="header__left">
        <PollIcon className="header__icon" fontSize="large" />
        <div className="header__search">
          <TextField  className="header__searchField" size="small" placeholder="Search" variant="outlined"/>
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
        <Button size="small" variant="contained" color="secondary">Logout</Button>
      </div>
    </div>
  );
}

export default Header;
