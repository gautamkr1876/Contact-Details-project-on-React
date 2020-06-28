import * as actions from '../actions/postsActions'

export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
}
//A reducer is a function that takes two parameters: state and action. 
export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true }
    case actions.GET_POSTS_SUCCESS:
      return { posts: action.payload, loading: false, hasErrors: false }
    case actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}