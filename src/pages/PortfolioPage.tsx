import ImageGallery from '../components/ImageGallery';

export default function PortfolioPage() {
  return (
    <div className="pt-24">
      <div className="text-center py-12">
        <h1 className="text-5xl my-20 mb-4 font-jedira">
          PORTFOLIO
        </h1>

      </div>
      <ImageGallery featuredOnly={false} />
    </div>
  );
}
