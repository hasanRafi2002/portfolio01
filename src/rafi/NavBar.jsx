



// import React, { useState, useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import {
//   Home,
//   Book,
//   Briefcase,
//   User,
//   FileText,
//   Github,
//   Linkedin,
//   Twitter,
//   X,
//   Sun,
//   Moon,
//   Code,
//   Laptop,
//   Send,
//   Menu,
// } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem('theme') === 'dark';
//   });

//   const [activeSection, setActiveSection] = useState('home');

//   // --------------------------------------------------
//   // THEME
//   // --------------------------------------------------

//   const applyTheme = (isDark) => {
//     document.documentElement.classList.toggle('light', !isDark);

//     localStorage.setItem(
//       'theme',
//       isDark ? 'dark' : 'light'
//     );
//   };

//   const handleDarkModeToggle = () => {
//     setDarkMode((prev) => {
//       const next = !prev;
//       applyTheme(next);
//       return next;
//     });
//   };

//   useEffect(() => {
//     applyTheme(darkMode);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // --------------------------------------------------
//   // NAVIGATION LINKS
//   // --------------------------------------------------

//   const navLinks = [
//     {
//       path: '/#home',
//       label: 'Home',
//       icon: <Home size={20} />,
//     },
//     {
//       path: '/#about',
//       label: 'About',
//       icon: <User size={20} />,
//     },
//     {
//       path: '/#skills',
//       label: 'Skills',
//       icon: <Code size={20} />,
//     },
//     {
//       path: '/#projects',
//       label: 'Projects',
//       icon: <Briefcase size={20} />,
//     },
//     {
//       path: '/#work',
//       label: 'Experience',
//       icon: <Laptop size={20} />,
//     },
//     {
//       path: '/#education',
//       label: 'Education',
//       icon: <Book size={20} />,
//     },
//     {
//       path: '/#blog',
//       label: 'Blog',
//       icon: <FileText size={20} />,
//     },
//     {
//       path: '/#contact',
//       label: 'Contact',
//       icon: <Send size={20} />,
//     },
//   ];

//   // --------------------------------------------------
//   // SOCIAL LINKS
//   // --------------------------------------------------

//   const socials = [
//     {
//       icon: <Github size={20} />,
//       label: 'GitHub',
//       href: 'https://github.com/hasanRafi2002',
//     },
//     {
//       icon: <Linkedin size={20} />,
//       label: 'LinkedIn',
//       href: 'https://www.linkedin.com/in/serock01/',
//     },
//     {
//       icon: <Twitter size={20} />,
//       label: 'Twitter',
//       href: 'https://x.com/rafi_hasan_03',
//     },
//   ];

//   // --------------------------------------------------
//   // NAVIGATION HANDLER
//   // --------------------------------------------------

//   const handleNavigation = (path) => {
//     const sectionId = path.slice(2);

//     setActiveSection(sectionId);

//     const targetSection = document.querySelector(
//       path.slice(1)
//     );

//     if (targetSection) {
//       window.history.pushState(null, '', path);

//       targetSection.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });
//     } else {
//       window.location.href = path;
//     }

//     setIsOpen(false);
//   };

//   // --------------------------------------------------
//   // COMPONENT
//   // --------------------------------------------------

//   return createPortal(
//     <>
//       {/* ==================================================
//           DESKTOP NAVIGATION
//           RIGHT SIDE VERTICAL RAIL
//           ================================================== */}

//       <nav
//         className="
//           hidden
//           md:flex
//           glass-nav
//           fixed
//           top-0
//           right-0
//           z-[100]
//           flex-col
//           items-center
//           justify-center
//           w-16
//           h-screen
//           gap-6
//           border-l
//           border-[var(--border)]
//         "
//       >
//         {/* Desktop Theme Toggle */}

//         <button
//           onClick={handleDarkModeToggle}
//           className="
//             glass
//             glass-hover
//             relative
//             p-2.5
//             rounded-xl
//             transition-all
//             duration-300
//             active:scale-95
//             group
//             overflow-hidden
//           "
//           aria-label="Toggle theme"
//         >
//           {darkMode ? (
//             <Sun
//               size={22}
//               className="
//                 transition-transform
//                 duration-500
//                 text-omni
//                 group-hover:rotate-180
//               "
//             />
//           ) : (
//             <Moon
//               size={22}
//               className="
//                 transition-transform
//                 duration-500
//                 text-omni/70
//                 group-hover:-rotate-180
//               "
//             />
//           )}
//         </button>

//         {/* Desktop Navigation Links */}

