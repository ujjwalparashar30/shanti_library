"use client";

import { Phone, MessageCircle, Navigation, Mail, MapPin, Clock } from 'lucide-react';

export default function LibraryContact() {
  // Address object
  const libraryInfo = {
    name: "Shanti Library",
    street: "Talab Chowk",
    area: "Mandawali",
    city: "Delhi",
    state: "DL",
    zipCode: "110092",
    phone: "+919873591122",
    email: "info@shantilibrary.com",
    hours: "Mon-Fri 9AM-8PM, Sat 9AM-6PM",
    imageUrl: "image5.jpg", // Replace with your image path
  };

  const handleCall = () => {
    window.open(`tel:${libraryInfo.phone}`, '_self');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${libraryInfo.phone.replace('+', '')}`, '_blank');
  };

  const handleDirections = () => {
    const fullAddress = `${libraryInfo.street}, ${libraryInfo.area}, ${libraryInfo.city}, ${libraryInfo.state} ${libraryInfo.zipCode}`;
    const address = encodeURIComponent(fullAddress);
    window.open(`https://maps.google.com/maps?q=${address}`, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${libraryInfo.email}`, '_self');
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Our <span className="text-amber-500">Library</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find us in the heart of Mandawali. We&apos;re here to help you on your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Column - Library Image */}
          <div className="lg:col-span-1 flex">
            <div className="relative overflow-hidden rounded-2xl group w-full">
              <img 
                src={libraryInfo.imageUrl}
                alt="Shanti Library Interior" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column - Contact Actions */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h3>
              <p className="text-gray-600">Choose your preferred way to connect with us</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              <button
                onClick={handleCall}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl transition-all duration-200 group hover:bg-gray-50 h-full"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-blue-200 group-hover:border-blue-400 transition-colors">
                  <Phone size={24} className="text-blue-600" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Call Library</p>
                  <p className="text-gray-600 text-sm">{libraryInfo.phone}</p>
                </div>
              </button>

              <button
                onClick={handleWhatsApp}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl transition-all duration-200 group hover:bg-gray-50 h-full"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-200 group-hover:border-green-400 transition-colors">
                  <MessageCircle size={24} className="text-green-600" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <p className="text-gray-600 text-sm">Quick messages</p>
                </div>
              </button>

              <button
                onClick={handleDirections}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl transition-all duration-200 group hover:bg-gray-50 h-full"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-purple-200 group-hover:border-purple-400 transition-colors">
                  <Navigation size={24} className="text-purple-600" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Get Directions</p>
                  <p className="text-gray-600 text-sm">Navigate to library</p>
                </div>
              </button>

              <button
                onClick={handleEmail}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl transition-all duration-200 group hover:bg-gray-50 h-full"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-gray-300 group-hover:border-gray-500 transition-colors">
                  <Mail size={24} className="text-gray-700" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Send Email</p>
                  <p className="text-gray-600 text-sm">{libraryInfo.email}</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Location & Hours Section - Moved below image */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Our Location</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider">ADDRESS</p>
              </div>
            </div>
            <div className="space-y-2 text-gray-700 ml-16">
              <p className="font-medium text-lg">{libraryInfo.street}</p>
              <p className="text-gray-600">{libraryInfo.area}</p>
              <p className="text-gray-600">{libraryInfo.city}, {libraryInfo.state} {libraryInfo.zipCode}</p>
            </div>
          </div>

          <div>
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Opening Hours</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider">TIMINGS</p>
              </div>
            </div>
            <div className="ml-16">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Monday - Friday</span>
                  <span className="text-gray-600">9AM - 8PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Saturday</span>
                  <span className="text-gray-600">9AM - 6PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Sunday</span>
                  <span className="text-red-500 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-6 py-3 rounded-full font-medium">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            Ready to start your learning journey? Visit us today!
          </div>
        </div>
      </div>
    </section>
  );
}
