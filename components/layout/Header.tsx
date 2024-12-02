"use client";

import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/apply');
  }, [router]);

  const menuItems = [
    { label: "Hogar", to: "home" },
    { label: "Sobre Nosotros", to: "about" },
    { label: "Servicios", to: "services" },
    { label: "Preguntas Frecuentes", to: "faq" },
  ];

  const handleApplyClick = () => {
    setIsMenuOpen(false);
    router.push('/apply');
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 96;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 h-16">
            <button
              onClick={() => scrollToSection('home')}
              className="h-full flex items-center"
              aria-label="Ir al inicio"
            >
              <Logo />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.to}
                onClick={() => scrollToSection(item.to)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleApplyClick}
              className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Aplicar Ahora
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.to}
                  onClick={() => scrollToSection(item.to)}
                  className="text-white hover:text-gray-300 transition-colors px-4 py-2"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleApplyClick}
                className="mx-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Aplicar Ahora
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;