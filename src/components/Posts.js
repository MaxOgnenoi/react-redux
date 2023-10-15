import React from "react";
import Post from "./Post";
import {connect} from 'react-redux'

const Posts = ({ syncPosts }) => {
    if (!syncPosts.length) {
        return <p className="text-center">Sorry, there are no posts yet.</p>
    }
    return syncPosts.map(post => <Post post={post} key={post.id} />)
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(null, null)(Posts)