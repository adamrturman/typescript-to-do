import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

interface State {
    isOpen: boolean;
}

class ErrorModal extends Component<{}, State> {
    state: State = {
        isOpen: true
    }

    render() {
        return (
            <Modal
                size="sm"
                show={this.state.isOpen}
                onHide={() => this.setState({ isOpen: false })}
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