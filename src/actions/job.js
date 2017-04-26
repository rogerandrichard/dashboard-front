

// export function bookJob(job_info){
//   dispatch({type: 'BOOK_JOB', payload: {data: data}})
//    return dispatch => {
//       console.log("JOB INFO M:", job_info)
//       fetch('http://localhost:3000/jobs', {
//         method: 'POST',
//         body: JSON.stringify({clientId: job_info.clientId, jobDesc: job_info.jobType,
//           jobPrice: job_info.jobPrice, jobDate: job_info.jobDate,
//           jobTime: job_info.jobTime, jobDetails: job_info.jobDetails}),
//         headers: new Headers({'Content-type': 'application/json'})
//       })
//         .then(resp => resp.json())
//         .then(data => {
//            console.log("Job return: ", data)
//            return
//         })
//         .catch()
//    }
//  }
export function bookJob(job_info){
   return dispatch => {
      console.log("ACTION 1>>> Book Job:", job_info)
      fetch('http://localhost:3000/jobs', {
        method: 'POST',
        body: JSON.stringify({clientId: job_info.clientId, jobDesc: job_info.jobType,
          jobPrice: job_info.jobPrice, jobDate: job_info.jobDate,
          jobTime: job_info.jobTime, jobDetails: job_info.jobDetails}),
        headers: new Headers({'Content-type': 'application/json'})
      })
        .then(resp => resp.json())
        .then(data => {
           console.log("ACTION 2>>> Book Job:", data)
           return dispatch({type: 'BOOK_JOB', payload: {data: data}})
        })
        .catch()
   }
 }

 export function deleteJob(id){
   return dispatch => {
      fetch(`http://localhost:3000/jobs/${id}`, {
        method: 'DELETE'
      })
        .then(resp => resp.json())
        .then(data => {
           console.log('**Deleted Job***', data)
          return dispatch({type: 'DELETE_JOB', payload: {data: data}})
        })
        .catch()
   }
}

export function clearJobs(){
   return dispatch => {
           console.log('**Clear Jobs***')
          return dispatch({type: 'CLEAR_JOBS', payload: {data: null}})
   }
}

export function completedJob(id){
    console.log("ACTION 1>>> Completed Job:", id)
    return dispatch => {
      fetch(`http://localhost:3000/jobs/${id}`, {
        method: 'PUT'
       })
        .then(resp => resp.json())
        .then(data => {
          console.log("ACTION 2>>> Completed Job:", data)
          return dispatch({type: 'COMPLETED_JOB', payload: {data: data}})
        })
        .catch()
   }
}

export function editJob(job_info){
   return dispatch => {
      fetch(`http://localhost:3000/jobs/${job_info.jobId}/edit`, {
        method: 'POST',
          body: JSON.stringify({jobDate: job_info.jobDate,
          jobTime: job_info.jobTime, jobDetails: job_info.jobDetails}),
          headers: new Headers({'Content-type': 'application/json'})
       })
        .then(resp => resp.json())
        .then(data => {
           console.log('**Edit Job***', data)
          return dispatch({type: 'EDIT_JOB', payload: {data: data}})
        })
        .catch()
   }
}


export function logItem(log_info){
   console.log("LOG ITEM M:", log_info)
   return dispatch => {
      fetch(`http://localhost:3000/job_logs`, {
        method: 'POST',
          body: JSON.stringify({jobID: log_info.job_id,
          logType: log_info.log_type, logComments: log_info.comments}),
          headers: new Headers({'Content-type': 'application/json'})
       })
        .then(resp => resp.json())
        .then(data => {
          console.log('**Log Item***', data)
          return dispatch({type: 'LOG_ITEM', payload: {data: data}})
        })
        .catch()
   }
}

export function getJobs(id){
   return dispatch => {
      fetch(`http://localhost:3000/jobs/${id}/get_jobs`)
        .then(resp => resp.json())
        .then(data => {
           console.log('**Get Jobs***', data)
          return dispatch({type: 'GET_JOBS', payload: {data: data}})
        })
        .catch()
   }
}


export function paidJob(id){
   return dispatch => {
      fetch(`http://localhost:3000/jobs/${id}/paid`)
        .then(resp => resp.json())
        .then(data => {
           console.log('**Paid Job***', data)
          return dispatch({type: 'PAID_JOB', payload: {data: data}})
        })
        .catch()
   }
}



export function invoicePdf(id){
   console.log("GOT IN PDF")
   return dispatch => {
      fetch(`http://localhost:3000/jobs/${id}/print_pdf.pdf`)
        .then(resp => resp.json())
        .then(data => {
           console.log('**PDF***', data)
          return dispatch({type: 'INVOICE_PDF', payload: {data: data}})
        })
        .catch()
   }
}



