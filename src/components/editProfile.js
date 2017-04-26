import React from 'react';
// import { connect } from 'react-redux'
import { editClient } from '../actions/client'
import { push } from 'react-router-redux'

import {
  Button, FormGroup, FormControl, ControlLabel, HelpBlock, Collapse, ButtonToolbar
} from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


class editProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nameChange: this.props.client.name,
      emailChange: this.props.client.email,
      numberChange: this.props.client.phone,
    };
  }
  render() {
    let client = this.props.client
    return (
      <div className="container">
        <div className="center-block">
          <Button onClick={ ()=> this.setState({ open: !this.state.open })}
            bsStyle="primary" bsSize="xsmall" >
            Edit Profile
          </Button>
          <Collapse id="editProfileContainer"
            in={this.state.open} >
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault()
                  let client_info = {
                    id: client.id,
                    name: this.state.nameChange,
                    email: this.state.emailChange,
                    phone: this.state.numberChange
                  }
                  this.props.handleOnSubmit(client_info)
                  this.setState({ open: !this.state.open })
                }}>

                <FieldGroup
                  id="formControlsName"
                  type="text"
                  label="Change Name"
                  defaultValue={client.name}
                  onChange={ (ev) => {
                    this.setState({nameChange: ev.target.value})
                  }}
                />

                <FieldGroup
                  id="formControlsEmail"
                  type="email"
                  label="Change Email"
                  defaultValue={client.email}
                  onChange={ (ev) => {
                    this.setState({emailChange: ev.target.value})
                  }}
                />

                <FieldGroup
                  id="formControlsPhone"
                  type="text"
                  label="Change Phone Number"
                  defaultValue={client.phone}
                  onChange={ (ev) => {
                    this.setState({numberChange: ev.target.value})
                  }}
                />

                <ButtonToolbar>
                  <Button bsStyle="primary" type="submit">
                    Submit
                  </Button>
                  <Button type="reset">
                    Clear changes
                  </Button>
                </ButtonToolbar>
              </form>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default editProfile;
