import React, {useState} from "react";
import { Button, Paper, TextField, IconButton, Typography } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import "./InputBox.css";
import { green } from "@material-ui/core/colors";

function showImage(file) {
  let image = null;
  return <img className="inputBox__image" src={image} />
}

function InputBox() {
  const [uploadImage, setUploadImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post");
  };

  const fileSelectedHandler= (e) => {
    console.log(e.target.files[0]);
    setUploadImage(e.target.files[0]);
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
              component="label"
              style={{ marginLeft: 10 }}
              size="medium"
            >
              <ImageIcon style={{width: 40, height: 40}} />
              <input type="file" onChange={fileSelectedHandler} hidden />
            </IconButton>
          </div>
          {uploadImage ? showImage(uploadImage): null}
          <div className="inputBox__form__center">
            <TextField
              variant="outlined"
              placeholder="Description"
              multiline
              rows={4}
              required
              fullWidth
            ></TextField>
          </div>
          <div className="inputBox__form__bottom">
            <Typography variant="caption" component="caption" >Note: Be carefull before you post</Typography>
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
