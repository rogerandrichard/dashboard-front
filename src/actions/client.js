//import { push } from 'react-redux'
adminLogIn, adminLogOut

export function getClient(id){
   return dispatch => {

      fetch(`http://localhost:3000/clients/${id}`)
        .then(resp => resp.json())
        .then(data => {
           console.log('**Client***', data.client)
           console.log('**Prices***', data.prices)
          return dispatch({type: 'GET_CLIENT', payload: {data: data}})
        })
        .catch()
   }
}

export function adminLogIn(){
   return dispatch => {
          return dispatch({type: 'ADMIN_LOG_IN', payload: {data: null}})
   }
}

export function adminLogOut(){
   return dispatch => {
          return dispatch({type: 'ADMIN_LOG_OUT', payload: {data: null}})
   }
}


export function editClient(edit_client){
   return dispatch => {

      fetch(`http://localhost:3000/clients/${edit_client.id}`,{
        method: 'PUT',
        body: JSON.stringify({name: edit_client.name, phone: edit_client.phone,
          email: edit_client.email}),
        headers: new Headers({'Content-type': 'application/json'})

      })
        .then(resp => resp.json())
        .then(data => {
           console.log('**Client***', data.client)
          return dispatch({type: 'EDIT_CLIENT', payload: {data: data}})
        })
        .catch()
   }
}


export function getAllClients(){
   return dispatch => {

      fetch(`http://localhost:3000/clients`)
        .then(resp => resp.json())
        .then(data => {
           console.log('**Client***', data)
          // var data5 = data.clients
          // console.log("size", data5.length)
          // for(var i = 0; i < data5.length; i++){
          //   console.log('Data*****', data5[i])
          // }
          return dispatch({type: 'GET_ALL_CLIENTS', payload: {data: data}})
        })
        .catch()
   }
 }
