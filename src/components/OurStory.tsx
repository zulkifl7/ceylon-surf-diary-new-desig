import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function OurStory() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={elementRef} className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl text-center py-20 mb-16 tracking-wide font-jedira transition-all duration-1000 ease-out ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          OUR STORY
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`aspect-square bg-gray-200 rounded-lg overflow-hidden transition-all duration-1000 ease-out ${ isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
            <img
              src="https://images.pexels.com/photos/1654500/pexels-photo-1654500.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Surfing in Sri Lanka"
              className="w-full h-full object-cover"
            />
          </div>

          <div className={`space-y-6 transition-all duration-1000 ease-out ${ isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`} style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
            <p
              className="text-gray-700 leading-relaxed font-poppins"
              style={{ lineHeight: '1.8' }}
            >
              From Weligama to Midigama, every wave, every ride, and every smile tells a story — and Ceylon Surf Diary is here to capture it all.
            </p>

            <p
              className="text-gray-700 leading-relaxed font-poppins"
              style={{ lineHeight: '1.8' }}
            >
              Born on the southern waves of Sri Lanka, Ceylon Surf Diary began with a love for the ocean and the stories it curates. Every wave, every ride, and every smile tells something — and that's what we capture.
            </p>

            <p
              className="text-gray-700 leading-relaxed font-poppins"
              style={{ lineHeight: '1.8' }}
            >
              We spend our days between Weligama, Midigama, and Ahangama, chasing light, motion, and moments of pure stoke. Whether you're here for a surf, a lifestyle, and the rhythm of the island.
            </p>

            <p
              className="text-gray-700 leading-relaxed font-poppins"
              style={{ lineHeight: '1.8' }}
            >
              Because for us, every first wave is like a lifetime of thrill, and we're here to frame it — raw, radiant, and timeless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
