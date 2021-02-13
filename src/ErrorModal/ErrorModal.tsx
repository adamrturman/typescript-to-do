import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

interface Props {
    isOpen: boolean;
    closeModal: () => void;
}

//  stateless, prop-ful component
class ErrorModal extends Component<Props, {}> {

    render() {
        return (
            <Modal
                size="sm"
                show={this.props.isOpen}
                //  need to rework this line, but unsure now that isOpen is a prop instead of state
                // onHide={() => this.setState({ isOpen: false })}
                onHide={this.props.closeModal}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Error
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>Input not valid - check and try again</Modal.Body>
            </Modal>
        )
    }
}

export default ErrorModal