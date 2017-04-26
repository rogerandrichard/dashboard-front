
let initialState = {
    num_jobs: 0,
    data: [],
    clientList: null,
    current_client: null,
    current_w1: null,
    current_w2: null,
    current_eh: null,
    password: '',
    error: null,
    loading: false,
    admin: true
}

function clientReducer(state = initialState, action) {

    switch(action.type) {
        case 'GET_CLIENT':
            console.log("In GET CLIENT W1::", action.payload.data.prices[0].w1)
            return {
                ...state,
                current_client: action.payload.data.client,
                current_w1: action.payload.data.prices[0].w1,
                current_w2: (action.payload.data.prices[0].w1) * 2,
                current_eh: action.payload.data.prices[0].eh,
                loading: true
            }
        case 'EDIT_CLIENT':
           // console.log("In GET CLIENT W1::", action.payload.data.prices[0].w1)
            return {
                ...state,
                current_client: action.payload.data.client
            }
        case 'GET_ALL_CLIENTS':
           // console.log("In GET CLIENT W1::", action.payload.data.prices[0].w1)
            return {
                ...state,
                clientList: action.payload.data.client
            }

        case 'ADMIN_LOG_IN':
            return {
                ...state,
                admin: true
            }
        case 'ADMIN_LOG_OUT':
            return {
                ...state,
                admin: false
            }


        default:
        return state
    }
}

export default clientReducer;
