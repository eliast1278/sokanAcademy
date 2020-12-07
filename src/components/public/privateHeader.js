import React, { Component } from "react";

class PrivateHeader extends Component {
  render() {
    return (
      <section className={"p-3 text-dark fixed-top pv-header"}>
        <div className="container-fluid">
          <div class="row rtl">
            <div className="col-md-6">
              <ul className="list-group list-group-horizontal list-unstyled p-0">
                <li className=" is-link d-flex align-items-center  name-tag pl-3">
                  <span className="header-img pl-3 d-inline-block">
                    <img
                      className=" rounded-circle"
                      src="/img/e8d90017-3451-40a4-a668-901221acbb76.png"
                      alt="profile-img "
                    />
                  </span>
                  <span className={"header-title pl-2 font14"}>
                    jones ferdinand
                  </span>
                </li>
                <li className=" d-flex align-items-center mr-4">
                  <i class="fa fa-bell color-muted" aria-hidden="true"></i>
                  <i
                    class="fa fa-search mx-3 color-muted"
                    aria-hidden="true"
                  ></i>
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <span className="font24">Covid 19 Tracker - Sokan Edition</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default PrivateHeader;
