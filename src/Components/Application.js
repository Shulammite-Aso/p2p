import React, { useContext } from 'react';
import { Route, BrowserRouter} from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import SignUp from "./SignUp";
import PasswordReset from "./PasswordReset";

import "../App.scss";

const Application = () => {
  const user = true;
    return(
      user ?
      <Profile />
      :
      <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Login" component={Login} />
            <Route path="/PasswordReset" component={PasswordReset} />
      </BrowserRouter>
    );
};

export default Application;