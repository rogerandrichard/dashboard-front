import React from 'react';
import { connect } from 'react-redux'
import {
  Modal, FormGroup, FormControl, ControlLabel, Button
} from 'react-bootstrap'
import { logItem } from '../actions/job'

class signPickUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      signPickUp : false,
      showModal: false,
      logComments: null
    }
  }

  reqSignPU = (jobId) => {
    let log_info = {
      job_id: jobId,
      log_type: this.props.title,     // Sign Pick Up, Job Feedback
      comments: this.state.logComments
    }
    console.log(log_info)
    this.props.dispatch(logItem(log_info))
    this.setState({
      signPickUp: true,
      showModal: false
    })
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  render() {
    let signPickUp = this.state.signPickUp;
    return (
      <div>
        <Button
          bsStyle="primary" bsSize="small" block
          disabled={signPickUp}
          // onClick={!signPickUp ? this.handleClick : null}
          onClick={this.open}>
          {signPickUp ? 'Sign Pick-Up Requested' : 'Request Sign Pick-Up'}
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>
              {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(e) => {
              e.preventDefault()
              this.reqSignPU(this.props.jobId)
            }}>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>{this.props.commentTitle}</ControlLabel>
                <FormControl componentClass="textarea"
                  placeholder="enter notes here:"
                  value={this.state.value}
                  onChange={ (ev) => {
                      this.setState({logComments: ev.target.value})
                    }
                  }/>
              </FormGroup>
              <Button type="submit">
                {this.props.btnName}
              </Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    client: state.job
  }
}

export default connect(mapStateToProps)(signPickUp);
