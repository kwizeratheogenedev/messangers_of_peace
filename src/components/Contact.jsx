import React from 'react';
import { Phone, MessageSquare, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-scout-dark mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-scout-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have any questions? We'd love to hear from you. Send us a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">WhatsApp</h4>
                <p className="text-slate-600">+250 722 784 670</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">Phone Call</h4>
                <p className="text-slate-600">+250 786 188 913</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">Location</h4>
                <p className="text-slate-600">Camp Kigali, Nyarugenge District<br/>Rwanda</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              className="space-y-5"
              action="/?success=true"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-scout-blue focus:border-scout-blue"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-scout-blue focus:border-scout-blue"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-scout-blue focus:border-scout-blue resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-scout-blue text-white font-bold rounded-lg hover:bg-scout-dark transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                <Mail size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
