import {names} from '../actions'

export default (state = 'all', action) => {
  switch (action.type) {
    case names.SELECT_FILTER:
      return action.payload
    default:
      return state
  }
}

const getSelectedFilter = state => state

export const selectors = {
  getSelectedFilter
}
