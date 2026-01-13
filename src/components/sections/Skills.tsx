import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="bg-surface-2 py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-heading">Skills & Expertise</h2>
                    <p className="text-body">Technical tools and stacks I use to build exceptional mobile experiences</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Core Android */}
                    <div className="bg-surface-1 p-8 rounded-3xl border border-white/50 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-heading">android</span>
                            <h3 className="text-xl font-bold text-heading">Core Android</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['Kotlin', 'Java', 'Jetpack Compose', 'Coroutines', 'Hilt/Dagger', 'MVVM', 'MVI'].map(skill => (
                                <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium border border-heading/10 transition-all bg-white text-heading">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Architecture */}
                    <div className="bg-surface-1 p-8 rounded-3xl border border-white/50 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-heading">layers</span>
                            <h3 className="text-xl font-bold text-heading">Architecture</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['Modularization', 'Clean Architecture', 'Performance Profiling', 'Memory Optimization'].map(skill => (
                                <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium border border-heading/10 transition-all bg-white text-heading">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* AI & Tools */}
                    <div className="bg-surface-1 p-8 rounded-3xl border border-white/50 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-heading">psychology</span>
                            <h3 className="text-xl font-bold text-heading">AI & Tools</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['ClaudeCode', 'Gemini', 'OpenAi Codex', 'Jenkins', 'Gradle', 'GitHub'].map(skill => (
                                <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium border border-heading/10 transition-all bg-white text-heading">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
