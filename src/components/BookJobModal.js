import React, { Component } from 'react';
import {
  Button, Modal
} from 'react-bootstrap'
import BookW1Form from './bookW1Form.js'

class BookJobModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    };
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          block
          onClick={this.open}>
          Book Job
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>
              {this.props.jobTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <strong>
              {this.props.jobDesc}
            </strong>
            <BookW1Form jobType={this.props.jobType} closeModal={this.close}
              price={this.props.price}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default BookJobModal;
