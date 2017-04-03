import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {selectors} from '../reducers'

const Add = ({addTodo, isFetchingTodos}) => {
  let input;
  return (
    <form onSubmit={evt => {
      evt.preventDefault()
      addTodo(input.value)
      input.value = ''
    }}>
      <input type="text" ref={node => input = node}/>
      <button type="submit" disabled={isFetchingTodos}>Submit</button>
    </form>
  )
}

const mapStateToProps = state => ({
  isFetchingTodos: selectors.isFetchingTodos(state)
})

export default connect(mapStateToProps, actions)(Add)
