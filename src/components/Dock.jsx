import React, { useRef } from 'react';
import { dockHoverAnimation, dockLeaveAnimation } from '../utils/animations';

const Dock = ({ onAppClick, activeApps }) => {
    const iconRefs = useRef([]);

    // Icon paths matching your converted PNG files
    const apps = [
        { id: 'finder', name: 'Finder', icon: '/icons/finder.png' },
        { id: 'safari', name: 'Safari', icon: '/icons/safari.png' },
        { id: 'photos', name: 'Photos', icon: '/icons/photos.png' },
        { id: 'contact', name: 'Contact', icon: '/icons/contact.png' },
        { id: 'terminal', name: 'Terminal', icon: '/icons/Terminal.png' },
        { id: 'trash', name: 'Trash', icon: '/icons/bin.png' },
    ];

    const handleMouseEnter = (index) => {
        if (iconRefs.current[index]) {
            dockHoverAnimation(iconRefs.current[index]);
        }
    };

    const handleMouseLeave = (index) => {
        if (iconRefs.current[index]) {
            dockLeaveAnimation(iconRefs.current[index]);
        }
    };

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999]">
            <div className="flex items-end gap-2 px-3 py-2 rounded-2xl backdrop-blur-2xl bg-white/20 border border-white/30 shadow-2xl">
                {apps.map((app, index) => (
                    <div
                        key={app.id}
                        ref={(el) => (iconRefs.current[index] = el)}
                        className="relative flex flex-col items-center cursor-pointer group"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        onClick={() => onAppClick(app)}
                    >
                        <img
                            src={app.icon}
                            alt={app.name}
                            className="w-14 h-14 transition-transform"
                            onError={(e) => {
                                // Fallback to emoji if image not found
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        {/* Fallback emoji (hidden by default) */}
                        <div className="w-14 h-14 hidden items-center justify-center text-4xl">
                            {app.id === 'finder' && '📁'}
                            {app.id === 'safari' && '🧭'}
                            {app.id === 'photos' && '🖼️'}
                            {app.id === 'contact' && '👤'}
                            {app.id === 'terminal' && '▶️'}
                            {app.id === 'trash' && '🗑️'}
                        </div>

                        {/* Active indicator */}
                        {activeApps.includes(app.id) && (
                            <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-white/80" />
                        )}

                        {/* Tooltip */}
                        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <div className="px-3 py-1.5 bg-gray-800/95 text-white text-sm rounded-lg backdrop-blur-sm whitespace-nowrap shadow-lg">
                                {app.name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dock;
