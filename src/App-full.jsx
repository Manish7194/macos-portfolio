import React, { useState } from 'react';
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

  // Listen for custom events to open apps
  React.useEffect(() => {
    const handleOpenApp = (e) => {
      handleAppClick({ id: e.detail.id });
    };
    window.addEventListener('openApp', handleOpenApp);
    return () => window.removeEventListener('openApp', handleOpenApp);
  }, [windows, zIndexCounter]);

  const appComponents = {
    NewFinder,
    ResumeViewer,
    ContactWindow,
    TechStackTerminal,
  };

  const handleAppClick = (app) => {
    // Check if window already exists
    const existing = windows.find(w => w.id === app.id);

    if (existing) {
      // Bring to front and unminimize
      setWindows(prev =>
        prev.map(w =>
          w.id === app.id
            ? { ...w, zIndex: zIndexCounter + 1, minimized: false }
            : w
        )
      );
      setZIndexCounter(prev => prev + 1);
    } else {
      // Open new window
      const windowConfig = {
        finder: { component: 'NewFinder', title: 'Finder', width: 900, height: 600 },
        resume: { component: 'ResumeViewer', title: 'Resume.pdf', width: 800, height: 700 },
        contact: { component: 'ContactWindow', title: 'Contact Me', width: 600, height: 500 },
        terminal: { component: 'TechStackTerminal', title: 'Tech Stack', width: 700, height: 450 },
      };

      const config = windowConfig[app.id];
      if (config) {
        const newWindow = {
          id: app.id,
          title: config.title,
          component: config.component,
          position: { x: 150 + windows.length * 30, y: 100 + windows.length * 30 },
          size: { width: config.width, height: config.height },
          zIndex: zIndexCounter + 1,
          minimized: false,
        };
        setWindows(prev => [...prev, newWindow]);
        setZIndexCounter(prev => prev + 1);
      }
    }
  };

  const handleCloseWindow = (id) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  };

  const handleMinimizeWindow = (id) => {
    setWindows(prev =>
      prev.map(w => (w.id === id ? { ...w, minimized: true } : w))
    );
  };

  const handleFocusWindow = (id) => {
    setWindows(prev => {
      const maxZ = Math.max(...prev.map(w => w.zIndex));
      return prev.map(w =>
        w.id === id ? { ...w, zIndex: maxZ + 1, minimized: false } : w
      );
    });
    setZIndexCounter(prev => prev + 1);
  };

  const handleUpdatePosition = (id, position) => {
    setWindows(prev =>
      prev.map(w => (w.id === id ? { ...w, position } : w))
    );
  };

  const activeAppIds = windows.filter(w => !w.minimized).map(w => w.id);
  const desktopProjects = projects.slice(0, 3);

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
