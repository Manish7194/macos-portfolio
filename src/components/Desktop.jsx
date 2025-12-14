import React from 'react';

const Desktop = ({ children }) => {
    return (
        <div
            className="w-full h-full relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)',
            }}
        >
            {/* Welcome text with two-line layout */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                <div className="text-center transition-all duration-500 ease-out hover:scale-105 cursor-default">
                    <p className="text-3xl font-light text-white/70 mb-2">
                        Hey, I'm Manish! welcome to my
                    </p>
                    <h1 className="text-9xl font-bold italic text-white/90">
                        portfolio.
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="relative w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default Desktop;
