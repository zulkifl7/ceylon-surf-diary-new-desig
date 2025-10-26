import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function OurStoryPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.3 });

  useEffect(() => {
    // Trigger initial animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className={`text-5xl text-center py-20 mb-20 font-jedira tracking-wide transition-all duration-1000 ease-out ${ isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          OUR STORY
        </h1>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div
            ref={imageRef}
            className={`h-full bg-white  overflow-hidden sticky top-32 transition-all duration-1000 ease-out ${ imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            style={{ transitionDelay: imageVisible ? '200ms' : '0ms' }}
          >
            <img
              src="https://images.pexels.com/photos/1654500/pexels-photo-1654500.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Surfing in Sri Lanka"
              className="w-full h-full object-cover py-2"
            />
          </div>

          <div
            ref={contentRef}
            className="space-y-8"
          >
            <div className={`transition-all duration-1000 ease-out ${ contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`} style={{ transitionDelay: contentVisible ? '400ms' : '0ms' }}>
              <p className="text-gray-700 leading-relaxed font-poppins mb-4" style={{ lineHeight: '1.8' }}>
                Hi, I'm <span className="font-semibold">Chamalka Srimal</span>, the eye behind <span className="font-semibold">Ceylon Surf Diary</span>.
              </p>
            </div>

            <div className="space-y-6">
              <p className={`text-gray-700 leading-relaxed font-poppins transition-all duration-1000 ease-out ${ contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`} style={{ lineHeight: '1.8', transitionDelay: contentVisible ? '600ms' : '0ms' }}>
                I've always been drawn to the ocean — the rhythm of the waves, the energy of surfers, and the fleeting moments that make each ride unique. With my camera, I aim to capture those raw, authentic moments, turning them into lasting memories.
              </p>

              <p className={`text-gray-700 leading-relaxed font-poppins transition-all duration-1000 ease-out ${ contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`} style={{ lineHeight: '1.8', transitionDelay: contentVisible ? '800ms' : '0ms' }}>
                Based in Weligama, Down South Sri Lanka, I specialize in surf photography that's clean, minimal, and timeless — from dynamic in-water action shots to relaxed lifestyle moments on the beach. Every session is about celebrating the surf, the people, and the ocean.
              </p>

              <p className={`text-gray-700 leading-relaxed font-poppins transition-all duration-1000 ease-out ${ contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`} style={{ lineHeight: '1.8', transitionDelay: contentVisible ? '1000ms' : '0ms' }}>
                Whether it's a solo ride, a session with friends, or candid lifestyle shots, my goal is to make every surfer feel confident, free, and truly captured in their element.
              </p>

              <p className={`text-gray-700 leading-relaxed font-poppins transition-all duration-1000 ease-out ${ contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`} style={{ lineHeight: '1.8', transitionDelay: contentVisible ? '1200ms' : '0ms' }}>
                At Ceylon Surf Diary, it's not just photography — it's the story of your waves, your journey, and your moments in the sun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
