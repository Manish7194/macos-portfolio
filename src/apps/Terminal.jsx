import React, { useState, useEffect } from 'react';

const TechStackTerminal = () => {
    const [output, setOutput] = useState([]);
    const [currentLine, setCurrentLine] = useState(0);

    const terminalOutput = [
        { type: 'command', text: '@manishkumar % show tech stack' },
        { type: 'output', text: '' },
        { type: 'output', text: 'Category        Technologies' },
        { type: 'output', text: '─────────────────────────────────────────────────────────────────────────────────' },
        { type: 'success', text: '✓  Frontend      React, JavaScript, HTML/CSS, Tailwind CSS' },
        { type: 'success', text: '✓  Mobile        Flutter, Dart, React Native' },
        { type: 'success', text: '✓  Backend       Node.js, Express, Supabase' },
        { type: 'success', text: '✓  Database      MongoDB, PostgreSQL' },
        { type: 'success', text: '✓  Tools         Git, VS Code, Figma, Vite' },
        { type: 'output', text: '' },
        { type: 'success', text: '✓  5 of 5 stacks loaded successfully (100%)' },
        { type: 'output', text: '▶  Render time: 6ms' },
    ];

    useEffect(() => {
        if (currentLine < terminalOutput.length) {
            const timer = setTimeout(() => {
                setOutput(prev => [...prev, terminalOutput[currentLine]]);
                setCurrentLine(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [currentLine]);

    const getLineColor = (type) => {
        switch (type) {
            case 'command':
                return 'text-white';
            case 'success':
                return 'text-green-400';
            case 'error':
                return 'text-red-400';
            default:
                return 'text-gray-300';
        }
    };

    return (
        <div className="h-full bg-gray-900 p-6 font-mono text-sm overflow-auto">
            <div className="space-y-1">
                {output.map((line, index) => (
                    <div key={index} className={getLineColor(line.type)}>
                        {line.text}
                    </div>
                ))}
                {currentLine < terminalOutput.length && (
                    <div className="text-white animate-pulse">▊</div>
                )}
            </div>
        </div>
    );
};

export default TechStackTerminal;
