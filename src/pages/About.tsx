import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Zap, Sparkles, Globe, User } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#004D40] text-white overflow-hidden selection:bg-white selection:text-[#004D40]">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 md:px-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="px-4 py-1.5 bg-white text-[#004D40] text-[10px] uppercase font-black tracking-widest rounded-full">
              Our Story
            </span>
            <div className="h-px w-24 bg-white/20" />
          </motion.div>

          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[10vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase mb-12"
          >
            We are<br />
            <span className="text-orange-500">Vibrant</span><br />
            Visionaries<span className="text-orange-500">.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-medium opacity-60 max-w-2xl leading-relaxed"
          >
            A collective of designers, developers, and dreamers dedicated to creating digital experiences that leave a lasting impression.
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 md:px-24 bg-white text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-[3rem] overflow-hidden"
          >
            <img 
              src="https://picsum.photos/seed/vibrant-team/800/1000" 
              alt="Team" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div>
            <h2 className="text-6xl font-black uppercase leading-none mb-8 tracking-tighter">
              Driven by<br />
              <span className="text-orange-500">Passion</span><br />
              and Purpose.
            </h2>
            <div className="space-y-8">
              {[
                { icon: Zap, title: "Innovation", desc: "We constantly push the boundaries of design and technology." },
                { icon: Sparkles, title: "Creativity", desc: "Our creative process is fueled by curiosity and bold ideas." },
                { icon: Globe, title: "Impact", desc: "We create digital solutions that make a real difference." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-black/60 font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 md:px-24 bg-[#004D40]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Projects", value: "150+" },
            { label: "Clients", value: "80+" },
            { label: "Awards", value: "25+" },
            { label: "Coffee", value: "∞" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl md:text-8xl font-black tracking-tighter text-orange-500 mb-2">{stat.value}</div>
              <div className="text-sm font-black uppercase tracking-widest opacity-40">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
