import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Palette, 
  Video, 
  Globe, 
  Share2, 
  Zap, 
  ArrowRight, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X,
  Dribbble,
  Github
} from 'lucide-react';
import { cn } from '../lib/utils';

// --- Mock Data ---

const photographyItems = [
  { id: 1, category: 'Fashion', title: 'Urban Vogue', image: 'https://picsum.photos/seed/fashion1/800/1000' },
  { id: 2, category: 'Portrait', title: 'Soulful Eyes', image: 'https://picsum.photos/seed/portrait1/800/800' },
  { id: 3, category: 'Product', title: 'Minimal Watch', image: 'https://picsum.photos/seed/product1/800/1200' },
  { id: 4, category: 'Wedding', title: 'Eternal Love', image: 'https://picsum.photos/seed/wedding1/800/900' },
  { id: 5, category: 'Fashion', title: 'Neon Dreams', image: 'https://picsum.photos/seed/fashion2/800/1100' },
  { id: 6, category: 'Portrait', title: 'Golden Hour', image: 'https://picsum.photos/seed/portrait2/800/1000' },
];

const portfolioProjects = [
  { id: 1, category: 'UI/UX Design', title: 'Fintech App Redesign', image: 'https://picsum.photos/seed/ui1/600/400', gradient: 'from-purple-500/20 to-blue-500/20' },
  { id: 2, category: 'Branding', title: 'Eco-Friendly Identity', image: 'https://picsum.photos/seed/branding1/600/400', gradient: 'from-pink-500/20 to-orange-500/20' },
  { id: 3, category: 'Web Design', title: 'Luxury E-commerce', image: 'https://picsum.photos/seed/web1/600/400', gradient: 'from-cyan-500/20 to-indigo-500/20' },
];

const agencyServices = [
  { 
    id: 1, 
    title: 'Video Production', 
    icon: Video, 
    description: 'High-quality cinematic storytelling for brands and artists.',
    color: 'text-purple-400',
    borderColor: 'hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]'
  },
  { 
    id: 2, 
    title: 'Branding', 
    icon: Palette, 
    description: 'Creating unique visual identities that resonate with your audience.',
    color: 'text-blue-400',
    borderColor: 'hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]'
  },
  { 
    id: 3, 
    title: 'Social Media Content', 
    icon: Share2, 
    description: 'Engaging content strategies to grow your online presence.',
    color: 'text-pink-400',
    borderColor: 'hover:border-pink-500/50 hover:shadow-[0_0_236,72,153,0.2)]'
  },
  { 
    id: 4, 
    title: 'Creative Direction', 
    icon: Zap, 
    description: 'Strategic vision to elevate your creative projects to the next level.',
    color: 'text-orange-400',
    borderColor: 'hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]'
  },
];

