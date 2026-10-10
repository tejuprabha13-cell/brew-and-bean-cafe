import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, Check, Copy, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import InteractiveMap from './InteractiveMap';
import { CAFE_CONFIG } from '../data/cafeConfig';

export default function VisitSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_CONFIG.location.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setSubmittedData({ ...formData });
    setFormSubmitted(true);
    setFormData({ name: '', email: '', subject: 'general', message: '' });
  };

  return (
    <section id="visit" className="py-16 md:py-24 bg-[#FAF5E6] border-t border-[#38220F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#98A886]/20 text-[#38220F] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#98A886]" />
            Find Your Spot
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38220F] tracking-tight">
            We're saving a seat for you.
          </h2>
          <p className="mt-3 text-[#5E564F] text-base leading-relaxed">
            Drop by for your morning commute, meet a client over a draft latte, or settle in for an afternoon deep-focus work session.
          </p>
        </div>

        {/* Two-Column Grid: Left Info & Hours, Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Location & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location & Address Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-[#38220F]/10 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#38220F] text-[#F4EBD0] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#98A886]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#38220F]">Our Location</h3>
                    <p className="text-xs text-[#5E564F]">{CAFE_CONFIG.location.district} Hub</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  aria-label="Copy address to clipboard"
                  className="px-3.5 py-1.5 rounded-full bg-white border border-[#38220F]/15 text-xs font-semibold text-[#38220F] flex items-center gap-1.5 hover:bg-[#FAF5E6] transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#5E564F]" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-[#38220F]/10">
                <p className="font-semibold text-sm text-[#38220F]">{CAFE_CONFIG.location.address}</p>
                <p className="text-xs text-[#5E564F] mt-0.5">{CAFE_CONFIG.location.district} &bull; {CAFE_CONFIG.location.crossStreets}</p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={CAFE_CONFIG.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#98A886] hover:text-[#38220F] transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Table Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-[#38220F]/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#98A886]/20 text-[#38220F] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#98A886]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#38220F]">Opening Hours</h3>
                  <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Open Daily for Coffee &amp; Bakery
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs pt-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#38220F]/10">
                  <span className="font-semibold text-[#38220F]">{CAFE_CONFIG.hours.weekday.days}</span>
                  <span className="font-serif font-bold text-sm text-[#38220F]">{CAFE_CONFIG.hours.weekday.open} – {CAFE_CONFIG.hours.weekday.close}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#38220F]/10">
                  <span className="font-semibold text-[#38220F]">{CAFE_CONFIG.hours.weekend.days}</span>
                  <span className="font-serif font-bold text-sm text-[#38220F]">{CAFE_CONFIG.hours.weekend.open} – {CAFE_CONFIG.hours.weekend.close}</span>
                </div>
                <p className="text-[11px] text-[#5E564F] pt-1">
                  &bull; {CAFE_CONFIG.hours.note}
                </p>
              </div>
            </div>

            {/* Tap-to-Call & Email Card */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={CAFE_CONFIG.contact.phoneTel}
                aria-label={`Call ${CAFE_CONFIG.name} at ${CAFE_CONFIG.contact.phoneDisplay}`}
                className="p-4 rounded-3xl glass-card border border-[#38220F]/10 text-center block hover:bg-white transition-all group"
              >
                <Phone className="w-5 h-5 text-[#98A886] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] text-[#5E564F] uppercase font-bold block">Tap to Call</span>
                <span className="text-xs font-bold text-[#38220F] block mt-0.5">{CAFE_CONFIG.contact.phoneDisplay}</span>
              </a>

              <a
                href={CAFE_CONFIG.contact.emailMailto}
                aria-label={`Email ${CAFE_CONFIG.name}`}
                className="p-4 rounded-3xl glass-card border border-[#38220F]/10 text-center block hover:bg-white transition-all group"
              >
                <Mail className="w-5 h-5 text-[#98A886] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] text-[#5E564F] uppercase font-bold block">Email Inquiries</span>
                <span className="text-xs font-bold text-[#38220F] block mt-0.5 truncate">{CAFE_CONFIG.contact.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact & Table Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#38220F]/10 shadow-sm relative">
              
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#98A886] block mb-1">
                  Direct Inquiries
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#38220F]">
                  Send Us a Note
                </h3>
                <p className="text-xs text-[#5E564F] mt-1">
                  Looking to reserve a table for a study group, ask about bean wholesale, or cater an event?
                </p>
              </div>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#38220F] mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Maya Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-white border border-[#38220F]/15 text-xs text-[#38220F] focus:outline-none focus:ring-2 focus:ring-[#98A886]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#38220F] mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-white border border-[#38220F]/15 text-xs text-[#38220F] focus:outline-none focus:ring-2 focus:ring-[#98A886]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-[#38220F] mb-1.5">
                    Inquiry Topic
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-[#38220F]/15 text-xs text-[#38220F] focus:outline-none focus:ring-2 focus:ring-[#98A886]"
                  >
                    <option value="general">General Coffee &amp; Visit Question</option>
                    <option value="catering">Bakery &amp; Coffee Catering</option>
                    <option value="wholesale">Single-Origin Bean Wholesale</option>
                    <option value="table">Study Group / Team Table Reservation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#38220F] mb-1.5">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    placeholder="How can our baristas make your day better?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-[#38220F]/15 text-xs text-[#38220F] focus:outline-none focus:ring-2 focus:ring-[#98A886] resize-none"
                  ></textarea>
                </div>

                {/* Form Disclaimer */}
                <div className="p-3 rounded-2xl bg-stone-100/80 border border-[#38220F]/10 text-[11px] text-[#5E564F] flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-[#98A886] shrink-0 mt-0.5" />
                  <span>
                    <strong>Demonstration Notice:</strong> Client-side validation active. Real message transmission requires backend integration (such as Formspree, Resend, or serverless webhooks).
                  </span>
                </div>

                <button
                  type="submit"
                  className="shine-hover w-full py-3.5 rounded-full bg-[#98A886] text-[#38220F] text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#81946F] hover:text-white transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message &rarr;</span>
                </button>
              </form>

              {/* 21st.dev Style Feedback Toast Banner */}
              {formSubmitted && submittedData && (
                <div className="mt-6 p-5 rounded-2xl bg-[#98A886]/20 border border-[#98A886] text-[#38220F] animate-in slide-in-from-bottom-2 duration-300">
                  <div className="flex items-center gap-2 font-serif text-base font-bold text-[#38220F] mb-1">
                    <Check className="w-5 h-5 text-emerald-700" />
                    <span>Inquiry Validated Successfully!</span>
                  </div>
                  <p className="text-xs text-[#5E564F]">
                    Thank you, <strong>{submittedData.name}</strong> ({submittedData.email})! Your demo submission was tested and verified on the client.
                  </p>
                  <p className="text-[11px] text-[#38220F]/80 mt-2 pt-2 border-t border-[#98A886]/40 italic">
                    Developer Info: To make this live, configure a backend endpoint or webhook in <code>VisitSection.jsx</code>.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Interactive Leaflet Map with locked minZoom and noWrap */}
        <InteractiveMap />

      </div>
    </section>
  );
}
