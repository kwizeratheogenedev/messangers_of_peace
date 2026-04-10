import React from 'react';
import { Target, Flag, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-scout-dark mb-4">About Us</h2>
          <div className="w-24 h-1 bg-scout-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Who We Are */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
            <div className="w-14 h-14 bg-scout-light text-scout-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Who We Are</h3>
            <p className="text-slate-600 leading-relaxed">
              Messengers of Peace – Rwanda Scout is a youth organization established in 2025, operating in Nyarugenge District, Camp Kigali. We are dedicated to nurturing the next generation of respectful, skilled, and culturally grounded leaders.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
            <div className="w-14 h-14 bg-scout-light text-scout-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To empower young people aged 14 and above through comprehensive educational programs, language acquisition, cultural arts, and leadership training in a safe and supportive environment.
            </p>
          </div>

          {/* Objectives */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
            <div className="w-14 h-14 bg-scout-light text-scout-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Flag size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Key Objectives</h3>
            <ul className="text-slate-600 leading-relaxed space-y-2 list-none">
              <li className="flex items-start gap-2">
                <span className="text-scout-blue font-bold">•</span> Enhance linguistic skills.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-scout-blue font-bold">•</span> Preserve traditional Rwandan culture.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-scout-blue font-bold">•</span> Foster civic responsibility and discipline.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-scout-blue font-bold">•</span> Develop musical and artistic talents.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
