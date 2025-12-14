import React from 'react';
import { projects } from '../data/portfolio';

const Photos = () => {
    const photos = [
        { id: 1, title: 'ParkEasy App', emoji: '🅿️', color: 'from-blue-400 to-blue-600' },
        { id: 2, title: 'Algorithm Visualizer', emoji: '📊', color: 'from-purple-400 to-purple-600' },
        { id: 3, title: 'Portfolio Website', emoji: '💼', color: 'from-green-400 to-green-600' },
        { id: 4, title: 'Web Development', emoji: '🌐', color: 'from-orange-400 to-orange-600' },
        { id: 5, title: 'Mobile Apps', emoji: '📱', color: 'from-pink-400 to-pink-600' },
        { id: 6, title: 'UI/UX Design', emoji: '🎨', color: 'from-yellow-400 to-yellow-600' },
    ];

    return (
        <div className="h-full flex flex-col bg-white">
            {/* Photos Toolbar */}
            <div className="h-12 bg-gray-100 border-b border-gray-200 flex items-center px-4">
                <h2 className="text-sm font-semibold text-gray-700">All Photos</h2>
            </div>

            {/* Photo Grid */}
            <div className="flex-1 overflow-auto p-6">
                <div className="grid grid-cols-3 gap-4">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className={`aspect-square rounded-lg bg-gradient-to-br ${photo.color} flex items-center justify-center text-6xl cursor-pointer hover:scale-105 transition-transform shadow-lg`}
                        >
                            {photo.emoji}
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Gallery</h3>
                    <div className="space-y-4">
                        {projects.map((project) => (
                            <div key={project.id} className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800">{project.name}</h4>
                                <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photos;
