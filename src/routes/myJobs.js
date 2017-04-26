import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EditMyJobForm from '../components/EditMyJobForm'
import SignPickUpModal from '../components/signPickUpModal'
import JobLogModal from '../components/JobLogModal'
import ShowJobLogs from '../components/ShowJobLogs'
import { deleteJob, completedJob, editJob } from '../actions/job'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TakeMoney from '../components/StripeCheckout'
import MyJobsJumbotron from '../components/MyJobsJumbotron'
const Currency = require('react-currency')

import {
  Table, Tabs, Tab, Button, ButtonGroup, Jumbotron, DropdownButton, Badge
} from 'react-bootstrap'

const DeleteJob = (jobId) => {
  this.props.dispatch(deleteJob(jobId))
}

class myJobs extends React.Component {
  MarkCompleted = (jobId) => {
    console.log(`Job ${jobId} completed!`);
    this.props.dispatch(completedJob(jobId))
  }

  handleOnSubmit = (job_info) => {
    this.props.dispatch(editJob(job_info))
  }

  render() {
    console.log('myJobs show jobs from store', this.props.job)
    let current_client = this.props.client.current_client
    return (
      <div>
        <nav>
          <Navbar current_client={current_client.name} id={current_client.id}/>
        </nav>
        <div id="myJobsContainer">
          <Tabs defaultActiveKey={1} animation={false} id="myJobsContainer">
            <Tab eventKey={1} title="Upcoming Jobs">
              <MyJobsJumbotron title="Upcoming Jobs" jobs={this.props.job.upcoming_jobs}
                id={current_client.id} />
                {
                  this.props.job.upcoming_jobs.length > 0 &&
                  <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>Job Id</th>
                        <th>Address</th>
                        <th>Job Type</th>
                        <th>Job Price</th>
                        <th>Job Date</th>
                        <th>Job Time</th>
                        <th>Job Notes</th>
                        <th>Modify Job</th>
                      </tr>
                    </thead>
                    <tbody>
                      { this.props.job.upcoming_jobs.map((job) => {
                        return (
                          <tr key={job.id}>
                            <td>JB{job.id}</td>
                            <td>{job.address}</td>
                            <td>{job.jobdesc}</td>
                            <td>{job.price!=null ? <Currency symbol="$" value={ job.price * 100} /> : "TBD"}</td>
                            <td>{job.sdate}</td>
                            <td>{job.stime}</td>
                            <td>{job.notes}</td>
                            <td>
                              <ButtonGroup vertical>
                                <Button bsStyle="danger" bsSize="xsmall"
                                  onClick={
                                    ()=>this.props.dispatch(deleteJob(job.id))}>
                                  Delete Job
                                </Button>
                                <EditMyJobForm job={job} onSubmit={this.handleOnSubmit} />
                              </ButtonGroup>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                }
              </Tab>
              <Tab eventKey={2} title="Current Jobs">
                <MyJobsJumbotron title="Current Jobs" jobs={this.props.job.current_jobs} />
                {
                  this.props.job.current_jobs!=null &&  this.props.job.current_jobs.length > 0 &&
                  <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>Job Id</th>
                        <th>Address</th>
                        <th>Job Type</th>
                        <th>Job Price</th>
                        <th>Job Date</th>
                        <th>Job Time</th>
                        {this.props.client.admin ? <th>Admin Only</th> : null}
                      </tr>
                    </thead>
                    <tbody>
                      { this.props.job.current_jobs.map((job) => {
                        return (
                          <tr key={job.id}>
                            <td>JB{job.id}</td>
                            <td>{job.address}</td>
                            <td>{job.jobdesc}</td>
                            <td>{job.price ? <Currency symbol="$" value={ job.price * 100} /> : "TBD"}</td>
                            <td>{job.sdate}</td>
                            <td>{job.stime}</td>
                            {
                              this.props.client.admin ?
                              <td>
                                <Button bsStyle="success" bsSize="small"
                                  onClick={() => this.MarkCompleted(job.id)}>
                                  Mark Completed
                                </Button>
                              </td>
                              : null
                            }
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                }
              </Tab>
              <Tab eventKey={3} title="Completed jobs">
                <MyJobsJumbotron title="Completed Jobs" jobs={this.props.job.completed_jobs} />
                  {
                    this.props.job.completed_jobs.length > 0 &&
                    <Table striped bordered condensed hover>
                      <thead>
                        <tr>
                          <th>Job Id</th>
                          <th>Address</th>
                          <th>Job Type</th>
                          <th>Job Price</th>
                          <th>Date Completed</th>
                          <th>Job Crew</th>
                          <th>Rec Status</th>
                          <th>Job Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        { this.props.job.completed_jobs.map((job) => {
                          return (
                            <tr key={job.id}>
                              <td>JB{job.id}</td>
                              <td>{job.address}</td>
                              <td>{job.jobdesc}</td>
                              <td><Currency symbol="$" value={ job.price * 100} /></td>
                              <td>{job.datebi}</td>
                              <td>{job.crew}</td>
                              <td>{job.recstatus}</td>
                              <td>
                                <ButtonGroup vertical>
                                  <TakeMoney amount={job.price * 100} jobid={job.id}/>
                                  <DropdownButton title="Job Actions" id="jobActionsDropDown">
                                    <SignPickUpModal title="Sign Pick Up"
                                      commentTitle="Additional notes: i.e. if the sign was moved"
                                      btnName="Request Sign Pick Up" jobId={job.id}
                                    />
                                    <JobLogModal title="Quality Issue"
                                      commentTitle="We are very sorry if you are not satified with our service, please tell us more about your experience"
                                      btnName="Send Quality Issue" jobId={job.id}
                                    />
                                    <JobLogModal title="Job Feedback"
                                      commentTitle="Please tell us how we did"
                                      btnName="Send Feedback" jobId={job.id}
                                    />
                                    <ShowJobLogs jobId={job.id} jobLogs={job.job_logs}/>
                                  </DropdownButton>
                                </ButtonGroup>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </Table>
                  }
              </Tab>
            </Tabs>
        </div>
        <footer>
          <Footer/>
        </footer>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    job: state.job,
    client: state.client
  }
}

export default connect(mapStateToProps)(myJobs);
