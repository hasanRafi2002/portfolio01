import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const accentCycle = ['var(--accent)', 'var(--accent-secondary)', 'var(--accent-tertiary)'];

const educationData = [
  {
    id: 1,
    degree: "B.Sc. in Software Engineering",
    institution: "Daffodil International University",
    year: "2024 - 2028",
    icon: <FaGraduationCap className="text-3xl" />,
  },
];

const certificationsData = [
  {
    id: 1,
    title: "iOS App Development with Swift",
    provider: "Udemy",
    year: "2024",
    link: "https://www.udemy.com/certificate/ios-swift",
    icon: <FaCertificate className="text-3xl" />
  },
  {
    id: 2,
    title: "SwiftUI & Combine Mastery",
    provider: "Coursera",
    year: "2024",
    link: "https://www.coursera.org/certificate/swiftui-combine",
    icon: <FaCertificate className="text-3xl" />
  },
];

const Education = () => {
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] grid-bg">
      <div className="container max-w-6xl px-4 py-20 mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-display tracking-[0.2em] uppercase rounded-full border border-omni/40 bg-[var(--surface)] text-omni/90">
            <span className="w-1.5 h-1.5 rounded-full bg-omni animate-pulse" /> Knowledge Base
          </div>
          <h2 className="mb-4 text-4xl font-display font-bold text-[var(--text-primary)] text-glow">Education &amp; Certifications</h2>
          <p className="text-[var(--text-secondary)]">My academic and professional credentials</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 mb-6 text-2xl font-display font-semibold text-gradient-brand"><FaGraduationCap className="text-3xl" /> Education</h3>
            {educationData.map((edu, i) => {
              const color = accentCycle[i % accentCycle.length];
              return (
                <motion.div key={edu.id} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="glass glass-hover tilt-3d p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg" style={{ background: `color-mix(in srgb, ${color} 14%, transparent)`, border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`, color }}>{edu.icon}</div>
                    <div>
                      <h4 className="mb-2 text-xl font-display font-semibold text-[var(--text-primary)]">{edu.degree}</h4>
                      <p className="text-[var(--text-secondary)]">{edu.institution}</p>
                      <p className="mt-2 text-[var(--text-secondary)] opacity-60 font-mono">{edu.year}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="space-y-6">
            <h3 className="flex items-center gap-2 mb-6 text-2xl font-display font-semibold text-gradient-brand"><FaCertificate className="text-3xl" /> Certifications</h3>
            {certificationsData.map((cert, i) => {
              const color = accentCycle[(i + 1) % accentCycle.length];
              return (
                <motion.div key={cert.id} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="glass glass-hover tilt-3d p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg" style={{ background: `color-mix(in srgb, ${color} 14%, transparent)`, border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`, color }}>{cert.icon}</div>
                    <div>
                      <h4 className="mb-2 text-xl font-display font-semibold text-[var(--text-primary)]">{cert.title}</h4>
                      <p className="text-[var(--text-secondary)]">{cert.provider}</p>
                      <p className="mt-2 mb-3 text-[var(--text-secondary)] opacity-60 font-mono">{cert.year}</p>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[var(--surface)] border border-omni/30 text-omni hover:border-omni hover:shadow-glow-sm transition-all duration-300">
                        <FaExternalLinkAlt className="text-xs" /> View Certificate
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
