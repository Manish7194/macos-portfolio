import React from 'react';
import { projects } from '../data/portfolio';
import { ExternalLink, Github } from 'lucide-react';

const Finder = () => {
    return (
        <div className="h-full flex">
            {/* Sidebar */}
            <div className="w-48 bg-white/5 border-r border-white/10 p-4">
                <div className="text-xs font-semibold text-white/50 mb-2">FAVORITES</div>
                <div className="space-y-1">
                    <div className="text-sm text-white/90 px-2 py-1 rounded hover:bg-white/10 cursor-pointer">
                        All Projects
                    </div>
                    <div className="text-sm text-white/70 px-2 py-1 rounded hover:bg-white/10 cursor-pointer">
                        Featured
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-auto">
                <h2 className="text-2xl font-bold text-white mb-6">My Projects</h2>

                <div className="grid grid-cols-2 gap-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="glass rounded-xl p-4 hover:bg-white/15 transition-all duration-300 group"
                        >
                            {/* Project Image Placeholder */}
                            <div className="w-full h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-3 flex items-center justify-center text-4xl">
                                📱
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-2">
                                {project.name}
                            </h3>

                            <p className="text-sm text-white/70 mb-3 line-clamp-2">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-1 mb-3">
                                {project.technologies.slice(0, 3).map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-2">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-xs text-white/70 hover:text-white transition-colors"
                                    >
                                        <Github className="w-3 h-3" />
                                        Code
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-xs text-white/70 hover:text-white transition-colors"
                                    >
                                        <ExternalLink className="w-3 h-3" />
                                        Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Finder;
