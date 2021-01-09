import React from 'react';
import Application from "./Application";
import UserProvider from "../providers/UserProvider";

import "../App.scss";

 const App = () => {
  //const user = null;
    return(
      <UserProvider>
        <Application />
      </UserProvider>
    );
};

export default App;