import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroGemini1 from "@/assets/hero-gemini-1.png";
import heroGemini2 from "@/assets/hero-gemini-2.png";
import heroGemini3 from "@/assets/hero-gemini-3.png";
import heroGemini4 from "@/assets/hero-gemini-4.png";
import heroGemini5 from "@/assets/hero-gemini-5.png";

const slides = [
  { src: heroGemini1, alt: "Temple tour banner 1", position: "center center" },
  { src: heroGemini2, alt: "Temple tour banner 2", position: "center center" },
  { src: heroGemini3, alt: "Temple tour banner 3", position: "center center" },
  { src: heroGemini4, alt: "Temple tour banner 4", position: "center center" },
  { src: heroGemini5, alt: "Temple tour banner 5", position: "center center" },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[220px] overflow-hidden border-b border-border bg-[#0d1a27] sm:h-[300px] md:h-[380px] lg:h-[484px]">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ width: `${slides.length * 100}%`, transform: `translateX(-${activeSlide * (100 / slides.length)}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.alt} className="h-full" style={{ width: `${100 / slides.length}%` }}>
            <img
              src={slide.src}
              alt={slide.alt}
              loading={index === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover"
              style={{ objectPosition: slide.position }}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/35 bg-black/25 p-2 text-white transition-colors hover:bg-black/45"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/35 bg-black/25 p-2 text-white transition-colors hover:bg-black/45"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-3 left-0 right-0 z-30 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.alt}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to ${slide.alt} image`}
            className={`h-2.5 rounded-full transition-all ${
              index === activeSlide ? "w-7 bg-white" : "w-2.5 bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
