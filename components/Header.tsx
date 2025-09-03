import React, { useState, useEffect } from 'react';
import { ChurchIcon, MenuIcon, XIcon, ChevronDownIcon } from './icons';

declare global {
  interface Window {
    google?: any;
    initGoogleTranslate?: () => void;
  }
}

interface NavItem {
    href?: string;
    text: string;
    children?: NavItem[];
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; className?: string }> = ({ href, children, onClick, className }) => (
  <a href={href} onClick={onClick} className={`text-gray-600 hover:text-church-gold transition-colors duration-300 font-medium text-sm ${className}`}>
    {children}
  </a>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (!isMenuOpen) {
        setOpenDropdown(null);
    }
  }, [isMenuOpen]);

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

  const navLinks: NavItem[] = [
    {
      text: 'About',
      children: [
        { href: '#about', text: 'Our Story' },
        { href: '#beliefs', text: 'Our Beliefs' },
      ],
    },
    {
      text: 'Connect',
      children: [
        { href: '#events', text: 'Events' },
        { href: '#volunteer', text: 'Volunteer' },
        { href: '#community', text: 'Community' },
      ],
    },
    { href: '#resources', text: 'Resources' },
    { href: '#missions', text: 'Missions' },
    { href: '#give', text: 'Give' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
    if (isMenuOpen) {
        setIsMenuOpen(false);
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '#home';
    setIsMenuOpen(false);
  };
  
  const toggleMobileDropdown = (text: string) => {
    setOpenDropdown(openDropdown === text ? null : text);
  };

  return (
    <header className="bg-church-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={handleHomeClick} className="flex items-center space-x-2">
            <ChurchIcon className="h-8 w-8 text-church-gold" />
            <span className="text-xl font-bold text-church-gray font-serif">Fristaden Falun</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => 
                link.children ? (
                    <div key={link.text} className="relative group">
                        <button className="text-gray-600 hover:text-church-gold transition-colors duration-300 font-medium px-3 py-2 rounded-md text-sm flex items-center space-x-1" aria-haspopup="true">
                           <span>{link.text}</span>
                           <ChevronDownIcon className="h-4 w-4" />
                        </button>
                        <div className="absolute top-full mt-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                            {link.children.map(child => (
                                <NavLink key={child.href} href={child.href!} onClick={(e) => handleNavClick(e, child.href!)} className="block px-4 py-2 w-full text-left">
                                    {child.text}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ) : (
                    <NavLink key={link.href} href={link.href!} onClick={(e) => handleNavClick(e, link.href!)} className="px-3 py-2 rounded-md">
                        {link.text}
                    </NavLink>
                )
            )}
            <div id="google_translate_element_desktop" className="ml-2"></div>
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
        <div id="mobile-menu" className={`${isMenuOpen ? 'max-h-[600px] py-4' : 'max-h-0'} overflow-hidden md:hidden transition-all duration-500 ease-in-out`}>
            <div className="flex flex-col items-center space-y-2">
                {navLinks.map((link) => (
                    link.children ? (
                        <div key={link.text} className="w-full text-center">
                            <button 
                                onClick={() => toggleMobileDropdown(link.text)}
                                className="w-full text-gray-600 font-medium px-3 py-2 rounded-md text-sm flex items-center justify-center"
                                aria-expanded={openDropdown === link.text}
                            >
                                {link.text}
                                <ChevronDownIcon className={`h-5 w-5 ml-1 transition-transform duration-300 ${openDropdown === link.text ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`${openDropdown === link.text ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-500 ease-in-out`}>
                                <div className="bg-church-light-gray/50 w-full mt-2 rounded-md flex flex-col items-center py-2">
                                    {link.children.map(child => (
                                        <NavLink key={child.href} href={child.href!} onClick={(e) => handleNavClick(e, child.href!)} className="py-2">
                                            {child.text}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <NavLink key={link.href} href={link.href!} onClick={(e) => handleNavClick(e, link.href!)} className="px-3 py-2">
                            {link.text}
                        </NavLink>
                    )
                ))}
                <div id="google_translate_element_mobile" className="py-2"></div>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;