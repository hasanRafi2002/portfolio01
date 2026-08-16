



// import React from "react";

// const AnimatedAboutMe = () => {
//   const skills = [
//     "JavaScript (ES6+)",
//     "TypeScript",
//     "React.js",
//     "Next.js",
//     "Node.js",
//     "Express.js",
//     "MongoDB",
//     "Tailwind CSS",
//   ];

//   return (
//     <section className="relative py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute bg-purple-200 rounded-full w-96 h-96 -top-48 -left-48 dark:bg-purple-900/20 blur-3xl opacity-30"></div>
//         <div className="absolute bg-blue-200 rounded-full w-96 h-96 -bottom-48 -right-48 dark:bg-blue-900/20 blur-3xl opacity-30"></div>
//       </div>

//       <div className="container relative px-6 mx-auto lg:px-8">
//         <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-5">
//           {/* Left: Content */}
//           <div className="space-y-8 lg:col-span-3">
//             <div className="space-y-2">
//               <h2 className="flex items-center gap-3 text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text">
//                 <img
//                   className="w-10 h-10"
//                   src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Light%20Skin%20Tone.png"
//                   alt="Technologist"
//                 />
//                 About Me
//               </h2>
//               <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
//             </div>

//             <div className="space-y-6">
//               <p className="leading-relaxed text-gray-700 transition-transform duration-300 transform dark:text-gray-300 hover:translate-x-2">
//                 I'm a passionate <span className="font-semibold text-purple-600 dark:text-purple-400">MERN Stack Developer</span> and <span className="font-semibold text-blue-600 dark:text-blue-400">Software Engineering student</span> at
//                 Daffodil International University. I specialize in building scalable web applications
//                 using <span className="font-semibold text-indigo-600 dark:text-indigo-400">React.js, Next.js, Node.js, Express, and MongoDB</span>.
//               </p>

//               <p className="leading-relaxed text-gray-700 transition-transform duration-300 transform dark:text-gray-300 hover:translate-x-2">
//                 My expertise extends to <span className="font-semibold text-teal-600 dark:text-teal-400">backend optimization, DevOps, AWS, Docker, and UI/UX
//                 design</span>. I love problem-solving and writing clean, maintainable code.
//               </p>
//             </div>

//             {/* Skills Section */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text">
//                 Technologies I Work With
//               </h3>
//               <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
//                 {skills.map((skill, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center gap-2 p-3 transition-all duration-300 transform border border-gray-100 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm dark:border-gray-700 hover:scale-105 hover:shadow-lg"
//                   >
//                     <span className="text-lg text-green-500">▹</span>
//                     <span className="font-mono text-sm text-gray-700 dark:text-gray-300">{skill}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Right: Profile Image */}
//           <div className="lg:col-span-2">
//             <div className="relative group">
//               {/* Animated background */}
//               <div className="absolute transition duration-1000 rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200" />
              
//               {/* Profile container */}
//               <div className="relative p-8 bg-white rounded-lg dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700">
//                 <img
//                   src="https://avatars.githubusercontent.com/u/173989431?v=4"
//                   alt="Profile"
//                   className="w-56 h-56 mx-auto transition-all duration-500 transform rounded-full ring-4 ring-purple-500 dark:ring-purple-400 group-hover:scale-105"
//                 />
                
//                 {/* Decorative elements */}
//                 <div className="absolute w-20 h-20 bg-blue-200 rounded-full -top-4 -right-4 dark:bg-blue-900/30 blur-xl"></div>
//                 <div className="absolute w-20 h-20 bg-purple-200 rounded-full -bottom-4 -left-4 dark:bg-purple-900/30 blur-xl"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AnimatedAboutMe;







import React from "react";

const AnimatedAboutMe = () => {
  const skills = [
    "Swift (iOS)",
    "UIKit / SwiftUI",
    "MVVM Architecture",
    "Firebase (Auth, Firestore)",
    "REST APIs & URLSession",
    "Swift Concurrency (async/await)",
    "PostgreSQL",
    "Vapor (Swift Backend)"
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bg-purple-200 rounded-full w-96 h-96 -top-48 -left-48 dark:bg-purple-900/20 blur-3xl opacity-30"></div>
        <div className="absolute bg-blue-200 rounded-full w-96 h-96 -bottom-48 -right-48 dark:bg-blue-900/20 blur-3xl opacity-30"></div>
      </div>

      <div className="container relative px-6 mx-auto lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Left: Content */}
          <div className="space-y-8 lg:col-span-3">
            <div className="space-y-2">
              <h2 className="flex items-center gap-3 text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text">
                <img
                  className="w-10 h-10"
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Light%20Skin%20Tone.png"
                  alt="Technologist"
                />
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </div>

            <div className="space-y-6">
              <p className="leading-relaxed text-gray-700 transition-transform duration-300 transform dark:text-gray-300 hover:translate-x-2">
                I'm a passionate <span className="font-semibold text-purple-600 dark:text-purple-400">iOS Software Engineer</span> and <span className="font-semibold text-blue-600 dark:text-blue-400">Software Engineering student</span> at Daffodil International University. 
                I build performant iOS applications using <span className="font-semibold text-indigo-600 dark:text-indigo-400">Swift, UIKit/SwiftUI, MVVM, and Firebase</span>.
              </p>

              <p className="leading-relaxed text-gray-700 transition-transform duration-300 transform dark:text-gray-300 hover:translate-x-2">
                My expertise also includes <span className="font-semibold text-teal-600 dark:text-teal-400">Swift Concurrency, REST APIs, local data persistence, and Swift backend with Vapor</span>. 
                I enjoy solving algorithmic problems, writing clean, maintainable code, and creating scalable iOS solutions.
              </p>
            </div>

            {/* Skills Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text">
                iOS Technologies & Tools
              </h3>
              <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 p-3 transition-all duration-300 transform border border-gray-100 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm dark:border-gray-700 hover:scale-105 hover:shadow-lg"
                  >
                    <span className="text-lg text-green-500">▹</span>
                    <span className="font-mono text-sm text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="lg:col-span-2">
            <div className="relative group">
              {/* Animated background */}
              <div className="absolute transition duration-1000 rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200" />
              
              {/* Profile container */}
              <div className="relative p-8 bg-white rounded-lg dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700">
                <img
                  src="https://avatars.githubusercontent.com/u/173989431?v=4"
                  alt="Profile"
                  className="w-56 h-56 mx-auto transition-all duration-500 transform rounded-full ring-4 ring-purple-500 dark:ring-purple-400 group-hover:scale-105"
                />
                
                {/* Decorative elements */}
                <div className="absolute w-20 h-20 bg-blue-200 rounded-full -top-4 -right-4 dark:bg-blue-900/30 blur-xl"></div>
                <div className="absolute w-20 h-20 bg-purple-200 rounded-full -bottom-4 -left-4 dark:bg-purple-900/30 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedAboutMe;
