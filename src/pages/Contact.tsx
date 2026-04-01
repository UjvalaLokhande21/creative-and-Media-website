import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#6A1B9A] text-white overflow-hidden selection:bg-white selection:text-[#6A1B9A]">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 md:px-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="px-4 py-1.5 bg-white text-[#6A1B9A] text-[10px] uppercase font-black tracking-widest rounded-full">
              Get in Touch
            </span>
            <div className="h-px w-24 bg-white/20" />
          </motion.div>

          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[10vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase mb-12"
          >
            Let's create<br />
            <span className="text-orange-500">Magic</span><br />
            Together<span className="text-orange-500">.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-medium opacity-60 max-w-2xl leading-relaxed"
          >
            Ready to start your next project? We're here to help you bring your boldest ideas to life.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-6 md:px-24 bg-white text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-6xl font-black uppercase leading-none mb-12 tracking-tighter">
              Send us a<br />
              <span className="text-orange-500">Message</span><br />
              directly.
            </h2>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest opacity-40">Name</label>
                  <input type="text" className="w-full border-b-2 border-black/10 focus:border-orange-500 outline-none py-4 font-bold text-xl transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest opacity-40">Email</label>
                  <input type="email" className="w-full border-b-2 border-black/10 focus:border-orange-500 outline-none py-4 font-bold text-xl transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest opacity-40">Message</label>
                <textarea rows={4} className="w-full border-b-2 border-black/10 focus:border-orange-500 outline-none py-4 font-bold text-xl transition-colors resize-none" placeholder="Tell us about your project..." />
              </div>
              
              <button className="group flex items-center gap-4 bg-black text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="space-y-12">
              {[
                { icon: Mail, label: "Email", value: "hello@vibrant.studio" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Address", value: "123 Creative St, Design District, NY 10001" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-[10px] uppercase font-black tracking-widest opacity-40 mb-2">{item.label}</h3>
                    <p className="text-2xl font-black uppercase tracking-tight">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="pt-12 border-t border-black/10">
              <h3 className="text-[10px] uppercase font-black tracking-widest opacity-40 mb-8">Follow Us</h3>
              <div className="flex gap-8">
                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Marquee */}
      <div className="py-12 bg-orange-500 border-y-2 border-black overflow-hidden whitespace-nowrap text-black">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-6xl font-black uppercase tracking-tighter italic">
              Let's Talk • Get in Touch • Start a Project •
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
