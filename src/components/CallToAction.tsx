import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CallToActionProps {
  onNavigate: (page: string) => void;
}

export default function CallToAction({ onNavigate }: CallToActionProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={elementRef} className="py-20 px-6" style={{ backgroundColor: '#FCFCFC' }}>
      <div className="max-w-4xl mx-auto">
        <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-8 transition-all ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`} style={{ transitionDuration: '1200ms', transitionTimingFunction: 'cubic-bezier(0.2, 0, 0, 1)' }}>
          <div className="flex-1">
            <h2 className={`text-5xl mb-6 font-jedira tracking-wide transition-all ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`} style={{ 
              transitionDuration: '1200ms',
              transitionTimingFunction: 'cubic-bezier(0.2, 0, 0, 1)',
              transitionDelay: isVisible ? '200ms' : '0ms' 
            }}>
              Make it your way!
            </h2>
            <p className={`text-gray-600 font-poppins text-lg transition-all ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`} style={{ 
              lineHeight: '1.8',
              transitionDuration: '1200ms',
              transitionTimingFunction: 'cubic-bezier(0.2, 0, 0, 1)',
              transitionDelay: isVisible ? '400ms' : '0ms' 
            }}>
              Tell us what you're looking for. We'll customize it for you.
            </p>
          </div>
          <div className={`flex-shrink-0 transition-all ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`} style={{ 
            transitionDuration: '1200ms',
            transitionTimingFunction: 'cubic-bezier(0.2, 0, 0, 1)',
            transitionDelay: isVisible ? '600ms' : '0ms' 
          }}>
            <button
              onClick={() => onNavigate('packages')}
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-poppins font-medium tracking-wide text-sm"
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
