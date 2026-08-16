import React from "react";
import { Laptop, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

const projectCategories = [
  {
    id: "web",
    title: "Web Development (Earlier Work)",
    description: "A collection of full-stack web apps I built with React, Tailwind, Firebase, and MongoDB before moving into iOS development.",
    icon: <Laptop className="w-6 h-6 text-blue-500" />,
    link: "/project/web"
  },
  {
    id: "ios",
    title: "iOS Development (Current Focus)",
    description: "My current work as an iOS Software Engineer — apps built with Swift, SwiftUI, UIKit, and Firebase.",
    icon: <Smartphone className="w-6 h-6 text-teal-500" />,
    link: "/project/ios"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20 p-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text mb-3 animate-gradient">
            My Projects
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            I'm currently focused on iOS development — here's that work, plus earlier web projects I built along the way.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {projectCategories.map((category) => (
            <Card
              key={category.id}
              className="flex flex-col justify-between p-6 transition-all duration-500 rounded-xl hover:scale-105 shadow-lg hover:shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-transparent hover:border-gradient-to-r hover:from-blue-500 hover:to-purple-500"
            >
              <CardHeader className="flex flex-col items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40">
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
                {category.description}
              </CardContent>

              <CardFooter className="flex justify-center">
                <Link
                  to={category.link}
                  className="w-full max-w-sm px-6 py-3 text-center text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transform transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-md"
                >
                  View {category.title.replace(/\s*\(.*\)/, '')} Projects
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
