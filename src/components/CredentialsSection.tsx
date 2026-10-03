import React from 'react';
import { FadeIn } from './FadeIn';
import { ShieldCheck, Award, Briefcase, GraduationCap, Code2, ExternalLink, Github } from 'lucide-react';

export const CredentialsSection: React.FC = () => {
  return (
    <section className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 sm:py-28 relative z-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col gap-16 sm:gap-24">
        
        {/* Patents Section */}
        <div>
          <FadeIn delay={0} y={30}>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-[#B600A8]" />
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold">
                Intellectual Property &amp; Innovations
              </span>
            </div>
            <h3
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
              className="hero-heading font-black uppercase leading-none tracking-tight mb-8"
            >
              Patents
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Patent 1 */}
            <FadeIn delay={0.1} y={30}>
              <div className="p-6 sm:p-8 rounded-[32px] bg-gradient-to-br from-[#16181D] to-[#0E0F12] border border-white/10 hover:border-[#B600A8]/40 transition-all duration-300 relative group h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#B600A8]/20 text-[#D7E2EA] border border-[#B600A8]/30">
                      Design Patent
                    </span>
                    <span className="text-xs text-white/50 tracking-wider">No. 445685-001</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold uppercase text-white mb-3">
                    AI-Powered Myopia Detection Device
                  </h4>
                  <p className="text-sm text-[#D7E2EA]/70 leading-relaxed font-light mb-6">
                    A non-invasive diagnostic apparatus combining specialized optical sensory hardware with convolutional neural network architectures to detect early-stage myopia and refractive vision errors.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#BBCCD7]">
                  <span>Status: Registered / Granted</span>
                  <span className="text-[#B600A8] group-hover:translate-x-1 transition-transform">Verified IP →</span>
                </div>
              </div>
            </FadeIn>

            {/* Patent 2 */}
            <FadeIn delay={0.2} y={30}>
              <div className="p-6 sm:p-8 rounded-[32px] bg-gradient-to-br from-[#16181D] to-[#0E0F12] border border-white/10 hover:border-[#7621B0]/40 transition-all duration-300 relative group h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#7621B0]/20 text-[#D7E2EA] border border-[#7621B0]/30">
                      Patent Application
                    </span>
                    <span className="text-xs text-white/50 tracking-wider">App No. 202611000217</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold uppercase text-white mb-3">
                    System &amp; Method for Detecting Network Intrusions
                  </h4>
                  <p className="text-sm text-[#D7E2EA]/70 leading-relaxed font-light mb-6">
                    Real-time machine learning system for enterprise computer networks, utilizing automated packet anomaly scoring and feature reduction to isolate unauthorized intrusions and botnet activity.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#BBCCD7]">
                  <span>Status: Filed &amp; Published</span>
                  <span className="text-[#7621B0] group-hover:translate-x-1 transition-transform">Verified IP →</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Experience & Education Dual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Experience */}
          <div>
            <FadeIn delay={0.1} y={30}>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-[#BBCCD7]" />
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
                  Industry Experience
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-6">
                Work Experience
              </h3>

              <div className="p-6 rounded-[28px] bg-white/[0.02] border border-white/10">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-lg font-bold text-white uppercase">Machine Learning Intern</h4>
                  <span className="text-xs text-[#B600A8] font-medium">Jul 2025 – Aug 2025</span>
                </div>
                <div className="text-sm text-[#BBCCD7] font-medium mb-3">CodeSoft</div>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed mb-4">
                  Constructed machine learning models for Movie Genre Classification, Credit Card Fraud Detection, and Customer Churn Prediction. Leveraged Python, Scikit-Learn, Pandas, Logistic Regression, and Random Forest with cross-validation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'Scikit-Learn', 'Pandas', 'Fraud Detection', 'Random Forest'].map((tag) => (
                    <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 text-white/70 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct GitHub links to CodeSoft tasks */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://github.com/NITYA123715/CODSOFT_ML_TASK-02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#BBCCD7] hover:text-white inline-flex items-center gap-1 underline underline-offset-4 decoration-white/20 hover:decoration-white"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Task-02 (Credit Card Fraud)</span>
                  </a>
                  <span className="text-white/20">•</span>
                  <a
                    href="https://github.com/NITYA123715/CODSOFT_ML_TASK-03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#BBCCD7] hover:text-white inline-flex items-center gap-1 underline underline-offset-4 decoration-white/20 hover:decoration-white"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Task-03 (Customer Churn)</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Education & Academic Rigor */}
          <div>
            <FadeIn delay={0.2} y={30}>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-[#BBCCD7]" />
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
                  Academic Journey
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-6">
                Education
              </h3>

              <div className="flex flex-col gap-4">
                <div className="p-5 rounded-[24px] bg-white/[0.02] border border-white/10">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-base font-bold text-white uppercase">
                      Greater Noida Institute of Technology (AKTU)
                    </h4>
                    <span className="text-xs text-[#B600A8] font-semibold">2023 – 2027</span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#BBCCD7]">
                    B.Tech in Computer Science &amp; Artificial Intelligence
                  </div>
                  <div className="text-xs font-semibold text-white/90 mt-2 inline-block px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    CGPA: 8.23 / 10
                  </div>
                </div>

                <div className="p-5 rounded-[24px] bg-white/[0.02] border border-white/10">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-base font-bold text-white uppercase">
                      Sri Krishan Sagar Public School, Noida
                    </h4>
                    <span className="text-xs text-[#BBCCD7] font-medium">2022 – 2023</span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#D7E2EA]/70">
                    Class XII (CBSE Senior Secondary)
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Certifications & Badges */}
        <div>
          <FadeIn delay={0.15} y={30}>
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-[#BE4C00]" />
              <span className="text-xs uppercase tracking-widest text-[#BE4C00] font-semibold">
                Honors &amp; Credentials
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-6">
              Certifications &amp; Achievements
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">IIT Madras NPTEL</div>
                <div className="text-sm font-bold text-white mb-1">The Joy of Computing Using Python</div>
                <div className="text-xs font-semibold text-amber-300">Score: 78% (Elite)</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">IIT Kharagpur NPTEL</div>
                <div className="text-sm font-bold text-white mb-1">Computer Networks &amp; Protocols</div>
                <div className="text-xs font-semibold text-amber-300">Score: 61%</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Oracle Certified</div>
                <div className="text-sm font-bold text-white mb-1">OCI 2025 AI Foundations Associate</div>
                <div className="text-xs font-semibold text-cyan-300">Global AI Credential</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">IIT Kanpur &amp; AR</div>
                <div className="text-sm font-bold text-white mb-1">C &amp; OOP with C++ / Snap AR</div>
                <div className="text-xs font-semibold text-purple-300">E&amp;ICT Academy / BharatXR</div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Technical Skills Matrix */}
        <div>
          <FadeIn delay={0.2} y={30}>
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-[#D7E2EA]" />
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold">
                Core Stack
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-6">
              Technical Proficiencies
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { label: 'Languages', items: ['Python', 'C++', 'JavaScript', 'SQL'] },
                { label: 'Machine Learning', items: ['Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib'] },
                { label: 'Web & APIs', items: ['FastAPI', 'Django', 'HTML5', 'CSS3'] },
                { label: 'Databases', items: ['MySQL', 'Relational DBs', 'Query Opt'] },
                { label: 'CS Foundations', items: ['DSA', 'OOP', 'OS', 'Networks'] },
                { label: 'Dev Tools', items: ['Git', 'GitHub', 'VS Code', 'Jupyter'] },
              ].map((stack, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#B600A8] mb-2.5">
                    {stack.label}
                  </div>
                  <ul className="space-y-1">
                    {stack.items.map((item) => (
                      <li key={item} className="text-xs text-[#D7E2EA]/80 font-light">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
