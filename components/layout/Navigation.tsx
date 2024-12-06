'use client';

import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useBfCache } from '@/hooks/useBfCache';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useBfCache();

  const handleScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
      setIsScrolled(window.scrollY > 20);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId: string) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

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
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#486271]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0 h-full">
            <button
              onClick={() => scrollToSection('home')}
              className="h-full flex items-center"
              aria-label="Ir al inicio"
            >
              <Logo className="h-full" />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-[#00B6FF] transition-colors text-sm lg:text-base"
            >
              Inicio
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#00B6FF] transition-colors text-sm lg:text-base"
            >
              Sobre nosotros
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#00B6FF] transition-colors text-sm lg:text-base"
            >
              Servicios
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-[#00B6FF] transition-colors text-sm lg:text-base"
            >
              FAQ
            </button>
            <span className="text-gray-400">|</span>
            <Link
              href="/apply"
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
            >
              Aplicar Ahora
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-[400px] opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="py-4 space-y-2 bg-[#486271]/95 backdrop-blur-md rounded-lg mt-2 px-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-white hover:text-[#00B6FF] transition-colors text-sm"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-white hover:text-[#00B6FF] transition-colors text-sm"
            >
              Sobre nosotros
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-white hover:text-[#00B6FF] transition-colors text-sm"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left py-2 text-white hover:text-[#00B6FF] transition-colors text-sm"
            >
              FAQ
            </button>
            <Link
              href="/apply"
              className="block w-full text-center py-2 mt-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
            >
              Aplicar Ahora
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;