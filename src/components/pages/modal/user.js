import React, {Component} from "react";
import {connect, setStore} from 'trim-redux';
import {Modal} from "react-bootstrap";



class UserModal extends Component {
    render() {
        return (
            <>

                <Modal
                    show={this.props.setShow}
                    onHide={this.props.handleCloseMoadl()}
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
                        <button onClick={props.onHide}>Close</button>
                    </Modal.Footer>
                </Modal>

            </>
        );
    }
}

export default UserModal
