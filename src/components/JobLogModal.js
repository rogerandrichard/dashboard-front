import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Modal, FormGroup, FormControl, ControlLabel, Button
} from 'react-bootstrap'
import { logItem } from '../actions/job'

class signPickUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      signPickUp : false,
      showModal: false,
      logComments: null
    }
  }

  jobLogSumbit = (jobId) => {
    let log_info = {
      job_id: jobId,
      log_type: this.props.title,     // Sign Pick Up, Job Feedback
      comments: this.state.logComments
    }
    console.log(log_info)
    this.props.dispatch(logItem(log_info))
    this.setState({
      showModal: false
    })
  }

  // handleClick() {
  //   this.setState({signPickUp: true});
  // }

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
          bsStyle="primary" bsSize="small" block
          onClick={this.open}>
          {this.props.title}
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
              this.jobLogSumbit(this.props.jobId)
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
