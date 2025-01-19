import React from 'react';
import { Link } from 'react-router-dom';

// PostList Component
export const PostList = ({ posts }) => {
  if (!posts?.length) return (
    <div className="flex items-center justify-center h-96">
      <p className="text-gray-500 font-light">No posts available</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extralight text-gray-800 text-center mb-4">
          Our Stories
        </h1>
        <p className="text-center text-gray-500 mb-12 font-light">
          Discover our latest thoughts, ideas, and insights
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={post.coverImage.url}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={post.author.profilePicture?.url}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">{post.author.name}</p>
                    <p className="text-xs text-gray-500 font-light">
                      {new Date(post.publishDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                
                <h2 className="text-xl font-medium text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 font-light">
                  {post.excerpt || 'Read this fascinating story...'}
                </p>
                
                <Link
                  to={`/posts/${post.id}`}
                  className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700"
                >
                  Read article
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;