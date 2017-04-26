import React, {Component} from 'react';

const LoginForm = () => {
  render() {
    return (
      <div>
        <Form horizontal
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
      </div>
    )
  }
}
export default Login;
