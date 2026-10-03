import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Linkedin, Github, Check, Copy, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open default mail client with prefilled details
    const subject = encodeURIComponent(`Collaboration Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Nitya,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:tnitya888@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-2xl bg-[#121316] border border-[#D7E2EA]/30 rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 shadow-2xl z-10 my-auto text-[#D7E2EA]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold block mb-1">
                Get In Touch
              </span>
              <h3 className="hero-heading text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Let&apos;s Build Together
              </h3>
              <p className="text-sm text-[#D7E2EA]/70 mt-2 font-light">
                Feel free to reach out directly via email, phone, or send a quick note below.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {/* Email */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between group">
                <a
                  href="mailto:tnitya888@gmail.com"
                  className="flex items-center gap-3 flex-grow truncate hover:text-white"
                >
                  <div className="p-2.5 rounded-xl bg-[#B600A8]/20 text-[#B600A8]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block">Email</span>
                    <span className="text-xs sm:text-sm font-medium text-white truncate block">
                      tnitya888@gmail.com
                    </span>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard('tnitya888@gmail.com', 'email')}
                  className="p-2 text-white/40 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between group">
                <a
                  href="tel:+919319395234"
                  className="flex items-center gap-3 flex-grow hover:text-white"
                >
                  <div className="p-2.5 rounded-xl bg-[#7621B0]/20 text-[#7621B0]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block">Phone</span>
                    <span className="text-xs sm:text-sm font-medium text-white">
                      +91 9319395234
                    </span>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard('+919319395234', 'phone')}
                  className="p-2 text-white/40 hover:text-white transition-colors"
                  title="Copy phone"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/nitya-tiwari-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3 hover:bg-white/[0.06] transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-[#0077b5]/20 text-[#0077b5]">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 block">LinkedIn</span>
                  <span className="text-xs sm:text-sm font-medium text-white truncate block">
                    nitya-tiwari-ai
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/NITYA123715"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3 hover:bg-white/[0.06] transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-white/10 text-white">
                  <Github className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 block">GitHub</span>
                  <span className="text-xs sm:text-sm font-medium text-white truncate block">
                    NITYA123715
                  </span>
                </div>
              </a>
            </div>

            {/* Quick Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 focus:border-[#B600A8] focus:outline-none text-sm text-white placeholder-white/40"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 focus:border-[#B600A8] focus:outline-none text-sm text-white placeholder-white/40"
                />
              </div>

              <textarea
                required
                rows={3}
                placeholder="How can we collaborate on an AI or engineering project?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 focus:border-[#B600A8] focus:outline-none text-sm text-white placeholder-white/40 resize-none"
              />

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <MapPin className="w-3.5 h-3.5 text-[#B600A8]" />
                  <span>Noida, Uttar Pradesh, India</span>
                </div>

                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  }}
                  className="px-6 py-2.5 rounded-full text-white text-xs sm:text-sm font-medium uppercase tracking-wider inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <span>{submitted ? 'Opening Mail...' : 'Send Message'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
