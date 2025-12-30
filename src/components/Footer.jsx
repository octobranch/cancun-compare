import React from 'react';
import { Car, Facebook, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <Car className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">
                Cancun<span className="text-indigo-400">Compare</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Helping travelers find safe, reliable, and affordable transportation in Cancun and the Riviera Maya since 2024.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Cancun Airport</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Hotel Zone</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Playa del Carmen</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Tulum</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Akumal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© 2024 CancunCompare. All rights reserved.</p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>for sunny vacations.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
