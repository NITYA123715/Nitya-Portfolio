import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { LiveIDSModal } from './components/LiveIDSModal';
import { ProjectItem } from './components/ProjectCard';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLiveIDSOpen, setIsLiveIDSOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] min-h-screen relative w-full"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HERO SECTION */}
      <HeroSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 2. ABOUT SECTION (Direct clean flow without unwanted marquee in middle) */}
      <AboutSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 3. SERVICES SECTION */}
      <ServicesSection />

      {/* 4. PROJECTS SECTION */}
      <ProjectsSection
        onOpenProjectModal={(project) => setActiveProject(project)}
        onOpenLiveIDS={() => setIsLiveIDSOpen(true)}
      />

      {/* 5. PATENTS, EXPERIENCE & CREDENTIALS SECTION */}
      <CredentialsSection />

      {/* 6. FOOTER */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onOpenLiveIDS={() => setIsLiveIDSOpen(true)}
      />

      {/* Live SafeNet IDS Simulator Modal */}
      <LiveIDSModal
        isOpen={isLiveIDSOpen}
        onClose={() => setIsLiveIDSOpen(false)}
      />
    </div>
  );
}

export default App;
