



import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  ChevronLeft, 
  Globe, 
  Github, 
  Code, 
  Users, 
  Calendar,
  Clock,
  Star,
  MessageCircle
} from 'lucide-react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";

// Enhanced project data
const projects = [
    {
      "id": 1,
      "title": "Dwella",
      "description": "A modern real estate platform that connects buyers, agents, and admins seamlessly.",
      "longDescription": "Dwella revolutionizes the real estate experience by providing a comprehensive platform where buyers can explore properties, agents can manage listings, and administrators can oversee all operations efficiently. The platform features advanced search capabilities, real-time notifications, and interactive virtual tours.",
      "image": "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-12.png?raw=true",
      "screenshots": [
        "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-12.png?raw=true",
        "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-12.png?raw=true",
        "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-12.png?raw=true"
      ],
      "liveLink": "https://rafi-a12.netlify.app/",
      "githubLink": "https://github.com/hasanRafi2002/Dwella",
      "tech": ["React", "Firebase", "Tailwind", "MongoDB", "Express"],
      "features": [
        "Advanced property search and filtering",
        "Real-time chat between buyers and agents",
        "Virtual tour scheduling",
        "Admin dashboard with analytics",
        "Mobile-responsive design"
      ],
      "team": "3 developers",
      "duration": "3 months",
      "status": "Completed",
      "lastUpdate": "2024-01-15",
      "challenges": [
        "Implementing real-time chat functionality with Firebase",
        "Optimizing database queries for faster property searches",
        "Ensuring cross-browser and mobile compatibility"
      ],
      "futureImprovements": [
        "Add AI-powered property recommendations",
        "Integrate a mortgage calculator",
        "Enhance UI/UX with a dark mode feature"
      ]
    },
    {
      "id": 2,
      "title": "FlavorFusion",
      "description": "A restaurant management website for seamless ordering, menu management, and table reservations.",
      "longDescription": "FlavorFusion helps restaurant owners manage their business efficiently with an online ordering system, menu customization, and real-time table booking. It also provides customer analytics and feedback integration.",
      "image": "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-11.png?raw=true",
      "screenshots": [
        "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-11.png?raw=true",
        "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-11.png?raw=true"
      ],
      "liveLink": "https://rafi-a11.netlify.app/",
      "githubLink": "https://github.com/hasanRafi2002/FlavorFusion",
      "tech": ["React", "Firebase", "Tailwind", "MongoDB", "Express"],
      "features": [
        "Real-time table reservation system",
        "Menu customization for restaurant owners",
        "Order tracking for customers",
        "Customer feedback and rating system",
        "Admin dashboard with sales analytics"
      ],
      "team": "2 developers",
      "duration": "2.5 months",
      "status": "Completed",
      "lastUpdate": "2023-12-10",
      "challenges": [
        "Integrating a real-time reservation system",
        "Handling concurrent orders without database conflicts",
        "Optimizing UI for both customers and restaurant admins"
      ],
      "futureImprovements": [
        "Implement AI-powered menu suggestions",
        "Introduce multi-language support",
        "Enhance performance for large-scale restaurants"
      ]
    },
    {
      "id": 3,
      "title": "EquiSports",
      "description": "An e-commerce platform for browsing, purchasing, and reviewing sports equipment.",
      "longDescription": "EquiSports is a responsive e-commerce website tailored for sports enthusiasts, offering a variety of sports gear and accessories. Users can browse products, leave reviews, and make purchases securely.",
      "image": "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-10.png?raw=true",
      "screenshots": [
        "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-10.png?raw=true",
        "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-10.png?raw=true"
      ],
      "liveLink": "https://rafi-a10.netlify.app/",
      "githubLink": "https://github.com/hasanRafi2002/EquiSports",
      "tech": ["React", "Firebase", "Tailwind", "MongoDB", "Express"],
      "features": [
        "Product search and category filtering",
        "Secure checkout and payment integration",
        "User reviews and ratings",
        "Wishlist and cart management",
        "Admin dashboard for inventory control"
      ],
      "team": "3 developers",
      "duration": "4 months",
      "status": "In Progress",
      "lastUpdate": "2024-02-01",
      "challenges": [
        "Ensuring secure payment gateway integration",
        "Optimizing product filtering and sorting",
        "Implementing a seamless checkout experience"
      ],
      "futureImprovements": [
        "Introduce AI-based personalized product recommendations",
        "Add support for multiple payment methods",
        "Enhance mobile app integration"
      ]
    },
    {
      "id": 4,
      "title": "Gadget Heaven",
      "description": "A premium e-commerce platform for browsing and purchasing the latest gadgets and electronics.",
      "longDescription": "Gadget Heaven is a modern e-commerce website for premium electronics. Users can browse new arrivals, read product specifications, and securely purchase high-end gadgets.",
      "image": "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-8.png?raw=true",
      "screenshots": [
        "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-8.png?raw=true",
        "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-8.png?raw=true"
      ],
      "liveLink": "https://rafi-a10.netlify.app/",
      "githubLink": "https://github.com/hasanRafi2002/GadgetHeaven",
      "tech": ["React", "Firebase", "Tailwind", "MongoDB", "Express"],
      "features": [
        "Detailed product pages with specifications",
        "AI-powered product recommendations",
        "Secure payment integration",
        "Cart and wishlist functionality",
        "User reviews and ratings"
      ],
      "team": "4 developers",
      "duration": "5 months",
      "status": "Completed",
      "lastUpdate": "2023-11-20",
      "challenges": [
        "Optimizing database performance for large inventory",
        "Ensuring smooth user experience on mobile devices",
        "Implementing AI-powered recommendations"
      ],
      "futureImprovements": [
        "Add live chat support for customer queries",
        "Expand product categories to include more electronics",
        "Enhance AR-based product visualization"
      ]
    }
  ]
  

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800">Project Not Found</h1>
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
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'technical', label: 'Technical Details' },
  ];

  return (
    <div className="min-h-screen mt-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 md:mt-0">
      <div className="container px-4 py-8 mx-auto max-w-7xl">
        {/* Back Navigation */}
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



        {/* Project Header */}
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
          <img
            src={project.screenshots[currentImageIndex]}
            alt={project.title}
            className="object-cover w-full h-64 md:h-96"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-gray-200">{project.description}</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mt-8 lg:grid-cols-4">
          <Card className="p-4 transition-transform hover:scale-105">
            <CardContent className="flex items-center gap-3">
              <Users className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Team Size</p>
                <p className="font-semibold">{project.team}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="p-4 transition-transform hover:scale-105">
            <CardContent className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-semibold">{project.duration}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="p-4 transition-transform hover:scale-105">
            <CardContent className="flex items-center gap-3">
              <Star className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-semibold">{project.status}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="p-4 transition-transform hover:scale-105">
            <CardContent className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Last Update</p>
                <p className="font-semibold">{new Date(project.lastUpdate).toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Navigation */}
        <div className="flex gap-4 mt-8 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 -mb-px transition-colors ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Project Overview</h2>
                <p className="text-gray-600 dark:text-gray-300">{project.longDescription}</p>
              </div>
              
              <div>
                <h3 className="mb-4 text-xl font-semibold">Screenshots</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {project.screenshots.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      className="object-cover w-full h-48 transition-transform rounded-lg cursor-pointer hover:scale-105"
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="animate-fade-in">
              <h2 className="mb-6 text-2xl font-bold">Key Features</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {project.features.map((feature, index) => (
                  <Card key={index} className="p-4 transition-transform hover:scale-105">
                    <CardContent className="flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 mt-1 text-blue-500 shrink-0" />
                      <p className="text-gray-600 dark:text-gray-300">{feature}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 mt-8 sm:flex-row">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white transition-all rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:scale-105"
          >
            <Globe className="w-5 h-5" />
            <span>Visit Live Site</span>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white transition-all bg-gray-800 rounded-lg hover:bg-gray-900 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span>View Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;