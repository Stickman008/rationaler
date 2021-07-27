import React, { useContext } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../components/Auth";
import Header from "../components/Header";
import "./DashBoard.css";

function DashBoard() {
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  // if(!currentUser) {
  //   return <Redirect to="/login" />
  // }

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
    } catch {
      console.log("error");
    }
  }

  return (
    <div>
      {/* {erroJSON.stringify(currentUser.email)} */}
      <h1>You are logged in.</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default DashBoard;
