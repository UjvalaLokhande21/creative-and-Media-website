import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Plus, Minus, Info } from 'lucide-react';

const ArtStudio = () => {
  const exhibitions = [
    { id: '01', title: 'Digital Brutalism', date: 'Mar 12 — Apr 20', status: 'Current' },
    { id: '02', title: 'Organic Flow', date: 'May 05 — Jun 15', status: 'Upcoming' },
    { id: '03', title: 'Neon Silence', date: 'Jul 10 — Aug 30', status: 'Upcoming' },
  ];

  return (
    <div className="bg-[#F5F2ED] text-[#1A1A1A] min-h-screen font-serif selection:bg-[#1A1A1A] selection:text-white overflow-x-hidden">
      {/* Subtle Minimalist Nav */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full px-8 md:px-16 py-10 flex justify-between items-center z-50 mix-blend-difference text-white"
      >
        <div className="text-2xl font-light tracking-tighter uppercase">Studio.</div>
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold">
          <a href="#" className="hover:opacity-50 transition-opacity">Exhibitions</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Archive</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Info</a>
        </div>
      </motion.nav>

      {/* Hero - Atmospheric & Minimal */}
      <section className="relative min-h-screen flex flex-col justify-end p-8 md:p-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://picsum.photos/seed/art-hero/1920/1080" 
            alt="Art Background" 
            className="w-full h-full object-cover grayscale opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F2ED] via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-8xl md:text-[15vw] font-light tracking-tighter leading-[0.8] mb-12 uppercase">
              Raw <br /> <span className="italic font-normal">Expression.</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-end gap-12">
              <p className="text-lg md:text-2xl max-w-xl leading-relaxed opacity-60">
                An experimental space exploring the boundaries of contemporary art, technology, and human emotion.
              </p>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 rounded-full border border-[#1A1A1A] flex items-center justify-center cursor-pointer group"
              >
                <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exhibitions - Subtle Fade-ins */}
      <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-24 border-b border-[#1A1A1A]/10 pb-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] opacity-40">Exhibitions</h2>
          <span className="text-xs font-bold uppercase tracking-widest">Berlin / 2024</span>
        </div>
        <div className="space-y-0">
          {exhibitions.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="group border-b border-[#1A1A1A]/10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover:bg-white/50 transition-colors px-4 -mx-4 rounded-xl"
            >
              <div className="flex items-center gap-12 mb-4 md:mb-0">
                <span className="text-xs font-bold opacity-20">{ex.id}</span>
                <h3 className="text-4xl md:text-6xl font-light tracking-tighter group-hover:italic transition-all">{ex.title}</h3>
              </div>
              <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-start">
                <span className="text-xs font-bold uppercase tracking-widest opacity-40">{ex.date}</span>
                <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${ex.status === 'Current' ? 'bg-[#1A1A1A] text-white' : 'border border-[#1A1A1A]/20'}`}>
                  {ex.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Artist - Minimalist */}
      <section className="py-32 px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="aspect-[3/4] overflow-hidden rounded-[40px]"
          >
            <img 
              src="https://picsum.photos/seed/artist/1200/1600" 
              alt="Artist" 
              className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-[#1A1A1A]" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">Featured Artist</span>
              </div>
              <h2 className="text-6xl font-light tracking-tighter mb-8 italic">Elena Vance</h2>
              <p className="text-xl leading-relaxed opacity-60 mb-12">
                A pioneer in generative sculpture, Elena's work challenges our perception of physical space in the digital age.
              </p>
              <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] hover:gap-6 transition-all">
                Read Biography <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-8 md:px-16 border-t border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div>
            <div className="text-2xl font-light tracking-tighter uppercase mb-8">Studio.</div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-40 leading-loose">
              124 Art District <br /> Berlin, Germany <br /> 10115
            </p>
          </div>
          <div className="grid grid-cols-2 gap-24">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-20 mb-6">Social</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest opacity-60">
                <li className="hover:opacity-100 cursor-pointer transition-opacity">Instagram</li>
                <li className="hover:opacity-100 cursor-pointer transition-opacity">Twitter</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-20 mb-6">Contact</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest opacity-60">
                <li className="hover:opacity-100 cursor-pointer transition-opacity">Email</li>
                <li className="hover:opacity-100 cursor-pointer transition-opacity">Press</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-[#1A1A1A]/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.4em] opacity-20">
          <p>© 2024 Art Studio Collective</p>
          <p>Atmospheric Minimal</p>
        </div>
      </footer>
    </div>
  );
};

export default ArtStudio;
