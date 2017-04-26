import React from 'react';
import {
  Button, Modal
} from 'react-bootstrap'
import BookPaintingForm from './BookPaintingForm'

const BookPaintingModal = React.createClass({

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
              Book a free written paint estimate.
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              The crews are comprised of full time painters who have years of experience in residential homes. We face issues ranging from interior patching and filling to exterior caulking of gaps and dealing with aged wood surfaces. Every home presents a different set of challenges and our crews successfully manage and complete their jobs.
            </p>
            <p>
              We are happy to come out to your home and assess your needs and present a solution. We look forward to working with you on your next painting project.
            </p>
            <p>
              We have painted over 2,500 homes in the Greater Toronto Area. Specializing in interior and exterior painting, staining, paint removal and wallpaper stripping.
            </p>
            <BookPaintingForm closeModal={this.close}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default BookPaintingModal;
