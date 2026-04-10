import React, { useState } from 'react';

const RegistrationForm = () => {
  return (
    <section id="join" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-scout-dark mb-4">Registration Form</h2>
          <div className="w-24 h-1 bg-scout-blue mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600">
            Join the Messengers of Peace – Rwanda Scout today. Fill in the details below to register.
          </p>
        </div>

        <div className="bg-slate-50 p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
          <form 
            name="registration" 
            method="POST" 
            data-netlify="true" 
            className="space-y-6"
            action="/?success=true"
          >
            {/* Required hidden input for Netlify */}
            <input type="hidden" name="form-name" value="registration" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Child Full Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Child Full Name *</label>
                <input 
                  type="text" 
                  name="child_name" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-scout-blue focus:border-scout-blue transition-colors bg-white"
                  placeholder="Enter full name"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Age * (Min 14)</label>
                <input 
                  type="number" 
                  name="age" 
                  min="14" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-scout-blue focus:border-scout-blue transition-colors bg-white"
                  placeholder="Enter age"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Parent/Guardian Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Parent/Guardian Name *</label>
                <input 
                  type="text" 
                  name="parent_name" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-scout-blue focus:border-scout-blue transition-colors bg-white"
                  placeholder="Enter parent's full name"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-scout-blue focus:border-scout-blue transition-colors bg-white"
                  placeholder="+250 7XX XXX XXX"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-scout-blue focus:border-scout-blue transition-colors bg-white"
                  placeholder="optional@example.com"
                />
              </div>

              {/* Program Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Primary Program Selection *</label>
                <select 
                  name="program" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-scout-blue focus:border-scout-blue transition-colors bg-white appearance-none"
                >
                  <option value="">Select a program...</option>
                  <option value="English Language">English Language</option>
                  <option value="French Language">French Language</option>
                  <option value="Kiswahili">Kiswahili</option>
                  <option value="Traditional Dance">Traditional Dance</option>
                  <option value="Modern Dance">Modern Dance</option>
                  <option value="Music & Instruments">Music & Instruments</option>
                  <option value="Civic Education">Civic Education & Discipline</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
              <textarea 
                name="message" 
                rows="4" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-scout-blue focus:border-scout-blue transition-colors bg-white resize-none"
                placeholder="Any special notes or health conditions we should know about?"
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button 
                type="submit" 
                className="px-10 py-4 bg-scout-blue text-white font-bold rounded-full hover:bg-scout-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