const featuredProjects = [
  { id: 1, title: 'The Future of Media', category: 'Documentary', image: 'https://picsum.photos/seed/featured1/1200/800' },
  { id: 2, title: 'Abstract Realities', category: 'Digital Art', image: 'https://picsum.photos/seed/featured2/1200/800' },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Photography', href: '#photography' },
    { name: 'Design', href: '#design' },
    { name: 'Media', href: '#media' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4",
      isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Zap size={18} className="text-white fill-white" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase text-white">MediaLab</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-purple-500 hover:text-white transition-all duration-300">
            Start Project
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-bold text-white/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-purple-500 text-white px-6 py-3 rounded-xl font-bold w-full">
              Start Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
      {/* Background Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-600/5 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Creative Media Studio
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
            WE CREATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              VISUAL STORIES
            </span> <br />
            THAT INSPIRE
          </h1>
          <p className="text-lg text-white/60 max-w-lg mb-10 leading-relaxed">
            A multi-disciplinary studio specializing in photography, design, and digital media. We blend art and technology to build premium brand experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
              View Portfolio <ArrowRight size={18} />
            </button>
            <button className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
              Hire Us
            </button>
          </div>
        </motion.div>

        <div className="relative grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative group"
            >
              <img src="https://picsum.photos/seed/hero1/600/800" alt="Creative Collage" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative group"
            >
              <img src="https://picsum.photos/seed/hero2/600/600" alt="Creative Collage" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative group"
            >
              <img src="https://picsum.photos/seed/hero3/600/600" alt="Creative Collage" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative group"
            >
              <img src="https://picsum.photos/seed/hero4/600/800" alt="Creative Collage" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
          {/* Floating Glow */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/10 blur-[100px] rounded-full" />
        </div>
      </div>
    </section>
  );
};

const Photography = () => {
  return (
    <section id="photography" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Photography</h2>
            <p className="text-white/40 max-w-md">Capturing moments that tell a story beyond words. From fashion to portraits.</p>
          </motion.div>
          <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
            {['All', 'Fashion', 'Wedding', 'Product', 'Portrait'].map((cat) => (
              <button key={cat} className="px-6 py-2 rounded-full border border-white/10 text-white/60 text-sm font-medium hover:border-purple-500 hover:text-white transition-all whitespace-nowrap">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photographyItems.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 break-inside-avoid"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
              </div>
              <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/40 group-hover:shadow-[inset_0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DesignerPortfolio = () => {
  return (
    <section id="design" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Designer Portfolio</h2>
          <p className="text-white/40 max-w-xl mx-auto">A collection of UI/UX and branding projects focused on user-centric design and visual excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -10 }}
              className={cn(
                "p-4 rounded-[2rem] bg-gradient-to-br border border-white/10 group transition-all duration-500",
                project.gradient
              )}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="px-4 pb-4">
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-white font-bold text-2xl mb-4">{project.title}</h3>
                <button className="text-white flex items-center gap-2 text-sm font-bold group-hover:text-purple-400 transition-colors">
                  View Case Study <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MediaAgency = () => {
  return (
    <section id="media" className="py-32 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-6">Media Agency</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              We are a full-service media agency that helps brands navigate the digital landscape. From content creation to strategic direction, we've got you covered.
            </p>
            <div className="flex gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-black text-white mb-1">120+</div>
                <div className="text-white/40 text-xs uppercase font-bold tracking-widest">Projects</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-black text-white mb-1">80+</div>
                <div className="text-white/40 text-xs uppercase font-bold tracking-widest">Clients</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-black text-white mb-1">5+</div>
                <div className="text-white/40 text-xs uppercase font-bold tracking-widest">Years</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {agencyServices.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  "p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300",
                  service.borderColor
                )}
              >
                <service.icon size={32} className={cn("mb-6", service.color)} />
                <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10">
            <img src="https://picsum.photos/seed/about/800/800" alt="About Us" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-10 -right-10 p-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white border-4 border-[#050505] hidden md:block">
            <div className="text-center">
              <div className="text-4xl font-black">5+</div>
              <div className="text-[10px] uppercase font-bold tracking-widest">Years Exp.</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-purple-400 text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Our Story</span>
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
            Blending Creativity <br /> with Strategy
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Founded in 2021, MediaLab has grown from a small design boutique into a full-scale creative powerhouse. We believe that every brand has a story worth telling, and we use our expertise in photography, design, and media to bring those stories to life.
          </p>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Our team is composed of passionate creators, thinkers, and builders who are dedicated to pushing the boundaries of what's possible in the digital world.
          </p>
          <button className="text-white flex items-center gap-3 font-bold group">
            Learn More About Us 
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-500 transition-all">
              <ArrowRight size={18} />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const PortfolioShowcase = () => {
  return (
    <section id="portfolio" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter">Featured Work</h2>
          <button className="text-white/60 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">View All Projects</button>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {featuredProjects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-[3rem] overflow-hidden group cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 flex flex-col justify-end p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-purple-400 text-sm font-bold uppercase tracking-[0.4em] mb-4 block">{project.category}</span>
                  <h3 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">{project.title}</h3>
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <button className="bg-white text-black px-8 py-3 rounded-full font-bold">View Project</button>
                    <button className="text-white font-bold border-b border-white/40 hover:border-white transition-all">Case Study</button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-12 md:p-24 text-center relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 blur-[80px] rounded-full translate-x-1/2 translate-y-1/2" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
            Let's Build Something <br /> Creative Together
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">
            Ready to elevate your brand? Our team is standing by to turn your vision into reality. Let's start a conversation.
          </p>
          <button className="bg-white text-black px-12 py-5 rounded-full text-lg font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-black pt-32 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {/* Col 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap size={18} className="text-white fill-white" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase text-white">MediaLab</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              A premium creative media studio dedicated to visual storytelling and digital excellence. We build brands that matter.
            </p>
            <p className="text-white/20 text-[10px] uppercase font-bold tracking-widest">Creative Media Studio</p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Photography', 'Design', 'Media', 'Portfolio'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Services</h4>
            <ul className="space-y-4">
              {['Photography', 'UI Design', 'Video Production', 'Branding'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail size={18} className="text-purple-500 mt-1" />
                <div>
                  <div className="text-white text-sm font-bold">Email</div>
                  <div className="text-white/40 text-sm">hello@medialab.studio</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={18} className="text-blue-500 mt-1" />
                <div>
                  <div className="text-white text-sm font-bold">Phone</div>
                  <div className="text-white/40 text-sm">+1 (555) 123-4567</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-pink-500 mt-1" />
                <div>
                  <div className="text-white text-sm font-bold">Location</div>
                  <div className="text-white/40 text-sm">India, CA</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8">
            {[Instagram, Dribbble, Github].map((Icon, i) => (
              <a key={i} href="#" className="text-white/40 hover:text-white transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-white/20 text-xs font-medium uppercase tracking-widest">
            © 2026 Creative Media Studio. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-white text-[10px] uppercase font-bold tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white text-[10px] uppercase font-bold tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CreativeMediaStudio = () => {
  return (
    <div className="bg-black min-h-screen selection:bg-purple-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Photography />
        <DesignerPortfolio />
        <MediaAgency />
        <About />
        <PortfolioShowcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default CreativeMediaStudio;
