



import React, { useState } from "react";
import { Apple, Phone, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {

  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// iOS Projects List
const iosProjects = [
  {
    id: 1,
    title: "Smart Task Manager",
    description:
      "A task management iOS app using Swift, MVVM, and Firebase for real-time sync.",
    image:
      "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/ios-task.png?raw=true",
    githubLink: "https://github.com/hasanRafi2002/SmartTaskManager",
    tech: ["Swift", "SwiftUI", "Firebase", "MVVM"],
  },
  {
    id: 2,
    title: "API-Based iOS App",
    description:
      "An iOS application consuming REST APIs with URLSession and async/await.",
    image:
      "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/ios-api.png?raw=true",
    githubLink: "https://github.com/hasanRafi2002/API-iOS-App",
    tech: ["Swift", "URLSession", "JSON", "Async/Await"],
  },
  {
    id: 3,
    title: "Vapor Backend iOS",
    description:
      "RESTful backend built with Vapor and PostgreSQL supporting iOS clients.",
    image:
      "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/ios-vapor.png?raw=true",
    githubLink: "https://github.com/hasanRafi2002/Vapor-iOS-Backend",
    tech: ["Vapor", "PostgreSQL", "Swift", "REST API"],
  },
];

const IOSProjects = () => {
    const navigate = useNavigate();
    
    const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <Apple className="w-6 h-6 text-gray-800 dark:text-white animate-spin-slow" />
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text animate-gradient">
            My iOS Projects
          </h2>
          <Phone className="w-6 h-6 text-teal-500 animate-bounce-slow" />
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Apps built with Swift, SwiftUI, and modern iOS architecture
        </p>

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

      {/* Projects */}
      <div className="space-y-8 md:space-y-24">
        {iosProjects.map((project) => (
          <div
            key={project.id}
            className="relative transition-all duration-500 group"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <div
              className={`relative w-full lg:w-[75%] h-[250px] lg:h-[400px] rounded-xl overflow-hidden p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ${
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
                hoveredId === project.id
                  ? "md:translate-x-4 md:scale-105"
                  : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-transparent md:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center w-full px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900"
                >
                  GitHub
                </a>

                <Link
                  to={`/ios-projects/${project.id}`}
                  className="inline-flex justify-center w-full px-4 py-2 text-white bg-gray-700 rounded-lg hover:bg-gray-600"
                >
                  View Details
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IOSProjects;
