import React from 'react';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import PhotoGallery from '../components/Home/PhotoGallery';
import FeaturedWork from '../components/Home/FeaturedWork';
import CallToAction from '../components/Home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <PhotoGallery />
      <FeaturedWork />
      <CallToAction />
    </div>
  );
};

export default HomePage;