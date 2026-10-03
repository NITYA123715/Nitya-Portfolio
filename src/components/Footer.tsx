import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-10 pt-20 pb-12 border-t border-white/10 select-none relative z-20">
      <div className="max-w-5xl mx-auto flex flex-col justify-between">
        
        {/* Top Call to Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold block mb-2">
              Ready to innovate together?
            </span>
            <h2
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
              className="hero-heading font-black uppercase leading-none tracking-tight"
            >
              Let&apos;s Connect
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <ContactButton onClick={onOpenContact} label="Get In Touch" />
            <button
              type="button"
              onClick={scrollToTop}
              className="p-3.5 rounded-full border border-white/20 text-[#D7E2EA] hover:bg-white/10 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Middle Links & Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs sm:text-sm">
          <div>
            <div className="font-bold text-white uppercase tracking-wider mb-3">Navigation</div>
            <ul className="space-y-2 font-light text-[#D7E2EA]/70">
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Expertise</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects &amp; Patents</a></li>
              <li><button onClick={onOpenContact} className="hover:text-white transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white uppercase tracking-wider mb-3">Core Pillars</div>
            <ul className="space-y-2 font-light text-[#D7E2EA]/70">
              <li>Machine Learning &amp; AI</li>
              <li>Network Intrusion Defense</li>
              <li>GIS &amp; A* Optimization</li>
              <li>Medical Vision Patents</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white uppercase tracking-wider mb-3">Code &amp; Social</div>
            <ul className="space-y-2 font-light text-[#D7E2EA]/70">
              <li>
                <a
                  href="https://linkedin.com/in/nitya-tiwari-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/NITYA123715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repositories</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white uppercase tracking-wider mb-3">Direct Contact</div>
            <ul className="space-y-2 font-light text-[#D7E2EA]/70">
              <li className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#B600A8]" />
                <a href="mailto:tnitya888@gmail.com" className="hover:text-white truncate">
                  tnitya888@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#7621B0]" />
                <a href="tel:+919319395234" className="hover:text-white">
                  +91 9319395234
                </a>
              </li>
              <li className="text-white/40 text-[11px] pt-1">
                Noida, Uttar Pradesh, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Giant Typography */}
        <div className="pt-10 overflow-hidden text-center opacity-25 hover:opacity-40 transition-opacity">
          <span className="font-black uppercase tracking-tighter text-[13vw] leading-none whitespace-nowrap text-white select-none">
            NITYA TIWARI
          </span>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-light gap-2">
          <span>&copy; {new Date().getFullYear()} Nitya Tiwari. All rights reserved.</span>
          <span>B.Tech AI Engineer • AKTU</span>
        </div>

      </div>
    </footer>
  );
};
