import { useState, useCallback } from 'react';

export const useWindowManager = () => {
    const [windows, setWindows] = useState([]);
    const [zIndexCounter, setZIndexCounter] = useState(1000);

    const openWindow = useCallback((appId, appName, component) => {
        setWindows((prev) => {
            // Check if window is already open
            const existing = prev.find((w) => w.id === appId);
            if (existing) {
                // Bring to front
                return prev.map((w) =>
                    w.id === appId ? { ...w, zIndex: zIndexCounter + 1, minimized: false } : w
                );
            }

            // Open new window
            const newWindow = {
                id: appId,
                name: appName,
                component,
                position: { x: 100 + prev.length * 30, y: 80 + prev.length * 30 },
                size: { width: 800, height: 600 },
                zIndex: zIndexCounter + 1,
                minimized: false,
            };

            setZIndexCounter((prev) => prev + 1);
            return [...prev, newWindow];
        });
    }, [zIndexCounter]);

    const closeWindow = useCallback((appId) => {
        setWindows((prev) => prev.filter((w) => w.id !== appId));
    }, []);

    const minimizeWindow = useCallback((appId) => {
        setWindows((prev) =>
            prev.map((w) => (w.id === appId ? { ...w, minimized: true } : w))
        );
    }, []);

    const focusWindow = useCallback((appId) => {
        setWindows((prev) => {
            const maxZ = Math.max(...prev.map((w) => w.zIndex));
            return prev.map((w) =>
                w.id === appId ? { ...w, zIndex: maxZ + 1, minimized: false } : w
            );
        });
        setZIndexCounter((prev) => prev + 1);
    }, []);

    const updateWindowPosition = useCallback((appId, position) => {
        setWindows((prev) =>
            prev.map((w) => (w.id === appId ? { ...w, position } : w))
        );
    }, []);

    return {
        windows,
        openWindow,
        closeWindow,
        minimizeWindow,
        focusWindow,
        updateWindowPosition,
    };
};
