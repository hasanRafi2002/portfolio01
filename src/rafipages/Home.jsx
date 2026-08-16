import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleThemeChange = () => {
      setIsDark(
        document.documentElement.classList.contains("dark")
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    handleThemeChange();

    const observer = new MutationObserver(() => {
      handleThemeChange();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const skills = [
    "Swift",
    "SwiftUI",
    "UIKit",
    "Combine",
    "CoreData",
    "Xcode",
    "iOS SDK",
    "Objective-C",
    "Java",
    "C++",
  ];

  const socials = [
    {
      icon: <FaGithub size={23} />,
      href: "https://github.com/hasanRafi2002",
    },
    {
      icon: <FaLinkedin size={23} />,
      href: "https://www.linkedin.com/in/serock01/",
    },
    {
      icon: <FaTwitter size={23} />,
      href: "https://x.com/rafi_hasan_03",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Base background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-black dark:via-slate-950 dark:to-emerald-950" />

        {/* Large green energy clouds */}
        <div className="absolute inset-0 pointer-events-none">

          <div className="energy-cloud energy-cloud-one" />

          <div className="energy-cloud energy-cloud-two" />

          <div className="energy-cloud energy-cloud-three" />

        </div>

        {/* Mouse glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(
              circle 350px at ${mousePosition.x}px ${mousePosition.y}px,
              ${
                isDark
                  ? "rgba(57,255,20,0.16)"
                  : "rgba(57,255,20,0.10)"
              },
              transparent 70%
            )`,
          }}
        />

        {/* Technical grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.12]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(57,255,20,0.25) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(57,255,20,0.25) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <div
        className={`relative z-10 w-full max-w-5xl px-6 transition-all duration-1000 ${
          isLoaded
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >

        {/* Greeting */}
        <div className="text-center">

          <div className="flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300">
            <img
              src="https://user-images.githubusercontent.com/74038190/214644152-52f47eb3-5e31-4f47-8758-05c9468d5596.gif"
              alt="Sparkles"
              width="25"
              height="25"
            />
            Hi there! I'm
          </div>

          {/* Name */}
          <h1 className="mt-1 text-4xl font-black text-transparent md:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text animate-gradient">
            Md Tawhid Hasan Rafi
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            iOS Software Engineer | Swift & SwiftUI Developer
          </p>
        </div>

        {/* =====================================================
            OMNITRIX CORE
        ====================================================== */}

        <div className="relative flex flex-col items-center mt-8">

          {/* Outer energy field */}
          <div className="absolute w-[380px] h-[380px] rounded-full omnitrx-field md:w-[460px] md:h-[460px]" />

          {/* Rotating outer ring */}
          <div className="absolute w-[330px] h-[330px] rounded-full omnitrx-ring omnitrx-ring-one md:w-[390px] md:h-[390px]" />

          {/* Second rotating ring */}
          <div className="absolute w-[290px] h-[290px] rounded-full omnitrx-ring omnitrx-ring-two md:w-[350px] md:h-[350px]" />

          {/* Energy particles */}
          <div className="absolute w-[420px] h-[420px] pointer-events-none">
            <span className="particle particle-1" />
            <span className="particle particle-2" />
            <span className="particle particle-3" />
            <span className="particle particle-4" />
            <span className="particle particle-5" />
            <span className="particle particle-6" />
          </div>

          {/* Main Omnitrix core */}
          {/* =====================================================
    MAIN OMNITRIX CORE
===================================================== */}
<div className="relative flex items-center justify-center w-56 h-56 md:w-64 md:h-64">
  {/* Core atmospheric glow */}
  <div className="absolute inset-0 rounded-full omnitrx-glow" />

  {/* Mechanical outer bezel */}
  <div className="absolute inset-4 rounded-full omnitrx-bezel">

    {/* Outer green energy line */}
    <div className="absolute inset-2 rounded-full omnitrx-energy-border" />

    {/* Black mechanical ring */}
<div className="absolute inset-6 rounded-full bg-black/95 shadow-[inset_0_0_18px_rgba(57,255,20,0.35),0_0_20px_rgba(0,0,0,0.8)]">
      {/* Green inner ring */}
      <div className="absolute inset-3 rounded-full border-[4px] border-green-400/80 shadow-[0_0_15px_rgba(57,255,20,0.8)]" />

      {/* Mechanical tick marks */}
      <div className="absolute inset-0 omnitrx-ticks">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Energy chamber */}
      <div className="absolute inset-8 overflow-hidden rounded-full omnitrx-chamber">

        {/* Moving energy */}
        <div className="absolute inset-[-30%] omnitrx-energy-wave" />

        {/* Green glass */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime-300/90 via-green-500/90 to-emerald-800/95" />

        {/* Energy reflection */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.75),transparent_22%,transparent_60%)]" />

        {/* Profile */}
<div className="absolute inset-[14%] overflow-hidden rounded-full border-[4px] border-white/90 shadow-[0_0_25px_rgba(57,255,20,0.95)]">
          <img
            src="https://avatars.githubusercontent.com/u/173989431?v=4"
            alt="Profile"
            className="object-cover w-full h-full"
          />

          {/* Green energy overlay */}
          <div className="absolute inset-0 bg-green-400/10 mix-blend-screen" />
        </div>

        {/* Omnitrix symbol frame */}
        <div className="absolute inset-0 pointer-events-none">

          {/* Top triangle */}
          <div className="absolute left-1/2 top-[8%] -translate-x-1/2 w-0 h-0 border-l-[13px] border-r-[13px] border-b-[22px] border-l-transparent border-r-transparent border-b-black/90" />

          {/* Bottom triangle */}
          <div className="absolute left-1/2 bottom-[8%] -translate-x-1/2 w-0 h-0 border-l-[13px] border-r-[13px] border-t-[22px] border-l-transparent border-r-transparent border-t-black/90" />

          {/* Left triangle */}
          <div className="absolute left-[8%] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[13px] border-b-[13px] border-r-[22px] border-t-transparent border-b-transparent border-r-black/90" />

          {/* Right triangle */}
          <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[13px] border-b-[13px] border-l-[22px] border-t-transparent border-b-transparent border-l-black/90" />

        </div>

      </div>
    </div>
  </div>

  {/* Rotating energy arcs */}
  <div className="absolute inset-0 pointer-events-none omnitrx-arc" />

  {/* Core pulse */}
  <div className="absolute w-6 h-6 rounded-full bg-lime-300 shadow-[0_0_15px_#39ff14,0_0_35px_#39ff14] animate-pulse" />

</div>





          {/* =================================================
              SKILLS
          ================================================== */}

          <div className="relative z-30 flex flex-wrap justify-center max-w-3xl gap-2 mt-8">

            {skills.map((skill, index) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm text-gray-700 transition-all duration-300 rounded-full bg-white/70 dark:bg-black/40 dark:text-gray-200 border border-green-400/20 hover:border-green-400 hover:text-green-500 hover:shadow-[0_0_15px_rgba(57,255,20,0.35)] hover:scale-110"
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                {skill}
              </span>
            ))}

          </div>

          {/* Typing text */}
{/* Ben 10 style typing message */}
<div className="w-full max-w-2xl px-4 mt-6 text-center">
  <img
    src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=500&color=39FF14&center=true&vCenter=true&width=650&lines=🚀+iOS+Software+Engineer+with+a+Vision;💻+Building+Elegant+SwiftUI+Apps;🔬+Optimizing+iOS+Performance;🎯+Problem+Solver+%26+Innovation+Enthusiast"
    alt="Animated Typing"
    className="block w-full max-w-[650px] mx-auto"
  />
</div>

          {/* Socials */}
          <div className="relative z-30 flex gap-6 mt-6">

            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
className="text-gray-500 transition-all duration-300 dark:text-gray-300 hover:text-green-500 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]"              >
                {social.icon}
              </a>
            ))}

          </div>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1vm7-CmGXOSiyxVyuOBGNAo44jMVOPXsu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
