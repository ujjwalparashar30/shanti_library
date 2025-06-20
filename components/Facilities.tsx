"use client";

import {
  Wifi,
  Fan,
  Plug,
  Coffee,
  BookOpen,
  Video,
  Lightbulb,
  AlarmClock,
} from "lucide-react";

const facilities = [
  { icon: <Wifi size={32} />, name: "Free Wi-Fi" },
  { icon: <Fan size={32} />, name: "Air Conditioning" },
  { icon: <Plug size={32} />, name: "Power Backup" },
  { icon: <Coffee size={32} />, name: "Cafeteria" },
  { icon: <BookOpen size={32} />, name: "Book Access" },
  { icon: <Video size={32} />, name: "CCTV Security" },
  { icon: <Lightbulb size={32} />, name: "Well Lit" },
  { icon: <AlarmClock size={32} />, name: "24x7 Access" },
];

export default function FacilitiesSlider() {
  return (
    <div className="relative w-full overflow-hidden py-10 bg-white">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 h-full w-80 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-80 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="slider-track flex w-max animate-marquee whitespace-nowrap">
        {[...facilities, ...facilities].map((facility, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-gray-700 min-w-[140px] mx-6"
          >
            <div className="bg-gray-100 p-4 rounded-full shadow-md">
              {facility.icon}
            </div>
            <span className="mt-2 text-sm font-medium text-center">
              {facility.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
