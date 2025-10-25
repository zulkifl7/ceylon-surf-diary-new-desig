import { useEffect, useState } from 'react';
import heroLogo from '../assets/hero-logo copy.svg';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src={heroLogo}
          alt="Ceylon Surf Diary"
          className={`w-80 mx-auto mb-12 transition-all duration-1000 ease-out ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        />

        <p 
          className={`text-gray-700 leading-relaxed font-poppins text-base max-w-3xl mx-auto transition-all duration-1000 ease-out delay-300 ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`} 
          style={{ lineHeight: '1.8' }}
        >
          On the southern waves of Sri Lanka — Weligama, Midigama, and Ahangama — every surf
          ride tells a story. Captures the motion, the alluring, and the moments that make each wave
          unforgettable. From the first splash to the last glisten, we, Ceylon Surf Diary frames the soul
          of surfing, the lifestyle around, and the magic of island life.
        </p>
      </div>
    </section>
  );
}
