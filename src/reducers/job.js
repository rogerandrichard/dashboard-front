

let initialState = {
    num_jobs: 0,
    data: [],
    username: '',
    password: '',
    completed_jobs: [],
    current_jobs: [],
    upcoming_jobs: [],
    error: null,
    loading: false,
}

function jobReducer(state = initialState, action) {
    switch(action.type) {
        case 'BOOK_JOB':
            console.log("Reducer 1 >>> Book Job:", action.payload.data)
            let jobs=action.payload.data
            return {
                ...state,
                current_jobs: jobs.current_jobs,
                completed_jobs: jobs.completed_jobs,
                upcoming_jobs: jobs.upcoming_jobs
            }
        case 'DELETE_JOB':
            console.log("Payload Data:", action.payload.data)
            jobs=action.payload.data
            return {
                ...state,
                upcoming_jobs: jobs.upcoming_jobs
            }
        case 'CLEAR_JOBS':
            console.log("Payload Data in Clear Jobs:")
            return {
                ...state,
                upcoming_jobs: [],
                completed_jobs: [],
                current_jobs: []
            }
        case 'COMPLETED_JOB':
            console.log("Payload Data:", action.payload.data)
            jobs=action.payload.data
            return {
                ...state,
                completed_jobs: jobs.completed_jobs,
                current_jobs: jobs.current_jobs
                    }

        case 'LOG_ITEM':
            console.log("Payload Data Log Item:", action.payload.data)
            jobs=action.payload.data
            return {
                ...state,
                completed_jobs: jobs.completed_jobs
            }

        case 'EDIT_JOB':
            console.log("Payload Data:", action.payload.data)
            jobs=action.payload.data
            return {
                ...state,
                upcoming_jobs: jobs.upcoming_jobs,
                current_jobs: jobs.current_jobs,
                completed_jobs: jobs.completed_jobs
            }

        case 'PAID_JOB':
            console.log("Payload Data:", action.payload.data)
            jobs=action.payload.data
            return {
                ...state,
                completed_jobs: jobs.completed_jobs
            }

        case 'GET_JOBS':
            console.log("Payload Data:", action.payload.data)
            jobs=action.payload.data
            return {
                ...state,
                completed_jobs: jobs.completed_jobs,
                current_jobs: jobs.current_jobs,
                upcoming_jobs: jobs.upcoming_jobs,
                loading: true
            }

        case 'INVOICE_PDF':
            console.log("Payload Data:", action.payload.data)
            //jobs=action.payload.data
            return state

    default:
        return state
    }
}

export default jobReducer;