className="relative z-30 inline-flex items-center gap-2 px-7 py-3 mt-7 overflow-hidden text-white transition-all duration-300 rounded-xl group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(57,255,20,0.25)]"          >

            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500" />

            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-green-400 group-hover:opacity-30" />

            <FaDownload className="relative z-10" />

            <span className="relative z-10 font-semibold">
              Download Resume
            </span>

          </a>

        </div>
      </div>

      {/* =========================================================
          BEN 10 / OMNITRIX CSS
      ========================================================== */}

      <style jsx>{`

        /* ---------------------------------------------
           Background energy
        --------------------------------------------- */

        .energy-cloud {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.18;
          background: #39ff14;
          animation: cloudFloat 12s ease-in-out infinite;
        }

        .energy-cloud-one {
          left: 35%;
          top: 25%;
        }

        .energy-cloud-two {
          right: 10%;
          bottom: 5%;
          animation-delay: -4s;
          opacity: 0.12;
        }

        .energy-cloud-three {
          left: 5%;
          bottom: 10%;
          animation-delay: -8s;
          opacity: 0.10;
        }

        @keyframes cloudFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(40px, -30px) scale(1.15);
          }
        }


        /* ---------------------------------------------
           Omnitrix outer energy field
        --------------------------------------------- */

        .omnitrx-field {
          background: radial-gradient(
            circle,
            rgba(57,255,20,0.30) 0%,
            rgba(57,255,20,0.16) 35%,
            rgba(57,255,20,0.05) 55%,
            transparent 72%
          );

          filter: blur(8px);

          animation:
            omnitrxPulse 3s ease-in-out infinite,
            omnitrxRotate 18s linear infinite;
        }


        /* ---------------------------------------------
           Rotating rings
        --------------------------------------------- */

        .omnitrx-ring {
          border: 2px solid rgba(57,255,20,0.45);

          box-shadow:
            0 0 15px rgba(57,255,20,0.25),
            inset 0 0 15px rgba(57,255,20,0.12);
        }

        .omnitrx-ring-one {
          border-top-color: #39ff14;
          border-bottom-color: transparent;

          animation: ringRotate 7s linear infinite;
        }

        .omnitrx-ring-two {
          border-left-color: #39ff14;
          border-right-color: transparent;

          animation: ringRotateReverse 5s linear infinite;
        }

        @keyframes ringRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ringRotateReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }


        /* ---------------------------------------------
           Main green core
        --------------------------------------------- */

        .omnitrx-glow {
          background: #39ff14;

          filter: blur(35px);

          opacity: 0.35;

          animation: corePulse 2s ease-in-out infinite;
        }


/* ---------------------------------------------
   Mechanical Omnitrix bezel
--------------------------------------------- */

.omnitrx-bezel {
  background:
    radial-gradient(
      circle at 50% 45%,
      #1a1a1a 0%,
      #080808 55%,
      #000000 100%
    );

  border: 5px solid #111;

  box-shadow:
    inset 0 0 15px rgba(57,255,20,0.35),
    inset 0 0 35px rgba(0,0,0,0.95),
    0 0 25px rgba(57,255,20,0.45);
}


/* ---------------------------------------------
   Thin green energy border
--------------------------------------------- */

.omnitrx-energy-border {
  border: 2px solid rgba(57,255,20,0.8);

  box-shadow:
    0 0 8px rgba(57,255,20,0.9),
    0 0 20px rgba(57,255,20,0.45);

  animation: energyBorderPulse 2s ease-in-out infinite;
}

@keyframes energyBorderPulse {
  0%,
  100% {
    opacity: 0.55;
  }

  50% {
    opacity: 1;
  }
}


/* ---------------------------------------------
   Mechanical tick marks
--------------------------------------------- */
.omnitrx-ticks {
  position: absolute;
  inset: 0;
  animation: tickRotate 20s linear infinite;
}

.omnitrx-ticks span {
  position: absolute;
  left: 50%;
  top: 5%;
  width: 3px;
  height: 10px;
  transform-origin: 50% 450%;
  background: #39ff14;
  box-shadow:
    0 0 6px #39ff14,
    0 0 12px rgba(57,255,20,0.8);
}

.omnitrx-ticks span:nth-child(1) {
  transform: translateX(-50%) rotate(0deg);
}

.omnitrx-ticks span:nth-child(2) {
  transform: translateX(-50%) rotate(45deg);
}

.omnitrx-ticks span:nth-child(3) {
  transform: translateX(-50%) rotate(90deg);
}

.omnitrx-ticks span:nth-child(4) {
  transform: translateX(-50%) rotate(135deg);
}

.omnitrx-ticks span:nth-child(5) {
  transform: translateX(-50%) rotate(180deg);
}

.omnitrx-ticks span:nth-child(6) {
  transform: translateX(-50%) rotate(225deg);
}

.omnitrx-ticks span:nth-child(7) {
  transform: translateX(-50%) rotate(270deg);
}

.omnitrx-ticks span:nth-child(8) {
  transform: translateX(-50%) rotate(315deg);
}

@keyframes tickRotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}


/* ---------------------------------------------
   Energy chamber
--------------------------------------------- */

.omnitrx-chamber {
  background:
    radial-gradient(
      circle,
      rgba(57,255,20,0.35),
      rgba(0,0,0,0.9)
    );

  border: 3px solid rgba(57,255,20,0.8);

  box-shadow:
    inset 0 0 20px rgba(57,255,20,0.65),
    0 0 20px rgba(57,255,20,0.55);
}


/* ---------------------------------------------
   Moving energy wave
--------------------------------------------- */

.omnitrx-energy-wave {
  background:
    conic-gradient(
      from 0deg,
      transparent 0deg,
      rgba(57,255,20,0.0) 35deg,
      rgba(57,255,20,0.7) 70deg,
      transparent 110deg,
      transparent 180deg,
      rgba(132,255,0,0.5) 230deg,
      transparent 280deg,
      transparent 360deg
    );

  animation: energyWave 3s linear infinite;
}

@keyframes energyWave {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}


/* ---------------------------------------------
   Outer rotating energy arc
--------------------------------------------- */

.omnitrx-arc {
  border-radius: 9999px;

  border: 3px solid transparent;

  border-top-color: #39ff14;
  border-right-color: rgba(57,255,20,0.35);

  box-shadow:
    0 0 10px rgba(57,255,20,0.7),
    0 0 25px rgba(57,255,20,0.3);

  animation: arcRotate 4s linear infinite;
}

@keyframes arcRotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}






        @keyframes corePulse {
          0%, 100% {
            transform: scale(0.88);
            opacity: 0.25;
          }

          50% {
            transform: scale(1.12);
            opacity: 0.55;
          }
        }

        @keyframes omnitrxPulse {
          0%, 100% {
            transform: scale(0.92);
            opacity: 0.65;
          }

          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @keyframes omnitrxRotate {
          from {
            filter: blur(8px) hue-rotate(0deg);
          }

          to {
            filter: blur(8px) hue-rotate(20deg);
          }
        }


        /* ---------------------------------------------
           Energy particles
        --------------------------------------------- */

        .particle {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #39ff14;
          box-shadow: 0 0 12px #39ff14;
          animation: particleFloat 4s ease-in-out infinite;
        }

        .particle-1 {
          left: 15%;
          top: 25%;
        }

        .particle-2 {
          left: 75%;
          top: 15%;
          animation-delay: -1s;
        }

        .particle-3 {
          left: 90%;
          top: 55%;
          animation-delay: -2s;
        }

        .particle-4 {
          left: 20%;
          top: 75%;
          animation-delay: -3s;
        }

        .particle-5 {
          left: 70%;
          top: 85%;
          animation-delay: -1.5s;
        }

        .particle-6 {
          left: 45%;
          top: 5%;
          animation-delay: -2.5s;
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translate(0, 0) scale(0.7);
            opacity: 0.3;
          }

          50% {
            transform: translate(15px, -25px) scale(1.4);
            opacity: 1;
          }
        }


        /* ---------------------------------------------
           Omnitrix center symbol
        --------------------------------------------- */

        .clip-diamond {
          clip-path: polygon(
            50% 0%,
            100% 50%,
            50% 100%,
            0% 50%
          );
        }


        /* ---------------------------------------------
           Name gradient
        --------------------------------------------- */

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 7s ease infinite;
        }

        @keyframes gradientMove {
          0%, 100% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }
        }


        /* ---------------------------------------------
           Mobile
        --------------------------------------------- */

        @media (max-width: 640px) {

          .energy-cloud {
            width: 300px;
            height: 300px;
          }

          .omnitrx-field {
            width: 330px;
            height: 330px;
          }

          .omnitrx-ring-one {
            width: 280px;
            height: 280px;
          }

          .omnitrx-ring-two {
            width: 240px;
            height: 240px;
          }
        }

      `}</style>


      
    </div>



  );
};

export default Home;