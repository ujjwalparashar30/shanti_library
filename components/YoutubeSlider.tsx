"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type Video = {
  id: string;
  title: string;
};

const videos: Video[] = [
  { id: "dQw4w9WgXcQ", title: "Library Tour 2024" },
  { id: "9bZkp7q19f0", title: "Peaceful Study Vibes" },
  { id: "3JZ_D3ELwOQ", title: "Shanti Library Overview" },
  { id: "e-ORhEE9VVg", title: "What Our Readers Say" },
];

export default function YouTubeCardSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Adjust based on card width
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full px-4 py-10 relative">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        🎥 Featured Videos
      </h2>

      {/* Arrows */}
      <button
        className="absolute left-2 top-[50%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hidden sm:block"
        onClick={() => scroll("left")}
      >
        <ChevronLeft />
      </button>

      <button
        className="absolute right-2 top-[50%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hidden sm:block"
        onClick={() => scroll("right")}
      >
        <ChevronRight />
      </button>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-center bg-white rounded-xl shadow-md overflow-hidden"
          >
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-48 sm:h-56"
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="p-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
