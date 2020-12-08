import React, { Component } from "react";
import { Route } from "react-router-dom";
import PrivateHeader from "./privateHeader";
import PrivateSidebar from "./privateSidebar";
class PrivateRoute extends Component {
  render() {
    const { component: Component, ...restProps } = this.props;
    return (
      <Route
        {...restProps}
        render={(props) => (
          <>
            <PrivateHeader />
            <PrivateSidebar />
            <div className={"main-body"}>
              <div className="container-fluid">
                <Component {...props} />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

export default PrivateRoute;
