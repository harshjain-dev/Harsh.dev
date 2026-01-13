import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-extrabold mb-12 flex items-center gap-4 text-heading">
                Work Experience
                <div className="flex-grow h-px bg-surface-2"></div>
            </h2>

            <div className="space-y-12">
                {/* InMobi */}
                <div className="relative pl-8 border-l-2 border-btn-dark">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-btn-dark"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-heading">Senior Android Developer</h3>
                            <p className="text-heading font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">business</span> InMobi • Bengaluru, India
                            </p>
                        </div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-surface-2 text-heading text-sm font-bold">10/2021 — Current</span>
                    </div>
                    <ul className="space-y-3 text-body list-none mb-6">
                        <li className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-4">
                            <div className="flex gap-2">
                                <span className="text-heading">•</span>
                                <strong className="text-heading whitespace-nowrap">System Design & Modularization:</strong>
                            </div>
                            <span className="text-body leading-relaxed">
                                Led the architectural transition to Clean Architecture, designing modularized libraries and reusable UI components that reduced feature development timelines by ~20%.
                            </span>
                        </li>
                        <li className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-4">
                            <div className="flex gap-2">
                                <span className="text-heading">•</span>
                                <strong className="text-heading whitespace-nowrap">Legacy Migration & Stability:</strong>
                            </div>
                            <span className="text-body leading-relaxed">
                                Optimized app reliability by proactively migrating legacy components, successfully boosting the crash-free user rate from 99.1% to 99.8%.
                            </span>
                        </li>
                        <li className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-4">
                            <div className="flex gap-2">
                                <span className="text-heading">•</span>
                                <strong className="text-heading whitespace-nowrap">Performance Engineering:</strong>
                            </div>
                            <span className="text-body leading-relaxed">
                                Dramatically improved app responsiveness by reducing landing page load times from ~2 minutes to ~800ms, significantly enhancing conversion funnels.
                            </span>
                        </li>
                        <li className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-4">
                            <div className="flex gap-2">
                                <span className="text-heading">•</span>
                                <strong className="text-heading whitespace-nowrap">Technical Leadership:</strong>
                            </div>
                            <span className="text-body leading-relaxed">
                                Guided 5+ junior developers on system design principles, performance profiling, and testing best practices to increase overall team velocity.
                            </span>
                        </li>
                        <li className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-4">
                            <div className="flex gap-2">
                                <span className="text-heading">•</span>
                                <strong className="text-heading whitespace-nowrap">Product Impact:</strong>
                            </div>
                            <span className="text-body leading-relaxed">
                                Partnered with design and product teams to launch multiple features, ensuring UI/UX consistency and measurable improvements in user satisfaction.
                            </span>
                        </li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                        {['Kotlin', 'Jetpack Compose', 'Clean Architecture', 'Performance Profiling'].map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-transparent transition-all bg-surface-2 text-heading">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Paytm Money */}
                <div className="relative pl-8 border-l-2 border-surface-2">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-surface-2"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-heading opacity-70">Android Developer</h3>
                            <p className="text-body font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">business</span> Paytm Money • Bengaluru, India
                            </p>
                        </div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-surface-2 text-heading text-sm font-bold">10/2019 — 09/2021</span>
                    </div>
                    <ul className="space-y-3 text-body list-none mb-6">
                        <li className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-4">
                            <div className="flex gap-2">
                                <span className="text-heading">•</span>
                                <span className="font-bold text-heading">High-Concurrency Systems:</span>
                            </div>
                            <span className="text-body leading-relaxed">
                                Scaled high-concurrency systems by building real-time stock tracking and order placement modules capable of handling millions of daily transactions.
                            </span>
                        </li>
                        <li className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-4">
                            <div className="flex gap-2">
                                <span className="text-heading">•</span>
                                <span className="font-bold text-heading">Onboarding & KYC:</span>
                            </div>
                            <span className="text-body leading-relaxed">
                                Modernized onboarding flows by delivering a seamless DigiLocker KYC integration, which was adopted by millions of users for fully online registration.
                            </span>
                        </li>
                        <li className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-4">
                            <div className="flex gap-2">
                                <span className="text-heading">•</span>
                                <span className="font-bold text-heading">User Growth:</span>
                            </div>
                            <span className="text-body leading-relaxed">
                                Drove user growth by leading the development of core features that directly impacted user acquisition and increased daily active trader metrics.
                            </span>
                        </li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                        {['Java', 'Kotlin', 'RxJava', 'DigiLocker API'].map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-transparent transition-all bg-surface-2 text-heading">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div className="mt-20">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-heading">
                    <span className="material-symbols-outlined">school</span> Education
                </h3>
                <div className="bg-surface-1 p-8 rounded-3xl border border-surface-2 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h4 className="text-xl font-bold text-heading">B.Tech Electronics And Communications Engineering</h4>
                        <p className="text-body mt-1">Arya College of Engg. And I.T. Jaipur</p>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-surface-2 text-heading text-sm font-bold">August 2017</span>
                </div>
            </div>
        </section>
    );
};

export default Experience;
