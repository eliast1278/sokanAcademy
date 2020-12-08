import React, { Component } from "react";
import {Switch} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from "react-toastify";
//components
//private route includes header and footer
import PrivateRoute from "./components/public/privateRoute";
import Dashboard from "./components/pages/dashboard/dashboard";
import User from "./components/pages/users/users";

class App extends Component {
  render() {
    return (
      <>
        <Switch>

          <PrivateRoute exact path={"/users"} component={User} />
          <PrivateRoute exact path={"/"} component={Dashboard} />
            <PrivateRoute exact path={"/dashboard"} component={Dashboard} />
        </Switch>
        <ToastContainer rtl className="rtl toast-style" />
      </>
    );
  }
}

export default App;
