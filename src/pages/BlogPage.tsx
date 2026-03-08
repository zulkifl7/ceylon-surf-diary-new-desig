import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import blogPosts from '../data/blog-posts.json';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  image: string;
  slug: string;
  'large-description': string[];
}

const BlogPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (slug: string) => {
    navigate(`/blog/${ slug }`);
  };

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 4);
  };

  const displayedPosts = blogPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < blogPosts.length;

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Page Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${ isLoaded
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
        >
          <h1 className="text-5xl font-jedira mb-4 py-20">Ceylon Surf Blogs</h1>
        </div>

        {/* Blog Posts Grid */}
        <div className="space-y-12">
          {displayedPosts.map((post: BlogPost, index) => (
            <div
              key={post.id}
              className={`bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all ${ isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
              style={{
                transitionDuration: '1200ms',
                transitionTimingFunction: 'cubic-bezier(0.2, 0, 0, 1)',
                transitionDelay: `${ 200 + index * 150 }ms`
              }}
              onClick={() => handleCardClick(post.slug)}
            >
              <div className="flex flex-col md:flex-row">
                {/* Blog Image */}
                <div className="md:w-1/4 h-48 md:h-auto my-8 ml-8 rounded-md overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Blog Content */}
                <div className="md:w-3/4 p-8">
                  <div className="flex flex-col h-full">
                    {/* Title */}
                    <h2 className="text-2xl font-poppins font-semibold mb-4 hover:text-gray-700 transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-700 font-poppins leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Read More Button for posts with large-description */}
                    {post['large-description'] && post['large-description'].length > 0 && (
                      <div className="mb-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(post.slug);
                          }}
                          className="text-black font-poppins font-medium hover:text-gray-700 transition-colors text-sm underline"
                        >
                          Read More →
                        </button>
                      </div>
                    )}

                    {/* Date and Tag */}
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 font-poppins">
                        {post.date}
                      </span>
                      <span className="text-gray-400 font-poppins">
                        {post.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMorePosts && (
          <div
            className={`text-center mt-16 transition-all duration-1000 ease-out ${ isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}
            style={{
              transitionDelay: `${ 200 + displayedPosts.length * 150 }ms`
            }}
          >
            <button
              onClick={loadMorePosts}
              className="bg-black text-white py-3 px-8 rounded-full font-poppins font-medium hover:bg-gray-800 transition-colors"
            >
              LOAD MORE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;