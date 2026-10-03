import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { Award, GraduationCap, FileCheck2, Cpu, Github, Linkedin } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const resumeBioText =
    "Motivated B.Tech Artificial Intelligence engineer from AKTU with strong foundations in Python, C++, and Machine Learning. I specialize in building AI-driven architectures, cybersecurity threat detection systems, and high-performance algorithms that solve real-world challenges. Let's engineer something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-28 overflow-hidden select-none"
    >
      {/* 4 Corner 3D Decorative Floating Images */}
      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <motion.img
            animate={{
              y: [0, -12, 0],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            src="/assets/about/moon_icon.png"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png';
            }}
            alt="3D decorative moon"
            className="w-full h-auto drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none z-10">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <motion.img
            animate={{
              y: [0, 14, 0],
              rotate: [0, -6, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            src="/assets/about/p59_1.png"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png';
            }}
            alt="3D decorative cube"
            className="w-full h-auto drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <motion.img
            animate={{
              y: [0, -15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2,
            }}
            src="/assets/about/lego_icon.png"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png';
            }}
            alt="3D decorative lego"
            className="w-full h-auto drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none z-10">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <motion.img
            animate={{
              y: [0, 12, 0],
              rotate: [0, 6, 0],
            }}
            transition={{
              duration: 5.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.8,
            }}
            src="/assets/about/group_134.png"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png';
            }}
            alt="3D decorative group"
            className="w-full h-auto drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Heading: "About me" */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-14 md:mb-16 select-none"
          >
            About me
          </h2>
        </FadeIn>

        {/* Animated paragraph: character-by-character scroll opacity */}
        <div className="max-w-[620px] px-2 mb-12 sm:mb-16 md:mb-20">
          <AnimatedText
            text={resumeBioText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed"
          />
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl mb-12 sm:mb-14">
          <FadeIn delay={0.1} y={20} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <GraduationCap className="w-6 h-6 text-[#BBCCD7] mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-black text-white">8.23 / 10</div>
            <div className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-light mt-1">B.Tech AKTU CGPA</div>
          </FadeIn>

          <FadeIn delay={0.2} y={20} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <Award className="w-6 h-6 text-[#B600A8] mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-black text-white">2 Patents</div>
            <div className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-light mt-1">AI &amp; Security IP</div>
          </FadeIn>

          <FadeIn delay={0.3} y={20} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <FileCheck2 className="w-6 h-6 text-[#7621B0] mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-black text-white">IIT Certified</div>
            <div className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-light mt-1">Madras &amp; KGP</div>
          </FadeIn>

          <FadeIn delay={0.4} y={20} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <Cpu className="w-6 h-6 text-[#BE4C00] mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-black text-white">OCI AI 2025</div>
            <div className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-light mt-1">Oracle Certified</div>
          </FadeIn>
        </div>

        {/* Buttons Row with Contact, GitHub & LinkedIn */}
        <FadeIn delay={0.35} y={20} className="flex flex-wrap items-center justify-center gap-4">
          <ContactButton onClick={onOpenContact} label="Contact Me" />

          <a
            href="https://github.com/NITYA123715"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-full border border-white/20 text-[#D7E2EA] text-xs sm:text-sm font-medium uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-all inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>

          <a
            href="https://linkedin.com/in/nitya-tiwari-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-full border border-white/20 text-[#D7E2EA] text-xs sm:text-sm font-medium uppercase tracking-wider hover:bg-[#0077b5]/20 hover:border-[#0077b5]/40 transition-all inline-flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4 text-[#0077b5]" />
            <span>LinkedIn Profile</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
};
