import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      id: 'wedding',
      title: 'Wedding',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete wedding day coverage capturing every precious moment'
    },
    {
      id: 'pre-wedding',
      title: 'Pre-Wedding',
      image: 'https://images.pexels.com/photos/1445324/pexels-photo-1445324.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Romantic engagement and pre-wedding photo sessions'
    },
    {
      id: 'engagement',
      title: 'Engagement',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Beautiful engagement portraits and couple sessions'
    },
    {
      id: 'birthday',
      title: 'Birthday',
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Memorable birthday celebrations and milestone moments'
    },
    {
      id: 'baby-shower',
      title: 'Baby Shower',
      image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Joyful baby shower celebrations and family gatherings'
    },
    {
      id: 'maternity',
      title: 'Maternity & Pregnancy',
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Beautiful maternity portraits celebrating new life'
    },
    {
      id: 'baby-shoot',
      title: 'Baby Shoot',
      image: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Adorable newborn and baby photography sessions'
    },
    {
      id: 'house-warming',
      title: 'House Warming',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Special home celebrations and family milestone events'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Our Photography Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing life's most precious moments across all your special occasions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-gradient-to-b from-amber-100 to-amber-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif text-gray-900 mb-2 group-hover:text-amber-800 transition-colors">
                  {service.title}
                </h3>
                <div className="w-12 h-0.5 bg-amber-600 mx-auto mb-3"></div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-amber-600/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Session Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;