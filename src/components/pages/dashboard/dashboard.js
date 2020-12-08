import React, { Component } from "react";
import TopWidget from "./topWidget";
import ChartWidget from "./chartWidget";
import {NavLink} from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div className={"px-3"}>
        <TopWidget />
        <ChartWidget />
      </div>
    );
  }
}

export default Dashboard;
