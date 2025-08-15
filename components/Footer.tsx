import React from 'react';
import { ChurchIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from './icons';

const Footer: React.FC = () => {
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '#home';
  };

  return (
    <footer className="bg-church-gray text-church-light-gray">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <a href="#home" onClick={handleHomeClick} className="flex items-center space-x-2 cursor-pointer">
                <ChurchIcon className="h-8 w-8 text-church-gold" />
                <span className="text-xl font-bold text-white font-serif">Fristaden Falun</span>
            </a>
            <p className="text-sm text-church-light-gray/70">A place to believe, belong, and become.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-church-light-gray/70">
              <li>Bastuvägen 2, Falun, Sweden</li>
              <li>(123) 456-7890</li>
              <li>info@fristadenfalun.se</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/FristadenFalun/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="text-church-light-gray/70 hover:text-church-gold transition-colors duration-300">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/fristadenfalun" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="text-church-light-gray/70 hover:text-church-gold transition-colors duration-300">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@fristadenfalun9223" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel" className="text-church-light-gray/70 hover:text-church-gold transition-colors duration-300">
                <YoutubeIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-church-light-gray/50">
          <p>&copy; {new Date().getFullYear()} Fristaden Falun. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;