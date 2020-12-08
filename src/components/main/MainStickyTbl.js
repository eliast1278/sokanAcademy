import React, { Component } from "react";
import _default from "../../assets/helper/default.json";
import TblLoading from "./TblLoading";

class MainStickyTbl extends Component {
  render() {
    return (
      <div
        className={
          "tbl custom-tbl centered overflow-auto custom-scroll  " +
          this.props.tblClass
        }
        style={{ height: this.props.tblHeight, minWidth: this.props.minWidth }}
      >
        {this.props.topHead ? (
          <div className="tbl-head back-sky padding4">{this.props.topHead}</div>
        ) : null}
        <div
          className="tbl-head flexed bg-white"
          style={{ top: this.props.top }}
        >
          {this.props.head.map((headItem, index) => {
            return (
              <span
                key={index}
                className={`${
                  this.props.cols ? "flex" + this.props.cols[index] : "flex1"
                }`}
              >
                {headItem}
              </span>
            );
          })}
        </div>
        <div className="tbl-body tbl-loading">
          {this.props.loading ? (
            <TblLoading />
          ) : //   rows
          this.props.body.length ? (
            this.props.body.map((row, index) => {
              return (
                <div key={index} className="flex1 tbl-row d-flex w-100">
                  {row.map((rowItem, inde) => {
                    return (
                      <React.Fragment key={inde}>
                        {rowItem != null ? (
                          <span
                            key={inde}
                            className={`p-1 ${rowItem.class || ""} ${
                              this.props.cols
                                ? "flex" + this.props.cols[inde]
                                : "flex1"
                            }`}
                          >
                            {rowItem.class ? rowItem.data : rowItem}
                          </span>
                        ) : (
                          <span
                            key={inde}
                            className={`p-1 ${
                              this.props.cols
                                ? "flex" + this.props.cols[inde]
                                : "flex1"
                            }`}
                          >
                            {rowItem}
                          </span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              );
            })
          ) : (
            <span className={`padding4 flex1`}>{_default.noRecord}</span>
          )}
        </div>
      </div>
    );
  }
}

export default MainStickyTbl;
