import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isDesignsOpen, setIsDesignsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const designLinks = [
    { to: '/agency', label: 'Agency' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/video', label: 'Video' },
    { to: '/media', label: 'Media' },
    { to: '/designer', label: 'Designer' },
    { to: '/studio', label: 'Studio' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
      <NavLink to="/" className="text-2xl font-black tracking-tighter uppercase">
        Vibrant<span className="text-orange-500">.</span>
      </NavLink>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-12 text-[10px] font-black uppercase tracking-[0.2em]">
        <NavLink to="/" className={({ isActive }) => cn("hover:text-orange-500 transition-colors", isActive && "text-orange-500")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => cn("hover:text-orange-500 transition-colors", isActive && "text-orange-500")}>About</NavLink>
        
        <div 
          className="relative group cursor-pointer"
          onMouseEnter={() => setIsDesignsOpen(true)}
          onMouseLeave={() => setIsDesignsOpen(false)}
        >
          <div className="flex items-center gap-1 hover:text-orange-500 transition-colors">
            Designs <ChevronDown size={12} className={cn("transition-transform", isDesignsOpen && "rotate-180")} />
          </div>
          
          <AnimatePresence>
            {isDesignsOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 pt-4"
              >
                <div className="bg-white text-black p-4 rounded-2xl shadow-2xl min-w-[160px] border border-black/5">
                  {designLinks.map((link) => (
                    <NavLink 
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) => cn(
                        "block px-4 py-2 rounded-lg hover:bg-black/5 transition-colors text-[10px] font-bold uppercase tracking-widest mb-1 last:mb-0",
                        isActive && "bg-black text-white hover:bg-black"
                      )}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <NavLink to="/contact" className={({ isActive }) => cn("hover:text-orange-500 transition-colors", isActive && "text-orange-500")}>Contact</NavLink>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black text-white z-[101] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="text-2xl font-black tracking-tighter uppercase">Vibrant.</div>
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            
            <div className="flex flex-col gap-8 text-4xl font-black uppercase tracking-tighter">
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
              <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
              <div className="h-px bg-white/10 my-4" />
              <div className="text-xs uppercase tracking-widest opacity-40 mb-4">Our Designs</div>
              <div className="grid grid-cols-2 gap-4">
                {designLinks.map((link) => (
                  <NavLink 
                    key={link.to} 
                    to={link.to} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
