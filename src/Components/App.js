import React from 'react';
import {
  Route,
  HashRouter, BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import SignUp from "./SignUp";
import PasswordReset from "./PasswordReset";

import "../App.scss";

export default function App() {
  const user = null;
    return(
      user ?
      <Profile/>
      :
      <BrowserRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/SignUp" component={SignUp}/>
            <Route path="/Login" component={Login}/>
            <Route path="/PasswordReset" component={PasswordReset}/>
          </div>
        </div>
        </BrowserRouter>
    );
}
