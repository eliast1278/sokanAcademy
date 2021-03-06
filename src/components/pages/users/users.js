import React, {Component} from "react";
import MainStickyTbl from "../../main/MainStickyTbl";
import {Modal} from "react-bootstrap";
import {connect, setStore} from "trim-redux";
import UserModal from "../modal/user"

class User extends Component {
    state = {
        addflag: false,
        modalShow: true,
        selected: "",
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

    setModalShow() {
        setStore({userModal: true})
    }

    openUpdateModal(row) {
        this.setState({selected: row, addflag: true})
        setStore({userModal: true})
    }

    handleUpdateUser = (User) => {
        console.log(User)
        let {user} = this.state
        let newUser = []
        for (let row of user) {
            if (row.id === User.id) {
                row = User
            }
            newUser.push(row)
        }
        this.setState({user:newUser})

    }


    tblBodyCreator = (info) => {
        let rows = [];
        info.map(row => {
            let x = [
                <span>{row.name}</span>,
                <span>{row.age}</span>,
                <span>{row.phone}</span>,
                <span>{row.risk}</span>,
                <span><button onClick={() => this.openUpdateModal(row)}
                              className={"btn btn-warning btn-sm mx-1"}>edit</button><button
                    onClick={() => this.handleDeleteUser(row.id)}
                    className={"btn btn-danger btn-sm mx-1"}>delete</button></span>

            ];
            rows.push(x);
        });

        return rows;
    };

    addUser = (newUser) => {
        let {user} = this.state
        user.push(newUser)
        this.setState({user})

    }

    render() {
        let {user, tblHead, tblRow, modalShow} = this.state
        return (
            <div className={"px-3 "}>
                <div className="users">
                    <div className="d-flex justify-content-between">
                <span>
                    All Patients
                </span>
                        <div>
                            <button onClick={() => this.setModalShow()} className={"btn border rounded"} title={"add"}>
                                <i className="fa fa-plus"
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
                <UserModal update={this.state.addflag} add={this.addUser} user={this.state.selected} updateUser={this.handleUpdateUser}/>
            </div>
        )
    }
}

const mstp = state => ({
    userModal: state.userModal
})

export default connect(mstp)(User);
