import { combineReducers } from 'redux'
import authReducer from './authReducer'
import surveysReducer from './surveysReducer'

// Combine all reducers into, then pass it to store
export default combineReducers({
  authReducer,
  surveysReducer
})
