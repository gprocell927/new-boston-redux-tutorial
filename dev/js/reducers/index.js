import { combineReducers } from 'redux'
import UserReducer from './reducer_users'

const allReducers = combineReducers({ //creates our main store
  users: UserReducer
})

export default allReducers
