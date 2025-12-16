'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    '/images/photo_acceuil/WhatsApp Image 2025-12-10 à 18.53.03_32f672bc.jpg',
    '/images/photo_acceuil/WhatsApp Image 2025-12-10 à 18.53.04_3d50703c.jpg',
    '/images/photo_acceuil/WhatsApp Image 2025-12-10 à 18.53.15_6bfcd6ed.jpg',
    '/images/photo_acceuil/WhatsApp Image 2025-12-10 à 18.53.21_f4ec0d6e.jpg',
    '/images/photo_acceuil/WhatsApp Image 2025-12-10 à 18.53.26_df3a9e0a.jpg',
    '/images/photo_acceuil/WhatsApp Image 2025-12-10 à 18.53.36_d2c42e08.jpg',
    '/images/photo_acceuil/WhatsApp Image 2025-12-10 à 18.53.39_572de5d3.jpg',
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-3 sm:mb-4">
            Notre Campus en Images
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Découvrez nos installations et notre environnement d'apprentissage
          </p>
        </div>

        <div className="relative w-full max-w-7xl mx-auto">
          <div 
            className="relative h-96 sm:h-[500px] lg:h-[600px] xl:h-[700px] rounded-2xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Campus IUFMES ${index + 1}`}
                  className="w-full h-full object-contain bg-gray-900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            ))}

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all ${
                    index === currentIndex
                      ? 'w-8 sm:w-12 h-2 sm:h-2.5 bg-accent'
                      : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/60 hover:bg-white/80'
                  } rounded-full`}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Image {currentIndex + 1} sur {images.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
