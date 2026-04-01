import React, { useState } from 'react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Upload, Plus, X, Image as ImageIcon, Package, CheckCircle2, ArrowLeft } from 'lucide-react';
import { cn } from '../../lib/utils';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'images' | 'products'>('images');

  return (
    <div className="min-h-screen bg-[#050505] text-white pl-64">
      <header className="p-8 border-b border-white/5 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-6">
          <NavLink 
            to="/" 
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all group"
            title="Back to Website"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </NavLink>
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter">MediaLab Control</h1>
            <p className="text-white/40 text-sm">Manage your creative assets and products</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setActiveTab('images')}
            className={cn(
              "px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all",
              activeTab === 'images' ? "bg-white text-black" : "bg-white/5 text-white/40 hover:bg-white/10"
            )}
          >
            Manage Images
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={cn(
              "px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all",
              activeTab === 'products' ? "bg-white text-black" : "bg-white/5 text-white/40 hover:bg-white/10"
            )}
          >
            Manage Products
          </button>
        </div>
      </header>

      <main className="p-8">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'images' ? <AddImagesSection /> : <AddProductsSection />}
        </div>
      </main>
    </div>
  );
};

const AddImagesSection = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="p-12 rounded-[2rem] border-2 border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center text-center group hover:border-purple-500/50 transition-all cursor-pointer relative">
            <input 
              type="file" 
              multiple 
              className="absolute inset-0 opacity-0 cursor-pointer" 
              onChange={handleFileChange}
              accept="image/*"
            />
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Upload className="text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Upload New Assets</h3>
            <p className="text-white/40 text-sm max-w-xs">Drag and drop your images here, or click to browse. Supports JPG, PNG, WEBP.</p>
          </div>

          {files.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {files.map((file, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden relative group border border-white/10">
                  <img src={URL.createObjectURL(file)} alt="preview" className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setFiles(files.filter((_, idx) => idx !== i))}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
              <label className="aspect-square rounded-2xl border-2 border-dashed border-white/10 bg-white/5 flex items-center justify-center cursor-pointer hover:border-white/20 transition-all">
                <input type="file" multiple className="hidden" onChange={handleFileChange} />
                <Plus className="text-white/20" />
              </label>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-widest">Image Details</h3>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] uppercase font-black tracking-widest text-white/40 mb-2 block">Category</label>
                <select className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-purple-500 outline-none transition-all">
                  <option>Photography</option>
                  <option>UI/UX Design</option>
                  <option>3D Assets</option>
                  <option>Branding</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] uppercase font-black tracking-widest text-white/40 mb-2 block">Tags</label>
                <input type="text" placeholder="e.g. minimal, dark, portrait" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-purple-500 outline-none transition-all" />
              </div>
              <div className="flex items-center gap-2 pt-4">
                <input type="checkbox" id="featured" className="w-4 h-4 rounded bg-black border-white/10 text-purple-500 focus:ring-purple-500" />
                <label htmlFor="featured" className="text-sm text-white/60">Mark as Featured</label>
              </div>
            </div>
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all">
              Save Assets
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AddProductsSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
    >
      <div className="lg:col-span-2 space-y-8">
        <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Package className="text-blue-500" />
            </div>
            <h3 className="text-xl font-bold">Product Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-white/40">Product Name</label>
              <input type="text" placeholder="e.g. Modern UI Kit" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-white/40">Price (USD)</label>
              <input type="number" placeholder="49.00" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-white/40">Description</label>
              <textarea rows={4} placeholder="Describe your product..." className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all resize-none" />
            </div>
          </div>
        </div>

        <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-6">
          <h3 className="text-lg font-bold">Product Features</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3">
                <input type="text" placeholder={`Feature ${i}`} className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all" />
                <button className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/20 hover:text-red-400 hover:bg-red-400/10 transition-all">
                  <X size={18} />
                </button>
              </div>
            ))}
            <button className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors pt-2">
              <Plus size={16} /> Add another feature
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-6">
          <h3 className="text-lg font-bold">Thumbnail</h3>
          <div className="aspect-square rounded-2xl border-2 border-dashed border-white/10 bg-black flex flex-col items-center justify-center text-center p-6 group hover:border-blue-500/50 transition-all cursor-pointer">
            <ImageIcon className="text-white/20 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <p className="text-[10px] uppercase font-bold tracking-widest text-white/40">Upload Preview Image</p>
          </div>
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-black border border-white/10">
              <span className="text-xs text-white/60">Status</span>
              <span className="text-xs font-bold text-green-400 flex items-center gap-1">
                <CheckCircle2 size={12} /> Published
              </span>
            </div>
          </div>
          <button className="w-full py-4 rounded-xl bg-blue-600 text-sm font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl">
            Create Product
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
