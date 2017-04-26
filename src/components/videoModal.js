import React from 'react';
import {
  Modal, ResponsiveEmbed, Button, ButtonToolbar
} from 'react-bootstrap'

const MyLargeModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">White Shark Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResponsiveEmbed a16by9>
            <embed src="https://player.vimeo.com/video/182019446" />
          </ResponsiveEmbed>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

const videoModal = React.createClass({
  getInitialState() {
    return { lgShow: false };
  },
  render() {
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <div>
        <ButtonToolbar>
          <Button id="VideoModalBtn" bsStyle="primary" block
            onClick={()=>this.setState({ lgShow: true })}>
            Watch the White Shark video
          </Button>
          <MyLargeModal show={this.state.lgShow} onHide={lgClose} />
        </ButtonToolbar>
      </div>
    );
  }
});

export default videoModal;
