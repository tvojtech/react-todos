import React from 'react'
import {connect} from 'react-redux'
import {selectors} from '../reducers'
import * as actions from '../actions'

const List = ({todos, toggleTodo, isFetching, isFetchError, fetchTodos}) => {
  if (isFetching) {
    return <div>Loading...</div>
  }
  if (isFetchError) {
    return <div>Fetch error. <input type="button" onClick={fetchTodos} value="Retry"/></div>
  }
  return (
    <ul>
      {todos.map(
        t =>
          <li key={t.id} onClick={() => toggleTodo(t)}
              style={{
                textDecoration: t.finished && 'line-through' || 'none',
                color: t.finished && 'grey',
              }}>
            {t.text}
          </li>
      )}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: selectors.getTodos(state),
  isFetching: selectors.isFetchingTodos(state),
  isFetchError: selectors.isFetchErrorTodos(state),
})

export default connect(mapStateToProps, actions)(List)
