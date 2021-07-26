import React from "react";
import { Avatar, Button, TextField} from "@material-ui/core";
import PollIcon from "@material-ui/icons/Poll";
import Search from "@material-ui/icons/Search";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/* header left */}
      <div className="header__left">
        <PollIcon className="header__icon" fontSize="large" />
        <div className="header__search">
          <TextField  className="header__searchField" size="small" placeholder="Search" variant="outlined"/>
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
          <Avatar className="header__avatar" />
          <h3>NAME</h3>
        </div>
        <Button variant="contained" color="secondary">Logout</Button>
      </div>
    </div>
  );
}

export default Header;
