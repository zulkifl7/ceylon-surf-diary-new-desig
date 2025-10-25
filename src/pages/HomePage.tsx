import Hero from '../components/Hero';
import ImageGallery from '../components/ImageGallery';
import OurStory from '../components/OurStory';
import CallToAction from '../components/CallToAction';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-white">
      <Hero />
      <div className="bg-white">
        <ImageGallery featuredOnly={true} />
      </div>
      <div className="bg-white">
        <OurStory />
      </div>
      <CallToAction onNavigate={onNavigate} />
    </div>
  );
}
