import { combineReducers } from 'redux'
import currentUser from './currentUserReducer'
import todos from './todosReducer'


export default combineReducers({
  currentUser,
  todos
})