// import React, { useState } from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import Modal from './Modal';

// const posts = [
//   {
//     title: "Exploring React.js",
//     date: "2025-01-15",
//     excerpt: "React.js is a powerful JavaScript library for building dynamic user interfaces. In this post, we explore its core concepts and best practices...",
//     content: "React.js is a powerful JavaScript library for building dynamic user interfaces. In this post, we explore its core concepts and best practices. We'll cover components, state management, hooks, and more. React.js allows developers to create large web applications that can update and render efficiently in response to data changes. By using React.js, you can ensure that your application is scalable, maintainable, and performant."
//   },
//   {
//     title: "Getting Started with Next.js",
//     date: "2025-01-25",
//     excerpt: "Next.js offers a great developer experience with features like server-side rendering and static site generation. Learn how to get started with Next.js...",
//     content: "Next.js offers a great developer experience with features like server-side rendering and static site generation. Learn how to get started with Next.js in this comprehensive guide. We'll cover setting up a new project, creating pages and components, fetching data, and deploying your application. Next.js makes it easy to build fast, SEO-friendly websites with React, and it's a powerful tool for any developer's toolkit."
//   },
//   {
//     title: "JavaScript Tips and Tricks",
//     date: "2025-02-01",
//     excerpt: "Enhance your JavaScript skills with these useful tips and tricks. From ES6 features to debugging techniques, we've got you covered...",
//     content: "Enhance your JavaScript skills with these useful tips and tricks. From ES6 features to debugging techniques, we've got you covered. In this post, we'll share some of our favorite JavaScript tips and tricks that can help you write cleaner, more efficient code. Whether you're a beginner or an experienced developer, you'll find something useful in this list."
//   }
// ];

// const PostCard = ({ title, date, excerpt, content }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <Card className="w-full transition-all duration-300 border-0 shadow-lg backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 hover:shadow-xl">
//         <CardHeader className="border-b border-gray-100 dark:border-gray-700">
//           <CardTitle className="text-xl font-bold text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text">
//             {title}
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-6">
//           <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">{date}</div>
//           <p className="mb-4 text-gray-700 dark:text-gray-300">{excerpt}</p>
//           <button
//             onClick={openModal}
//             className="text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-600"
//           >
//             Read more
//           </button>
//         </CardContent>
//       </Card>
//       {isModalOpen && (
//         <Modal onClose={closeModal}>
//           <div className="p-6">
//             <h2 className="mb-4 text-2xl font-bold text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text">
//               {title}
//             </h2>
//             <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">{date}</div>
//             <p className="text-gray-700 dark:text-gray-300">{content}</p>
//           </div>
//         </Modal>
//       )}
//     </>
//   );
// };

// const Blog = () => {
//   return (
//     <div className="relative min-h-screen p-6 transition-colors duration-500 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
//       <div className="relative max-w-6xl mx-auto ">
//         <div className="mb-12 text-center">
//           <h1 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text animate-gradient">
//             <span className="inline-block mr-2 align-middle">📝</span> 
//             My Blog
//           </h1>
//           <p className="text-gray-600 dark:text-gray-300">
//             Sharing my knowledge and experiences in web development
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {posts.map((post, idx) => (
//             <PostCard
//               key={idx}
//               title={post.title}
//               date={post.date}
//               excerpt={post.excerpt}
//               content={post.content}
//             />
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gradientMove {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         .animate-gradient {
//           background-size: 200% auto;
//           animation: gradientMove 8s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Blog;








import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Modal from './Modal';

const posts = [
  {
    title: "Smart Task Management App (iOS)",
    date: "2025-03-10",
    excerpt: "Built a Swift iOS app with MVVM architecture, Firebase integration, and real-time task sync.",
    content: "Developed a full-featured task management iOS application using Swift and MVVM. Integrated Firebase Authentication and Firestore for cloud data storage. Implemented real-time task creation, updates, and deletions. Ensured smooth UX, responsive UI, and maintainable architecture for scalable development."
  },
  {
    title: "API-Based iOS Application",
    date: "2025-02-20",
    excerpt: "Consumed public REST APIs using URLSession with async/await, error handling, and pagination.",
    content: "Created an iOS app that consumes multiple public REST APIs using Swift's URLSession and async/await. Implemented JSON parsing, proper error handling, loading states, and pagination for large datasets. Focused on performance, reliability, and clean Swift coding standards."
  },
  {
    title: "iOS Backend with Vapor",
    date: "2025-01-30",
    excerpt: "Designed and built RESTful APIs in Swift using Vapor, integrated PostgreSQL, and implemented authentication & CRUD endpoints.",
    content: "Developed a backend using Swift and the Vapor framework to support iOS applications. Implemented PostgreSQL database integration, designed authentication endpoints, and built CRUD operations. Focused on efficiency, secure data handling, and seamless iOS integration."
  },
  {
    title: "Why I Chose iOS Development",
    date: "2024-11-15",
    excerpt: "A funny story about the infamous 'I Am Rich' app that inspired me to start building apps.",
    content: "Back in 2008, when the App Store was new, a developer released an app called 'I Am Rich.' It did absolutely nothing — just a glowing red gem on the screen. And it cost $999.99, the maximum Apple allowed! Surprisingly, eight people actually bought it, and the developer made over $5,000 in one night. Apple removed it the next day for violating guidelines.\n\nWhen I first heard this story in 2024, it made me smile. That was the moment I thought: I want to build apps too. Not joke apps like that, but real ones that help people. This story taught me that even a simple idea can make an impact and that the App Store is full of opportunities if you're bold, creative, and quick to act."
  }
];

const PostCard = ({ title, date, excerpt, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Card className="w-full transition-all duration-300 border-0 shadow-lg backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 hover:shadow-xl">
        <CardHeader className="border-b border-gray-100 dark:border-gray-700">
          <CardTitle className="text-xl font-bold text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">{date}</div>
          <p className="mb-4 text-gray-700 dark:text-gray-300">{excerpt}</p>
          <button
            onClick={openModal}
            className="text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-600"
          >
            Read more
          </button>
        </CardContent>
      </Card>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className="p-6">
            <h2 className="mb-4 text-2xl font-bold text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text">
              {title}
            </h2>
            <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">{date}</div>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{content}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

const Blog = () => {
  return (
    <div className="relative min-h-screen p-6 transition-colors duration-500 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="relative max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text animate-gradient">
            <span className="inline-block mr-2 align-middle">📱</span> 
            My iOS Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Sharing my iOS projects, backend work, and what inspires me
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <PostCard
              key={idx}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              content={post.content}
            />
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

export default Blog;
