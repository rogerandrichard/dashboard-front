import React from 'react';
import {
  Button, Modal
} from 'react-bootstrap'
import BookEavesForm from './BookEavesForm'

const BookEavesModal = React.createClass({

  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

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
              Select the eavestrough service that's right for your home.
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li>
                <strong>
                  Clean interior of house eaves [EH]
                </strong><br></br>
                Does NOT include repairs, installation of cages, removal of screens, or check downspouts.
              </li>
              {/* <li>
                <strong>
                  Clean interior of garage eaves [EG]
                </strong><br></br>
                Clean interior of garage eaves. Does NOT include repairs, installation of cages or removal of screens.
              </li>
              <li>
                <strong>
                  Clean the mouth of down spout and install downspout cage [DSC]
                </strong><br></br>
                Price per cage is $5.
              </li>
              <li>
                <strong>
                  Snake downspouts and remove any clogs [SDS]
                </strong><br></br>
                If we are unable to clean your downspouts, we will not charge for this.
              </li> */}
            </ul>
            <BookEavesForm closeModal={this.close} eh={this.props.price} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default BookEavesModal;
