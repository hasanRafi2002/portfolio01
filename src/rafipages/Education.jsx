

import React from 'react';
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const educationData = [
  {
    id: 1,
    degree: "B.Sc. in Software Engineering",
    institution: "Daffodil International University",
    year: "2024 - 2028",
    icon: <FaGraduationCap className="text-4xl text-yellow-400" />,
  },
];

const certificationsData = [
  {
    id: 1,
    title: "iOS App Development with Swift",
    provider: "Udemy",
    year: "2024",
    link: "https://www.udemy.com/certificate/ios-swift",
    icon: <FaCertificate className="text-4xl text-blue-400" />
  },
  {
    id: 2,
    title: "SwiftUI & Combine Mastery",
    provider: "Coursera",
    year: "2024",
    link: "https://www.coursera.org/certificate/swiftui-combine",
    icon: <FaCertificate className="text-4xl text-blue-400" />
  },
];

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="container max-w-6xl px-4 py-16 mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My academic and professional credentials
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 mb-6 text-2xl font-semibold text-yellow-500 dark:text-yellow-400">
              <FaGraduationCap className="text-3xl" />
              Education
            </h3>
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-xl rounded-xl dark:bg-gray-800/50 hover:shadow-2xl dark:border-gray-700 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-lg dark:bg-yellow-900/30">
                    {edu.icon}
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">{edu.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 mb-6 text-2xl font-semibold text-blue-500 dark:text-blue-400">
              <FaCertificate className="text-3xl" />
              Certifications
            </h3>
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-xl rounded-xl dark:bg-gray-800/50 hover:shadow-2xl dark:border-gray-700 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg dark:bg-blue-900/30">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">{cert.provider}</p>
                    <p className="mt-2 mb-3 text-gray-500 dark:text-gray-400">{cert.year}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-teal-600 transition-colors duration-200 rounded-lg dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 bg-teal-50 dark:bg-teal-900/20"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;