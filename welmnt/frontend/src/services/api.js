import axios from 'axios';

const API_URL = 'http://localhost:4000/api/posts'; // Backend URL

export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.docs; // Adjust according to the structure of your API response
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const fetchPostById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    return null;
  }
};
