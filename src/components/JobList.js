import React, { PropTypes } from 'react'
import Job from './Job'

const JobList = ({ jobs, onJobClick }) => (
  <ul>
    {jobs.map(job =>
      <Job
        key={job.id}
        {...job}
        onClick={() => onJobClick(job.id)}
      />
    )}
  </ul>
)

JobList.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onJobClick: PropTypes.func.isRequired
}

export default JobList
