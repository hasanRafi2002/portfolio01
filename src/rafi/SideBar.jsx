



import React, { useState } from "react";
import { 
  Github, Linkedin, Twitter, Mail, Phone, MapPin, Calendar, FileText,
  Code2, Globe2, GraduationCap, Brain, Star, Database, Layout, Server
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="w-full h-1.5 bg-gray-200 rounded-full dark:bg-gray-700">
      <div 
        className="h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
        style={{ width: `${level}%` }}
      />
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-[1000] p-2 text-white transition-all duration-300 rounded-lg shadow-lg md:hidden top-4 left-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 "
        aria-label="Toggle Sidebar"
      >
   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-12 md:top-0 left-0 h-screen w-72 
          bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm
          transform transition-all duration-500 ease-out z-40
          md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}
          flex flex-col shadow-xl
        `}
      >
        {/* Profile Section */}
        <div className="relative p-6 border-b border-gray-100 dark:border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20" />
          <div className="relative flex flex-col items-center">
            <div className="relative w-28 h-28 group">
              <div className="absolute inset-0 transition-transform duration-300 rotate-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 group-hover:rotate-6" />
              <img
                src="https://avatars.githubusercontent.com/u/173989431?v=4"
                alt="Profile"
                className="relative object-cover w-full h-full rounded-xl"
              />
            </div>
            <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
              Md Tawhid Hasan Rafi
            </h2>
            <p className="mt-1 font-medium text-gray-600 text-md dark:text-gray-400">iOS Software Engineer</p>


            <div className="w-12 h-0.5 mt-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto custom-scrollbar">
          {/* Contact Info */}
          <div className="p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/30">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
              <Phone size={14} className="text-purple-500" /> Contact Info
            </h3>
            <div className="mt-2 space-y-1">
                <a 
                  href="https://mail.google.com/mail/?view=cm&to=rafi2002ten@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-1.5 text-sm text-gray-600 transition rounded-md dark:text-gray-400 hover:bg-white/80 dark:hover:bg-gray-700/80"
                >
                  <Mail size={14} className="text-blue-500" /> rafi2002ten@gmail.com
                </a>


                <a 
                  href="https://wa.me/8801540050626" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-1.5 text-sm text-gray-600 transition rounded-md dark:text-gray-400 hover:bg-white/80 dark:hover:bg-gray-700/80"
                >
                  <FaWhatsapp size={14} className="text-green-500" /> +880 1540-050626
                </a>


              <p className="flex items-center gap-2 p-1.5 text-sm text-gray-600 transition rounded-md dark:text-gray-400">
                <MapPin size={14} className="text-red-500" /> DSC, Savar, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/30">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
              <GraduationCap size={14} className="text-green-500" /> Education
            </h3>
            <div className="mt-2 space-y-2">
              <div className="p-2 text-sm bg-white rounded-md dark:bg-gray-700/50">
                <p className="font-medium text-gray-800 dark:text-gray-200">BSc in Software Engineering</p>
                <p className="mt-1 text-gray-600 dark:text-gray-400">Daffodil International University</p>
                <p className="text-gray-500 dark:text-gray-500">2024 - 2028</p>
              </div>
            </div>
          </div>

          {/* Programming Languages */}
          <div className="p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/30">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
              <Code2 size={14} className="text-yellow-500" /> Programming Languages
            </h3>
            <div className="mt-2 space-y-2">
              {skills.languages.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <SkillBar level={skill.level} />
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/30">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
              <Brain size={14} className="text-blue-500" /> Technologies
            </h3>
            <div className="mt-2 space-y-2">
              {skills.tech.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <SkillBar level={skill.level} />
                </div>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <div className="p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/30">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
              <FileText size={14} className="text-orange-500" /> Resume
            </h3>
            <a
            href="https://drive.google.com/file/d/1vm7-CmGXOSiyxVyuOBGNAo44jMVOPXsu/view?usp=sharing"
            target="_blank"
              download
              className="flex items-center justify-center gap-2 px-3 py-2 mt-2 text-sm font-medium text-white transition rounded-md bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              <FileText size={14} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Footer with Social Links */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50 dark:bg-gray-800/30 dark:border-gray-800">
          <div className="flex justify-center gap-3 mb-3">
            <a 
              href="https://github.com/hasanRafi2002" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 transition bg-white rounded-md dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Github size={16} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/serock01/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 transition bg-white rounded-md dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Linkedin size={16} className="text-blue-500" />
            </a>
            <a 
              href="https://x.com/rafi_hasan_03" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 transition bg-white rounded-md dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Twitter size={16} className="text-blue-400" />
            </a>
          </div>
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Tawhid Hasan Rafi
          </p>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.5);
        }
        
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(107, 114, 128, 0.3);
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(107, 114, 128, 0.5);
        }
      `}</style>
    </>
  );
};

export default Sidebar;