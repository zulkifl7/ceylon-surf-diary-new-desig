import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const post = blogPosts.find((post: BlogPost) => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-jedira mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="bg-black text-white py-3 px-8 rounded-full font-poppins font-medium hover:bg-gray-800 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div 
          className={`mb-8 transition-all duration-800 ease-out ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center text-gray-600 hover:text-black transition-colors font-poppins"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </button>
        </div>

        {/* Cover Image */}
        <div 
          className={`mb-8 rounded-lg overflow-hidden transition-all duration-1000 ease-out ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '200ms'
          }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-lg p-8 md:p-12">
          {/* Article Header */}
          <header 
            className={`mb-8 transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '400ms'
            }}
          >
            <div className="flex items-center justify-between mb-4 text-sm">
              <span className="text-gray-500 font-poppins">{post.date}</span>
              <span className="text-gray-400 font-poppins">{post.tag}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-jedira mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 font-poppins leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {post['large-description'].map((paragraph, index) => (
              <p 
                key={index}
                className={`text-gray-700 font-poppins leading-relaxed mb-6 text-lg transition-all duration-1000 ease-out ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${600 + index * 200}ms`
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Article Footer */}
          <footer 
            className={`mt-12 pt-8 border-t border-gray-200 transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: `${600 + post['large-description'].length * 200}ms`
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-600 font-poppins">
                  Published on {post.date}
                </p>
              </div>
              <div className="flex space-x-4">
                <button className="text-gray-600 hover:text-black transition-colors font-poppins">
                  Share on Facebook
                </button>
                <button className="text-gray-600 hover:text-black transition-colors font-poppins">
                  Share on Twitter
                </button>
              </div>
            </div>
          </footer>
        </article>

        {/* Related Posts or Back to Blog */}
        <div 
          className={`mt-12 text-center transition-all duration-1000 ease-out ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: `${800 + post['large-description'].length * 200}ms`
          }}
        >
          <button
            onClick={() => navigate('/blog')}
            className="bg-black text-white py-4 px-8 rounded-full font-poppins font-medium hover:bg-gray-800 transition-colors"
          >
            Read More Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;