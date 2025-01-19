import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', width: '300px' }}>
            <img src={post.coverImage.url} alt={post.title} style={{ width: '100%' }} />
            <h3>{post.title}</h3>
            <p>By: {post.author.name}</p>
            <Link to={`/posts/${post.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
