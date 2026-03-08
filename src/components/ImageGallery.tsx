import { useState, useEffect, useRef } from 'react';
import galleryData from '../data/gallery-images.json';

interface GalleryImage {
  id: string;
  image_url: string;
  alt_text: string;
  featured: boolean;
  order_index: number;
}

interface ImageGalleryProps {
  featuredOnly?: boolean;
}

export default function ImageGallery({ featuredOnly = false }: ImageGalleryProps) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleImages, setVisibleImages] = useState<Set<string>>(new Set());
  const imageRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    fetchImages();
  }, [featuredOnly]);

  useEffect(() => {
    if (images.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const imageId = entry.target.getAttribute('data-image-id');
          if (imageId && entry.isIntersecting) {
            setVisibleImages(prev => {
              const newSet = new Set(prev);
              newSet.add(imageId);
              return newSet;
            });
            // Stop observing this element once it's been seen
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px 200px 0px'
      }
    );

    // Observe all image elements
    imageRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [images]);

  function fetchImages() {
    try {
      let filteredImages = galleryData as GalleryImage[];

      if (featuredOnly) {
        filteredImages = filteredImages.filter(img => img.featured);
      }

      // Sort by order_index
      filteredImages.sort((a, b) => a.order_index - b.order_index);

      setImages(filteredImages);

      // In featured-only mode, ensure all filtered images are visible immediately
      if (featuredOnly) {
        const allIds = new Set(filteredImages.map(img => img.id));
        setVisibleImages(allIds);
      }
    } catch (error) {
      console.error('Error loading images:', error);
    } finally {
      setLoading(false);
    }
  }

  const setImageRef = (imageId: string) => (element: HTMLDivElement | null) => {
    if (element) {
      imageRefs.current.set(imageId, element);
    } else {
      imageRefs.current.delete(imageId);
    }
  };

  if (loading) {
    return (
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center py-8">Loading images...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {images.length === 0 ? (
            <div className="col-span-full text-center py-8">No images found</div>
          ) : (
            images.map((image, index) => {
              const isVisible = visibleImages.has(image.id);
              return (
                <div
                  key={image.id}
                  ref={setImageRef(image.id)}
                  data-image-id={image.id}
                  className={`aspect-[3/4] overflow-hidden group cursor-pointer transition-all relative ${ isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                    }`}
                  style={{
                    transitionDuration: '1200ms',
                    transitionTimingFunction: 'cubic-bezier(0.2, 0, 0, 1)',
                    transitionDelay: isVisible ? `${ (index % 3) * 200 }ms` : '0ms'
                  }}
                >
                  <img
                    src={image.image_url}
                    alt={image.alt_text}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
