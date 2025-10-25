interface CallToActionProps {
  onNavigate: (page: string) => void;
}

export default function CallToAction({ onNavigate }: CallToActionProps) {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FCFCFC' }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-5xl mb-6 font-jedira tracking-wide">
              Make it your way!
            </h2>
            <p className="text-gray-600 font-poppins text-lg" style={{ lineHeight: '1.8' }}>
              Tell us what you're looking for. We'll customize it for you.
            </p>
          </div>
          <div className="flex-shrink-0">
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
