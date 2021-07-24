import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./components/Auth";
import Header from "./components/Header";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <p>Main page</p> */}
      {/* <Header /> */}
      {/* <LogIn /> */}
      {/* <SignUp /> */}
      {/* <h1>App js</h1> */}
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
