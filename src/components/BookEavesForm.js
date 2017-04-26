import React from 'react'
import { connect } from 'react-redux'
import DateTime from 'react-datetime'
const Currency = require('react-currency');
import { bookJob } from '../actions/job'

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

const BookEavesForm = React.createClass({
  componentDidMount () {
    // this.props.dispatch(setW1Price(jobType, jobPrice))
  },

  getInitialState() {
    return {
      eavesType: '',
      selectedDate: '',
      selectedTime: 'Anytime',
      jobDetails: ''
    };
  },

  render () {
    // let dateChange = () => this.setState({ selectedDate: this.state.value });

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          var job_info = {
            clientId: this.props.client.current_client.id,
            jobType: 'EH',
            jobPrice: this.props.eh,
            jobDate: this.state.selectedDate,
            jobTime: this.state.selectedTime,
            jobDetails: this.state.jobDetails
          }
          this.props.closeModal()
          console.log(job_info)
            this.props.dispatch(bookJob(job_info))
    // ----------------------------------------------------
          //this.props.dispatch(bookJob(this.props.client.current_client))
        //  console.log('Form Submitted: ',
        //    "type", jobType, "date", this.state.selectedDate,
        //    "price", jobPrice)
        }}>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select Job Type:</ControlLabel>
          <FormControl componentClass="select" placeholder="select Job Type"
            value={this.state.value}
            onChange={ (ev) => {
              this.setState({eavesType: ev.target.value})
            }
          } style={{width: '85%'}} >
            <option value="EH">Clean interior of house eaves [EH]</option>
            {/*<option value="EG">Clean interior of garage eaves [EG]</option>
            <option value="DSC">Clean the mouth of down spout and install downspout cage [DSC]</option>
            <option value="SDS">Snake downspouts and remove any clogs [SDS]</option>*/}
          </FormControl>
        </FormGroup>

          <FormGroup>
            <ControlLabel>Job Price</ControlLabel>
            <FormControl.Static>
              { <Currency symbol="$" value={ this.props.eh * 100} /> }
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
})

const mapStateToProps = (state) => {
  return {
    client: state.client
  }
}

export default connect(mapStateToProps)(BookEavesForm)
