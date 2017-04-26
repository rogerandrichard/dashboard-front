import React from 'react'
import { connect } from 'react-redux'
import { addJob } from '../actions'
import { store } from '../store'

let AddJob = ({ dispatch }) => {

  let input

  return (
    <div>
      <label>Special Requests</label>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addJob(input.value))
        console.log('Store: ', store.getState())
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Request
        </button>
      </form>
    </div>
  )
}

AddJob = connect()(AddJob)

export default AddJob
