import { Instagram } from 'lucide-react';
import { FaPinterest } from 'react-icons/fa';
import heroLogo from '../assets/hero-logo.svg';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start">
            <img src={heroLogo} alt="Ceylon Surf Diary" className="w-48" />
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-500 hover:text-black transition-colors font-poppins text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('our-story')}
                  className="text-gray-500 hover:text-black transition-colors font-poppins text-sm"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="text-gray-500 hover:text-black transition-colors font-poppins text-sm"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('packages')}
                  className="text-gray-500 hover:text-black transition-colors font-poppins text-sm"
                >
                  Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="text-gray-500 hover:text-black transition-colors font-poppins text-sm"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  className="text-gray-500 hover:text-black transition-colors font-poppins text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <p className="text-gray-500 mb-2 font-poppins text-sm">
              +94 76 76 76 197
            </p>
            <p className="text-gray-500 mb-6 font-poppins text-sm">
              info@ceylonsurfdiary.com
            </p>
            <p className="text-gray-500 mb-1 font-poppins text-sm">
              Ceylon Surf Diary,
            </p>
            <p className="text-gray-500 font-poppins text-sm">
              Weligama, Sri Lanka.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaPinterest size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
