import React from 'react';

const Safari = () => {
    const links = [
        { name: 'GitHub Profile', url: 'https://github.com/Manish7194', icon: '💻' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manish-kumar1108/', icon: '💼' },
        { name: 'Twitter', url: 'https://x.com/Manish_Kumar719', icon: '🐦' },
        { name: 'Algorithm Visualizer', url: 'https://algorithm-visualizer-kappa-eosin.vercel.app/', icon: '🎨' },
    ];

    return (
        <div className="h-full flex flex-col bg-white">
            {/* Safari Toolbar */}
            <div className="h-12 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-3">
                <div className="flex gap-2">
                    <button className="w-6 h-6 rounded bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-xs">←</button>
                    <button className="w-6 h-6 rounded bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-xs">→</button>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 border border-gray-300">
                    manishkumar.dev
                </div>
            </div>

            {/* Favorites */}
            <div className="flex-1 overflow-auto p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Favorites</h2>
                <div className="grid grid-cols-2 gap-4">
                    {links.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all bg-gradient-to-br from-white to-gray-50"
                        >
                            <div className="text-4xl mb-3">{link.icon}</div>
                            <h3 className="font-semibold text-gray-800">{link.name}</h3>
                            <p className="text-sm text-gray-500 mt-1 truncate">{link.url}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Safari;
