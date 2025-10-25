import ImageGallery from '../components/ImageGallery';

export default function PortfolioPage() {
  return (
    <div className="pt-24">
      <div className="text-center py-12">
        <h1 className="text-5xl mb-4 font-jediria">
          PORTFOLIO
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto px-6 font-poppins" style={{ lineHeight: '1.8' }}>
          Explore our complete collection of moments captured on the waves of Sri Lanka.
          Every image tells a story of adventure, lifestyle, and the magic of surfing.
        </p>
      </div>
      <ImageGallery featuredOnly={false} />
    </div>
  );
}
