import React from 'react';

const PostDetail = ({ post }) => {
  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <img src={post.coverImage.url} alt={post.title} style={{ width: '100%' }} />
      <h1>{post.title}</h1>
      <p>By: {post.author.name}</p>
      <p>{post.body}</p>
      <div>
        <h3>About the Author</h3>
        <p>{post.author.bio}</p>
      </div>
    </div>
  );
};

export default PostDetail;
