import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'

const Add = ({addTodo}) => {
  let input;
  return (
    <form onSubmit={evt => {
      evt.preventDefault()
      addTodo(input.value)
      input.value = ''
    }}>
      <input type="text" ref={node => input = node}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default connect(null, actions)(Add)
