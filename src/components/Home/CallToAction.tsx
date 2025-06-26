import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Ready to Capture Your Love Story?
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Let's discuss your wedding vision and create timeless memories that you'll 
          treasure forever. Available for weddings throughout California and beyond.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full transition-colors duration-300 group"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-full transition-all duration-300"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get in Touch
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            "Vinay captured our wedding beautifully. Every photo tells the story of our love." 
            <span className="block mt-2 text-white font-medium">— Sarah & Michael</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;