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

  fetchData = () => {
    GetData().then((res) => {
      if (res) {
        this.setState({ global: res.Global, loading: false });
      }
    });
  };

  render() {
    let { loading, global } = this.state;
    return (
      <div>
        <div className="top-widget-row no-gutters w-100">
          <div className=" item  ">
            <div className="top-widget active">
              <p className={"title mb-0"}>Total</p>
              {loading ? (
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <p className="value mb-0">{global.TotalConfirmed}</p>
              )}
            </div>
          </div>
          <div className=" item  ">
            <div className="top-widget">
              <p className={"title mb-0"}>Active</p>
              {loading ? (
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <p className="value mb-0">{global.NewConfirmed}</p>
              )}
            </div>
          </div>
          <div className=" item ">
            <div className="top-widget">
              <p className={"title mb-0"}>Recovered</p>
              {loading ? (
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <p className="value mb-0">{global.NewRecovered}</p>
              )}
            </div>
          </div>
          <div className=" item  ">
            <div className="top-widget">
              <p className={"title mb-0"}>Death</p>
              {loading ? (
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <p className="value mb-0">{global.TotalDeaths}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TopWidget;
