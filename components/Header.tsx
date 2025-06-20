// components/Header.jsx
import Image from "next/image";
import Logo from "@/assets/logo.png";
import MenuIcon from "@/assets/menu.svg";
import ArrowRight from "@/assets/arrow-right.svg";

const Header = () => (
  <header className="sticky top-0 z-20">
    
    {/* Main Navigation */}
    <div className="py-2 px-12 backdrop-blur-sm bg-white/60">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Image src={Logo} alt="SaaS Logo" height={60} width={60} priority />
        {/* Hamburger Menu (mobile only) */}
        <Image src={MenuIcon} alt="Menu" width={16} height={16} className="inline ml-1 md:hidden" />
        {/* Navigation Links (desktop/tablet only) */}
        <nav className="hidden md:flex gap-6 text-black/60 items-center font-heading">
          <a href="#">Home </a>
          <a href="#">About </a>
          <a href="#">Facilities </a>
          <a href="#">Pricing </a>
          <a href="#">Testimonials </a>
          <a href="#">Contact </a>
          {/* CTA Button */}
          <button className="bg-primaryRed text-white px-4 py-2 rounded-lg font-medium inline-flex items-center tracking-tight">
            Get for free
          </button>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;