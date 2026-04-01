import React from 'react';
import { motion } from 'motion/react';
import { Play, Film, Monitor, Camera, ArrowRight, Volume2 } from 'lucide-react';

const VideoStudio = () => {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-mono selection:bg-[#FF4444] selection:text-white">
      {/* Cinematic Nav - Recipe 3 Inspired */}
      <nav className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#FF4444] rounded-full flex items-center justify-center animate-pulse">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
          <span className="text-xs font-bold tracking-[0.4em] uppercase">Nova / Cinema</span>
        </div>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest opacity-60">
          <a href="#" className="hover:text-[#FF4444] transition-colors">Showreel</a>
          <a href="#" className="hover:text-[#FF4444] transition-colors">Projects</a>
          <a href="#" className="hover:text-[#FF4444] transition-colors">Studio</a>
        </div>
      </nav>

      {/* Hero - Immersive Video Feel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/video-hero/1920/1080" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-30 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1 border border-[#FF4444] text-[#FF4444] text-[10px] uppercase tracking-[0.3em]">Production House</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[10vw] font-bold leading-none tracking-tighter uppercase mb-12"
          >
            Visual<br />Alchemy<span className="text-[#FF4444]">.</span>
          </motion.h1>
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="group flex items-center gap-4 mx-auto bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#FF4444] hover:text-white transition-all"
          >
            <Play size={16} fill="currentColor" /> Play Showreel
          </motion.button>
        </div>

        {/* Technical Overlay */}
        <div className="absolute bottom-12 left-12 hidden md:block">
          <div className="text-[10px] space-y-2 opacity-40 uppercase tracking-widest">
            <p>FPS: 24.00</p>
            <p>RES: 4096 X 2160</p>
            <p>ISO: 800</p>
          </div>
        </div>
      </section>

      {/* Cinematic Slide-ups for Project Showcases */}
      <section className="py-32 px-8 md:px-24">
        <div className="mb-24 flex justify-between items-end">
          <h2 className="text-4xl font-bold uppercase tracking-tighter">Featured<br />Productions</h2>
          <span className="text-[10px] opacity-40 uppercase tracking-widest">Scroll to view</span>
        </div>

        <div className="space-y-40">
          {[1, 2, 3].map((project, i) => (
            <motion.div 
              key={project}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="aspect-[21/9] overflow-hidden bg-white/5 relative">
                <img 
                  src={`https://picsum.photos/seed/video-proj-${project}/1920/820`} 
                  alt="Project" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-20 h-20 border border-white rounded-full flex items-center justify-center">
                    <Play size={24} />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                  <span className="text-[10px] text-[#FF4444] uppercase tracking-[0.4em] mb-4 block">0{project} / Narrative</span>
                  <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Cinematic Title {project}</h3>
                </div>
                <div className="max-w-xs text-[10px] uppercase tracking-widest leading-relaxed opacity-40">
                  A multi-award winning short film exploring the intersection of technology and human emotion in the near future.
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services - Recipe 3 Inspired */}
      <section className="py-32 px-8 md:px-24 bg-[#0A0A0A] border-y border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { title: 'Directing', icon: Camera },
            { title: 'Post-Prod', icon: Film },
            { title: 'VFX', icon: Monitor },
            { title: 'Sound', icon: Volume2 },
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 border border-white/10 hover:border-[#FF4444] transition-colors group"
            >
              <service.icon size={32} className="mb-8 text-[#FF4444]" />
              <h4 className="text-xl font-bold uppercase tracking-tighter mb-4">{service.title}</h4>
              <p className="text-[10px] opacity-40 leading-relaxed uppercase tracking-widest">Professional grade services for high-end commercial and narrative projects.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-8 md:px-24 text-center">
        <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-12">Ready for the <br /> <span className="text-[#FF4444]">Next Scene?</span></h2>
        <button className="text-[10px] uppercase tracking-[0.5em] font-bold border-b-2 border-[#FF4444] pb-2 hover:opacity-50 transition-opacity">Contact Studio</button>
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.4em] opacity-20">
          <p>© 2024 Nova Cinema Productions</p>
          <div className="flex gap-8">
            <span>Instagram</span>
            <span>Vimeo</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VideoStudio;