//         <div className="flex flex-col items-center gap-6">
//           {navLinks.map((item, index) => {
//             const active =
//               activeSection === item.path.slice(2);

//             return (
//               <button
//                 key={index}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavigation(item.path);
//                 }}
//                 className={`
//                   glass
//                   glass-hover
//                   relative
//                   p-2.5
//                   rounded-xl
//                   transition-all
//                   duration-300
//                   active:scale-95
//                   ${
//                     active
//                       ? '!border-omni shadow-glow'
//                       : ''
//                   }
//                 `}
//                 style={
//                   active
//                     ? {
//                         background:
//                           'linear-gradient(120deg, color-mix(in srgb, var(--accent) 18%, transparent), color-mix(in srgb, var(--accent-secondary) 14%, transparent))',
//                       }
//                     : {}
//                 }
//                 aria-label={item.label}
//               >
//                 <span
//                   style={{
//                     color: active
//                       ? 'var(--accent)'
//                       : 'var(--text-secondary)',
//                   }}
//                 >
//                   {item.icon}
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//       </nav>

//       {/* ==================================================
//           MOBILE THEME TOGGLE
//           TOP LEFT
//           ================================================== */}

//       <button
//         onClick={handleDarkModeToggle}
//         className="
//           md:hidden
//           p-2.5
//           rounded-xl
//           glass
//           text-omni
//           shadow-glow
//         "
//         aria-label="Toggle theme"
//         style={{
//           position: 'fixed',
//           top: '16px',
//           left: '16px',
//           zIndex: 9999,
//         }}
//       >
//         {darkMode ? (
//           <Sun size={20} />
//         ) : (
//           <Moon size={20} />
//         )}
//       </button>

//       {/* ==================================================
//           MOBILE HAMBURGER
//           TOP RIGHT
//           ================================================== */}

//       <button
//         onClick={() => setIsOpen(true)}
//         className="
//           md:hidden
//           p-2.5
//           rounded-xl
//           glass
//           text-omni
//           shadow-glow
//         "
//         aria-label="Open Menu"
//         style={{
//           position: 'fixed',
//           top: '16px',
//           right: '16px',
//           zIndex: 9999,
//         }}
//       >
//         <Menu size={20} />
//       </button>

//       {/* ==================================================
//           MOBILE FULL SCREEN MENU
//           ================================================== */}

//       <div
//         className={`
//           md:hidden
//           fixed
//           inset-0
//           transition-opacity
//           duration-300
//           ${
//             isOpen
//               ? 'opacity-100 pointer-events-auto'
//               : 'opacity-0 pointer-events-none'
//           }
//         `}
//         style={{
//           backgroundColor: 'var(--bg-primary)',
//           zIndex: 10000,
//         }}
//       >
//         {/* Background Grid */}

//         <div
//           className="
//             grid-bg
//             absolute
//             inset-0
//             opacity-60
//           "
//         />

//         {/* Menu Content */}

//         <div
//           className="
//             relative
//             flex
//             flex-col
//             h-full
//             p-8
//             overflow-y-auto
//           "
//         >
//           {/* Menu Header */}

//           <div className="flex items-center justify-between">
//             <h2
//               className="
//                 text-2xl
//                 font-display
//                 font-bold
//                 text-gradient-brand
//                 tracking-wider
//               "
//             >
//               MENU
//             </h2>

//             <button
//               onClick={() => setIsOpen(false)}
//               className="
//                 p-2
//                 rounded-xl
//                 glass
//                 text-omni
//               "
//               aria-label="Close Menu"
//             >
//               <X size={22} />
//             </button>
//           </div>

//           {/* Header Line */}

//           <div
//             className="
//               w-24
//               h-[2px]
//               mt-4
//               bg-gradient-to-r
//               from-transparent
//               via-omni
//               to-transparent
//               shadow-glow
//             "
//           />

//           {/* Navigation */}

//           <nav className="mt-10 space-y-2">
//             {navLinks.map((item, index) => {
//               const active =
//                 activeSection === item.path.slice(2);

//               return (
//                 <button
//                   key={index}
//                   onClick={() =>
//                     handleNavigation(item.path)
//                   }
//                   className={`
//                     flex
//                     items-center
//                     gap-4
//                     p-3
//                     w-full
//                     text-left
//                     rounded-lg
//                     border
//                     transition-all
//                     duration-300
//                     ${
//                       active
//                         ? 'text-omni border-omni/50 shadow-glow-sm'
//                         : 'border-transparent hover:border-omni/25'
//                     }
//                   `}
//                   style={{
//                     color: active
//                       ? 'var(--accent)'
//                       : 'var(--text-secondary)',

