import React, { useState } from 'react';

const Window = ({
    id,
    title,
    children,
    onClose,
    onMinimize,
    onFocus,
    position: initialPosition,
    size,
    zIndex,
    onPositionChange,
}) => {
    const [position, setPosition] = useState(initialPosition);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        // Only drag if clicking directly on the title bar, not on buttons
        if (e.target.closest('button')) {
            return;
        }

        setIsDragging(true);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
        onFocus && onFocus(id);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const newPosition = {
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y,
        };
        setPosition(newPosition);
        onPositionChange && onPositionChange(id, newPosition);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    React.useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging, dragStart]);

    return (
        <div
            className="absolute"
            style={{
                left: position.x,
                top: position.y,
                width: size.width,
                height: size.height,
                zIndex,
            }}
            onClick={() => onFocus && onFocus(id)}
        >
            <div className="w-full h-full rounded-lg overflow-hidden backdrop-blur-xl bg-white/90 shadow-2xl border border-white/20">
                {/* Title Bar */}
                <div
                    className="h-10 bg-white/50 backdrop-blur-md flex items-center justify-between px-4 border-b border-gray-200/50 select-none"
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                    onMouseDown={handleMouseDown}
                >
                    {/* Traffic Lights */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose && onClose(id);
                            }}
                            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer"
                            title="Close"
                            type="button"
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onMinimize && onMinimize(id);
                            }}
                            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer"
                            title="Minimize"
                            type="button"
                        />
                        <button
                            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer"
                            title="Maximize"
                            type="button"
                        />
                    </div>

                    {/* Title */}
                    <div className="absolute left-1/2 -translate-x-1/2 text-sm font-medium text-gray-700 pointer-events-none">
                        {title}
                    </div>

                    <div className="w-16" />
                </div>

                {/* Content */}
                <div className="h-[calc(100%-2.5rem)] overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Window;
