import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";

const Feed = ({ posts, handleDelete }) => {
  return (
    <div className="feed">
      <div className="feedTitle">
        <h2 className="feedHeader">Your Posts</h2>
        <Link to="/post" className="addPostLink">
          <span className="addPost" style={{ cursor: "pointer" }}>+</span>
        </Link>
      </div>
      <div className="postContainer">
      {posts.map((post) => (
        <Post key={post.id} post={post} handleDelete={handleDelete} />
      ))}
      </div>
    </div>
  );
};

export default Feed;
