import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import PostList from '../components/PostList';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    };

    getPosts();
  }, []);

  return <PostList posts={posts} />;
};

export default HomePage;
