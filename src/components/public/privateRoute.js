import React, { Component } from "react";
import { Route } from "react-router-dom";
import PrivateHeader from "./privateHeader";

class PrivateRoute extends Component {
  render() {
    const { component: Component, ...restProps } = this.props;
    return (
      <Route
        {...restProps}
        render={(props) => (
          <>
            <PrivateHeader />
            <div>
              <Component {...props} />
            </div>
          </>
        )}
      />
    );
  }
}

export default PrivateRoute;
