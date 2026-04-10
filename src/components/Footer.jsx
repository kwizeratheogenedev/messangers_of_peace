import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from '../assets/Logo_transparent.png'

const Footer = () => {
  return (
    <footer className="bg-scout-dark text-white pt-16 pb-8 border-t-4 border-yellow-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-4 mb-6 cursor-pointer hover:opacity-90 transition-opacity">
              <img src={logo} alt="Messengers of Peace Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg" />
              <span className="font-bold text-xl">
                Messengers of Peace
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Rwanda Scout organization dedicated to empowering youth through education, culture, and leadership since 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-yellow-400 rounded-full"></span> Home</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-yellow-400 rounded-full"></span> About Us</a></li>
              <li><a href="#programs" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-yellow-400 rounded-full"></span> Programs</a></li>
              <li><a href="#schedule" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-yellow-400 rounded-full"></span> Schedule</a></li>
              <li><a href="#join" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-yellow-400 rounded-full"></span> Join Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">Contact</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <strong>Address:</strong> Camp Kigali, Nyarugenge District
              </li>
              <li className="flex items-start gap-2">
                <strong>WhatsApp:</strong> +250 722 784 670
              </li>
              <li className="flex items-start gap-2">
                <strong>Phone:</strong> +250 786 188 913
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-scout-blue hover:text-white hover:scale-110 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-scout-blue hover:text-white hover:scale-110 transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-scout-blue hover:text-white hover:scale-110 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-scout-blue hover:text-white hover:scale-110 transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-slate-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Messengers of Peace – Rwanda Scout. All rights reserved.</p>
          <p>Created for the Youth of Rwanda</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
