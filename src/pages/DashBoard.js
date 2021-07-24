import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../components/Auth";
import Header from "../components/Header";
import firebaseConfig from "../config";
// import "./Dashboard.css";

function DashBoard() {
  const {currentUser} = useContext(AuthContext);

  if(!currentUser) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <h1>You are logged in.</h1>
      <button onClick={() => {firebaseConfig.auth().signOut()}}>Logout</button>
    </div>
  );
}

export default DashBoard;
