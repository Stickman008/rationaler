import React, { useState } from "react";
import { database, storage } from "../config";
import { useAuth } from "../contexts/AuthContext";
import {
  Button,
  Paper,
  TextField,
  IconButton,
  Typography,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import "./InputBox.css";

function showImage(file) {
  let image = null;
  return <img className="inputBox__image" src={image} />;
}

function InputBox() {
  const [uploadImage, setUploadImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { currentUser } = useAuth();

  const handleUploadImage = () => {
    const uploadTask = storage
      .ref(`images/${uploadImage.name}`)
      .put(uploadImage);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(uploadImage.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post");
    handleUploadImage();
    // database.posts.add({
    //   title: title,
    //   description: description,
    //   userId: currentUser.uid,
    //   postImage: 1,
    //   postAt: database.getCurrentTimestamp(),
    // });

    setTitle("");
    setDescription("");
  };

  const uploadImageHandler = (e) => {
    // console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setUploadImage(e.target.files[0]);
    }
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
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
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
              <ImageIcon style={{ width: 40, height: 40 }} />
              <input type="file" onChange={uploadImageHandler} hidden />
            </IconButton>
          </div>
          {uploadImage ? showImage(uploadImage) : null}
          <div className="inputBox__form__center">
            <TextField
              variant="outlined"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              multiline
              rows={4}
              required
              fullWidth
            ></TextField>
          </div>
          <div className="inputBox__form__bottom">
            <Typography variant="caption" component="h6">
              Note: Be carefull before you post
            </Typography>
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
