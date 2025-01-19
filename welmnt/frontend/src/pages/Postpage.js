import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../services/api';
import PostDetail from '../components/PostDetail';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const fetchedPost = await fetchPostById(id);
      setPost(fetchedPost);
    };

    getPost();
  }, [id]);

  return <PostDetail post={post} />;
};

export default PostPage;
