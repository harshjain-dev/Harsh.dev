import React from 'react';
import { MapPin, Smartphone, Cpu, Zap, Users } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5 relative group">
                    <div className="relative bg-white p-8 rounded-3xl border border-surface-2 shadow-xl">
                        <h3 className="text-2xl font-bold mb-4 text-heading">Professional Journey</h3>
                        <p className="text-body leading-relaxed mb-6">
                            Product-minded Senior Android Engineer with 7+ years of experience designing and scaling consumer apps for millions of users. Expert in Android System Design, specializing in Clean Architecture, modularization, and migrating legacy codebases through robust Abstractions.
                        </p>
                        <p className="text-body leading-relaxed mb-6">
                            Highly proficient in modern state management patterns including MVVM and MVI, combined with Kotlin, Jetpack Compose, and Coroutines to deliver high-performance experiences. Passionate about AI-augmented workflows and collaborating with cross-functional teams to simplify complex product usability.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-heading mt-1 w-6 h-6" />
                                <div>
                                    <p className="font-bold text-sm text-heading">Based in</p>
                                    <p className="text-body text-sm">Bengaluru, KA 560087</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-heading">
                        <span className="w-8 h-1 bg-btn-dark rounded-full"></span>
                        What I Do
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-surface-2 border border-surface-2">
                            <Smartphone className="text-heading mb-4 w-8 h-8" />
                            <h4 className="font-bold mb-2 text-heading">Modern Android</h4>
                            <p className="text-sm text-body">Jetpack Compose, MVVM/MVI, and high-performance native development.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-surface-2 border border-surface-2">
                            <Cpu className="text-heading mb-4 w-8 h-8" />
                            <h4 className="font-bold mb-2 text-heading">Architecture</h4>
                            <p className="text-sm text-body">Scalable modular systems using Clean Architecture and SOLID principles.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-surface-2 border border-surface-2">
                            <Zap className="text-heading mb-4 w-8 h-8" />
                            <h4 className="font-bold mb-2 text-heading">Performance</h4>
                            <p className="text-sm text-body">Optimizing app load times, memory leaks, and frame rate stability.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-surface-2 border border-surface-2">
                            <Users className="text-heading mb-4 w-8 h-8" />
                            <h4 className="font-bold mb-2 text-heading">Mentorship</h4>
                            <p className="text-sm text-body">Leading engineering teams and mentoring junior developers on best practices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
