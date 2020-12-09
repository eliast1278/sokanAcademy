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
    handleCloseMoadl=()=>{
        setStore({userModal:false});
    }

    render() {
        return (
            <>

                <Modal
                    show={this.props.userModal}
                    onHide={this.handleCloseMoadl()}
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
                        <h4>Centered Modal</h4>

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
export default connect (mstp) (UserModal)
