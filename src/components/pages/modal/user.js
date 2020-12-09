import React, {Component} from "react";
import {connect, setStore} from 'trim-redux';
import {Modal} from "react-bootstrap";
import {toast} from "react-toastify"

class UserModal extends Component {
    state = {
        fields: {
            name: "",
            age: "",
            phone: "",
            risk: "",
            id: ""

        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.update) {
            return {fields: props.user}
        } else {
            return null
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

    handleSubmit = () => {
        let {fields} = this.state
        if (!this.props.update) {
            this.props.add(fields)
        }
        else{
            this.props.updateUser(fields)
        }
        toast.success("successFull");
        this.handleCloseModal()
    }

    render() {
        let {fields} = this.state
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
                            <input value={fields.name} onChange={this.handleChange.bind(this)} type="text" name={"name"}
                                   id={"name"}
                                   className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input value={fields.age} onChange={this.handleChange.bind(this)} type="text" name={"age"} id={"age"}
                                   className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Pone</label>
                            <input value={fields.phone} onChange={this.handleChange.bind(this)} type="text" name={"phone"} id={"phone`"}
                                   className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="risk">Risk</label>
                            <input value={fields.risk} onChange={this.handleChange.bind(this)} type="text" name={"risk"} id={"risk`"}
                                   className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="id">Id</label>
                            <input value={fields.id} onChange={this.handleChange.bind(this)} type="text" name={"id"} id={"id`"}
                                   className="form-control" readOnly={this.props.update}/>
                        </div>
                        <div className=" text-center">
                            <button onClick={() => this.handleSubmit()} className="btn btn-primary">
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
