import { connect } from 'react-redux'
import { UpdateJobStatus } from '../actions'
import JobList from '../components/JobList'

const getVisibleJobs = (jobs, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return jobs
    case 'SHOW_COMPLETED':
      return jobs.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return jobs.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  jobs: getVisibleJobs(state.jobs, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: UpdateJobStatus
}

const VisibleJobList = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobList)

export default VisibleJobList
