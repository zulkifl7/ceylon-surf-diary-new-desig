import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import OurStoryPage from './pages/OurStoryPage';
import PackagesPage from './pages/PackagesPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ComingSoonPage from './pages/ComingSoonPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/portfolio') return 'portfolio';
    if (path === '/our-story') return 'our-story';
    if (path === '/packages') return 'packages';
    if (path.startsWith('/blog')) return 'blog';
    return 'home';
  };

  const handleNavigate = (page: string) => {
    switch (page) {
      case 'home':
        navigate('/');
        break;
      case 'portfolio':
        navigate('/portfolio');
        break;
      case 'our-story':
        navigate('/our-story');
        break;
      case 'packages':
        navigate('/packages');
        break;
      case 'blog':
        navigate('/blog');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollToTop />
      <Navigation currentPage={getCurrentPage()} onNavigate={handleNavigate} />
      <Routes>
        <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
      </Routes>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
