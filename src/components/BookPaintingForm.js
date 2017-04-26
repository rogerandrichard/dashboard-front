import React from 'react'
import { connect } from 'react-redux'
import DateTime from 'react-datetime'
import { bookJob } from '../actions/job'
const Currency = require('react-currency');

import {
  Button, FormGroup, FormControl, ControlLabel
} from 'react-bootstrap'

// function FieldGroup({ id, label, help, ...props }) {
//   return (
//     <FormGroup controlId={id}>
//       <ControlLabel>{label}</ControlLabel>
//       <FormControl {...props} />
//       {help && <HelpBlock>{help}</HelpBlock>}
//     </FormGroup>
//   );
// }

const yesterday = DateTime.moment().subtract( 1, 'day' );
const valid = function( current ){
    return current.isAfter( yesterday );
};

const BookPaintingForm = React.createClass({
  componentDidMount () {
    // this.props.dispatch(setW1Price(jobType, jobPrice))
  },

  getInitialState() {
    return {
      selectedDate: '',
      selectedTime: '',
      jobDetails: ''
    };
  },

  render () {
    // let dateChange = () => this.setState({ selectedDate: this.state.value });

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          console.log(this.state)
          var job_info = {
            clientId: this.props.client.current_client.id,
            jobType: "Painting",
            jobDate: this.state.selectedDate,
            jobTime: this.state.selectedTime,
            jobDetails: this.state.jobDetails
          }
          this.props.closeModal()
            this.props.dispatch(bookJob(job_info))
    // ----------------------------------------------------
          //this.props.dispatch(bookJob(this.props.client.current_client))
        //  console.log('Form Submitted: ',
        //    "type", jobType, "date", this.state.selectedDate,
        //    "price", jobPrice)
        }}>
          <strong>Select date:</strong>
          <DateTime onChange={(d)=>{
            this.setState({ selectedDate: d.toDate() })
          }} timeFormat={false} isValidDate={ valid } />

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select time:</ControlLabel>
            <FormControl componentClass="select" placeholder="select time"
              value={this.state.value}
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
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Additional job details</ControlLabel>
            <FormControl componentClass="textarea"
              placeholder="i.e. interior or exterior, best number to reach you at, etc"
              value={this.state.value}
              onChange={ (ev) => {
                this.setState({jobDetails: ev.target.value})
              }
            }/>
            <FormControl.Static>
              A representative will call you shortly to confirm your booking details.
            </FormControl.Static>
          </FormGroup>
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    client: state.client
  }
}

export default connect(mapStateToProps)(BookPaintingForm)
