import React, {Component} from "react";
import MainStickyTbl from "../../main/MainStickyTbl";

class User extends Component {
    state = {
        tblHead: ["name", "age", "phone", "Infection level", "Action"],
        tblRow: [4, 2, 3, 3, 3],
        user: [[
             "ali",
             "22",
             "0921212365",
             "high",
            "delete"
        ], [
             "ali",
             "22",
             "0921212365",
             "low",
            "delete"
        ], [
             "ali",
             "22",
             "0921212365",
             "normal",
            "delete"
        ]],
    };

    render() {
        let {user, tblHead, tblRow}= this.state
        return (
            <div className={"px-3 "}>
                <div className="users">
                    <div className="d-flex justify-content-between">
                <span>
                    All Patients
                </span>
                        <div>
                            <button className={"btn border rounded"} title={"add"}><i className="fa fa-plus"
                                                                                      aria-hidden="true"/>
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <MainStickyTbl
                            cols={tblRow}
                            head={tblHead}
                            body={user}
                            tblHeight={450}
                            tblClass={"new-tbl "}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default User;
