import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact', onClick: onOpenContact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (item.onClick) {
      e.preventDefault();
      item.onClick();
      return;
    }
    const targetElement = document.querySelector(item.href);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 z-30 relative"
    >
      {/* Main Nav links */}
      <div className="flex items-center justify-between w-full max-w-xl">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item)}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Prominent Social Direct Links */}
      <div className="hidden sm:flex items-center gap-3">
        <a
          href="https://github.com/NITYA123715"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-2.5 rounded-full border border-white/20 text-[#D7E2EA] hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200"
          title="GitHub: NITYA123715"
        >
          <Github className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>

        <a
          href="https://linkedin.com/in/nitya-tiwari-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-2.5 rounded-full border border-white/20 text-[#D7E2EA] hover:text-white hover:border-[#0077b5] hover:bg-[#0077b5]/20 transition-all duration-200"
          title="LinkedIn: nitya-tiwari-ai"
        >
          <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </motion.nav>
  );
};
