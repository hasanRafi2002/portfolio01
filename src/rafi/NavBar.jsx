



import React, { useState, useEffect } from 'react';
import { 
  Home,
  Book, 
  Briefcase, 
  User, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  X,
  Sun,
  Moon,
  Code,
  Laptop,
  Send
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [activeSection, setActiveSection] = useState('home');

  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  const NavButton = ({ children, onClick, className = '' }) => (
    <button 
      onClick={onClick}
      className={`
        p-2.5 rounded-xl transition-all duration-300
        bg-slate-100/10 hover:bg-slate-200/20 
        dark:bg-gray-800/30 dark:hover:bg-gray-700/50
        shadow-lg hover:shadow-xl
        active:scale-95 backdrop-blur-sm
        ${className}
      `}
    >
      {children}
    </button>
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navLinks = [
    { path: '/#home', label: 'Home', icon: <Home size={20} /> },
    { path: '/#about', label: 'About', icon: <User size={20} /> },
    { path: '/#skills', label: 'Skills', icon: <Code size={20} /> },
    { path: '/#projects', label: 'Projects', icon: <Briefcase size={20} /> },
    { path: '/#work', label: 'Experience', icon: <Laptop size={20} /> },
    { path: '/#education', label: 'Education', icon: <Book size={20} /> },
    { path: '/#blog', label: 'Blog', icon: <FileText size={20} /> },
    { path: '/#contact', label: 'Contact', icon: <Send size={20} /> },
  ];

  const handleNavigation = (path) => {
    setActiveSection(path.slice(2)); // Adjust to slice(2) to handle '/#id'
    const targetSection = document.querySelector(path.slice(1));
    if (targetSection) {
      window.history.pushState(null, '', path);
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = path;
    }
    setIsOpen(false);
  };

  return (
    <div className='fixed top-0 right-0 z-[100] flex flex-col items-center justify-center w-full gap-6 border-lg md:h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-gray-900 dark:to-black md:w-16 border-slate-200 dark:border-gray-800'>
      {/* Top Section */}
      <div className="flex flex-col items-center gap-6 mt-4">
        <NavButton 
          onClick={handleDarkModeToggle}
          className="relative overflow-hidden group"
        >
          {darkMode 
            ? <Sun size={24} className="transition-transform duration-500 text-amber-400 group-hover:rotate-180" /> 
            : <Moon size={24} className="transition-transform duration-500 text-slate-600 group-hover:-rotate-180" />
          }
        </NavButton>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-50 p-2 text-white transition-all duration-300 shadow-lg top-4 right-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
        aria-label="Open Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-72 bg-gradient-to-b from-slate-100/95 to-slate-200/95 dark:from-gray-900/95 dark:to-black/95 backdrop-blur-sm shadow-2xl transform transition-all duration-500 ease-out z-50 
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute p-2 transition-all duration-300 text-slate-600 dark:text-gray-400 rounded-xl hover:text-slate-900 dark:hover:text-white top-4 right-4 hover:bg-slate-200/50 dark:hover:bg-gray-800/50 hover:scale-105"
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col h-full p-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text">
              Menu
            </h2>
            <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          </div>

          {/* navigation links */}
          <nav className="space-y-0">
            {navLinks.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.path)}
                className={`
                  flex items-center gap-4 p-3 transition-all duration-300 rounded-xl group
                  ${activeSection === item.path.slice(2)
                    ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-slate-900 dark:text-white'
                    : 'hover:bg-slate-200/50 dark:hover:bg-gray-800/50 text-slate-600 dark:text-gray-300'
                  }
                `}
              >
                <span className={`
                  p-2 rounded-xl transition-all duration-300
                  ${activeSection === item.path.slice(2)
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                    : 'bg-slate-200/50 dark:bg-gray-800/50 text-indigo-600 dark:text-indigo-400 group-hover:text-purple-600 dark:group-hover:text-purple-400'
                  }
                  group-hover:scale-110
                `}>
                  {item.icon}
                </span>
                <span className="text-sm font-medium transition-colors group-hover:text-slate-900 dark:group-hover:text-white">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="mt-auto">
            <h3 className="mb-6 text-xs font-semibold tracking-wider text-transparent uppercase bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text">
              Connect With Me
            </h3>
            <div className="flex justify-center gap-4">
              {[
                { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/hasanRafi2002" },
                { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/serock01/" },
                { icon: <Twitter size={20} />, label: "Twitter", href: "https://x.com/rafi_hasan_03" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 text-indigo-600 transition-all duration-300 dark:text-indigo-400 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 hover:from-indigo-500/20 hover:to-purple-500/20 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={handleDarkModeToggle}
            className="flex items-center justify-center w-full gap-3 p-3 mt-8 transition-all duration-300 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 hover:from-indigo-500/20 hover:to-purple-500/20 group"
          >
            {darkMode ? (
              <Sun size={20} className="transition-transform duration-500 text-amber-400 group-hover:rotate-180" />
            ) : (
              <Moon size={20} className="transition-transform duration-500 text-slate-600 group-hover:-rotate-180" />
            )}
            <span className="text-sm font-medium text-slate-600 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="flex-col items-center hidden gap-6 mb-6 md:flex">
        {navLinks.map((item, index) => (
          <NavButton
            key={index}
            onClick={(event) => {
              event.preventDefault();
              handleNavigation(item.path);
            }}
            className={`group ${
                activeSection === item.path.slice(2)
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500'
                  : ''
              }`}
            >
              <span className={
                activeSection === item.path.slice(2)
                  ? 'text-white'
                  : 'text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white'
              }>
                {item.icon}
              </span>
          </NavButton>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;