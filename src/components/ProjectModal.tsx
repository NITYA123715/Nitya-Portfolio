import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, PlayCircle } from 'lucide-react';
import { ProjectItem } from './ProjectCard';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenLiveIDS?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenLiveIDS }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl bg-[#121316] border border-[#D7E2EA]/30 rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 shadow-2xl z-10 my-auto text-[#D7E2EA] max-h-[90vh] overflow-y-auto"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">
                {project.category}
              </span>
              <span className="text-xs text-white/40">• Project {project.id}</span>
            </div>
            <h3 className="hero-heading text-3xl sm:text-4xl font-black uppercase tracking-tight">
              {project.name}
            </h3>
            <p className="text-base text-white/80 font-light mt-1">{project.subtitle}</p>
          </div>

          {/* Project Images Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            <div className="h-48 rounded-2xl overflow-hidden bg-[#16181D] border border-white/10">
              <img src={project.col1TopImage} alt="Preview 1" className="w-full h-full object-cover" />
            </div>
            <div className="h-48 rounded-2xl overflow-hidden bg-[#16181D] border border-white/10">
              <img src={project.col1BottomImage} alt="Preview 2" className="w-full h-full object-cover" />
            </div>
            <div className="h-48 rounded-2xl overflow-hidden bg-[#16181D] border border-white/10">
              <img src={project.col2TallImage} alt="Preview 3" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Detailed Info */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-2">
              Architecture &amp; Methodology
            </h4>
            <p className="text-sm text-[#D7E2EA]/80 leading-relaxed font-light mb-4">
              {project.description}
            </p>

            <div className="space-y-2 text-xs sm:text-sm text-[#D7E2EA]/90">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Feature extraction and data normalization for high throughput inference.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Benchmarked on real-world datasets with high precision and recall metrics.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Production-ready codebase with modular components and clean OOP patterns.</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-wider text-white/50 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wider text-[#D7E2EA]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Code on GitHub</span>
              </a>

              {project.isIDS && onOpenLiveIDS ? (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenLiveIDS();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs sm:text-sm font-medium hover:bg-emerald-500/30 transition-colors"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>Launch Live IDS Scanner</span>
                </button>
              ) : null}
            </div>

            <a
              href={`mailto:tnitya888@gmail.com?subject=Inquiry regarding ${project.name}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-medium hover:bg-white/90 transition-colors"
            >
              <span>Discuss Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
