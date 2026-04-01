import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Instagram, Twitter, Mail, ArrowRight, ArrowDown } from 'lucide-react';

const PhotographerPortfolio = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="bg-[#000000] text-[#FFFFFF] min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Luxury Nav - Recipe 4 Inspired */}
      <nav className="fixed top-0 left-0 w-full px-8 md:px-16 py-10 flex justify-between items-center z-50">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg font-light tracking-[0.2em]"
        >
          ELARA <span className="opacity-40">VISUALS</span>
        </motion.div>
        <div className="flex gap-12 items-center">
          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">Portfolio</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Exhibitions</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Journal</a>
          </div>
          <button className="border border-white/30 rounded-full px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Contact
          </button>
        </div>
      </nav>

      {/* Hero - Recipe 4 Inspired */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          style={{ y }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://picsum.photos/seed/luxury-photo/1920/1080" 
            alt="Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <span className="text-[10px] uppercase tracking-[0.6em] font-light opacity-60">Fine Art Photography</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="text-7xl md:text-[12vw] font-extralight leading-[0.85] tracking-tighter mb-12"
          >
            Ethereal<br /><span className="font-serif italic">Moments.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-[-15vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[9px] uppercase tracking-[0.4em] opacity-40">Scroll to explore</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={16} className="opacity-40" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Grid - Recipe 4 Inspired */}
      <section className="px-8 md:px-24 py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="md:col-span-7"
          >
            <div className="aspect-[3/4] overflow-hidden bg-white/5">
              <img 
                src="https://picsum.photos/seed/editorial-1/1200/1600" 
                alt="Work" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:col-span-5"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-6 block">Series 01</span>
            <h2 className="text-5xl font-light tracking-tighter mb-8 leading-tight">The Silence of<br />the Tundra.</h2>
            <p className="text-sm font-light leading-relaxed opacity-60 max-w-sm mb-12">
              Captured over three winters in the Arctic Circle, this series explores the profound stillness of landscapes untouched by modern hands.
            </p>
            <button className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold">
              View Series <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Full Width Immersive - Recipe 7 Inspired */}
      <section className="h-[80vh] relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/immersive/1920/1080" 
          alt="Immersive" 
          className="w-full h-full object-cover grayscale opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h2 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
            transition={{ duration: 1.5 }}
            className="text-4xl md:text-7xl font-light uppercase text-center"
          >
            Light is the <br /> <span className="font-serif italic">Only Truth.</span>
          </motion.h2>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="py-40 px-8 md:px-16 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-24">
          <div className="max-w-md">
            <h3 className="text-4xl font-light tracking-tighter mb-8 italic font-serif">Available for global commissions and exhibitions.</h3>
            <p className="text-sm font-light opacity-40 leading-relaxed">Based in Stockholm, working worldwide. Specializing in architectural and fine art photography.</p>
          </div>
          <div className="grid grid-cols-2 gap-24">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest opacity-40">Social</p>
              <ul className="space-y-2 text-xs font-light">
                <li className="hover:opacity-50 transition-opacity cursor-pointer">Instagram</li>
                <li className="hover:opacity-50 transition-opacity cursor-pointer">Behance</li>
                <li className="hover:opacity-50 transition-opacity cursor-pointer">Foundation</li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest opacity-40">Contact</p>
              <ul className="space-y-2 text-xs font-light">
                <li className="hover:opacity-50 transition-opacity cursor-pointer">Studio</li>
                <li className="hover:opacity-50 transition-opacity cursor-pointer">Inquiries</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-40 pt-8 border-t border-white/5 flex justify-between items-center text-[9px] uppercase tracking-[0.4em] opacity-20">
          <p>© 2024 Elara Visuals</p>
          <p>All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default PhotographerPortfolio;
