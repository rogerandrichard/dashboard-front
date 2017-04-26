import React, { Component } from 'react';
import { connect } from 'react-redux'
import { push, Link } from 'react-router-redux'
import NumJobs from '../components/NumJobs'
import { testMyJobs, addOne, getClients, changeUserName, changePassword, verifyPassword } from '../actions/myjobs'


const ClientList = (props) => {
  console.log("Props in component: ", props.clients)
  return (
    <ul>

   { props.clients.map( client => { return <Client name={client.name} address={client.address} /> } ) }


    </ul>
  )
}
const Client = (props) => {
  return (
    <li>
      {props.name} {props.address}
    </li>
  )
}


class MyJobsContainer extends Component{

  componentDidMount(){

    this.props.dispatch(testMyJobs());
   // console.log("My Props num_jobs:" +this.props.myJobs.num_jobs);

  }

  _increment = () => {
    let new_num = this.props.myJobs.num_jobs + 1;
    this.props.dispatch(addOne(new_num));
  }

  _getclients = () =>{
    this.props.dispatch(getClients());
  }

  _handleUserNameChange = (event) =>{
     this.props.dispatch(changeUserName(event.target.value));
  }

  _handlePasswordChange = (event) =>{
     this.props.dispatch(changePassword(event.target.value));
  }

  _handleSubmit = (event) =>{
    event.preventDefault();
    let user = this.props.myJobs.username
    let password = this.props.myJobs.password
    console.log("User!!", this.props.myJobs.username)
    console.log("Pass!!", this.props.myJobs.password)
    this.props.dispatch(verifyPassword(user, password));
     //name = event["username"].value;
   //debugger
  }

  render(){
    console.log("this.props.num_jobs:" + this.props.myJobs.num_jobs)
     console.log("this.props.myJobs.data:" + this.props.myJobs.data)
    if (this.props.myJobs.loading) {
      return <img src="" />
    } else {

     return(
      <div>

        <NumJobs num_jobs={this.props.myJobs.num_jobs}/>
        <button onClick={this._increment}>Increment: +</button>

        <button onClick={this._getclients}>Get Clients</button>
        <button onClick={() => this.props.dispatch(push('/navbar'))}>Back To Home</button>

        <ClientList clients={this.props.myJobs.data} />

          <form onSubmit={this._handleSubmit}>
            <input type="text"
              name='username'
              placeholder="username"
              onChange={this._handleUserNameChange}
              //value={this.props.myJobs.username}
              />
            <input type="password"
              name='password'
              placeholder="password"
              onChange={this._handlePasswordChange}
              //value={this.props.myJobs.password}
              />


            <input type="submit" value="Login" />
          </form>


      </div>

    )
   }
  }
}

//this.props.dispatch(testMyJob())
// this.props.testMyJob()

const mapStateToProps = (state) => {
      console.log("Num Jobs " + state.myjobs.num_jobs)
  return {
      myJobs: state.myjobs,
    }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     testMyJobs: testMyJobs
//   }
// }

export default connect(mapStateToProps)(MyJobsContainer);

