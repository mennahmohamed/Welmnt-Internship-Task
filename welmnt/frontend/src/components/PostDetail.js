export const PostDetail = ({ post }) => {
  if (!post) return (
    <div className="flex items-center justify-center h-96">
      <div className="animate-pulse">Loading...</div>
    </div>
  );

  const renderBodyContent = (body) => {
    if (!body?.root?.children) return <p className="text-gray-500">No content available.</p>;

    return body.root.children.map((child, index) => {
      if (child.type === 'paragraph' && child.children) {
        return (
          <p key={index} className="mb-6 text-gray-700 leading-relaxed font-light">
            {child.children
              .map((nestedChild) => (nestedChild.type === 'text' ? nestedChild.text : ''))
              .join('')}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 relative">
            <img
              src={post.coverImage.url}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <h1 className="text-4xl font-light text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center">
                <img
                  src={post.author.profilePicture?.url}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <div className="ml-4">
                  <p className="text-white font-medium">{post.author.name}</p>
                  <p className="text-gray-200 text-sm">
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              {renderBodyContent(post.body)}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-light text-gray-800 mb-4">About the Author</h3>
              <div className="flex items-start">
                <img
                  src={post.author.profilePicture?.url}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">{post.author.name}</h4>
                  <p className="text-gray-600 font-light leading-relaxed">{post.author.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};


export default PostDetail;
