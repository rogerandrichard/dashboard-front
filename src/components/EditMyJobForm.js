import React from 'react'
import { connect } from 'react-redux'
import DateTime from 'react-datetime'
const Currency = require('react-currency');
import {editJob} from '../actions/job'

import {
  Button, FormGroup, FormControl, ControlLabel, Modal
} from 'react-bootstrap'

const yesterday = DateTime.moment().subtract( 1, 'day' );
const valid = function( current ){
    return current.isAfter( yesterday );
};

const EditMyJobForm = React.createClass({
  componentDidMount () {
    // this.props.dispatch(setW1Price(jobType, jobPrice))
  },

  getInitialState() {
    return {
      showModal: false,
      selectedDate: this.props.job.sdate,
      selectedTime: this.props.job.stime,
      jobDetails: this.props.job.notes
    };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render () {
    let job_info = {
                clientId: this.props.job.client_id,
                jobId: this.props.job.id,
                jobType: this.props.job.jobdesc,
                jobPrice: this.props.job.price,
                jobDate: this.state.selectedDate,
                jobTime: this.state.selectedTime,
                jobDetails: this.state.jobDetails
              }

    return (
      <div>
        <Button
          bsStyle="warning"
          bsSize="xsmall"
          onClick={this.open}>
          Update Job
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>
              Update Job
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={ (e) => {
              e.preventDefault()
              this.props.onSubmit(job_info)
              this.close()
        // ----------------------------------------------------
              //this.props.dispatch(bookJob(this.props.client.current_client))
            //  console.log('Form Submitted: ',
            //    "type", jobType, "date", this.state.selectedDate,
            //    "price", jobPrice)
            }}>
              <FormGroup>
                <ControlLabel>Job Type</ControlLabel>
                <FormControl.Static>
                  {this.props.job.jobdesc}
                </FormControl.Static>
              </FormGroup>

              { this.props.job.price &&
              <FormGroup>
                <ControlLabel>Job Price</ControlLabel>
                <FormControl.Static>
                   <Currency symbol="$" value={ this.props.job.price * 100} />
                </FormControl.Static>
              </FormGroup>
              }

              <FormGroup>
                <ControlLabel>Select Date:</ControlLabel>
                  <DateTime onChange={(d)=>{
                      this.setState({ selectedDate: d.toDate() })
                    }} timeFormat={false} isValidDate={ valid }
                  defaultValue={this.props.job.sdate}/>
              {/* <DateTime onChange={(d)=>{
                    this.setState({selectedTime: d.getHours()})
                  }}
                timeConstraints={ hours: { min: 8, max: 12, step: 2 }}
                dateFormat={false}/> */}
              </FormGroup>

              <FormGroup controlId="formControlsSelectTime">
                <ControlLabel>Select time:</ControlLabel>
                <FormControl componentClass="select"
                  defaultValue={this.props.job.stime}
                  onChange={ (ev) => {
                    this.setState({selectedTime: ev.target.value})
                  }
                }>
                  <option value="Anytime">Anytime</option>
                  <option value="8 AM">8 AM</option>
                  <option value="10 AM">10 AM</option>
                  <option value="12 PM">12 PM</option>
                </FormControl>
              </FormGroup>

              <FormGroup controlId="formControlsAddJobDetails">
                <ControlLabel>Additional job details</ControlLabel>
                <FormControl componentClass="textarea"
                  placeholder={this.props.job.notes ? null : "i.e. call ahead of arrival" }
                  defaultValue={this.props.job.notes}
                  onChange={ (ev) => {
                    this.setState({jobDetails: ev.target.value})
                  }
                }/>
              </FormGroup>
              <Button type="submit">
                Submit
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
})

// const mapStateToProps = (state) => {
//   return {
//     job: state.job,
//   }
// }

// export default connect(mapStateToProps)(EditMyJobForm);

export default EditMyJobForm;
