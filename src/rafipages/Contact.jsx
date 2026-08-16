import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio message from " + formData.name);
    const body = encodeURIComponent(
      formData.message + "\n\n---\nFrom: " + formData.name + "\nEmail: " + formData.email
    );
    window.location.href = "mailto:rafi2002ten@gmail.com?subject=" + subject + "&body=" + body;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="container max-w-6xl px-4 py-16 mx-auto">

        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
            Contact Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Let's connect and collaborate!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="space-y-8">

            <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-xl dark:bg-gray-800/50 dark:border-gray-700 backdrop-blur-sm">
              <div className="space-y-6">

                <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <FaEnvelope className="text-2xl text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a href="https://mail.google.com/mail/?view=cm&to=rafi2002ten@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:underline">rafi2002ten@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                  <FaPhone className="text-2xl text-green-500" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <a href="tel:+8801540050626" className="text-gray-800 dark:text-gray-200 hover:underline">+880 1540-050626</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-teal-50 dark:bg-teal-900/20">
                  <FaWhatsapp className="text-2xl text-teal-500" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</p>
                    <a href="https://wa.me/8801540050626" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:underline">+880 1540-050626</a>
                  </div>
                </div>

              </div>
            </div>

            <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-xl dark:bg-gray-800/50 dark:border-gray-700 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-semibold text-gray-800 dark:text-white">Connect With Me</h3>
              <div className="flex justify-center gap-6">
                <a href="https://github.com/hasanRafi2002" target="_blank" rel="noopener noreferrer" className="p-3 transition-colors bg-gray-100 rounded-lg dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                  <FaGithub className="text-2xl text-gray-700 dark:text-gray-300" />
                </a>
                <a href="https://www.linkedin.com/in/serock01/" target="_blank" rel="noopener noreferrer" className="p-3 transition-colors rounded-lg bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/30">
                  <FaLinkedin className="text-2xl text-blue-500" />
                </a>
                <a href="https://x.com/rafi_hasan_03" target="_blank" rel="noopener noreferrer" className="p-3 transition-colors rounded-lg bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/30">
                  <FaTwitter className="text-2xl text-blue-400" />
                </a>
              </div>
            </div>

          </div>

          <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-xl dark:bg-gray-800/50 dark:border-gray-700 backdrop-blur-sm">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 text-gray-800 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Your Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 text-gray-800 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Your Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-3 text-gray-800 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent" required></textarea>
              </div>
              <button type="submit" className="flex items-center justify-center w-full gap-2 px-6 py-3 font-medium text-white transition-opacity rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-90">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
