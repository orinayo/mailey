import { combineReducers } from 'redux'
import authReducer from './authReducer'
import surveysReducer from './surveysReducer'

// Combine all reducers into, then pass it to store
export default combineReducers({
  auth: authReducer,
  surveys: surveysReducer
})
