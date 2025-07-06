import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Electric Supercars',
      excerpt: 'Exploring how electric technology is revolutionizing the supercar industry...',
      author: 'John Doe',
      date: '2025-01-15',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&h=300&fit=crop',
      category: 'Electric'
    },
    {
      id: 2,
      title: 'Top 10 Luxury Cars of 2025',
      excerpt: 'Discover the most luxurious and technologically advanced cars of this year...',
      author: 'Jane Smith',
      date: '2025-01-10',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop',
      category: 'Luxury'
    },
    {
      id: 3,
      title: 'Maintenance Tips for Sports Cars',
      excerpt: 'Essential maintenance advice to keep your sports car in peak condition...',
      author: 'Mike Johnson',
      date: '2025-01-05',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop',
      category: 'Maintenance'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SuperCars Blog</h1>
          <p className="text-xl text-gray-600">
            Latest news, reviews, and insights from the world of luxury automobiles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="card overflow-hidden">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-primary-100 text-primary-800">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="flex items-center justify-center space-x-2 w-full btn-primary"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary px-8 py-3">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
