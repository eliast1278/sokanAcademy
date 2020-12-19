import React, { Component } from "react";
import { GetData } from "../../../services/dashboard";

class TopWidget extends Component {
  constructor() {
    super();
    this.fetchData();
    this.state = {
      loading: true,
      global: {},
    };
  }

  render() {
    let { loading, global } = this.state;
    return (
      <div>
        <div className="top-widget-row no-gutters w-100">
          <div className=" item  ">
            <div className="top-widget active">
              <p className={"title mb-0"}>Total</p>
              10
            </div>
          </div>
          <div className=" item  ">
            <div className="top-widget">
              <p className={"title mb-0"}>Active</p>
              10
            </div>
          </div>
          <div className=" item ">
            <div className="top-widget">
              <p className={"title mb-0"}>Recovered</p>
              10
            </div>
          </div>
          <div className=" item  ">
            <div className="top-widget">
              <p className={"title mb-0"}>Death</p>
              10
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TopWidget;
