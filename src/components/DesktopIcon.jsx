import React from 'react';

const DesktopIcon = ({ name, icon, onClick, position }) => {
    return (
        <div
            className="absolute flex flex-col items-center gap-1 cursor-pointer group"
            style={{ top: position.y, right: position.x }}
            onClick={onClick}
        >
            {/* macOS Folder Icon */}
            <img
                src="/icons/folder.png"
                alt="Folder"
                className="w-20 h-20 transition-transform group-hover:scale-110"
            />

            {/* Label */}
            <div className="px-2 py-1 rounded text-white text-sm text-center bg-black/20 backdrop-blur-sm max-w-[100px] truncate">
                {name}
            </div>
        </div>
    );
};

export default DesktopIcon;
