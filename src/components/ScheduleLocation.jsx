import React from 'react';
import { MapPin, Clock, Calendar, UserCheck } from 'lucide-react';

const ScheduleLocation = () => {
  return (
    <section id="schedule" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-scout-dark mb-4">Schedule & Location</h2>
          <div className="w-24 h-1 bg-scout-blue mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Location</h3>
            <p className="text-slate-600">Camp Kigali</p>
            <p className="text-slate-500 text-sm">Nyarugenge District, Rwanda</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-6">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Schedule</h3>
            <p className="text-slate-600">Every Sunday</p>
            <p className="text-slate-500 text-sm font-semibold">1:30 PM – 4:30 PM</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
              <UserCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Eligibility</h3>
            <p className="text-slate-600">Youth & Teens</p>
            <p className="text-slate-500 text-sm font-semibold">Age 14 years and above</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleLocation;
