import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  useEffect(() => {
    if (!type) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-label={isPrivacy ? 'Privacy Policy Document' : 'Terms of Service Document'}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#38220F]/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-[#FAF5E6] rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#38220F]/10 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#38220F] text-[#F4EBD0] flex items-center justify-center">
              {isPrivacy ? <ShieldCheck className="w-5 h-5 text-[#98A886]" /> : <FileText className="w-5 h-5 text-[#98A886]" />}
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#38220F]">
                {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <p className="text-[11px] text-[#5E564F]">Brew &amp; Bean Showcase Prototype</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close legal modal"
            className="p-2 rounded-full bg-white/70 hover:bg-white text-[#38220F] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs text-[#5E564F] leading-relaxed">
          {isPrivacy ? (
            <>
              <h4 className="font-serif text-sm font-bold text-[#38220F]">1. Demonstration Nature</h4>
              <p>
                Brew &amp; Bean Café is a fictional front-end concept application built for web agency portfolio demonstration. No financial transactions, commercial orders, or real-world credit card data are gathered or processed.
              </p>
              <h4 className="font-serif text-sm font-bold text-[#38220F]">2. Local Client-Side Validation</h4>
              <p>
                Inputs entered into the contact form are validated strictly on the client browser. No personal contact data is uploaded to remote servers or third-party mailing lists.
              </p>
              <h4 className="font-serif text-sm font-bold text-[#38220F]">3. Cookies &amp; Storage</h4>
              <p>
                This demo utilizes standard in-memory browser states. No tracking cookies or advertising pixels are injected.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-serif text-sm font-bold text-[#38220F]">1. Portfolio Terms</h4>
              <p>
                All menu items, pricing, roasting notes, and location details are sample showcase materials representing an elevated coffee brand concept.
              </p>
              <h4 className="font-serif text-sm font-bold text-[#38220F]">2. Open Component Code</h4>
              <p>
                The layouts and React component tree are implemented to demonstrate modern responsive web engineering with Vite, Tailwind CSS, and 21st.dev architectural principles.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#38220F]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#38220F] text-[#F4EBD0] text-xs font-bold hover:bg-[#98A886] hover:text-[#38220F] transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
}
