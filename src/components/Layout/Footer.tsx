import React from 'react';
import { Camera, Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-rose-400" />
              <span className="text-2xl font-serif">Vinay</span>
            </div>
            <p className="text-gray-300 mb-4">
              Capturing love stories with timeless elegance and artistry. 
              Based in California, available worldwide.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-rose-400 cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-rose-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-rose-400" />
                <span className="text-gray-300">hello@vinay.photography</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-rose-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Wedding Photography</li>
              <li>Engagement Sessions</li>
              <li>Bridal Portraits</li>
              <li>Destination Weddings</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Vinay Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;