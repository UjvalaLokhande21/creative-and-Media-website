import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, TrendingUp, Users, Target, ArrowRight, CheckCircle2 } from 'lucide-react';

const MediaAgency = () => {
  return (
    <div className="bg-[#F8F9FA] text-[#1A1A1A] min-h-screen font-sans selection:bg-[#4F46E5] selection:text-white">
      {/* Modern Nav */}
      <nav className="fixed top-0 left-0 w-full px-8 md:px-16 py-6 flex justify-between items-center z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#4F46E5] rounded-xl flex items-center justify-center text-white">
            <TrendingUp size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight">STRATOS</span>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-semibold text-gray-500">
          <a href="#" className="hover:text-[#4F46E5] transition-colors">Solutions</a>
          <a href="#" className="hover:text-[#4F46E5] transition-colors">Case Studies</a>
          <a href="#" className="hover:text-[#4F46E5] transition-colors">About</a>
        </div>
        <button className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#4F46E5] transition-colors shadow-lg shadow-indigo-500/20">
          Get Started
        </button>
      </nav>

      {/* Hero - Recipe 11 Inspired */}
      <section className="pt-40 pb-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-[#4F46E5] rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 bg-[#4F46E5] rounded-full animate-ping" />
              Data-Driven Growth
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Scale Your <br /><span className="text-[#4F46E5]">Digital Reach.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-lg mb-12">
              We combine advanced analytics with creative strategy to help modern brands dominate their market.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-[#4F46E5] text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-indigo-500/30">
                View Solutions <ArrowRight size={18} />
              </button>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user-${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold">
                  <span className="text-[#4F46E5]">500+</span> Happy Clients
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-indigo-600 rounded-[40px] rotate-6 absolute inset-0 opacity-10" />
            <div className="aspect-square bg-white rounded-[40px] shadow-2xl relative overflow-hidden p-8 border border-gray-100">
              <div className="grid grid-cols-2 gap-6 h-full">
                <div className="bg-indigo-50 rounded-3xl p-6 flex flex-col justify-between">
                  <BarChart3 className="text-[#4F46E5]" size={32} />
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Growth</p>
                    <p className="text-3xl font-black text-[#4F46E5]">+142%</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-3xl p-6 flex flex-col justify-between">
                  <Users className="text-gray-400" size={32} />
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Users</p>
                    <p className="text-3xl font-black text-gray-800">12.4k</p>
                  </div>
                </div>
                <div className="col-span-2 bg-gray-900 rounded-3xl p-8 flex items-center justify-between text-white">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Conversion Rate</p>
                    <p className="text-4xl font-black">8.42%</p>
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                    <Target size={32} className="text-[#4F46E5]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Energetic Scale-in Stats - Recipe 8 Inspired */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Campaigns', value: '2.4k+' },
              { label: 'ROI Average', value: '310%' },
              { label: 'Countries', value: '42+' },
              { label: 'Awards', value: '18' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
              >
                <p className="text-4xl md:text-6xl font-black text-[#1A1A1A] mb-2 tracking-tighter">{stat.value}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Slide-up Features */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Our Core Features</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Everything you need to manage your digital presence and accelerate your business growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Predictive Analytics', desc: 'Use AI to forecast market trends and consumer behavior before they happen.' },
              { title: 'Omnichannel Strategy', desc: 'Seamlessly integrate your brand across all digital touchpoints and platforms.' },
              { title: 'Real-time Reporting', desc: 'Get instant insights into your campaign performance with our custom dashboard.' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white p-10 rounded-[32px] border border-gray-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-[#4F46E5] mb-8 group-hover:bg-[#4F46E5] group-hover:text-white transition-colors">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-[#4F46E5] rounded-xl flex items-center justify-center text-white">
                <TrendingUp size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight">STRATOS</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">The leading media agency for high-growth tech companies and modern consumer brands.</p>
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4F46E5] transition-colors cursor-pointer">
                <ArrowRight size={18} className="-rotate-45" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4F46E5] transition-colors cursor-pointer">
                <ArrowRight size={18} className="-rotate-45" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-500">Company</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">About</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Press</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-500">Support</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              <li className="hover:text-white transition-colors cursor-pointer">Privacy</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-xs font-bold text-gray-500 uppercase tracking-widest">
          <p>© 2024 Stratos Media Group</p>
          <p>Built with Precision</p>
        </div>
      </footer>
    </div>
  );
};

export default MediaAgency;
