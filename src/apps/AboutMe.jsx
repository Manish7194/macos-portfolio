import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolio';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { fadeIn } from '../utils/animations';

const AboutMe = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll('.fade-element');
      elements.forEach((el, index) => {
        fadeIn(el, index * 0.1);
      });
    }
  }, []);

  return (
    <div className="h-full p-8 overflow-auto" ref={contentRef}>
      <div className="max-w-2xl mx-auto">
        {/* Profile Section */}
        <div className="flex items-center gap-6 mb-8 fade-element">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-6xl">
            👨‍💻
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              {personalInfo.name}
            </h1>
            <p className="text-xl text-white/70">{personalInfo.title}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-8 fade-element">
          <h2 className="text-2xl font-semibold text-white mb-3">About</h2>
          <p className="text-white/80 leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Social Links */}
        <div className="fade-element">
          <h2 className="text-2xl font-semibold text-white mb-3">Connect</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/20 transition-all"
            >
              <Github className="w-5 h-5 text-white" />
              <span className="text-white">GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/20 transition-all"
            >
              <Linkedin className="w-5 h-5 text-white" />
              <span className="text-white">LinkedIn</span>
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/20 transition-all"
            >
              <Twitter className="w-5 h-5 text-white" />
              <span className="text-white">Twitter</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/20 transition-all"
            >
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
