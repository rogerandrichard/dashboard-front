import { push } from 'react-redux'

 export function testMyJobs(){
   return dispatch => {
           return dispatch({type: 'TEST_MYJOBS', payload: {num_jobs: 5}})
   }
 }


 export function changeUserName(username){
   return dispatch => {
           return dispatch({type: 'CHANGE_USERNAME', payload: {username: username}})
   }
 }

export function changePassword(password){
   return dispatch => {
           return dispatch({type: 'CHANGE_PASSWORD', payload: {password: password}})
   }
 }

export function verifyPassword(username, password){
   return dispatch => {

      fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify({username: username, password: password}),
        headers: new Headers({'Content-type': 'application/json'})
      })
        .then(resp => resp.json())
        .then(data => {
          // console.log(data.clients)
          // var data5 = data.clients
          // console.log("size", data5.length)
          // for(var i = 0; i < data5.length; i++){
          //   console.log('Data*****', data5[i])
          // }
          //  return dispatch({type: 'GET_CLIENTS', payload: {data: data5}})
        })
        .catch()
   }
 }

// export function testMyJobs(){
//   return {
//     type: 'TEST_MYJOBS', payload: {num_jobs: 5}
//   }
// }

 export function addOne(new_num){
   return dispatch => {
     return dispatch({type: 'TEST_MYJOBS', payload: {num_jobs: new_num}})
   }
 }

 export function getClients(){
   return dispatch => {

      dispatch({ type: 'FETCHING_CLIENTS'})

      fetch('http://localhost:3000/clients/')
        .then(resp => resp.json())
        .then(data => {
          console.log(data.clients)
          var data5 = data.clients
          console.log("size", data5.length)
          for(var i = 0; i < data5.length; i++){
            console.log('Data*****', data5[i])
          }
            dispatch({type: 'GET_CLIENTS', payload: {data: data5}})
            dispatch(push('/clients'))
            return
        })
        .catch()
   }

 }

  export function getClient(id){
   return dispatch => {

      dispatch({ type: 'FETCHING_CLIENTS'})

      fetch(`http://localhost:3000/clients/${id}`)
        .then(resp => resp.json())
        .then(data => {
          console.log(data.clients)
          var data5 = data.clients
          console.log("size", data5.length)
          for(var i = 0; i < data5.length; i++){
            console.log('Data*****', data5[i])
          }
            dispatch({type: 'GET_CLIENTS', payload: {data: data5}})
            dispatch(push(`/clients/${id}`))
            return
        })
        .catch()
   }

 }
