import React, { useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
}

// 4-point Sparkle Star SVG Component
const SparkleStar: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 ${className}`}
  >
    <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
  </svg>
);

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for buttery cursor-following physics
  const springConfig = { damping: 25, stiffness: 120, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax layers for 3D depth
  const portraitX = useTransform(smoothX, (val) => val * 35);
  const portraitY = useTransform(smoothY, (val) => val * 25);
  const portraitRotateX = useTransform(smoothY, (val) => -val * 10);
  const portraitRotateY = useTransform(smoothX, (val) => val * 10);

  // Background orb moves in slight opposite direction for true 3D parallax depth
  const orbX = useTransform(smoothX, (val) => -val * 18);
  const orbY = useTransform(smoothY, (val) => -val * 14);

  // Orbital ring motion
  const ringX = useTransform(smoothX, (val) => -val * 24);
  const ringY = useTransform(smoothY, (val) => -val * 18);

  // Floating sparkle stars motion
  const star1X = useTransform(smoothX, (val) => val * 45);
  const star1Y = useTransform(smoothY, (val) => val * 35);
  const star2X = useTransform(smoothX, (val) => -val * 30);
  const star2Y = useTransform(smoothY, (val) => -val * 25);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates from -1 to 1
      const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
      const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));

      mouseX.set(normX);
      mouseY.set(normY);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#contact') {
      onOpenContact();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#070A14] select-none"
      style={{
        background: 'radial-gradient(ellipse at 80% 45%, rgba(109, 40, 217, 0.28) 0%, rgba(7, 10, 20, 0) 70%), #070A14',
      }}
    >
      {/* 1. TOP NAVBAR */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-7 sm:pt-9 flex items-center justify-between z-30 relative">
        {/* Left Brand: Name + Role */}
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Nitya{' '}
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">
              Tiwari
            </span>
          </span>
          <span className="text-xs sm:text-[13px] text-[#94A3B8] font-normal tracking-wide mt-0.5">
            Artificial Intelligence Student
          </span>
        </div>

        {/* Right Navigation Menu */}
        <nav className="flex items-center gap-5 sm:gap-8">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="px-5 sm:px-6 py-2 rounded-full text-white font-medium text-xs sm:text-sm bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="text-xs sm:text-sm md:text-base font-normal text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
          >
            About
          </a>
          <a
            href="#expertise"
            onClick={(e) => handleNavClick(e, '#expertise')}
            className="text-xs sm:text-sm md:text-base font-normal text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
          >
            Expertise
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="text-xs sm:text-sm md:text-base font-normal text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-xs sm:text-sm md:text-base font-normal text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* 2. MAIN HERO BODY */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 pt-8 pb-10 sm:pb-14 z-10 relative">
        
        {/* Left Column: Greeting, Massive Name, Subheading & Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full lg:w-1/2 flex flex-col justify-center text-left"
        >
          {/* Top Greeting line with horizontal gradient bar */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-1.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#A855F7]" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#C084FC]">
              HELLO, I&apos;M
            </span>
          </div>

          {/* Massive Name Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[1.05] text-white">
            Nitya{' '}
            <span className="bg-gradient-to-r from-[#818CF8] via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent">
              Tiwari
            </span>
          </h1>

          {/* Subheading: Artificial Intelligence Student */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 mb-6 tracking-tight">
            Artificial Intelligence Student
          </h2>

          {/* Bio Description Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] font-normal leading-relaxed max-w-xl mb-8">
            Passionate Artificial Intelligence student with strong foundations in Python, C++, and AI-driven problem solving. Experienced in developing intelligent applications, participating in hackathons, and building real-world software projects.
          </p>

          {/* Quick Social & Action Bar */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://github.com/NITYA123715"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all inline-flex items-center gap-2 text-xs sm:text-sm"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span className="font-medium">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/nitya-tiwari-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-[#0077b5]/20 hover:border-[#0077b5]/40 transition-all inline-flex items-center gap-2 text-xs sm:text-sm"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-[#60A5FA]" />
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href="mailto:tnitya888@gmail.com"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all inline-flex items-center gap-2 text-xs sm:text-sm"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">Email</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Cursor-Following Portrait & Cosmic Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative perspective-[1000px]"
        >
          {/* Main Visual Staging Container */}
          <div className="relative w-[340px] sm:w-[440px] md:w-[500px] lg:w-[540px] h-[360px] sm:h-[460px] md:h-[520px] flex items-end justify-center cursor-grab active:cursor-grabbing">
            
            {/* 1. Parallax Cosmic Violet Orb (Moves opposite to cursor for 3D depth) */}
            <motion.div
              style={{ x: orbX, y: orbY }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[380px] md:w-[430px] h-[280px] sm:h-[380px] md:h-[430px] rounded-full z-0 pointer-events-none will-change-transform"
            >
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #7C3AED 0%, #6D28D9 45%, #4C1D95 75%, #1E1035 100%)',
                  boxShadow: '0 0 100px rgba(124, 58, 237, 0.55), inset 0 0 40px rgba(167, 139, 250, 0.3)',
                }}
              />
            </motion.div>

            {/* 2. Thin Orbital Cosmic Ring with Glowing Nodes */}
            <motion.div
              style={{ x: ringX, y: ringY }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[450px] md:w-[510px] h-[340px] sm:h-[450px] md:h-[510px] rounded-full border border-purple-500/25 pointer-events-none z-0 will-change-transform"
            >
              {/* Left Cyan glowing node */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
              {/* Right Violet glowing node */}
              <div className="absolute -right-1.5 top-1/3 w-3 h-3 rounded-full bg-indigo-400 shadow-[0_0_12px_#818cf8]" />
            </motion.div>

            {/* 3. Sparkling Stars with Parallax Floating */}
            {/* Top-Left Star */}
            <motion.div
              style={{ x: star1X, y: star1Y }}
              className="absolute top-6 left-6 sm:left-10 text-[#C084FC] animate-pulse z-10 pointer-events-none will-change-transform"
            >
              <SparkleStar className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-[0_0_8px_#c084fc]" />
            </motion.div>

            {/* Top-Right Star */}
            <motion.div
              style={{ x: star2X, y: star2Y }}
              className="absolute top-12 right-2 sm:right-6 text-[#A855F7] animate-pulse z-10 pointer-events-none will-change-transform"
            >
              <SparkleStar className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-[0_0_10px_#a855f7]" />
            </motion.div>

            {/* Bottom-Left Star */}
            <motion.div
              style={{ x: star1X, y: star2Y }}
              className="absolute bottom-16 left-4 text-[#818CF8] animate-pulse z-10 pointer-events-none will-change-transform"
            >
              <SparkleStar className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-[0_0_8px_#818cf8]" />
            </motion.div>

            {/* 4. Portrait of Nitya (Cursor-Following Magnetic 3D Spring Motion) */}
            <motion.div
              style={{
                x: portraitX,
                y: portraitY,
                rotateX: portraitRotateX,
                rotateY: portraitRotateY,
              }}
              className="relative z-10 w-full h-full flex items-end justify-center will-change-transform"
            >
              <img
                src="/hero_portrait_exact.png"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/public/mockup_portrait_orb.png';
                }}
                alt="Nitya Tiwari"
                className="w-auto h-[95%] sm:h-full max-h-[500px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] pointer-events-none select-none filter contrast-[1.02]"
                draggable={false}
              />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
