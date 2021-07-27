import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
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
      console.log("Logout Error");
    }
  }

  return (
    <div>
      <Header />
      {currentUser && currentUser.email}
      <h1>You are logged in.</h1>
      <Link to="update-profile"></Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default DashBoard;
