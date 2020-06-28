import { combineReducers } from 'redux'

import postsReducer from './postsReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
})
//A reducer is a function that takes two parameters: state and action. 
export default rootReducer