//                     background: active
//                       ? 'linear-gradient(120deg, color-mix(in srgb, var(--accent) 16%, transparent), color-mix(in srgb, var(--accent-secondary) 12%, transparent))'
//                       : 'transparent',
//                   }}
//                 >
//                   {/* Icon */}

//                   <span
//                     className={`
//                       p-2
//                       rounded-lg
//                       ${
//                         active
//                           ? 'bg-omni text-black'
//                           : 'glass'
//                       }
//                     `}
//                   >
//                     {item.icon}
//                   </span>

//                   {/* Label */}

//                   <span
//                     className="
//                       text-sm
//                       font-semibold
//                       tracking-wide
//                       font-display
//                     "
//                   >
//                     {item.label}
//                   </span>
//                 </button>
//               );
//             })}
//           </nav>

//           {/* ==================================================
//               SOCIAL LINKS
//               ================================================== */}

//           <div className="mt-auto pt-8">
//             <h3
//               className="
//                 mb-4
//                 text-xs
//                 font-display
//                 font-semibold
//                 tracking-[0.2em]
//                 uppercase
//                 text-omni/70
//               "
//             >
//               Connect
//             </h3>

//             <div className="flex justify-center gap-4">
//               {socials.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//                     p-3
//                     rounded-lg
//                     glass
//                     glass-hover
//                     text-omni/80
//                     hover:text-omni
//                   "
//                   aria-label={social.label}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>,
//     document.body
//   );
// };

// export default Navbar;






