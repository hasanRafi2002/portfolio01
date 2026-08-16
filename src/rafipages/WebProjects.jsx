


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Laptop, Camera, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";

const webProjects = [
  {
    id: 1,
    title: "Dwella",
    description: "A modern real estate platform connecting buyers, agents, and admins seamlessly.",
    image: "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-12.png?raw=true",
    liveLink: "https://rafi-a12.netlify.app/",
    githubLink: "https://github.com/hasanRafi2002/Dwella",
    tech: ["React", "Firebase", "Tailwind", "MongoDB", "Express"]
  },
  {
    id: 2,
    title: "FlavorFusion",
    description: "Restaurant Management Website for smooth order and menu handling.",
    image: "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-11.png?raw=true",
    liveLink: "https://rafi-a11.netlify.app/",
    githubLink: "https://github.com/hasanRafi2002/FlavorFusion",
    tech: ["React", "Firebase", "Tailwind", "MongoDB", "Express"]
  },
  {
    id: 3,
    title: "EquiSports",
    description: "E-commerce platform for sports equipment with reviews and secure checkout.",
    image: "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-10.png?raw=true",
    liveLink: "https://rafi-a10.netlify.app/",
    githubLink: "https://github.com/hasanRafi2002/EquiSports",
    tech: ["React", "Firebase", "Tailwind", "MongoDB", "Express"]
  },
  {
    id: 4,
    title: "Gadget Heaven",
    description: "Premium electronics e-commerce platform with an intuitive interface.",
    image: "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-8.png?raw=true",
    liveLink: "https://rafi-a09.netlify.app/",
    githubLink: "https://github.com/hasanRafi2002/EquiSports",
    tech: ["React", "Firebase", "Tailwind", "MongoDB", "Express"]
  }
];

const WebProjects = () => {

        const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <Laptop className="w-6 h-6 text-blue-500 md:w-8 md:h-8 animate-spin-slow" />
          <h2 className="text-2xl font-bold text-transparent md:text-4xl bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text animate-gradient">
            My Web Projects
          </h2>
          <Camera className="w-6 h-6 text-teal-500 md:w-8 md:h-8 animate-bounce-slow" />
        </div>
        <p className="text-gray-600 dark:text-gray-400">Some of my best web development work</p>
<button
  onClick={() => navigate(-1)}
  className="
    inline-flex items-center gap-2 mb-6
    text-blue-600 underline underline-offset-4
    transition-all duration-300 ease-out
    hover:text-blue-700 hover:scale-105
    active:scale-95
  "
>
  <ArrowLeft className="w-5 h-5" />
  Go Back
</button>

      </div>

      {/* Projects List */}
      <div className="max-w-6xl mx-auto space-y-12">
        {webProjects.map((project) => (
          <div
            key={project.id}
            className="relative transition-all duration-500 ease-out group"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <div
              className={`relative w-full lg:w-[75%] h-[250px] lg:h-[400px] rounded-xl overflow-hidden p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 transform ${
                hoveredId === project.id ? "md:scale-105" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 rounded-lg group-hover:scale-110"
              />
            </div>

            {/* Card */}
            <Card
              className={`relative xl:absolute right-0 top-0 lg:top-1/2 w-full xl:w-[45%] mt-4 lg:mt-0 transform xl:-translate-y-1/2 bg-white/95 dark:bg-gray-800/50 backdrop-blur-sm shadow-2xl rounded-xl transition-all duration-500 ${
                hoveredId === project.id ? "md:translate-x-4 md:scale-105" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-transparent md:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text dark:from-blue-400 dark:to-purple-400">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-gray-600 md:text-base dark:text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs text-white rounded-full md:text-sm bg-gradient-to-r from-blue-500 to-purple-500 md:px-3"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm text-white transition-all duration-300 rounded-lg shadow-md sm:w-auto md:px-6 md:py-3 md:text-base group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:-translate-y-1"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm text-white transition-all duration-300 bg-gray-800 rounded-lg shadow-md sm:w-auto md:px-6 md:py-3 md:text-base group hover:bg-gray-900 hover:shadow-lg hover:-translate-y-1"
                >
                  GitHub
                </a>
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm text-white transition-all duration-300 bg-gray-800 rounded-lg shadow-md sm:w-auto md:px-6 md:py-3 md:text-base group hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1"
                >
                  View More
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 8s ease infinite; }
      `}</style>
    </div>
  );
};

export default WebProjects;
