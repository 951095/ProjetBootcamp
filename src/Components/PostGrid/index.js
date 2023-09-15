import React from "react";
import PostCard from "../PostCard";

const Index = ({ posts }) => {
  return (
    <div className="posts__grid">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Index;
