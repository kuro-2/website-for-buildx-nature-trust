import { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

const HomePage = lazy(() => import('./components/HomePage').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./components/AboutPage').then((m) => ({ default: m.AboutPage })));
const ProgramsPage = lazy(() => import('./components/ProgramsPage').then((m) => ({ default: m.ProgramsPage })));
const WasteManagementPage = lazy(() => import('./components/WasteManagementPage').then((m) => ({ default: m.WasteManagementPage })));
const GreenCatalogPage = lazy(() => import('./components/GreenCatalogPage').then((m) => ({ default: m.GreenCatalogPage })));
const GalleryPage = lazy(() => import('./components/GalleryPage').then((m) => ({ default: m.GalleryPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then((m) => ({ default: m.ContactPage })));

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'programs':
        return <ProgramsPage />;
      case 'waste-management':
        return <WasteManagementPage />;
      case 'catalog':
        return <GreenCatalogPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#E2DBD0]">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <motion.main
        key={currentPage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Suspense fallback={<div className="min-h-screen bg-[#E2DBD0]" />}>
          {renderPage()}
        </Suspense>
      </motion.main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}