import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Home,
  Book,
  Briefcase,
  User,
  FileText,
  Github,
  Linkedin,
  Twitter,
  X,
  Sun,
  Moon,
  Code,
  Laptop,
  Send,
  Menu,
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [activeSection, setActiveSection] = useState('home');

  // ==================================================
  // THEME
  // ==================================================

  const applyTheme = (isDark) => {
    document.documentElement.classList.toggle('light', !isDark);

    localStorage.setItem(
      'theme',
      isDark ? 'dark' : 'light'
    );
  };

  const handleDarkModeToggle = () => {
    setDarkMode((prev) => {
      const next = !prev;
      applyTheme(next);
      return next;
    });
  };

  useEffect(() => {
    applyTheme(darkMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ==================================================
  // NAVIGATION LINKS
  // ==================================================

  const navLinks = [
    {
      path: '/#home',
      label: 'Home',
      icon: <Home size={20} />,
    },
    {
      path: '/#about',
      label: 'About',
      icon: <User size={20} />,
    },
    {
      path: '/#skills',
      label: 'Skills',
      icon: <Code size={20} />,
    },
    {
      path: '/#projects',
      label: 'Projects',
      icon: <Briefcase size={20} />,
    },
    {
      path: '/#work',
      label: 'Experience',
      icon: <Laptop size={20} />,
    },
    {
      path: '/#education',
      label: 'Education',
      icon: <Book size={20} />,
    },
    {
      path: '/#blog',
      label: 'Blog',
      icon: <FileText size={20} />,
    },
    {
      path: '/#contact',
      label: 'Contact',
      icon: <Send size={20} />,
    },
  ];

  // ==================================================
  // SOCIAL LINKS
  // ==================================================

  const socials = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: 'https://github.com/hasanRafi2002',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/serock01/',
    },
    {
      icon: <Twitter size={20} />,
      label: 'Twitter',
      href: 'https://x.com/rafi_hasan_03',
    },
  ];

  // ==================================================
  // ACTIVE SECTION WHILE SCROLLING
  // ==================================================

  useEffect(() => {
    const sectionIds = navLinks.map((item) =>
      item.path.replace('/#', '')
    );

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = 'home';

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY;

        if (scrollPosition >= sectionTop) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    // Run immediately when page loads
    updateActiveSection();

    // Update while scrolling
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );

      window.removeEventListener(
        'resize',
        updateActiveSection
      );
    };
  }, []);

  // ==================================================
  // HANDLE URL HASH ON INITIAL LOAD
  // ==================================================

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const sectionId = hash.replace('#', '');

      const exists =
        document.getElementById(sectionId);

      if (exists) {
        setActiveSection(sectionId);
      }
    }
  }, []);

  // ==================================================
  // NAVIGATION HANDLER
  // ==================================================

  const handleNavigation = (path) => {
    const sectionId = path.replace('/#', '');

    setActiveSection(sectionId);
    setIsOpen(false);

    const targetSection =
      document.getElementById(sectionId);

    if (targetSection) {
      window.history.pushState(
        null,
        '',
        `/#${sectionId}`
      );

      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      window.location.href = path;
    }
  };

  // ==================================================
  // NAV BUTTON STYLE
  // ==================================================

  const getButtonStyle = (active = false) => {
    if (darkMode) {
      return {
        background: active
          ? 'linear-gradient(135deg, rgba(0, 255, 180, 0.18), rgba(0, 200, 170, 0.12))'
          : 'rgba(10, 25, 25, 0.78)',

        borderColor: active
          ? 'rgba(0, 255, 180, 0.75)'
          : 'rgba(0, 255, 180, 0.20)',

        boxShadow: active
          ? '0 0 18px rgba(0, 255, 180, 0.25)'
          : '0 4px 15px rgba(0, 0, 0, 0.20)',
      };
    }

    // LIGHT MODE
    return {
      background: active
        ? 'linear-gradient(135deg, rgba(0, 150, 125, 0.16), rgba(0, 180, 150, 0.10))'
        : 'rgba(255, 255, 255, 0.92)',

      borderColor: active
        ? 'rgba(0, 130, 110, 0.75)'
        : 'rgba(60, 120, 115, 0.28)',

      boxShadow: active
        ? '0 0 18px rgba(0, 150, 125, 0.22)'
        : '0 4px 16px rgba(40, 90, 85, 0.12)',
    };
  };

  // ==================================================
  // COMPONENT
  // ==================================================

  return createPortal(
    <>
      {/* ==================================================
          DESKTOP NAVIGATION
          ================================================== */}

      <nav
        className="
          hidden
          md:flex
          fixed
          top-0
          right-0
          z-[100]
          flex-col
          items-center
          justify-center
          w-16
          h-screen
          gap-6
          border-l
        "
        style={{
          background: darkMode
            ? 'rgba(5, 15, 15, 0.82)'
            : 'rgba(245, 252, 250, 0.92)',

          borderColor: darkMode
            ? 'rgba(0, 255, 180, 0.18)'
            : 'rgba(50, 110, 105, 0.20)',

          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
        }}
      >
        {/* Desktop Theme Toggle */}

        <button
          onClick={handleDarkModeToggle}
          className="
            relative
            p-2.5
            rounded-xl
            border
            transition-all
            duration-300
            active:scale-95
          "
          aria-label="Toggle theme"
          style={getButtonStyle(false)}
        >
          {darkMode ? (
            <Sun
              size={22}
              style={{
                color: '#00ffb3',
              }}
            />
          ) : (
            <Moon
              size={22}
              style={{
                color: '#356b66',
              }}
            />
          )}
        </button>

        {/* Desktop Navigation Links */}

        <div className="flex flex-col items-center gap-6">
          {navLinks.map((item, index) => {
            const sectionId =
              item.path.replace('/#', '');

            const active =
              activeSection === sectionId;

            return (
              <button
                key={index}
                onClick={() =>
                  handleNavigation(item.path)
                }
                className="
                  relative
                  p-2.5
                  rounded-xl
                  border
                  transition-all
                  duration-300
                  active:scale-95
                "
                aria-label={item.label}
                title={item.label}
                style={getButtonStyle(active)}
              >
                <span
                  style={{
                    color: darkMode
                      ? active
                        ? '#00ffb3'
                        : '#9bbab5'
                      : active
                        ? '#008f78'
                        : '#356b66',
                  }}
                >
                  {item.icon}
                </span>

                {/* Active indicator */}

                {active && (
                  <span
                    className="
                      absolute
                      right-[-3px]
                      top-1/2
                      -translate-y-1/2
                      w-[3px]
                      h-6
                      rounded-full
                    "
                    style={{
                      background: darkMode
                        ? '#00ffb3'
                        : '#008f78',

                      boxShadow: darkMode
                        ? '0 0 10px #00ffb3'
                        : '0 0 8px rgba(0, 143, 120, 0.45)',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ==================================================
          MOBILE THEME TOGGLE
          TOP LEFT
          ================================================== */}

      <button
        onClick={handleDarkModeToggle}
        className="
          md:hidden
          p-2.5
          rounded-xl
          border
          transition-all
          duration-300
          active:scale-95
        "
        aria-label="Toggle theme"
        style={{
          position: 'fixed',
          top: '16px',
          left: '16px',
          zIndex: 9999,
          ...getButtonStyle(false),
        }}
      >
        {darkMode ? (
          <Sun
            size={20}
            style={{
              color: '#00ffb3',
            }}
          />
        ) : (
          <Moon
            size={20}
            style={{
              color: '#356b66',
            }}
          />
        )}
      </button>

      {/* ==================================================
          MOBILE HAMBURGER
          TOP RIGHT
          ================================================== */}

      <button
        onClick={() => setIsOpen(true)}
        className="
          md:hidden
          p-2.5
          rounded-xl
          border
          transition-all
          duration-300
          active:scale-95
        "
        aria-label="Open Menu"
        style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 9999,
          ...getButtonStyle(false),
        }}
      >
        <Menu
          size={20}
          style={{
            color: darkMode
              ? '#00ffb3'
              : '#356b66',
          }}
        />
      </button>

      {/* ==================================================
          MOBILE FULL SCREEN MENU
          ================================================== */}

      <div
        className={`
          md:hidden
          fixed
          inset-0
          transition-opacity
          duration-300
          ${
            isOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }
        `}
        style={{
          backgroundColor: darkMode
            ? '#061111'
            : '#f4fbf9',

          zIndex: 10000,
        }}
      >
        {/* Background Grid */}

        <div
          className="
            grid-bg
            absolute
            inset-0
            opacity-60
          "
        />

        {/* Menu Content */}

        <div
          className="
            relative
            flex
            flex-col
            h-full
            p-8
            overflow-y-auto
          "
        >
          {/* Header */}

          <div className="flex items-center justify-between">
            <h2
              className="
                text-2xl
                font-display
                font-bold
                text-gradient-brand
                tracking-wider
              "
            >
              MENU
            </h2>

            <button
              onClick={() => setIsOpen(false)}
              className="
                p-2
                rounded-xl
                border
              "
              style={getButtonStyle(false)}
              aria-label="Close Menu"
            >
              <X
                size={22}
                style={{
                  color: darkMode
                    ? '#00ffb3'
                    : '#356b66',
                }}
              />
            </button>
          </div>

          {/* Header Line */}

          <div
            className="
              w-24
              h-[2px]
              mt-4
              bg-gradient-to-r
              from-transparent
              via-omni
              to-transparent
              shadow-glow
            "
          />

          {/* Mobile Navigation */}

          <nav className="mt-10 space-y-2">
            {navLinks.map((item, index) => {
              const sectionId =
                item.path.replace('/#', '');

              const active =
                activeSection === sectionId;

              return (
                <button
                  key={index}
                  onClick={() =>
                    handleNavigation(item.path)
                  }
                  className="
                    flex
                    items-center
                    gap-4
                    p-3
                    w-full
                    text-left
                    rounded-lg
                    border
                    transition-all
                    duration-300
                  "
                  style={{
                    color: active
                      ? darkMode
                        ? '#00ffb3'
                        : '#008f78'
                      : darkMode
                        ? '#9bbab5'
                        : '#356b66',

                    background: active
                      ? darkMode
                        ? 'rgba(0, 255, 180, 0.10)'
                        : 'rgba(0, 150, 125, 0.10)'
                      : 'transparent',

                    borderColor: active
                      ? darkMode
                        ? 'rgba(0, 255, 180, 0.45)'
                        : 'rgba(0, 130, 110, 0.40)'
                      : 'transparent',
                  }}
                >
                  {/* Icon */}

                  <span
                    className="
                      p-2
                      rounded-lg
                    "
                    style={{
                      background: active
                        ? darkMode
                          ? '#00ffb3'
                          : '#008f78'
                        : darkMode
                          ? 'rgba(255,255,255,0.06)'
                          : 'rgba(50,100,95,0.08)',

                      color: active
                        ? '#061111'
                        : darkMode
                          ? '#9bbab5'
                          : '#356b66',
                    }}
                  >
                    {item.icon}
                  </span>

                  {/* Label */}

                  <span
                    className="
                      text-sm
                      font-semibold
                      tracking-wide
                      font-display
                    "
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* ==================================================
              SOCIAL LINKS
              ================================================== */}

          <div className="mt-auto pt-8">
            <h3
              className="
                mb-4
                text-xs
                font-display
                font-semibold
                tracking-[0.2em]
                uppercase
              "
              style={{
                color: darkMode
                  ? 'rgba(0,255,180,0.70)'
                  : 'rgba(0,120,105,0.70)',
              }}
            >
              Connect
            </h3>

            <div className="flex justify-center gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-3
                    rounded-lg
                    border
                    transition-all
                    duration-300
                  "
                  aria-label={social.label}
                  style={getButtonStyle(false)}
                >
                  <span
                    style={{
                      color: darkMode
                        ? '#00ffb3'
                        : '#356b66',
                    }}
                  >
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Navbar;