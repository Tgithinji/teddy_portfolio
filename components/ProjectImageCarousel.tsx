"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
}

export function ProjectImageCarousel({ images, title }: ProjectImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const isMultiple = images.length > 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group relative w-full overflow-hidden rounded-xl border border-[color:var(--color-hairline)] bg-[color:var(--color-card)]/50">
      <div className="relative aspect-[16/10] w-full overflow-hidden flex items-center justify-center bg-background/40">
        <img
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          className="h-full w-full object-cover object-center transition-all duration-500"
        />

        {/* Multi-image navigation controls */}
        {isMultiple && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 rounded-full border border-[color:var(--color-hairline)] bg-background/80 p-2 text-foreground backdrop-blur-md opacity-80 transition-opacity hover:opacity-100 hover:bg-background"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full border border-[color:var(--color-hairline)] bg-background/80 p-2 text-foreground backdrop-blur-md opacity-80 transition-opacity hover:opacity-100 hover:bg-background"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Slide Index Badge & Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-[color:var(--color-hairline)] bg-background/85 px-3 py-1 text-[10px] font-mono text-foreground backdrop-blur-md">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentIndex ? "w-4 bg-primary" : "w-1.5 bg-muted-foreground/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
              <span className="ml-1 text-[9px] text-[color:var(--color-subtle)]">
                {currentIndex + 1}/{images.length}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
