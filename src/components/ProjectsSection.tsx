import React from 'react';
import { FadeIn } from './FadeIn';
import { ProjectCard, ProjectItem } from './ProjectCard';

const PROJECTS: ProjectItem[] = [
  {
    id: '01',
    category: 'Cybersecurity / Machine Learning',
    name: 'SafeNet – ML Intrusion Detection',
    subtitle: 'High-Precision Malicious Packet Classification & Defense',
    description:
      'Engineered an ML-based Intrusion Detection System using Python, Scikit-Learn, and Random Forest to classify malicious network traffic. Applied extensive preprocessing, anomaly feature extraction, and benchmark validation against enterprise cybersecurity datasets.',
    techStack: ['Python', 'Scikit-Learn', 'Random Forest', 'Pandas', 'Cybersecurity'],
    githubUrl: 'https://github.com/NITYA123715/IDS-Network-Intrusion-Detection-System',
    col1TopImage: '/assets/projects/p1_packets.jpg',
    col1BottomImage: '/assets/projects/p1_cybersecurity.jpg',
    col2TallImage: '/assets/projects/safenet_real.jpg',
    isIDS: true,
  },
  {
    id: '02',
    category: 'Spatial GIS / Algorithmic Routing',
    name: 'Route Optimization GIS & A*',
    subtitle: 'Satellite Geospatial Analytics & Dynamic Pathfinding',
    description:
      'Developed a GIS-based route optimization engine using the A* heuristic search algorithm, satellite imagery, and Google Maps API. Analyzes real-time roadway topology to pinpoint optimal paths, reduce travel times, and curb fuel consumption.',
    techStack: ['A* Algorithm', 'Remote Sensing', 'GIS', 'Google Maps API', 'Python'],
    githubUrl: 'https://github.com/NITYA123715/PathPilot-AI',
    col1TopImage: '/assets/projects/p2_satellite.jpg',
    col1BottomImage: '/assets/projects/p2_gps_route.jpg',
    col2TallImage: '/assets/projects/p2_gis_grid.jpg',
    isIDS: false,
  },
  {
    id: '03',
    category: 'Patent / Medical AI & Vision',
    name: 'AI Myopia Detection Device',
    subtitle: 'Design Patent No. 445685-001 & Smart Vision Diagnostics',
    description:
      'Patented intelligent hardware-software diagnostic system that leverages computer vision to analyze ocular refraction and detect early myopia progression non-invasively, providing accessible ophthalmic screening.',
    techStack: ['Patent No. 445685-001', 'Computer Vision', 'Deep Learning', 'PyTorch', 'IoT'],
    githubUrl: 'https://github.com/NITYA123715',
    col1TopImage: '/assets/projects/p3_retinal_scan.jpg',
    col1BottomImage: '/assets/projects/p3_optical_lens.jpg',
    col2TallImage: '/assets/projects/p3_medical_ai.jpg',
    isIDS: false,
  },
];

interface ProjectsSectionProps {
  onOpenProjectModal: (project: ProjectItem) => void;
  onOpenLiveIDS: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProjectModal,
  onOpenLiveIDS,
}) => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative pt-20 sm:pt-24 md:pt-32 pb-24 sm:pb-36 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-5xl mx-auto mb-16 sm:mb-20 text-center">
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight select-none"
          >
            Project
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} y={20}>
          <p className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm mt-3 font-light">
            Selected Artificial Intelligence, Algorithmic &amp; Patent Works
          </p>
        </FadeIn>
      </div>

      {/* Sticky Stacking Cards Container */}
      <div className="relative max-w-5xl mx-auto flex flex-col gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
            onOpenProjectModal={onOpenProjectModal}
            onOpenLiveIDS={onOpenLiveIDS}
          />
        ))}
      </div>
    </section>
  );
};
