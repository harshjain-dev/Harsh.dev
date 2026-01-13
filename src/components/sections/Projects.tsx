import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-surface-2">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-heading">Featured Projects</h2>
                        <p className="text-body">Key achievements in mobile development and technical leadership</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-6 py-2 rounded-full bg-btn-dark text-surface-1 text-sm font-bold">Professional</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1: 1Weather */}
                    <div className="group relative bg-surface-1 rounded-3xl overflow-hidden border border-white/50 transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col">
                        <div className="h-48 bg-blue-100 relative overflow-hidden flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-blue-500 opacity-80">cloud</span>
                            <div className="absolute top-4 left-4">
                                <span className="bg-btn-dark text-surface-1 text-xs font-bold px-3 py-1 rounded-full">InMobi</span>
                            </div>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold mb-3 text-heading">1Weather: Forecast & Radar</h3>
                            <p className="text-body mb-6 text-sm leading-relaxed flex-1">
                                Contributed to weather visualization modules, used by 50M+ users worldwide.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                <span className="text-xs font-mono text-heading px-2 py-1 bg-surface-2 rounded">Android</span>
                                <span className="text-xs font-mono text-heading px-2 py-1 bg-surface-2 rounded">Visualization</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2: Paytm Money */}
                    <div className="group relative bg-surface-1 rounded-3xl overflow-hidden border border-white/50 transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col">
                        <div className="h-48 bg-teal-100 relative overflow-hidden flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-teal-600 opacity-80">trending_up</span>
                            <div className="absolute top-4 left-4">
                                <span className="bg-btn-dark text-surface-1 text-xs font-bold px-3 py-1 rounded-full">Paytm Money</span>
                            </div>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold mb-3 text-heading">Paytm Money</h3>
                            <p className="text-body mb-6 text-sm leading-relaxed flex-1">
                                Drove core investment features (Stocks, MF, IPO), directly impacting user acquisition and daily active traders.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                <span className="text-xs font-mono text-heading px-2 py-1 bg-surface-2 rounded">Fintech</span>
                                <span className="text-xs font-mono text-heading px-2 py-1 bg-surface-2 rounded">Trading</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 3: Clouthub */}
                    <div className="group relative bg-surface-1 rounded-3xl overflow-hidden border border-white/50 transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col">
                        <div className="h-48 bg-purple-100 relative overflow-hidden flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-purple-500 opacity-80">hub</span>
                            <div className="absolute top-4 left-4">
                                <span className="bg-btn-dark text-surface-1 text-xs font-bold px-3 py-1 rounded-full">Social</span>
                            </div>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold mb-3 text-heading">Clouthub</h3>
                            <p className="text-body mb-6 text-sm leading-relaxed flex-1">
                                Social Media App development.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                <span className="text-xs font-mono text-heading px-2 py-1 bg-surface-2 rounded">Social Media</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
