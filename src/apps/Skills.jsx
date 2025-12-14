import React from 'react';
import { skills } from '../data/portfolio';

const Skills = () => {
    return (
        <div className="h-full p-8 overflow-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Skills & Technologies</h1>

            <div className="grid grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="glass rounded-xl p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">{category}</h2>

                        <div className="space-y-4">
                            {skillList.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-white/90">{skill.name}</span>
                                        <span className="text-white/60">{skill.level}%</span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
