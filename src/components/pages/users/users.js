import React, {Component} from "react";
import MainStickyTbl from "../../main/MainStickyTbl";
import {Modal} from "react-bootstrap";

class User extends Component {
    state = {
        addflag:false,
        modalShow:true,
        tblHead: ["name", "age", "phone", "Infection level", "Action"],
        tblRow: [4, 2, 3, 3, 3],
        user: [{
            name: "ali",
            age: "22",
            phone: "0921212365",
            risk: "high",
            id: 1
        }, {
            name: "ali",
            age: "22",
            phone: "0921212365",
            risk: "high",
            id: 2
        }, {
            name: "ali",
            age: "22",
            phone: "0921212365",
            risk: "high",
            id: 3
        },
        ],
    };
    handleDeleteUser = (id) => {
        let {user} = this.state
        let newUser = []
        for (let row of user) {
            if (row.id !== id) {
                newUser.push(row)
            }
        }
        this.tblBodyCreator(newUser)
        this.setState({user: newUser})

    };
    setModalShow(){
        this.setState({modalShow:false})
    }


    tblBodyCreator = (info) => {
        let rows = [];
        info.map(row => {
            let x = [
                <span>{row.name}</span>,
                <span>{row.age}</span>,
                <span>{row.phone}</span>,
                <span>{row.risk}</span>,
                <span><button className={"btn btn-warning btn-sm mx-1"}>edit</button><button
                    onClick={() => this.handleDeleteUser(row.id)}
                    className={"btn btn-danger btn-sm mx-1"}>delete</button></span>

            ];
            rows.push(x);
        });

        return rows;
    };


    render() {
        let {user, tblHead, tblRow ,modalShow} = this.state
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
                            body={this.tblBodyCreator(user)}
                            tblHeight={450}
                            tblClass={"new-tbl "}
                        />
                    </div>
                </div>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => this.setModalShow()}
                />
            </div>
        )
    }
}

export default User;
