import { useState, useEffect } from 'react';
import ImageGallery from '../components/ImageGallery';

export default function PortfolioPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-24">
      <div className="text-center py-12">
        <h1 
          className={`text-5xl my-20 mb-4 font-jedira transition-all duration-1000 ease-out ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          PORTFOLIO
        </h1>
      </div>
      
      <div 
        className={`transition-all duration-1000 ease-out delay-300 ${
          isLoaded 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <ImageGallery featuredOnly={false} />
      </div>
    </div>
  );
}
