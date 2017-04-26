import React, { PropTypes } from 'react'
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

const Job = ({ onClick, completed, text }) => {
  return (
    <div>
      <label>Request Odd Job</label>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Textarea</ControlLabel>
          <FormControl componentClass="textarea" placeholder="textarea" />
        </FormGroup>
        <Button Click={onClick}>Submit</Button>
    </div>
  )
}

Job.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Job
