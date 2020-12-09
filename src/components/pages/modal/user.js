import React, {Component} from "react";
import {connect, setStore} from 'trim-redux';
import {Modal} from "react-bootstrap";

class UserModal extends Component {
    state = {
        fields: {
            name: "",
            age: "",
            phone: "",
        }
    }
    handleCloseModal = () => {
        setStore({userModal: false});
    }

    handleChange(event) {
        let {fields} = this.state
        let target = event.target
        fields[target.name] = target.value
        this.setState({fields});

    }

    render() {
        return (
            <>

                <Modal
                    show={this.props.userModal}
                    onHide={this.handleCloseModal.bind(this)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modal heading
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input onChange={this.handleChange.bind(this)} type="text" name={"name"} id={"name"} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input onChange={this.handleChange.bind(this)} type="text" name={"age"} id={"age"} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Pone</label>
                            <input onChange={this.handleChange.bind(this)} type="text" name={"phone"} id={"phone`"} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="risk">Risk</label>
                            <input onChange={this.handleChange.bind(this)} type="text" name={"risk"} id={"risk`"} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="id">Id</label>
                            <input onChange={this.handleChange.bind(this)} type="text" name={"id"} id={"id`"} className="form-control"/>
                        </div>
                        <div className=" text-center">
                            <button className="btn btn-primary">
                                add
                            </button>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

            </>
        );
    }
}

const mstp = state => ({
    userModal: state.userModal
})
export default connect(mstp)(UserModal)
