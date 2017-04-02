import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {selectors} from '../reducers'

const Filters = ({selectFilter, selectedFilter}) => (
  <div>
    Show:&nbsp;
    <a onClick={() => selectFilter('open')} style={{
      textDecoration: selectedFilter === 'open' ? 'underline' : 'none'
    }}>Open</a>{' '}
    <a onClick={() => selectFilter('closed')} style={{
      textDecoration: selectedFilter === 'closed' ? 'underline' : 'none'
    }}>Closed</a>{' '}
    <a onClick={() => selectFilter('all')} style={{
      textDecoration: selectedFilter === 'all' ? 'underline' : 'none'
    }}>All</a>
  </div>
)

const mapStateToProps = state => ({
  selectedFilter: selectors.getSelectedFilter(state)
})

export default connect(mapStateToProps, actions)(Filters)
