import React from "react";
import {
  Github, Linkedin, Twitter, Mail, Phone, MapPin, FileText,
  Code2, GraduationCap, Brain
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Sidebar = () => {
  const skills = {
    languages: [
      { name: "Swift", level: 95 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 }
    ],
    tech: [
      { name: "UIKit / SwiftUI", level: 90 },
      { name: "Xcode", level: 95 },
      { name: "MVVM Architecture", level: 85 },
      { name: "Firebase (Auth, Firestore)", level: 80 },
      { name: "REST APIs & URLSession", level: 85 },
      { name: "Swift Concurrency (async/await)", level: 85 }
    ]
  };

  const SkillBar = ({ level }) => (
    <div className="w-full h-1.5 rounded-full border border-[var(--border)] overflow-hidden bg-[var(--surface)]">
      <div className="h-full rounded-full bg-gradient-to-r from-omni-dim via-omni to-omniSecondary shadow-glow-sm" style={{ width: level + "%" }} />
    </div>
  );

  const mailHref = "https://mail.google.com/mail/?view=cm&to=rafi2002ten@gmail.com";

  return (
    <aside className="hidden md:flex glass-strong fixed top-0 left-0 h-screen w-72 grid-bg border-r border-[var(--border)] z-40 flex-col">
      <div className="relative p-6 border-b border-[var(--border)]">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, color-mix(in srgb, var(--accent) 10%, transparent), transparent)" }} />
        <div className="relative flex flex-col items-center">
          <div className="relative w-28 h-28 group">
            <div className="absolute -inset-1 rounded-xl opacity-60 blur-sm group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))" }} />
            <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-omni/70 shadow-glow">
              <img src="https://avatars.githubusercontent.com/u/173989431?v=4" alt="Profile" className="object-cover w-full h-full" />
            </div>
          </div>
          <h2 className="mt-4 text-xl font-display font-bold text-[var(--text-primary)] text-glow tracking-wide">Md Tawhid Hasan Rafi</h2>
          <p className="mt-1 font-medium text-omni/80 text-sm tracking-widest uppercase font-display">iOS Software Engineer</p>
          <div className="w-12 h-[2px] mt-3 rounded-full bg-gradient-to-r from-transparent via-omni to-transparent shadow-glow" />
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="glass p-3 rounded-xl hud-corners relative">
          <h3 className="flex items-center gap-2 text-xs font-display font-semibold tracking-widest uppercase text-omni/80"><Phone size={13} className="text-omni" /> Contact Info</h3>
          <div className="mt-2 space-y-1">
            <a href={mailHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-1.5 text-sm text-[var(--text-secondary)] transition rounded-md hover:bg-[var(--surface)] hover:text-omni">
              <Mail size={14} className="text-omni/70" /> rafi2002ten@gmail.com
            </a>
            <a href="https://wa.me/8801540050626" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-1.5 text-sm text-[var(--text-secondary)] transition rounded-md hover:bg-[var(--surface)] hover:text-omni">
              <FaWhatsapp size={14} className="text-omni/70" /> +880 1540-050626
            </a>
            <p className="flex items-center gap-2 p-1.5 text-sm text-[var(--text-secondary)]"><MapPin size={14} className="text-omni/70" /> DSC, Savar, Dhaka, Bangladesh</p>
          </div>
        </div>

        <div className="glass p-3 rounded-xl">
          <h3 className="flex items-center gap-2 text-xs font-display font-semibold tracking-widest uppercase text-omni/80"><GraduationCap size={13} className="text-omni" /> Education</h3>
          <div className="mt-2 space-y-2">
            <div className="glass-subtle p-2 text-sm rounded-lg">
              <p className="font-medium text-[var(--text-primary)]">BSc in Software Engineering</p>
              <p className="mt-1 text-[var(--text-secondary)]">Daffodil International University</p>
              <p className="text-[var(--text-secondary)]/70">2024 - 2028</p>
            </div>
          </div>
        </div>

        <div className="glass p-3 rounded-xl">
          <h3 className="flex items-center gap-2 text-xs font-display font-semibold tracking-widest uppercase text-omni/80"><Code2 size={13} className="text-omni" /> Languages</h3>
          <div className="mt-2 space-y-2">
            {skills.languages.map((skill, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--text-secondary)]">{skill.name}</span>
                  <span className="text-omni/70 font-mono">{skill.level}%</span>
                </div>
                <SkillBar level={skill.level} />
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-3 rounded-xl">
          <h3 className="flex items-center gap-2 text-xs font-display font-semibold tracking-widest uppercase text-omni/80"><Brain size={13} className="text-omni" /> Technologies</h3>
          <div className="mt-2 space-y-2">
            {skills.tech.map((skill, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--text-secondary)]">{skill.name}</span>
                  <span className="text-omni/70 font-mono">{skill.level}%</span>
                </div>
                <SkillBar level={skill.level} />
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-3 rounded-xl">
          <h3 className="flex items-center gap-2 text-xs font-display font-semibold tracking-widest uppercase text-omni/80"><FileText size={13} className="text-omni" /> Resume</h3>
          <a href="https://drive.google.com/file/d/1vm7-CmGXOSiyxVyuOBGNAo44jMVOPXsu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="neon-btn flex items-center justify-center gap-2 px-3 py-2 mt-2 text-sm font-semibold rounded-md font-display">
            <FileText size={14} /> Download Resume
          </a>
        </div>
      </div>

      <div className="glass-subtle p-4 border-t border-[var(--border)]">
        <div className="flex justify-center gap-3 mb-3">
          <a href="https://github.com/hasanRafi2002" target="_blank" rel="noopener noreferrer" className="p-2 transition glass rounded-md hover:border-omni hover:text-omni"><Github size={16} className="text-[var(--text-secondary)]" /></a>
          <a href="https://www.linkedin.com/in/serock01/" target="_blank" rel="noopener noreferrer" className="p-2 transition glass rounded-md hover:border-omni hover:text-omni"><Linkedin size={16} className="text-[var(--text-secondary)]" /></a>
          <a href="https://x.com/rafi_hasan_03" target="_blank" rel="noopener noreferrer" className="p-2 transition glass rounded-md hover:border-omni hover:text-omni"><Twitter size={16} className="text-[var(--text-secondary)]" /></a>
        </div>
        <p className="text-xs text-center text-[var(--text-secondary)]/70 font-display tracking-wide">&copy; {new Date().getFullYear()} Tawhid Hasan Rafi</p>
      </div>
    </aside>
  );
};

export default Sidebar;
