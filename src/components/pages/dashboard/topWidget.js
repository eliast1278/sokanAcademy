import React, { Component } from "react";
import { GetData } from "../../../services/dashboard";

class TopWidget extends Component {
  constructor() {
    super();
    this.state = {
      global: {},
    };
  }

  fetchData = () => {
    GetData().then((res) => {
      if (res) {
        this.setState({ global: res.Global });
      }
    });
  };

  render() {
    return (
      <div>
        <div className="row no-gutters ">
          <div className="col-md-3 item top-widget">
            <p className={"title mb-0"}>Total</p>
            <p className="value mb-0">112112112</p>
          </div>
        </div>
      </div>
    );
  }
}
export default TopWidget;
