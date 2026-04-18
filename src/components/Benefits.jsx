import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Benefits = () => {
  const youthBenefits = [
    "Develop self-confidence and public speaking skills",
    "Learn new languages for better future opportunities",
    "Discover hidden talents in arts and music",
    "Build lifelong friendships and community bonds",
    "Learn cultural values and civic discipline",
  ];

  const parentBenefits = [
    "Safe and structured weekend environment",
    "Constructive use of teenagers' free time",
    "Holistic development of physical and mental arts",
    "Professional and dedicated leadership team",
    "Cost-effective extracurricular education",
  ];

  return (
    <section id="benefits" className="py-20 bg-scout-dark text-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-scout-blue opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-yellow-500 opacity-20 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Us?</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Benefits for Youth */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
              Benefits for Youth
            </h3>
            <ul className="space-y-4">
              {youthBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-200">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits for Parents */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
              Benefits for Parents
            </h3>
            <ul className="space-y-4">
              {parentBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-200">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
