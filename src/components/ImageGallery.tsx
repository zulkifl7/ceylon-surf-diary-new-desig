import { useEffect, useState } from 'react';
import { GalleryImage } from '../types/gallery';
import galleryData from '../data/gallery-images.json';

interface ImageGalleryProps {
  featuredOnly?: boolean;
}

export default function ImageGallery({ featuredOnly = false }: ImageGalleryProps) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, [featuredOnly]);

  function fetchImages() {
    try {
      let filteredImages = galleryData as GalleryImage[];
      
      if (featuredOnly) {
        filteredImages = filteredImages.filter(img => img.featured);
      }
      
      // Sort by order_index
      filteredImages.sort((a, b) => a.order_index - b.order_index);
      
      setImages(filteredImages);
    } catch (error) {
      console.error('Error loading images:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="aspect-[3/4] bg-gray-200 animate-pulse rounded"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="aspect-[3/4] overflow-hidden group cursor-pointer"
            >
              <img
                src={image.image_url}
                alt={image.alt_text}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
