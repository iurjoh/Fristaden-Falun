



import React, { useState, useEffect } from 'react';
import { ChurchIcon, MenuIcon, XIcon } from './icons';

declare global {
  interface Window {
    google?: any;
    initGoogleTranslate?: () => void;
  }
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="text-gray-600 hover:text-church-gold transition-colors duration-300 font-medium px-3 py-2 rounded-md text-sm">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const initTranslate = () => {
      const desktopEl = document.getElementById('google_translate_element_desktop');
      if (window.google?.translate?.TranslateElement && desktopEl && !desktopEl.hasChildNodes()) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
          'google_translate_element_desktop'
        );
      }
      
      const mobileEl = document.getElementById('google_translate_element_mobile');
      if (window.google?.translate?.TranslateElement && mobileEl && !mobileEl.hasChildNodes()) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
          'google_translate_element_mobile'
        );
      }
    };

    window.initGoogleTranslate = initTranslate;
    if (window.google && window.google.translate) {
      initTranslate();
    }
    return () => {
      delete window.initGoogleTranslate;
    };
  }, []);

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About Us' },
    { href: '#events', text: 'Events' },
    { href: '#sermons', text: 'Sermons' },
    { href: '#give', text: 'Give' },
    { href: '#volunteer', text: 'Volunteer' },
    { href: '#missions', text: 'Missions' },
    { href: '#community', text: 'Community' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
    if (isMenuOpen) {
        setIsMenuOpen(false);
    }
  };

  return (
    <header id="home" className="bg-church-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center space-x-2">
            <ChurchIcon className="h-8 w-8 text-church-blue" />
            <span className="text-xl font-bold text-church-gray font-serif">Fristaden Falun</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
                <NavLink key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.text}</NavLink>
            ))}
            <div id="google_translate_element_desktop" className="ml-2"></div>
             <a href="#plan-visit" onClick={(e) => handleNavClick(e, '#plan-visit')} className="bg-church-gold text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 text-sm font-semibold cursor-pointer ml-2">
                New Here?
             </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-church-gray focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className={`${isMenuOpen ? 'max-h-[600px]' : 'max-h-0'} overflow-hidden md:hidden transition-all duration-500 ease-in-out`}>
            <div className="flex flex-col items-center pt-4 space-y-4">
                {navLinks.map(link => (
                    <NavLink key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.text}</NavLink>
                ))}
                <div id="google_translate_element_mobile" className="py-2"></div>
                <a href="#plan-visit" onClick={(e) => handleNavClick(e, '#plan-visit')} className="bg-church-gold text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 text-sm font-semibold w-full text-center cursor-pointer">
                    New Here?
                </a>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;