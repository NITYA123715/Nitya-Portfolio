import React from 'react';
import { FadeIn } from './FadeIn';

interface ExpertiseItem {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    id: '01',
    name: 'Machine Learning & Predictive Modeling',
    description:
      'Designing end-to-end predictive pipelines, data preprocessing, and ensemble learning models using Scikit-Learn, Random Forest, and Pandas for classification, fraud detection, and customer intelligence.',
    skills: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Random Forest'],
  },
  {
    id: '02',
    name: 'Cybersecurity & Network Defense',
    description:
      'Engineering intelligent intrusion detection systems (IDS) to inspect real-time packet telemetry, score anomalies, and classify zero-day malicious network threats.',
    skills: ['SafeNet IDS', 'Network Protocols', 'Packet Analysis', 'Threat Intelligence'],
  },
  {
    id: '03',
    name: 'Spatial GIS & Route Optimization',
    description:
      'Developing geospatial routing engines combining A* heuristic search algorithms, satellite imagery data, and Google Maps API for optimal route trajectories and fuel conservation.',
    skills: ['A* Algorithm', 'Remote Sensing', 'GIS', 'Google Maps API'],
  },
  {
    id: '04',
    name: 'Core Software Engineering & DSA',
    description:
      'Solid foundation in Data Structures, Algorithms, Object-Oriented Programming (C++ & Python), Relational DBMS (MySQL), and high-throughput REST APIs using FastAPI and Django.',
    skills: ['C++', 'Python', 'OOP / DSA', 'FastAPI', 'Django', 'MySQL'],
  },
  {
    id: '05',
    name: 'Applied AI & Patent Innovations',
    description:
      'Translating deep learning research into patented intellectual property — notably integrating non-invasive optical sensor hardware with convolutional neural networks for automated ocular diagnostics.',
    skills: ['Patent 445685-001', 'Computer Vision', 'Deep Learning', 'Biomedical AI'],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="expertise"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold block mb-2">
              Academic &amp; Project Competencies
            </span>
            <h2
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
              className="font-black uppercase tracking-tight text-[#0C0C0C] leading-none mb-3"
            >
              Expertise
            </h2>
            <p className="text-sm sm:text-base text-[#0C0C0C]/60 font-light max-w-xl mx-auto">
              Core engineering disciplines, problem-solving foundations, and technical focus areas.
            </p>
          </div>
        </FadeIn>

        {/* 5 Expertise items in vertical list */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {EXPERTISE_DATA.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1} y={30}>
              <div className="py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 group hover:bg-black/[0.02] transition-colors duration-300 px-2 sm:px-4 rounded-2xl">
                {/* Left: Number */}
                <div
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  className="font-black text-[#0C0C0C] leading-none flex-shrink-0 tracking-tighter opacity-90 group-hover:opacity-100 transition-opacity"
                >
                  {item.id}
                </div>

                {/* Right: Name + Description + Skill Badges */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-grow">
                  <h3
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                  >
                    {item.description}
                  </p>

                  {/* Skills pill tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] sm:text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[#0C0C0C]/5 text-[#0C0C0C]/75 font-normal border border-[#0C0C0C]/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
