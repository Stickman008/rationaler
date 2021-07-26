import React from "react";
import { Button, Paper, TextField, IconButton } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import "./InputBox.css";

function InputBox() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post");
  };

  const handleUploadImage = (e) => {
    console.log("Upload");
  };

  return (
    <div className="inputBox">
      <Paper className="inputBox__paper">
        <form className="inputBox__form" onSubmit={handleSubmit}>
          <div className="inputBox__form__top">
            <TextField
              variant="outlined"
              placeholder="Title"
              size="small"
              required
              fullWidth
            ></TextField>
            <IconButton
              type="file"
              variant="contained"
              style={{ marginLeft: 10 }}
              onClick={handleUploadImage}
            >
              <ImageIcon size="small" />
            </IconButton>
          </div>
          <div className="inputBox__form__center">
            <TextField
              variant="outlined"
              placeholder="Description"
              required
              fullWidth
            ></TextField>
          </div>
          <div className="inputBox__form__bottom">
            <Button type="submit" variant="contained" color="primary">
              Post
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default InputBox;
