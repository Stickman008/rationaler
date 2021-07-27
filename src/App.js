import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
// import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
// import Feed from "./components/Feed";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={DashBoard} />
            {/* <Route exact path="/dashboard" component={DashBoard} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
