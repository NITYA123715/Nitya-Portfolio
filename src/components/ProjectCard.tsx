import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { Github, PlayCircle, ExternalLink } from 'lucide-react';

export interface ProjectItem {
  id: string;
  category: string;
  name: string;
  subtitle: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  col1TopImage: string;
  col1BottomImage: string;
  col2TallImage: string;
  isIDS?: boolean;
}

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onOpenProjectModal: (project: ProjectItem) => void;
  onOpenLiveIDS: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onOpenProjectModal,
  onOpenLiveIDS,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  // Target scale calculation: 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[600px] flex items-center justify-center sticky top-20 sm:top-24 md:top-28"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-5xl rounded-[32px] sm:rounded-[46px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden"
      >
        {/* Top Row: Number, Category, Project Name, and Live Project ghost button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 sm:pb-7 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              className="font-black text-[#D7E2EA] leading-none tracking-tighter"
            >
              {project.id}
            </span>
            <div>
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#B600A8] font-bold block">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase tracking-tight text-white">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Direct GitHub Code Link */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full border border-white/20 text-[#D7E2EA] hover:bg-white/10 hover:border-white hover:text-white transition-all text-xs sm:text-sm font-medium uppercase tracking-wider inline-flex items-center gap-1.5"
              title="View Repository on GitHub"
            >
              <Github className="w-4 h-4" />
              <span>[Code]</span>
            </a>

            {/* Live Project / Interactive Demo */}
            {project.isIDS ? (
              <button
                type="button"
                onClick={onOpenLiveIDS}
                className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 font-medium uppercase tracking-wider text-xs sm:text-sm hover:bg-emerald-500/30 transition-all inline-flex items-center gap-2 shadow-lg"
              >
                <PlayCircle className="w-4 h-4 text-emerald-400" />
                <span>Live IDS Demo</span>
              </button>
            ) : null}

            <LiveProjectButton
              onClick={() => onOpenProjectModal(project)}
              label="Overview"
            />
          </div>
        </div>

        {/* Project Description & Tech Stack Bar */}
        <div className="py-3 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#D7E2EA]/75">
          <p className="max-w-xl font-light line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-wider text-[#BBCCD7]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Row: Two-Column Image Grid (40% left, 60% right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 mt-3">
          {/* Left Column (40% width / 5 cols in 12-col grid) */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
            {/* Left Top Image */}
            <div
              style={{
                height: 'clamp(130px, 16vw, 230px)',
              }}
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[45px] overflow-hidden bg-[#16181D] border border-white/10 relative group"
            >
              <img
                src={project.col1TopImage}
                alt={`${project.name} preview top`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Left Bottom Image */}
            <div
              style={{
                height: 'clamp(160px, 22vw, 340px)',
              }}
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[45px] overflow-hidden bg-[#16181D] border border-white/10 relative group"
            >
              <img
                src={project.col1BottomImage}
                alt={`${project.name} preview bottom`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Right Column (60% width / 7 cols in 12-col grid) */}
          <div className="md:col-span-7">
            <div className="w-full h-[280px] md:h-full min-h-[300px] rounded-[28px] sm:rounded-[42px] md:rounded-[55px] overflow-hidden bg-[#16181D] border border-white/10 relative group">
              <img
                src={project.col2TallImage}
                alt={`${project.name} main showcase`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
