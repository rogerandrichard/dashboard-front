import React, { Component } from 'react';
import {
  Table , Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button
} from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../images/WhiteShark.png'
import { connect } from 'react-redux'
import { getAllClients, adminLogIn, adminLogOut} from '../actions/client'

// const Clients = () => <h1>All Clients</h1>

class Admin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null,
      showLogin: true
    };
  }
  componentWillMount () {
    this.props.client.admin ? this.setState({
      showLogin: false,
      showClients: true
    }) : null
    //   this.props.dispatch(getAllClients());
  }

  signIn = (admin_cred) => {
    if (admin_cred.email === "bobTheBuilder@yeswecan.io"
    && admin_cred.password === "password123") {
      this.props.dispatch(adminLogIn())
    }
    else { alert("Your credentials are incorrect.") }
  }

  render() {
    let current_client = this.props.client.current_client
    return (
      <div id="admin-container">
        <Navbar current_client={current_client.name} id={current_client.id} />
        <Form horizontal show={this.state.showLogin}
          onSubmit={e => {
            e.preventDefault()
            console.log(this.state)
            const admin_cred = {
              // clientId,
              email: this.state.email,
              password: this.state.password
            }
            this.signIn(admin_cred)
            this.setState({
              email: null,
              password: null
            })
          }}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email"
                value={this.state.value}
                onChange={ (ev) => {
                  this.setState({email: ev.target.value})
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password"
                value={this.state.value}
                onChange={ (ev) => {
                  this.setState({password: ev.target.value})
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in as Admin
              </Button>
            </Col>
          </FormGroup>
        </Form>
        <Footer />
        {/* <Clients show={this.state.showClients}/> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    client: state.client
  }
}

export default connect(mapStateToProps)(Admin)
