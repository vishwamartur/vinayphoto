import React from 'react';
import { Award, Heart, Camera } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Emotional Storytelling',
      description: 'Every photograph captures the genuine emotions and intimate moments that make your day unique.'
    },
    {
      icon: Camera,
      title: 'Artistic Vision',
      description: 'Combining technical expertise with creative artistry to create timeless, beautiful images.'
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'Award-winning photography with a commitment to exceeding expectations on your special day.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              About Vinay
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 8 years of experience capturing love stories, I believe every 
              wedding is a unique narrative waiting to be told through the lens of artistry 
              and emotion.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My approach combines photojournalistic spontaneity with fine art composition, 
              ensuring your wedding photos are both authentic and breathtakingly beautiful. 
              Based in California but available worldwide for destination weddings.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Vinay Photography"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute top-8 left-8 w-full h-96 bg-rose-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;