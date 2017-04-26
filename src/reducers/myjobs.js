
let initalState = {
    num_jobs: 0,
    data: [],
    username: '',
    password: '',
    error: null,
    loading: false,
}

function myjobsReducer(state = initalState, action) {

    switch(action.type) {
        case 'CHANGE_USERNAME':
            return {
                ...state,
                username: action.payload.username
            }
        case 'CHANGE_PASSWORD':
            return {
                ...state,
                password: action.payload.password
            }
        case 'GET_CLIENTS':
            return {
                ...state,
                data: action.payload.data
            }
        case 'TEST_MYJOBS':
            return {
                ...state,
                num_jobs: action.payload.num_jobs
            }
        case 'FETCH_COUNT_ERROR':
            return {
                ...state,
                count: 0,
                error: action.payload.error
            }
        case 'FETCHING_CLIENTS':
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}

export default myjobsReducer;