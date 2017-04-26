import React, {Component} from 'react'
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
// const jobType = "W1"
//const jobPrice = 75
const yesterday = DateTime.moment().subtract( 1, 'day' );
const valid = function( current ){
    return current.isAfter( yesterday );
};


class BookW1Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
        selectedDate: null,
        selectedTime: '0',
        jobDetails: null
    }
  }

  componentDidMount () {
    // this.props.dispatch(setW1Price(jobType, jobPrice))
  }

  // price = (props) => {
  //   if (props.price === "TBD") {
  //     return "TBD"
  //   } else {
  //     return <Currency symbol="$" value={ this.props.price * 100} />
  //   }
  // }

  handleOnSubmit = (e) => {
    e.preventDefault()
    var job_info = {
      clientId: this.props.client.current_client.id,
      jobType: this.props.jobType,
      jobPrice: this.props.price,  //this.props.client.current_w1,
      jobDate: this.state.selectedDate,
      jobTime: this.state.selectedTime,
      jobDetails: this.state.jobDetails
    }
    console.log(job_info, this.props)
    this.props.dispatch(bookJob(job_info))
    this.props.closeModal()
  }
  render () {
    // let dateChange = () => this.setState({ selectedDate: this.state.value });

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}
          //this.props.dispatch(bookJob(this.props.client.current_client))
        //  console.log('Form Submitted: ',
        //    "type", jobType, "date", this.state.selectedDate,
        //    "price", jobPrice)
        >

          <FormGroup>
            <ControlLabel>Job Type</ControlLabel>
            <FormControl.Static>
              {this.props.jobType}
            </FormControl.Static>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Job Price</ControlLabel>
            <FormControl.Static>
              {this.props.price === "TBD" ? "TBD" : <Currency symbol="$" value={ this.props.price * 100} />}
            </FormControl.Static>
          </FormGroup>
            <strong>Select date:</strong>
            <DateTime onChange={(d)=>{
                this.setState({ selectedDate: d.toDate() })
              }} timeFormat={false} isValidDate={ valid } />
            {/* <DateTime onChange={(d)=>{
                  this.setState({selectedTime: d.getHours()})
                }}
              timeConstraints={ hours: { min: 8, max: 12, step: 2 }}
              dateFormat={false}/> */}
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select time:</ControlLabel>
            <FormControl componentClass="select" placeholder="select time"
              value={this.state.value} defaultValue={this.state.selectedTime}
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
              placeholder="i.e. call ahead of arrival"
              value={this.state.value}
              onChange={ (ev) => {
                this.setState({jobDetails: ev.target.value})
              }
            }/>
          </FormGroup>
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    client: state.client
  }
}

export default connect(mapStateToProps)(BookW1Form)
