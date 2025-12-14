import React, { useState, useEffect } from 'react';
import { Apple, Wifi, Battery } from 'lucide-react';

const MenuBar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const handleMenuClick = (appId) => {
        window.dispatchEvent(new CustomEvent('openApp', { detail: { id: appId } }));
    };

    return (
        <div className="fixed top-0 left-0 right-0 h-7 backdrop-blur-xl bg-black/20 z-[9999] flex items-center justify-between px-4 text-white text-sm select-none border-b border-white/10">
            {/* Left side */}
            <div className="flex items-center gap-3">
                <Apple className="w-4 h-4" />
                <span className="font-semibold">Manish Portfolio</span>
                <button
                    onClick={() => handleMenuClick('photos')}
                    className="px-2 py-0.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-all duration-150 cursor-default"
                >
                    Projects
                </button>
                <button
                    onClick={() => handleMenuClick('contact')}
                    className="px-2 py-0.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-all duration-150 cursor-default"
                >
                    Contact
                </button>
                <button
                    onClick={() => handleMenuClick('resume')}
                    className="px-2 py-0.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-all duration-150 cursor-default"
                >
                    Resume
                </button>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
                <Wifi className="w-4 h-4" />
                <Battery className="w-4 h-4" />
                <span className="text-white/90">{formatTime(currentTime)}</span>
            </div>
        </div>
    );
};

export default MenuBar;
