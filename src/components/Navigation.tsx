import { useState } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { FaPinterest } from 'react-icons/fa';
import navLogo from '../assets/nav-logo copy copy.svg';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', page: 'home' },
    { label: 'OUR STORY', page: 'our-story' },
    { label: 'PORTFOLIO', page: 'portfolio' },
    { label: 'PACKAGES', page: 'packages' },
    { label: 'BLOG', page: 'blog' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Left */}
        <button
          onClick={() => handleNavigate('home')}
          className="flex items-center"
        >
          <img src={navLogo} alt="Ceylon Surf Diary" className="h-12" />
        </button>

        {/* Desktop Navigation Links - Center */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => handleNavigate(item.page)}
                  className={`text-sm tracking-wide transition-colors font-poppins ${ currentPage === item.page
                      ? 'text-black font-medium'
                      : 'text-gray-600 hover:text-black'
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Social Icons - Right */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            <FaPinterest size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            <Instagram size={18} />
          </a>
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out transform ${ isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
          } md:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <button
              onClick={() => handleNavigate('home')}
              className="flex items-center"
            >
              <img src={navLogo} alt="Ceylon Surf Diary" className="h-12" />
            </button>
            <button
              className="text-gray-800 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`text-2xl tracking-widest font-poppins transition-colors ${ currentPage === item.page
                    ? 'text-black font-semibold'
                    : 'text-gray-600 hover:text-black'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Footer - Socials */}
          <div className="flex items-center justify-center gap-8 py-12">
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <FaPinterest size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
