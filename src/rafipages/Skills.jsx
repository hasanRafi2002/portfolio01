




import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Sun, Moon } from 'lucide-react';

const skills = {
  ios: [
    { name: "Swift", icon: "https://skillicons.dev/icons?i=swift" },
    { name: "SwiftUI", icon: "https://raw.githubusercontent.com/hasanrafi1122/photos/61a777f7ecdb64fe2cd15f6716aab4e30f9e9796/ph-assignment/portfolio/icons8-swiftui%20(1).svg" },
    { name: "UIKit", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/icons8-uikit-48.png?raw=true" },
    { name: "MVVM", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/mvvm.png?raw=true" },
    { name: "REST APIs & JSON", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/json.png?raw=true" },
    { name: "URLSession", icon: "https://raw.githubusercontent.com/hasanrafi1122/photos/02e0a3ac3a46be42f62721f9058961e1465386dc/ph-assignment/portfolio/URLSession.svg" },
    { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
    { name: "Core Data", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/core-data.jpeg?raw=true" },
    { name: "Swift Concurrency", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/Swift%20Concurrency.png?raw=true" },
    { name: "Debugging", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/App%20Lifecycle%20&%20Debugging.webp?raw=true" },
    { name: "Auto Layout", icon: "https://raw.githubusercontent.com/hasanrafi1122/photos/27fa59a6a9219d084ade363676a72de01884bb12/ph-assignment/portfolio/SwiftUI%20Layout%20System.svg" },
    { name: "CocoaPods", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/CocoaPods.png?raw=true" },
    { name: "SPM", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/spm.png?raw=true" },
    { name: "Combine", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/combine.png?raw=true" }
  ],

  backend: [
    { name: "Vapor", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/Vapor.png?raw=true" },
    { name: "REST API Design", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/rest%20api.png?raw=true" },
    { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
    { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" }
  ],

  programming_languages: [
    { name: "Swift", icon: "https://skillicons.dev/icons?i=swift" },
    { name: "C", icon: "https://skillicons.dev/icons?i=c" },
    { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
    { name: "SQL", icon: "https://raw.githubusercontent.com/hasanrafi1122/photos/02e0a3ac3a46be42f62721f9058961e1465386dc/ph-assignment/portfolio/SQL%20Developer.svg" }
  ],

  tools: [
    { name: "Xcode", icon: "https://raw.githubusercontent.com/hasanrafi1122/photos/02e0a3ac3a46be42f62721f9058961e1465386dc/ph-assignment/portfolio/Xcode.svg" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
    { name: "TestFlight", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/TestFlight.jpeg?raw=true" },
    { name: "App Store Connect", icon: "https://raw.githubusercontent.com/hasanrafi1122/photos/02e0a3ac3a46be42f62721f9058961e1465386dc/ph-assignment/portfolio/icons8-app-store.svg" }
  ],

  foundations: [
    { name: "Data Structures & Algorithms", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/dsa.png?raw=true" },
    { name: "OOP", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/oop.png?raw=true" },
    { name: "Problem Solving", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/Problem%20Solving.png?raw=true" }
  ]
};

const CategoryCard = ({ title, skills }) => {
  return (
    <Card className="w-full transition-all duration-300 border-0 shadow-lg backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 hover:shadow-xl">
      <CardHeader className="border-b border-gray-100 dark:border-gray-700">
        <CardTitle className="text-xl font-bold text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text">
          {title.replace("_", " ").toUpperCase()}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center transition-all duration-300 rounded-xl hover:bg-white/80 dark:hover:bg-gray-700/80 p-2 group"
            >
              <div className="w-14 h-14 mb-2 transition-transform duration-300 rounded-lg bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900 dark:to-indigo-900 flex items-center justify-center group-hover:scale-110">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="object-contain w-10 h-10"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="relative min-h-screen p-6 transition-colors duration-500 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      <button
        onClick={toggleTheme}
        className="fixed p-2 transition-all duration-300 rounded-full top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30"
      >
        {isDark ? <Sun className="w-6 h-6 text-yellow-300" /> : <Moon className="w-6 h-6 text-violet-600" />}
      </button>

      <div className="relative max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text animate-gradient">
            My Tech Skills
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Exploring the tools and technologies that power my development journey
          </p>
        </div>

        <div className="grid gap-8">
          {/* iOS Skills first */}
          <CategoryCard title="iOS Development" skills={skills.ios} />
          {Object.entries(skills)
            .filter(([cat]) => cat !== 'ios')
            .map(([category, skillList]) => (
              <CategoryCard key={category} title={category} skills={skillList} />
            ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradientMove 8s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;
