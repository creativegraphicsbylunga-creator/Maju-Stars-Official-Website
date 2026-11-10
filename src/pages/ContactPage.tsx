import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Navigation, 
  Sparkles,
  Calendar,
  Bus,
  CreditCard,
  Building2,
  Copy,
  Check,
  AlertCircle
} from 'lucide-react';
import { SCHOOL_INFO, BANKING_DETAILS, TRANSPORT_DATA } from '../data/preschoolData';
import { PageId } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookTour: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenBookTour }) => {
  const [submitted, setSubmitted] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry / 2027 Admissions',
    message: ''
  });

  const handleCopyAccount = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold text-[#FA5B88] uppercase tracking-widest block">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-fredoka text-slate-900">
            Contact & Visit Our Lenasia Centre
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            We are always here to answer questions about admissions, our ECD curriculum, fees, or to welcome you for a walk-through at 15 Benue St, Lenasia.
          </p>
        </div>

        {/* 3 PRIMARY CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Address */}
          <div className="p-6 rounded-3xl bg-purple-50/70 border border-purple-200/80 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#5B34B2] text-white flex items-center justify-center">
              <MapPin className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase text-[#5B34B2]">Physical Address</span>
              <h3 className="text-lg font-bold font-fredoka text-slate-900 mt-0.5">
                15 Benue St, Lenasia, 1821
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Centrally located in Lenasia, convenient for parents traveling along Nirvana Drive and surrounding extensions.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=15+Benue+St+Lenasia+1821"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B34B2] hover:underline pt-2"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="p-6 rounded-3xl bg-pink-50/70 border border-pink-200/80 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FA5B88] text-white flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase text-pink-700">Direct Telephone</span>
              <h3 className="text-lg font-bold font-fredoka text-slate-900 mt-0.5">
                078 722 7449
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Direct phone inquiries during operating hours. WhatsApp voice notes and text messages welcome.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={`tel:${SCHOOL_INFO.phoneClean}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#5B34B2] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href={SCHOOL_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Card 3: Hours */}
          <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200/80 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase text-amber-800">Operating Hours</span>
              <h3 className="text-lg font-bold font-fredoka text-slate-900 mt-0.5">
                Closed · Opens 6 am Mon
              </h3>
              <div className="text-xs text-slate-600 mt-1 space-y-0.5">
                <div><strong>Mon – Fri:</strong> 06:00 – 18:00</div>
                <div><strong>Sat & Sun:</strong> Closed</div>
              </div>
            </div>
            <p className="text-[11px] text-amber-900 font-medium pt-1">
              Early drop-off at 06:00 AM tailored for Joburg & CBD commuters.
            </p>
          </div>
        </div>

        {/* OFFICIAL BANKING DETAILS SECTION (Explicit User Requirement) */}
        <div className="mb-14 bg-gradient-to-br from-[#2D1660] via-[#381E76] to-[#5B34B2] text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border-4 border-amber-300/40 relative overflow-hidden">
          {/* Subtle background ambient lights */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-4 right-4 opacity-10 pointer-events-none hidden md:block">
            <Building2 className="w-40 h-40 text-white" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-purple-300/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-400/20 shrink-0">
                  <Building2 className="w-6 h-6 text-slate-950" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-amber-300 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                    <CreditCard className="w-3 h-3" />
                    <span>Tuition & Registration Payments</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-fredoka text-white">
                    Official Banking Details
                  </h2>
                </div>
              </div>

              <div className="bg-amber-400/20 border border-amber-400/40 px-3.5 py-1.5 rounded-full text-amber-200 text-xs font-semibold flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Payment is compulsory to guarantee space</span>
              </div>
            </div>

            {/* Banking Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-6">
              {/* Bank Name */}
              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/15">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200 block mb-1">
                  Bank Name
                </span>
                <div className="text-xl sm:text-2xl font-bold font-fredoka text-amber-300">
                  {BANKING_DETAILS.bankName}
                </div>
                <span className="text-[10px] text-purple-300 block mt-1">First National Bank</span>
              </div>

              {/* Account Number with Copy */}
              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/15 hover:bg-white/15 transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200 block mb-1">
                  Account Number
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-lg sm:text-xl font-bold font-mono tracking-wider text-white select-all">
                    {BANKING_DETAILS.accountNumber}
                  </span>
                  <button
                    onClick={() => handleCopyAccount(BANKING_DETAILS.accountNumber)}
                    className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Account Number"
                  >
                    {copiedAccount ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <span className="text-[10px] text-purple-300 block mt-1">
                  {copiedAccount ? '✓ Copied to clipboard!' : 'Click icon to copy number'}
                </span>
              </div>

              {/* Account Name */}
              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/15">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200 block mb-1">
                  Account Name
                </span>
                <div className="text-xs sm:text-sm font-bold font-fredoka text-white leading-snug">
                  {BANKING_DETAILS.accountName}
                </div>
                <span className="text-[10px] text-purple-300 block mt-1">Beneficiary name</span>
              </div>

              {/* Account Type */}
              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/15">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200 block mb-1">
                  Account Type
                </span>
                <div className="text-sm sm:text-base font-bold font-fredoka text-white">
                  {BANKING_DETAILS.accountType}
                </div>
                <span className="text-[10px] text-purple-300 block mt-1">Cheque / Current</span>
              </div>

              {/* Branch Code */}
              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/15">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200 block mb-1">
                  Branch Code
                </span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-wider">
                  {BANKING_DETAILS.branchCode}
                </div>
                <span className="text-[10px] text-purple-300 block mt-1">Universal branch code</span>
              </div>
            </div>

            {/* POP Advice Box */}
            <div className="bg-purple-900/60 border border-purple-400/30 p-3.5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-purple-100">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>
                  <strong>Reference Instruction:</strong> Use your child's <strong>Full Name & Surname</strong> as payment reference.
                </span>
              </div>
              <div className="text-slate-300 text-[11px] shrink-0">
                Email POP to: <strong className="text-white">{SCHOOL_INFO.email}</strong> or WhatsApp <strong className="text-white">078 722 7449</strong>
              </div>
            </div>
          </div>
        </div>

        {/* MAP & INQUIRY FORM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Map & Landmark Card */}
          <div className="lg:col-span-5 bg-[#FAF7F2] p-6 rounded-3xl border border-purple-100 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold font-fredoka text-slate-900">
                  Campus Location
                </h3>
                <p className="text-xs text-slate-500">15 Benue St, Lenasia, 1821</p>
              </div>
              <button
                onClick={onOpenBookTour}
                className="px-3 py-1.5 bg-[#5B34B2] text-white rounded-xl text-xs font-bold"
              >
                Book Tour
              </button>
            </div>

            {/* Visual Map Representation */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center">
              {/* Styled Mock Map Canvas */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-amber-50/40 to-emerald-50/30">
                {/* Street grid visual */}
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-white/80 border-y border-slate-300" />
                <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-white/80 border-x border-slate-300" />
                <div className="absolute top-1/4 left-0 right-0 h-2 bg-slate-200" />
                <div className="absolute top-0 bottom-0 left-1/4 w-2 bg-slate-200" />
              </div>

              {/* Pin at 15 Benue St */}
              <div className="relative z-10 flex flex-col items-center animate-bounce">
                <div className="bg-[#5B34B2] text-white px-3 py-1.5 rounded-full shadow-lg text-xs font-bold flex items-center gap-1.5 border-2 border-white">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Maju Stars Pre-School</span>
                </div>
                <div className="w-4 h-4 bg-[#5B34B2] rotate-45 -mt-2 border-r border-b border-white" />
                <div className="w-3 h-1 bg-slate-900/30 rounded-full mt-1 blur-2xs" />
              </div>

              <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200 text-[11px] text-slate-700 flex justify-between items-center">
                <span>📍 15 Benue St, Lenasia</span>
                <a
                  href="https://maps.google.com/?q=15+Benue+St+Lenasia+1821"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[#5B34B2] underline ml-2"
                >
                  Open Maps
                </a>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-slate-600 pt-2 border-t border-purple-100">
              <div className="flex items-center justify-between">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Bus className="w-3.5 h-3.5 text-[#5B34B2]" />
                  <span>Serviced Transport Routes & Rates:</span>
                </div>
                <span className="text-[10px] text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded-full">
                  From 1st June
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                {TRANSPORT_DATA.routes.map((r) => (
                  <div key={r.id} className="p-1.5 bg-white rounded-lg border border-slate-200/80 flex items-center justify-between">
                    <span className="text-slate-700 truncate mr-1">{r.area}</span>
                    <span className="font-bold text-[#5B34B2] shrink-0">{r.priceFormatted}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-500">
                Morning home collection and afternoon drop-off. Strict vetting, booster seats, and live driver communication.
              </p>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-sm">
            <h3 className="text-xl font-bold font-fredoka text-slate-900 mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Our principal and admissions team will reply to your inquiry within 24 hours.
            </p>

            {submitted ? (
              <div className="py-12 text-center bg-purple-50/70 rounded-2xl p-6 border border-purple-100">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-3" />
                <h4 className="text-xl font-bold font-fredoka text-slate-900">Message Received!</h4>
                <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, {formData.name}. We have received your query regarding Maju Stars and will call you on {formData.phone} shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 px-5 py-2 bg-[#5B34B2] text-white text-xs font-bold rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Farhaana Bham"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="078 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:outline-hidden bg-white"
                    >
                      <option value="General Inquiry / 2027 Admissions">2027 Admissions & Fees</option>
                      <option value="Baby Little Stars (Infant Daycare)">Baby Little Stars (Infant Daycare)</option>
                      <option value="Pre-School / Grade R Prep">Pre-School / Grade R Prep</option>
                      <option value="After-Care & School Pickup">After-Care & School Pickup</option>
                      <option value="Campus Visit Tour">Campus Visit Tour</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message or Questions *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist you with your child's education journey?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:outline-hidden"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-[11px] text-slate-400">
                    Phone: 078 722 7449 · 15 Benue St, Lenasia
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FA5B88] hover:bg-[#e04572] text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
