export const GET_POSTS = 'GET POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

// Create Redux action creators that return an action
export const getPosts = () => ({
    type: GET_POSTS,
  })
  
  export const getPostsSuccess = posts => ({
    type: GET_POSTS_SUCCESS,
    payload: posts,
  })
  
  export const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE,
  })

  export function fetchPosts() {
    return async dispatch => {
      dispatch(getPosts());
  
      try {
        const response = await fetch('https://run.mocky.io/v3/df5a2337-f666-4c27-b09f-241d7e12e258');
        const data = await response.json();
        dispatch(getPostsSuccess(data));
      } catch (error) {
        dispatch(getPostsFailure());
      }
    }
  }
