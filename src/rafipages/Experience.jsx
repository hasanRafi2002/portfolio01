

import React from 'react';
import { FaBriefcase, FaExternalLinkAlt, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const experienceData = [
  {
    id: 1,
    role: "Founder & iOS Developer",
    company: "RafiTech Apps",
    duration: "2025 - Present",
    description: "Developing iOS apps independently using Swift, SwiftUI, and UIKit. Focused on building real-world apps, integrating REST APIs, Firebase, and deploying apps to the App Store. Emphasizing clean code, performance optimization, and modern mobile design.",
    link: "#", // or your portfolio/website if you have one
  },
  {
    id: 2,
    role: "Personal iOS Projects",
    company: "Self-Initiated",
    duration: "2024 - Present",
    description: "Built multiple iOS apps to practice Swift, SwiftUI, CoreData, and Combine. Projects include a task manager, weather app, and a small social media app. Demonstrated ability to handle app lifecycle, offline storage, and user authentication.",
    link: "#",
  },
];


const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="container max-w-6xl px-4 py-16 mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-8 top-2 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-blue-500 dark:from-teal-500 dark:to-blue-600"></div>

          {experienceData.map((exp) => (
            <div key={exp.id} className="relative pl-16">
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 -translate-x-1/2 bg-teal-400 rounded-full left-6 dark:bg-teal-500 ring-4 ring-white dark:ring-gray-800"></div>

              <div className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-xl rounded-xl dark:bg-gray-800/50 hover:shadow-2xl dark:border-gray-700 backdrop-blur-sm">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h4 className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
                        <FaBriefcase className="text-teal-500" />
                        {exp.role}
                      </h4>
                      <p className="flex items-center gap-2 mt-2 text-gray-600 dark:text-gray-300">
                        <FaBuilding className="text-blue-400" />
                        {exp.company}
                      </p>
                    </div>
                    <p className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <FaCalendarAlt className="text-yellow-400" />
                      {exp.duration}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>

                  {/* Link */}
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-teal-600 transition-colors duration-200 rounded-lg dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 bg-teal-50 dark:bg-teal-900/20"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Company Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;