import React from 'react';
import About from '../components/Home/About';
import { Award, Users, Heart, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  const achievements = [
    { icon: Award, number: '150+', label: 'Weddings Captured' },
    { icon: Users, number: '300+', label: 'Happy Couples' },
    { icon: Heart, number: '8', label: 'Years Experience' },
    { icon: Star, number: '50+', label: '5-Star Reviews' }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <About />
      
      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
              Capturing Love Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every number represents a beautiful story, a precious moment, 
              and the trust couples have placed in me to capture their special day.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <achievement.icon className="h-12 w-12 text-rose-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">
            My Philosophy
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              "I believe that every wedding is a unique celebration of love, and my role 
              is to capture those fleeting moments that tell your story authentically. 
              From the quiet morning preparations to the joyous celebration with family 
              and friends, I'm there to document not just what happened, but how it felt."
            </p>
            <p className="text-lg leading-relaxed">
              My approach is unobtrusive yet comprehensive, allowing you to be present 
              in your moments while ensuring nothing important goes undocumented. 
              The result is a collection of images that will transport you back to 
              the emotions of your wedding day, year after year.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;