import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Globe, Layers, Instagram, Twitter, Linkedin, Plus } from 'lucide-react';
import { cn } from '../../lib/utils';

const CreativeAgency = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#000000] min-h-screen font-sans selection:bg-[#00FF00] selection:text-black">
      {/* Brutalist Header - Recipe 5 Inspired */}
      <motion.header 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.1,
              delayChildren: 0.2
            }
          }
        }}
        className="border-b-2 border-black px-6 py-12 md:px-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
      >
        <div>
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-[#00FF00] rounded-full" />
            Creative Agency / London
          </motion.div>
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-7xl md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase"
          >
            Vanguard<br />Studio<span className="text-[#00FF00]">.</span>
          </motion.h1>
        </div>
        <div className="flex flex-col items-end gap-4">
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-right max-w-[200px] text-xs font-bold uppercase tracking-widest leading-relaxed opacity-60"
          >
            We build digital products that define the next generation of brands.
          </motion.div>
          <motion.button 
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            className="bg-[#00FF00] text-black px-8 py-4 border-2 border-black font-black uppercase tracking-widest text-[10px] hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Start Project
          </motion.button>
        </div>
      </motion.header>

      {/* Services Grid - Recipe 5 Inspired */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-black">
        {[
          { title: 'Branding', icon: Zap, desc: 'Defining your visual identity through strategic design and bold concepts.' },
          { title: 'Digital', icon: Globe, desc: 'High-performance websites and immersive platforms built for scale.' },
          { title: 'Content', icon: Layers, desc: 'Storytelling that resonates with your target audience across all channels.' },
        ].map((service, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={cn(
              "p-12 md:p-20 border-black hover:bg-[#00FF00] transition-colors group",
              i < 2 ? "md:border-r-2 border-b-2 md:border-b-0" : "border-b-2 md:border-b-0"
            )}
          >
            <div className="flex justify-between items-start mb-12">
              <service.icon size={48} className="group-hover:rotate-12 transition-transform" />
              <span className="text-4xl font-black opacity-10 italic">0{i + 1}</span>
            </div>
            <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter">{service.title}</h3>
            <p className="text-lg font-bold leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{service.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Portfolio Grid - Recipe 5 Inspired */}
      <section className="py-24 px-6 md:px-24">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-6xl font-black uppercase tracking-tighter">Selected<br />Works</h2>
          <div className="flex gap-4">
            <div className="w-12 h-12 border-2 border-black flex items-center justify-center font-black">01</div>
            <div className="w-12 h-12 border-2 border-black flex items-center justify-center font-black opacity-20">04</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2, 3, 4].map((item, i) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i % 2 * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-black border-2 border-black mb-8 overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/agency-new-${item}/800/1000`} 
                  alt="Work" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-[#00FF00] border-2 border-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <Plus size={24} />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black pb-4">
                <h4 className="text-2xl font-black uppercase tracking-tighter">Project Name</h4>
                <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Branding / 2024</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer - Recipe 5 Inspired */}
      <footer className="bg-black text-white py-32 px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-8xl md:text-[12vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
              Let's<br />Talk<span className="text-[#00FF00]">.</span>
            </h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2
                  }
                }
              }}
              className="flex gap-8"
            >
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }
                  }}
                >
                  <Icon size={24} className="hover:text-[#00FF00] transition-colors cursor-pointer" />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="flex flex-col justify-end gap-12">
            <div className="space-y-4">
              <p className="text-4xl font-black uppercase tracking-tighter hover:text-[#00FF00] transition-colors cursor-pointer underline decoration-4 underline-offset-8">hello@vanguard.studio</p>
              <p className="text-xl font-bold opacity-40">London, United Kingdom</p>
            </div>
            <div className="flex justify-between items-end border-t border-white/20 pt-8">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">© 2024 Vanguard Studio</p>
              <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest opacity-40">
                <span>Privacy</span>
                <span>Terms</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreativeAgency;
