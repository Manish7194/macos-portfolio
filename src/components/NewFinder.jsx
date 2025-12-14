import React, { useState } from 'react';
import { Folder, User, FileText, Mail, Trash2 } from 'lucide-react';
import { projects } from '../data/portfolio';

const NewFinder = () => {
    const [activeSection, setActiveSection] = useState('work');

    const sidebarItems = {
        favorites: [
            { id: 'work', name: 'Work', icon: Folder },
            { id: 'about', name: 'About me', icon: User },
            { id: 'resume', name: 'Resume', icon: FileText, action: 'openResume' },
            { id: 'trash', name: 'Trash', icon: Trash2 },
        ],
        work: projects.map(p => ({ id: p.id, name: p.name, icon: Folder })),
    };

    const handleSidebarClick = (item) => {
        if (item.action === 'openResume') {
            window.dispatchEvent(new CustomEvent('openApp', { detail: { id: 'resume' } }));
        } else {
            setActiveSection(item.id);
        }
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'work':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Projects</h2>
                        <div className="space-y-6">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'about':
                return (
                    <div className="p-8 max-w-3xl">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-6xl">
                                👨‍💻
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold text-gray-800 mb-2">Manish Kumar</h1>
                                <p className="text-xl text-gray-600">Full Stack Developer</p>
                            </div>
                        </div>
                        <div className="space-y-4 text-gray-700">
                            <p className="text-lg leading-relaxed">
                                Passionate developer with expertise in building modern web and mobile applications.
                                I love creating beautiful, functional, and user-friendly experiences.
                            </p>
                        </div>
                    </div>
                );

            case 'trash':
                return (
                    <div className="p-8 text-center">
                        <Trash2 className="w-24 h-24 mx-auto text-gray-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Trash is Empty</h2>
                        <p className="text-gray-600">No items in trash</p>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="h-full flex bg-white">
            {/* Sidebar */}
            <div className="w-48 bg-gray-50 border-r border-gray-200 p-3 overflow-y-auto">
                <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2 px-2">FAVORITES</p>
                    {sidebarItems.favorites.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleSidebarClick(item)}
                                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${activeSection === item.id
                                        ? 'bg-blue-500 text-white'
                                        : 'text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                {item.name}
                            </button>
                        );
                    })}
                </div>

                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-2 px-2">WORK</p>
                    {sidebarItems.work.slice(0, 3).map((item) => (
                        <button
                            key={item.id}
                            className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm text-gray-700 hover:bg-gray-200 transition-colors truncate"
                        >
                            <Folder className="w-4 h-4 flex-shrink-0" />
                            <span className="truncate">{item.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto bg-white">
                {renderContent()}
            </div>
        </div>
    );
};

export default NewFinder;
