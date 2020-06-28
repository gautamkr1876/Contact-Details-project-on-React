import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postsActions'
import  Post from '../components/Post.jsx'

const Contact = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  // Show loading, error, or success state
  const renderPosts = (params) => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return posts.map(post => post.group===params?<Post key={post.id} post={post} />:"")
  }

  return (
    <section>
      <h1>Posts</h1>
      <h1>Home</h1>
        {renderPosts("home")}
    <h1>office</h1>
    {renderPosts("office")}
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(Contact);