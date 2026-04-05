import { useEffect, useState } from "react";
import logo from "/assets/fire-expert-logo.png";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-[12px] left-[12px] right-[12px] mx-auto max-w-[1200px]
        h-[64px] px-[18px] flex justify-between items-center rounded-2xl
        backdrop-blur-md transition-all duration-300 z-[1000]
        ${
          theme === "dark"
            ? scrolled
              ? "bg-[rgba(15,15,15,0.85)] text-white shadow-[0_14px_42px_rgba(0,0,0,0.65)]"
              : "bg-[rgba(15,15,15,0.55)] text-white"
            : scrolled
            ? "bg-[rgba(255,255,255,0.92)] text-black shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
            : "bg-[rgba(255,255,255,0.7)] text-black"
        }`}
      >

        {/* LEFT */}
        <div className="flex items-center gap-6">

          {/* HAMBURGER */}
          <button
            className="md:hidden text-[1.6rem] p-2"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-[26px] font-['Bebas_Neue'] tracking-wide text-[18px]">
            <a href="#products" className="opacity-80 hover:opacity-100">PRODUCTS</a>
            <a href="#services" className="opacity-80 hover:opacity-100">SERVICES</a>
            <a href="#contact" className="opacity-80 hover:opacity-100">CONTACT</a>
          </div>
        </div>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none">
          <img src={logo} alt="Fire Expert" className="h-[40px] object-contain" />
        </div>

        {/* RIGHT */}
        <div className="flex items-center">
          <button
            className={`text-[1.2rem] p-2 transition hover:scale-110
            ${theme === "dark" ? "text-yellow-300" : "text-gray-700"}`}
            onClick={toggleTheme}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed left-[12px] right-[12px] top-[88px] mx-auto max-w-[1176px]
        rounded-2xl backdrop-blur-lg z-[999] transition-all duration-300
        ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        ${
          theme === "dark"
            ? "bg-[rgba(15,15,15,0.95)] text-white"
            : "bg-[rgba(255,255,255,0.95)] text-black"
        }`}
      >
        <div className="flex flex-col p-5 gap-2 font-['Inter']">
          <a href="#products" onClick={closeMobileMenu}>Products</a>
          <a href="#services" onClick={closeMobileMenu}>Services</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        </div>
      </div>

      {/* OVERLAY */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[998]"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}