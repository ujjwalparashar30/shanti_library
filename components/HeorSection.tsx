"use client";
import { useState } from "react";
import ActionBar from "./ActionBar";

const slides = [
  {
    image: "/image1.jpg",
    location: "Shanti Library, Delhi, India",
  },
  {
    image: "/image2.jpg",
    location: "Shanti Library, Delhi, India",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex(index === 0 ? slides.length - 1 : index - 1);
  const nextSlide = () => setIndex(index === slides.length - 1 ? 0 : index + 1);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={slides[index].image}
        alt={slides[index].location}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      
      {/* Content Container */}
      <div className="relative h-full flex items-center justify-start px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl space-y-6 font-heading">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-2xl">
            Welcome to <br />
            <span className="text-fireYellow bg-clip-text text-8xl">Shanti Library</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl drop-shadow-lg font-light font-subtitle">
            Escape distractions and immerse yourself in knowledge. Book your perfect spot and experience the ultimate study environment.
          </p>
          
          {/* Call to Action */}
          {/* <ActionBar /> */}
          <div className="pt-4">
            <button className="bg-primaryRed hover:bg-primaryRedHover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Explore Libraries
            </button>
          </div>
        </div>
      </div>

      {/* Your Original Location & Navigation Design */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4">
        <span className="bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-medium">
          {slides[index].location}
        </span>
        <button
          onClick={prevSlide}
          className="bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/60 transition-colors duration-200"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/60 transition-colors duration-200"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
