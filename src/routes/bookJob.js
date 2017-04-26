import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import {
  getClient, editClient, getAllClients, adminLogIn, adminLogOut
} from '../actions/client'
import {
  clearJobs, deleteJob, invoicePdf, editJob, paidJob, logItem, getJobs
} from '../actions/job'
import Footer from '../components/Footer'
import { store, history } from '../store'

class BookJob extends Component {

 constructor(props) {
    super(props)
  }

  componentWillMount () {
    let s=this.props.location.pathname
    var r = /\d+/
    let cfid1 = s.match(r)
    let cfid2
    if(this.props.current_client !== null){
      cfid2 = this.props.current_client.id
    }
    let cfid
    if(cfid1!=='' && cfid1!==null){
      cfid=cfid1
    }else{
      cfid=cfid2
    }
    if(cfid!=='' && cfid!==null){
      this.props.dispatch(clearJobs());
      this.props.dispatch(getClient(cfid));
      this.props.dispatch(getJobs(cfid));
    }
      // var edit_client = {   //     >>> Test Data for editClient()
      //   id: cfid,
      //   name: 'Alex The Great',
      //   phone: '555-555-5555',
      //   email: 'alex@great.com'
      // }
      //this.props.dispatch(editClient(edit_client))  >>> pass edit_client object here
      //this.props.dispatch(deleteJob(32))   >>> pass jobid here.
      // var edit_job = {     //  >>> Test Data for editJob()
      //   jobID: 33,
      //   jobDate: '2017-04-04',
      //   jobTime: '8 AM',
      //   jobDetails: 'Test Job Details'
      // }
      //this.props.dispatch(editJob(edit_job));    >>> pass edit_job object here
      //this.props.dispatch(completedJob(this.props.jobid));  >>> pass jobid here
      //this.props.dispatch(paidJob(33));     >>> Marks Job Paid(use in Stripe Checkout)
      // var log_info = {
      //   jobID: 35,
      //   logType: 'Quality Issue',     // Sign Pick Up, Job Feedback
      //   logComments: 'Test Log'
      // }
      // this.props.dispatch(logItem(log_info))
      // //this.props.dispatch(invoicePdf(33));
      // this.props.dispatch(adminLogIn())
      //this.props.dispatch(adminLogOut())
     // }else{
      // this.props.dispatch(getAllClients());
     // }
  }

  Client_name = () => {
    let current_client = this.props.current_client
    if (current_client) {
      return (
        <Navbar current_client={current_client.name} id={current_client.id} />
      )
    } else {
      <Navbar />
    }
  }

  render() {
    let current_client = this.props.current_client
    return (
      <div>
        <nav>
          {this.Client_name()}
        </nav>
        <div className="main-container">
          {
            (this.props.loading1 && this.props.loading2) ?
            <Products
            w1={this.props.current_w1}
            eh={this.props.current_eh}
            w2={this.props.current_w2}
            current_client={ this.props.current_client }/> :
            <img id="loadingGif"
            src="http://www.lmholiday.com/images/loading.gif"
            alt="HTML5 Icon" width="128" height="128"/>
          }
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    current_client: state.client.current_client,
    current_w2: state.client.current_w2,
    current_w1: state.client.current_w1,
    current_eh: state.client.current_eh,
    loading1: state.client.loading,
    loading2: state.job.loading,
    job: state.job
  }
}

export default connect(mapStateToProps)(BookJob)


//  <Products client={this.props.client.current_client}/>

// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { push, Link } from 'react-router-redux'
// import NumJobs from '../components/NumJobs'
// import { testMyJobs, addOne, getClients, changeUserName, changePassword, verifyPassword } from '../actions/myjobs'

// const ClientList = (props) => {
//   console.log("Props in component: ", props.clients)
//   return (
//     <ul>

//    { props.clients.map( client => { return <Client name={client.name} address={client.address} /> } ) }

//     </ul>
//   )
// }
// const Client = (props) => {
//   return (
//     <li>
//       {props.name} {props.address}
//     </li>
//   )
// }

// class MyJobsContainer extends Component{

//   componentDidMount(){

//     this.props.dispatch(testMyJobs());
//    // console.log("My Props num_jobs:" +this.props.myJobs.num_jobs);

//   }

//   _increment = () => {
//     let new_num = this.props.myJobs.num_jobs + 1;
//     this.props.dispatch(addOne(new_num));
//   }

//   _getclients = () =>{
//     this.props.dispatch(getClients());
//   }

//   _handleUserNameChange = (event) =>{
//      this.props.dispatch(changeUserName(event.target.value));
//   }

//   _handlePasswordChange = (event) =>{
//      this.props.dispatch(changePassword(event.target.value));
//   }

//   _handleSubmit = (event) =>{
//     event.preventDefault();
//     let user = this.props.myJobs.username
//     let password = this.props.myJobs.password
//     console.log("User!!", this.props.myJobs.username)
//     console.log("Pass!!", this.props.myJobs.password)
//     this.props.dispatch(verifyPassword(user, password));
//      //name = event["username"].value;
//    //debugger
//   }
//   render(){
//     console.log("this.props.num_jobs:" + this.props.myJobs.num_jobs)
//      console.log("this.props.myJobs.data:" + this.props.myJobs.data)
//     if (this.props.myJobs.loading) {
//       return <img src="" />
//     } else {

//      return(
//       <div>
//         <NumJobs num_jobs={this.props.myJobs.num_jobs}/>
//         <button onClick={this._increment}>Increment: +</button>

//         <button onClick={this._getclients}>Get Clients</button>
//         <button onClick={() => this.props.dispatch(push('/navbar'))}>Back To Home</button>

//         <ClientList clients={this.props.myJobs.data} />

//           <form onSubmit={this._handleSubmit}>
//             <input type="text"
//               name='username'
//               placeholder="username"
//               onChange={this._handleUserNameChange}
//               //value={this.props.myJobs.username}
//               />
//             <input type="password"
//               name='password'
//               placeholder="password"
//               onChange={this._handlePasswordChange}
//               //value={this.props.myJobs.password}
//               />
//             <input type="submit" value="Login" />
//           </form>
//       </div>

//     )
//    }
//   }
// }

// //this.props.dispatch(testMyJob())
// // this.props.testMyJob()

// const mapStateToProps = (state) => {
//       console.log("Num Jobs " + state.myjobs.num_jobs)
//   return {
//       myJobs: state.myjobs,
//     }
// }

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     testMyJobs: testMyJobs
// //   }
// // }

// export default connect(mapStateToProps)(MyJobsContainer);
