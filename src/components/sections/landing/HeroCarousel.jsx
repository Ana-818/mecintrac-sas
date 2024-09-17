import React, { useState, useEffect } from 'react';
import HeroSlides from '@data/heroSlides';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HeroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-blue min-h-[500px] h-screen max-h-[1500px] overflow-hidden">
      <div
        className="w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {HeroSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="flex flex-col items-start justify-center section-container h-full">
              <h1 className="text-[3.5rem] leading-[0.8] text-white">
                {slide.title}
              </h1>
              <p className="text-white mt-4 max-w-2xl">
                {slide.description}
              </p>
              <button className="bg-white text-green-700 font-semibold py-2 px-4 rounded shadow-lg mt-6">
                {slide.ctaText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
