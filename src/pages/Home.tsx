import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play, Sparkles, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#7C3AED] text-black overflow-hidden selection:bg-black selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-24">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://picsum.photos/seed/vibrant-creative/1200/1600" 
            alt="Vibrant Creative"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="px-4 py-1.5 bg-black text-white text-[10px] uppercase font-black tracking-widest rounded-full">
              Creative Studio
            </span>
            <div className="h-px w-24 bg-black/20" />
          </motion.div>

          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[12vw] lg:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase mb-12"
          >
            Bold<br />
            <span className="text-white outline-text">Vibrant</span><br />
            Design<span className="text-white">.</span>
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-8 items-center"
          >
            <button className="group flex items-center gap-4 bg-black text-white px-8 py-6 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Start Project
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <Play size={20} fill="currentColor" />
              </div>
              <span className="font-bold uppercase tracking-widest text-sm">Watch Showreel</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 md:px-24 bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Zap, title: "Fast Execution", desc: "We deliver high-quality results at lightning speed without compromising on detail." },
            { icon: Sparkles, title: "Unique Vision", desc: "Every project is a blank canvas where we paint bold, unconventional ideas." },
            { icon: Play, title: "Dynamic Motion", desc: "We bring static designs to life with fluid, purposeful animations." }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-12 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors group"
            >
              <div className="w-16 h-16 bg-[#7C3AED] rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                <feature.icon size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-12 bg-[#7C3AED] border-y-2 border-black overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-6xl font-black uppercase tracking-tighter italic">
              Vibrant Design • Bold Ideas • Creative Studio •
            </span>
          ))}
        </motion.div>
      </div>

      {/* Image Showcase */}
      <section className="py-32 px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-[3rem] overflow-hidden"
          >
            <img 
              src="https://picsum.photos/seed/vibrant-1/800/1000" 
              alt="Showcase 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="flex flex-col justify-center">
            <h2 className="text-6xl font-black uppercase leading-none mb-8 tracking-tighter">
              We create<br />
              <span className="text-white">Digital</span><br />
              Experiences.
            </h2>
            <p className="text-xl font-medium mb-12 opacity-80 max-w-md">
              Pushing the boundaries of what's possible in the digital space with bold colors and unconventional layouts.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                <Zap size={20} />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
