import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class PrivateSidebar extends Component {
  state = {
    active: 1,
    items: [
      {
        name: "Overview",
        key: 1,
        to: "/",
        icon: (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={"change-color"}
              d="M15.5232 8.94116H8.54412L13.1921 13.5891C13.3697 13.7667 13.6621 13.7812 13.8447 13.6091C14.9829 12.5367 15.7659 11.0912 15.9956 9.46616C16.035 9.18793 15.8041 8.94116 15.5232 8.94116ZM15.0576 7.03528C14.8153 3.52176 12.0076 0.714119 8.49412 0.471767C8.22589 0.453237 8 0.679413 8 0.948236V7.5294H14.5815C14.8503 7.5294 15.0762 7.30352 15.0576 7.03528ZM6.58824 8.94116V1.96206C6.58824 1.68118 6.34147 1.45029 6.06353 1.48971C2.55853 1.985 -0.120585 5.04705 0.00412089 8.71675C0.132356 12.4856 3.37736 15.5761 7.14794 15.5288C8.6303 15.5103 10 15.0326 11.1262 14.2338C11.3585 14.0691 11.3738 13.727 11.1724 13.5256L6.58824 8.94116Z"
              fill="#9FA2B4"
            />
          </svg>
        ),
      },
      {
        name: "Users",
        key: 2,
        to: "/users",
        icon: (
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={"change-color"}
              opacity="0.4"
              d="M3.55556 3.33334H12.4444V8.66667H3.55556V3.33334ZM14.6667 6C14.6667 6.73639 15.2636 7.33334 16 7.33334V10C16 10.7364 15.4031 11.3333 14.6667 11.3333H1.33333C0.596944 11.3333 0 10.7364 0 10V7.33334C0.736389 7.33334 1.33333 6.73639 1.33333 6C1.33333 5.26362 0.736389 4.66667 0 4.66667V2.00001C0 1.26362 0.596944 0.666672 1.33333 0.666672H14.6667C15.4031 0.666672 16 1.26362 16 2.00001V4.66667C15.2636 4.66667 14.6667 5.26362 14.6667 6ZM13.3333 3.11112C13.3333 2.74292 13.0349 2.44445 12.6667 2.44445H3.33333C2.96514 2.44445 2.66667 2.74292 2.66667 3.11112V8.88889C2.66667 9.25709 2.96514 9.55556 3.33333 9.55556H12.6667C13.0349 9.55556 13.3333 9.25709 13.3333 8.88889V3.11112Z"
              fill="#9FA2B4"
            />
          </svg>
        ),
      },
      {
        name: "Link number 2",
        key: 3,
        to: "/faq",
        icon: (
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={"change-color"}
              opacity="0.4"
              d="M3.50187 14.1984C3.50219 14.395 3.56031 14.5875 3.66937 14.7512L4.20344 15.5541C4.29467 15.6913 4.41841 15.8039 4.56366 15.8817C4.7089 15.9596 4.87114 16.0003 5.03594 16.0003H6.96438C7.12917 16.0003 7.29141 15.9596 7.43665 15.8817C7.5819 15.8039 7.70564 15.6913 7.79688 15.5541L8.33094 14.7512C8.43995 14.5875 8.49822 14.3952 8.49844 14.1984L8.49969 13H3.50031L3.50187 14.1984ZM0.5 5.5C0.5 6.88656 1.01406 8.15156 1.86125 9.11812C2.3775 9.70718 3.185 10.9378 3.49281 11.9759C3.49406 11.9841 3.495 11.9922 3.49625 12.0003H8.50375C8.505 11.9922 8.50594 11.9844 8.50719 11.9759C8.815 10.9378 9.6225 9.70718 10.1388 9.11812C10.9859 8.15156 11.5 6.88656 11.5 5.5C11.5 2.45656 9.02844 -0.00937887 5.98281 -3.87451e-06C2.795 0.00968363 0.5 2.59281 0.5 5.5ZM6 3C4.62156 3 3.5 4.12156 3.5 5.5C3.5 5.77625 3.27625 6 3 6C2.72375 6 2.5 5.77625 2.5 5.5C2.5 3.57 4.07 2 6 2C6.27625 2 6.5 2.22375 6.5 2.5C6.5 2.77625 6.27625 3 6 3Z"
              fill="#9FA2B4"
            />
          </svg>
        ),
      },
    ],
  };
  render() {
    return (
      <>
        <div className={"sidebar "}>
          <Nav
            defaultActiveKey={window.location.pathname}
            className="flex-column "
          >
            <div className={"  p-4 title"}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#3751FF" />
                <path
                  d="M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="11"
                    y1="9"
                    x2="23"
                    y2="23"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.7" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>

              <span className={"pl-2 font10"}>Covid 19 Tracker</span>
            </div>

            {this.state.items.map((item) => {
              return (
                <Nav.Link
                  key={item.key}
                  as={NavLink}
                  className={
                    " py-2 px-4 d-flex justify-content-between align-items-center"
                  }
                  to={item.to}
                >
                  <div className={"pl-2"}>
                    {item.icon}
                    <span className={"pl-2 font10"}>{item.name}</span>
                  </div>
                </Nav.Link>
              );
            })}
          </Nav>
        </div>
      </>
    );
  }
}
export default PrivateSidebar;
