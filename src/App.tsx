import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import OurStoryPage from './pages/OurStoryPage';
import PackagesPage from './pages/PackagesPage';
import ComingSoonPage from './pages/ComingSoonPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'our-story':
        return <OurStoryPage />;
      case 'packages':
        return <PackagesPage />;
      case 'blog':
        return <ComingSoonPage title="Blog" />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
