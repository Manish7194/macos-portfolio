import React, { useState, useCallback } from 'react';
import Desktop from './components/Desktop';
import MenuBar from './components/MenuBar';
import Dock from './components/Dock';
import Window from './components/Window';
import DesktopIcon from './components/DesktopIcon';

// Import apps
import NewFinder from './components/NewFinder';
import ResumeViewer from './apps/ResumeViewer';
import ContactWindow from './apps/Contact';
import TechStackTerminal from './apps/Terminal';
import Safari from './apps/Safari';
import Photos from './apps/Photos';

import { projects } from './data/portfolio';

const App = () => {
  const [windows, setWindows] = useState([
    {
      id: 'finder',
      title: 'Finder',
      component: 'NewFinder',
      position: { x: 100, y: 80 },
      size: { width: 900, height: 600 },
      zIndex: 1000,
      minimized: false,
    },
  ]);
  const [zIndexCounter, setZIndexCounter] = useState(1001);

  const appComponents = {
    NewFinder,
    ResumeViewer,
    ContactWindow,
    TechStackTerminal,
    Safari,
    Photos,
  };

  const handleAppClick = useCallback((app) => {
    setWindows(prev => {
      const existing = prev.find(w => w.id === app.id);

      if (existing) {
        // Bring existing window to front
        const maxZ = Math.max(...prev.map(w => w.zIndex));
        return prev.map(w =>
          w.id === app.id
            ? { ...w, zIndex: maxZ + 1, minimized: false }
            : w
        );
      } else {
        const windowConfig = {
          finder: { component: 'NewFinder', title: 'Finder', width: 900, height: 600 },
          safari: { component: 'Safari', title: 'Safari', width: 800, height: 600 },
          photos: { component: 'Photos', title: 'Photos', width: 900, height: 650 },
          resume: { component: 'ResumeViewer', title: 'Resume.pdf', width: 800, height: 700 },
          contact: { component: 'ContactWindow', title: 'Contact Me', width: 600, height: 500 },
          terminal: { component: 'TechStackTerminal', title: 'Tech Stack', width: 700, height: 450 },
        };

        const config = windowConfig[app.id];
        if (config) {
          const maxZ = Math.max(...prev.map(w => w.zIndex), 1000);
          const newWindow = {
            id: app.id,
            title: config.title,
            component: config.component,
            position: { x: 150 + prev.length * 30, y: 100 + prev.length * 30 },
            size: { width: config.width, height: config.height },
            zIndex: maxZ + 1,
            minimized: false,
          };
          return [...prev, newWindow];
        }
      }
      return prev;
    });
  }, []);

  // Listen for custom events to open apps
  React.useEffect(() => {
    const handleOpenApp = (e) => {
      handleAppClick({ id: e.detail.id });
    };
    window.addEventListener('openApp', handleOpenApp);
    return () => window.removeEventListener('openApp', handleOpenApp);
  }, [handleAppClick]);

  const handleCloseWindow = useCallback((id) => {
    console.log('=== CLOSE WINDOW ===');
    console.log('Closing window with id:', id);
    setWindows(prev => {
      console.log('Previous windows:', prev);
      const filtered = prev.filter(w => w.id !== id);
      console.log('New windows:', filtered);
      return filtered;
    });
  }, []);

  const handleMinimizeWindow = useCallback((id) => {
    console.log('Minimizing window:', id);
    setWindows(prev =>
      prev.map(w => (w.id === id ? { ...w, minimized: true } : w))
    );
  }, []);

  const handleFocusWindow = useCallback((id) => {
    setWindows(prev => {
      const maxZ = Math.max(...prev.map(w => w.zIndex));
      return prev.map(w =>
        w.id === id ? { ...w, zIndex: maxZ + 1, minimized: false } : w
      );
    });
    setZIndexCounter(prev => prev + 1);
  }, []);

  const handleUpdatePosition = useCallback((id, newPosition) => {
    console.log('Updating position for:', id, newPosition);
    setWindows(prev =>
      prev.map(w => (w.id === id ? { ...w, position: newPosition } : w))
    );
  }, []);

  const activeAppIds = windows.filter(w => !w.minimized).map(w => w.id);
  const desktopProjects = projects.slice(0, 3);

  console.log('Rendering App, windows:', windows);

  return (
    <div className="w-full h-full">
      <Desktop>
        <MenuBar />

        {/* Desktop Icons */}
        {desktopProjects.map((project, index) => (
          <DesktopIcon
            key={project.id}
            name={project.name}
            icon="📁"
            position={{ x: 40, y: 100 + index * 140 }}
            onClick={() => handleAppClick({ id: 'finder' })}
          />
        ))}

        {/* Windows */}
        {windows.map((window) => {
          if (window.minimized) return null;

          const AppComponent = appComponents[window.component];
          if (!AppComponent) {
            console.error(`Component ${window.component} not found`);
            return null;
          }

          return (
            <Window
              key={window.id}
              id={window.id}
              title={window.title}
              position={window.position}
              size={window.size}
              zIndex={window.zIndex}
              onClose={handleCloseWindow}
              onMinimize={handleMinimizeWindow}
              onFocus={handleFocusWindow}
              onPositionChange={handleUpdatePosition}
            >
              <AppComponent />
            </Window>
          );
        })}

        <Dock onAppClick={handleAppClick} activeApps={activeAppIds} />
      </Desktop>
    </div>
  );
};

export default App;
