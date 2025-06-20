"use client";

import { Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ActionBar() {
  return (
    <div className="flex justify-center items-center gap-4 py-2   max-w-fit mt-[-1rem] z-10 relative">
      <Link
        href="tel:+919873591122"
        className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
      >
        <Phone size={18} /> Call
      </Link>
      <span className="text-gray-300">|</span>
      <Link
        href="https://wa.me/919873591122"
        target="_blank"
        className="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-800 transition"
      >
        <MessageCircle size={18} /> WhatsApp
      </Link>
      <span className="text-gray-300">|</span>
      <Link
        href="https://maps.app.goo.gl/MQxVehPNuZdymLnZ6"
        target="_blank"
        className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-800 transition"
      >
        <MapPin size={18} /> Directions
      </Link>
    </div>
  );
}
