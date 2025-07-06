import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post</h1>
        <p className="text-xl text-gray-600">Blog post ID: {id}</p>
        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          <p className="text-gray-600">Full blog post content will be implemented here.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
