import React, { Component } from 'react';
import {
  Modal, Table, Button
} from 'react-bootstrap'
import { logItem } from '../actions/job'

class ShowJobLogs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }
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
          Show All Job Logs
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>
              All Job Logs for Job JB{this.props.jobId}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Log Id</th>
                  <th>Log Type</th>
                  <th>Log Comments</th>
                  <th>Log Date</th>
                </tr>
              </thead>
              <tbody>
                { this.props.jobLogs.map((log) => {
                  return (
                    <tr key={log.id}>
                      <td>{log.id}</td>
                      <td>{log.log_type}</td>
                      <td>{log.comments}</td>
                      <td>{log.log_date}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}


export default ShowJobLogs;


