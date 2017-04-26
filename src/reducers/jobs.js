// ----------------reducers/jobs.js-------------
const job = (state, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return {
        JobId: action.job.JobId,
        jobType: action.job.jobType,
        status: undefined,
        Job: action.job
      }
    case 'UPDATE_JOB_STATUS':
      if (state.jobId !== action.jobId) {
        return state
      }

      return {
        ...state,
        status: action.status
      }
    default:
      return state
  }
}

const allJobs = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return {
        ...state,
        job: job(undefined, action)
      }
    case 'FETCH_MY_JOBS':
      return {
        ...state,
        myJobs: action.myJobs
      }
    // case 'UPDATE_JOB_STATUS':
    //   let newState = {}
    //   return {
    //     for each (t in state) {
    //       newState.t = job(t, action))
    //     }
    //   }
    default:
      return state
  }
}

export default allJobs
