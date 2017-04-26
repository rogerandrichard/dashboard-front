//-----------------actions/index.js---------------
let nextJobId = 10
export const addJob = (job) => ({
  type: 'ADD_JOB',
  JobId: nextJobId++,
  job
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const updateJobStatus = (vars) => ({
  type: 'UPDATE_JOB_STATUS',
  vars
})

export const fetchMyJobs = (myJobs) => ({
  type: 'FETCH_MY_JOBS',
  myJobs
})
