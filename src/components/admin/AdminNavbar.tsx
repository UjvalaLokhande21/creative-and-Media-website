import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Image as ImageIcon, Package, LogOut, Settings, ArrowLeft } from 'lucide-react';
import { cn } from '../../lib/utils';

const AdminNavbar = () => {
  const navLinks = [
    { to: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/admin/images', label: 'Add Images', icon: ImageIcon },
    { to: '/admin/products', label: 'Add Product', icon: Package },
    { to: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="w-64 h-screen bg-[#0a0a0a] border-r border-white/5 flex flex-col p-6 fixed left-0 top-0 z-50">
      <div className="flex items-center gap-2 mb-12 px-2">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-black text-xs">ML</span>
        </div>
        <span className="text-xl font-black tracking-tighter uppercase text-white">Admin</span>
      </div>

      <div className="mb-8 px-2">
        <NavLink 
          to="/" 
          className="flex items-center gap-2 text-xs font-bold text-white/40 hover:text-white transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Website
        </NavLink>
      </div>

      <div className="flex-1 space-y-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/admin'}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 group",
              isActive 
                ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-400 border border-purple-500/20" 
                : "text-white/40 hover:text-white hover:bg-white/5"
            )}
          >
            {({ isActive }) => (
              <>
                <link.icon size={18} className={cn("transition-colors", isActive ? "text-purple-400" : "group-hover:text-white")} />
                {link.label}
              </>
            )}
          </NavLink>
        ))}
      </div>

      <div className="pt-6 border-t border-white/5">
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-400 hover:bg-red-500/10 transition-all w-full">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
