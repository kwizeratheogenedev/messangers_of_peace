import React from 'react';
import { BookOpen, Globe2, MessageCircle, Music, Star, LibraryBig, Languages } from 'lucide-react';

const Programs = () => {
  const programs = [
    { title: 'English Language', icon: <Globe2 size={28} />, desc: 'Improve your English fluency with interactive sessions.' },
    { title: 'French Language', icon: <Languages size={28} />, desc: 'Learn French communication and grammar effectively.' },
    { title: 'Kiswahili', icon: <MessageCircle size={28} />, desc: 'Master Swahili to connect across regional borders.' },
    { title: 'Traditional Dance', icon: <Star size={28} />, desc: 'Celebrate and preserve our rich cultural heritage in dance.' },
    { title: 'Modern Dance', icon: <Music size={28} />, desc: 'Express yourself creatively with contemporary dance styles.' },
    { title: 'Music & Instruments', icon: <LibraryBig size={28} />, desc: 'Learn to play various instruments and vocal skills.' },
    { title: 'Civic Education', icon: <BookOpen size={28} />, desc: 'Building discipline, ethics, and youth leadership.' },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-scout-dark mb-4">Our Programs</h2>
          <div className="w-24 h-1 bg-scout-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover a wide variety of activities designed to build skills, confidence, and community spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, index) => (
            <div 
              key={index} 
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-scout-blue hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-2 cursor-pointer h-full"
            >
              <div className="w-12 h-12 bg-white text-scout-blue rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm">
                {prog.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-white text-slate-800 transition-colors">
                {prog.title}
              </h3>
              <p className="text-slate-600 group-hover:text-scout-light transition-colors leading-relaxed">
                {prog.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
