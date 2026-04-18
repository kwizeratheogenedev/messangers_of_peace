import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import heroBg from "../assets/Hero1.png";

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-32 flex items-center justify-center min-h-[90vh]">
      {/* Background with image + overlay */}
      <div
        className="absolute inset-0 z-0 bg-scout-dark bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-scout-dark to-scout-dark opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up min-h-[100px] md:min-h-0">
          Empowering Youth Through <br className="hidden md:block" />
          <span className="text-yellow-400">
            Education, Culture &{' '}
            <Typewriter
              words={['Leadership', 'Discipline', 'Excellence', 'Unity']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto font-extralight mb-10 opacity-90">
        Empowering the next generation through leadership, culture, talent, and strong values. Messengers of Peace nurtures responsible, confident, and purpose-driven youth ready to transform their communities and shape a brighter future.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a 
            href="#join" 
            className="px-8 py-4 text-lg font-bold rounded-full bg-yellow-400 text-scout-dark hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Join Now
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 text-lg font-bold rounded-full border-2 border-white text-white hover:bg-white hover:text-scout-blue transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.06,150.71,101.24,227.14,82.22,258.01,74.45,289.47,62.33,321.39,56.44Z" className="fill-slate-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
