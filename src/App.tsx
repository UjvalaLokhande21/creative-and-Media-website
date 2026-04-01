import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Designs
import CreativeAgency from './components/designs/CreativeAgency';
import PhotographerPortfolio from './components/designs/PhotographerPortfolio';
import VideoStudio from './components/designs/VideoStudio';
import MediaAgency from './components/designs/MediaAgency';
import PersonalDesigner from './components/designs/PersonalDesigner';
import ArtStudio from './components/designs/ArtStudio';
import CreativeMediaStudio from './components/CreativeMediaStudio';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-black">
        <ConditionalNavbar />
        
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><CreativeMediaStudio /></PageWrapper>} />
              <Route path="/old-home" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              
              {/* Design Routes */}
              <Route path="/agency" element={<PageWrapper><CreativeAgency /></PageWrapper>} />
              <Route path="/portfolio" element={<PageWrapper><PhotographerPortfolio /></PageWrapper>} />
              <Route path="/video" element={<PageWrapper><VideoStudio /></PageWrapper>} />
              <Route path="/media" element={<PageWrapper><MediaAgency /></PageWrapper>} />
              <Route path="/designer" element={<PageWrapper><PersonalDesigner /></PageWrapper>} />
              <Route path="/studio" element={<PageWrapper><ArtStudio /></PageWrapper>} />
              <Route path="/creative-media" element={<PageWrapper><CreativeMediaStudio /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>

        <ConditionalFooter />
      </div>
    </Router>
  );
}

const ConditionalNavbar = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/' || location.pathname === '/creative-media';
  
  if (isLandingPage) return null;
  return <Navbar />;
};

const ConditionalFooter = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/' || location.pathname === '/creative-media';
  
  if (isLandingPage) return null;
  
  return (
    <footer className="py-24 px-6 md:px-24 bg-black text-white border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-4xl font-black tracking-tighter uppercase">
          Vibrant<span className="text-orange-500">.</span>
        </div>
        
        <div className="flex gap-12 text-sm font-bold uppercase tracking-widest opacity-60">
          <a href="#" className="hover:text-orange-500 transition-colors">Instagram</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Linkedin</a>
        </div>
        
        <div className="text-sm font-medium opacity-40">
          © 2026 Vibrant Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
