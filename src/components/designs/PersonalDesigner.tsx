import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Quote, Instagram, Twitter, Linkedin, Sparkles } from 'lucide-react';

const PersonalDesigner = () => {
  const services = [
    { title: 'Brand Identity', desc: 'Crafting unique visual languages for modern brands.' },
    { title: 'Web Experience', desc: 'Building immersive digital journeys that convert.' },
    { title: 'Motion Design', desc: 'Bringing static designs to life with fluid movement.' },
    { title: 'Product Strategy', desc: 'Defining the roadmap for successful digital products.' },
  ];

  const projects = [
    { title: 'Vanguard', category: 'Identity', color: 'bg-orange-500' },
    { title: 'Nebula', category: 'Web App', color: 'bg-blue-500' },
    { title: 'Aura', category: 'Mobile', color: 'bg-purple-500' },
    { title: 'Flux', category: 'Branding', color: 'bg-green-500' },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans selection:bg-[#FF4D00] selection:text-white overflow-x-hidden">
      {/* Playful Floating Nav */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 px-8 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl flex gap-12 items-center z-50 shadow-2xl">
        <motion.div 
          whileHover={{ rotate: 180 }}
          className="w-10 h-10 bg-[#FF4D00] rounded-2xl flex items-center justify-center font-black text-lg italic shadow-lg shadow-orange-500/20"
        >
          K
        </motion.div>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-black opacity-40">
          <a href="#" className="hover:text-[#FF4D00] hover:opacity-100 transition-all">Work</a>
          <a href="#" className="hover:text-[#FF4D00] hover:opacity-100 transition-all">About</a>
          <a href="#" className="hover:text-[#FF4D00] hover:opacity-100 transition-all">Contact</a>
        </div>
      </nav>

      {/* Hero - Dynamic & Bold */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#FF4D00]/10 border border-[#FF4D00]/20 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-[#FF4D00] mb-10"
          >
            <Sparkles size={14} /> Open for 2024 Projects
          </motion.div>
          <h1 className="text-7xl md:text-[12vw] font-black tracking-tighter leading-[0.8] mb-12 uppercase">
            Design <br /> <span className="text-[#FF4D00] italic">With Edge.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-16 font-medium">
            I'm Kai, a multidisciplinary designer building high-performance digital products for ambitious startups.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.3em] flex items-center gap-4 mx-auto shadow-2xl hover:bg-[#FF4D00] hover:text-white transition-colors"
          >
            Start a Project <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Background Accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FF4D00]/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>
      </section>

      {/* Services - Playful Slide-ins */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 uppercase leading-none">
              How I <br /> <span className="text-white/20">Help You.</span>
            </h2>
            <p className="text-xl text-white/40 leading-relaxed mb-12 max-w-md">
              I don't just make things look pretty. I solve business problems through strategic design and clean code.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                <Star size={20} className="text-[#FF4D00]" />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                <Quote size={20} className="text-blue-500" />
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 15, 
                  delay: i * 0.1 
                }}
                className="group bg-white/5 p-8 rounded-[32px] border border-white/10 hover:bg-[#FF4D00] hover:border-[#FF4D00] transition-all duration-500 cursor-default"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-black opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                  <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 -rotate-45 transition-all" />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tight group-hover:translate-x-2 transition-transform">{service.title}</h3>
                <p className="text-white/40 group-hover:text-white transition-colors">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Playful Slide-ins */}
      <section className="py-32 px-8 bg-white text-black rounded-[60px] mx-4 my-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              Recent <br /> <span className="opacity-10">Creations.</span>
            </h2>
            <p className="text-lg text-black/40 max-w-xs font-medium">A curated selection of my latest design and development projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 80, 
                  damping: 12, 
                  delay: i * 0.2 
                }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className={`aspect-[4/3] ${project.color} rounded-[48px] overflow-hidden mb-8 relative shadow-2xl`}>
                  <img 
                    src={`https://picsum.photos/seed/design-${i}/1200/900`} 
                    alt={project.title} 
                    className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <div className="text-white">
                      <p className="text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-60">{project.category}</p>
                      <h3 className="text-5xl font-black uppercase tracking-tighter">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-12 h-12 bg-[#FF4D00] rounded-2xl flex items-center justify-center font-black text-xl italic mb-8">K</div>
            <p className="text-white/20 text-xs font-black uppercase tracking-[0.4em]">© 2024 Kai Design Studio</p>
          </div>
          <div className="flex gap-12">
            <Instagram size={24} className="opacity-20 hover:opacity-100 hover:text-[#FF4D00] transition-all cursor-pointer" />
            <Twitter size={24} className="opacity-20 hover:opacity-100 hover:text-[#FF4D00] transition-all cursor-pointer" />
            <Linkedin size={24} className="opacity-20 hover:opacity-100 hover:text-[#FF4D00] transition-all cursor-pointer" />
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs font-black uppercase tracking-widest opacity-20 mb-4">Get in touch</p>
            <p className="text-2xl font-black hover:text-[#FF4D00] transition-colors cursor-pointer">hello@kai.design</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalDesigner;
