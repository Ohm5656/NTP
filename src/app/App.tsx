import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FloatingContactBar } from './components/FloatingContactBar';
import { NewFooter } from './components/NewFooter';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingSpinner } from './components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(module => ({ default: module.ProjectsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));

// Prefetch critical pages
const prefetchPages = () => {
  import('./pages/AboutPage');
  import('./pages/ProjectsPage');
  import('./pages/ContactPage');
};

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the page to render
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, [hash]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-white pb-24 lg:pb-0">
      <ScrollToTopOnMount />
      <ScrollToHash />
      <Navbar />
      <FloatingContactBar />
      <main>
        <Routes>
          <Route path="/" element={<Suspense fallback={<LoadingSpinner />}><HomePage /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<LoadingSpinner />}><AboutPage /></Suspense>} />
          <Route path="/projects" element={<Suspense fallback={<LoadingSpinner />}><ProjectsPage /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<LoadingSpinner />}><ContactPage /></Suspense>} />
        </Routes>
      </main>
      <NewFooter />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  // Add smooth scrolling behavior and prefetch pages
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Prefetch pages after initial render to improve navigation speed
    const timeout = setTimeout(prefetchPages, 1000);
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}