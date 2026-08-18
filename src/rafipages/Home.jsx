import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import useTilt3D from "@/hooks/useTilt3D";

const Home = () => {
  const tilt = useTilt3D({ max: 8, scale: 1.04 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener ? mq.addEventListener("change", onChange) : mq.addListener(onChange);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", onChange) : mq.removeListener(onChange);
    };
  }, []);

  const skills = ["Swift", "SwiftUI", "UIKit", "Combine", "CoreData", "Xcode", "iOS SDK", "Objective-C", "Java", "C++"];
  const socials = [
    { icon: <FaGithub size={20} />, href: "https://github.com/hasanRafi2002" },
    { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/serock01/" },
    { icon: <FaTwitter size={20} />, href: "https://x.com/rafi_hasan_03" },
  ];

  const container = { hidden: {}, show: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } } };
  const fadeUp = { hidden: { opacity: 0, y: reduceMotion ? 0 : 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 overflow-hidden grid-bg"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full -top-32 -left-24 w-96 h-96 blur-3xl opacity-40" style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }} />
        <div className="absolute rounded-full -bottom-32 -right-16 w-96 h-96 blur-3xl opacity-30" style={{ background: "radial-gradient(circle, var(--accent-secondary), transparent 70%)" }} />
        <div className="absolute w-64 h-64 rounded-full top-1/3 right-1/4 blur-3xl opacity-20" style={{ background: "radial-gradient(circle, var(--accent-tertiary), transparent 70%)" }} />
      </div>

      <motion.div initial="hidden" animate={isLoaded ? "show" : "hidden"} variants={container} className="relative z-10 grid items-center w-full max-w-5xl gap-14 md:grid-cols-2">

        <motion.div variants={fadeUp} className="order-2 text-center md:order-1 md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-display tracking-[0.2em] uppercase rounded-full border border-omni/40" style={{ background: "var(--surface)", color: "var(--accent)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-omni animate-pulse" /> Available for work
          </div>
          <h1 className="mt-5 text-4xl font-display font-black leading-tight md:text-6xl text-gradient-brand">Md Tawhid Hasan Rafi</h1>
          <p className="mt-4 text-lg font-display tracking-wide" style={{ color: "var(--text-secondary)" }}>
            iOS Software Engineer <span style={{ color: "var(--accent)" }}>/</span> Swift &amp; SwiftUI Developer
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6 md:justify-start">
            {skills.map((skill) => (
              <span
                key={skill}
                className="tilt-3d px-3 py-1 text-sm rounded-full font-display border transition-colors"
                style={{ color: "var(--text-secondary)", background: "var(--surface)", borderColor: "var(--border)" }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 md:justify-start">
            <a href="https://drive.google.com/file/d/1vm7-CmGXOSiyxVyuOBGNAo44jMVOPXsu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="neon-btn inline-flex items-center gap-2 px-7 py-3 rounded-xl font-display font-semibold">
              <FaDownload /> Download Resume
            </a>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="glass glass-hover p-3 rounded-lg" style={{ color: "var(--text-secondary)" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="relative order-1 mx-auto md:order-2">
          <div ref={tilt.ref} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave} style={tilt.style} className="relative">
            <div className="absolute -inset-2 rounded-[28px] opacity-60 blur-lg" style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))" }} />
            <div className="relative overflow-hidden border-4 rounded-[24px] w-64 h-64 md:w-72 md:h-72 shadow-glow" style={{ borderColor: "var(--glass-bg-strong)" }}>
              <img src="https://avatars.githubusercontent.com/u/173989431?v=4" alt="Profile" className="object-cover w-full h-full" />
            </div>

            <div className="absolute px-3 py-2 text-xs font-mono rounded-xl glass shadow-glow-sm -top-4 -left-8 animate-float">
              <span style={{ color: "var(--accent)" }}>● </span>
              <span style={{ color: "var(--text-primary)" }}>iOS Engineer</span>
            </div>
            <div className="absolute px-3 py-2 text-xs font-mono rounded-xl glass shadow-glow-sm -bottom-4 -right-6 animate-float" style={{ animationDelay: "1.4s" }}>
              <span style={{ color: "var(--accent-secondary)" }}>● </span>
              <span style={{ color: "var(--text-primary)" }}>Swift + SwiftUI</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
