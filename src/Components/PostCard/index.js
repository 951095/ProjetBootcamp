import React from "react";
import "./style.css";

const Index = ({ post }) => {
  console.log(post);

  return (
    <div className="post__card">
      <div className="posts__thumbnail">
        <img src={post.picture} alt={post.title} />
      </div>
      <div className="posts__content">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default Index;
